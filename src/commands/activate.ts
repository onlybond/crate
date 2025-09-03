import path from 'path';
import fs from 'fs';
import { migrate } from './migrate';

function ensureShims() {
  const binDir = path.join(process.cwd(), '.crate', 'bin');
  fs.mkdirSync(binDir, { recursive: true });

  const managers = ['npm', 'pnpm', 'yarn', 'bun'];
  for (const mgr of managers) {
    const shimPath = path.join(binDir, mgr);
    // For now just link to compiled shim from dist/shims/
    const shimSource = path.resolve(__dirname, '..', 'shims', `${mgr}.js`);
    fs.copyFileSync(shimSource, shimPath);
    fs.chmodSync(shimPath, 0o755);
  }
}

export async function activate() {
  const cwd = process.cwd();
  const project = path.basename(cwd);
  const crateDir = path.join(cwd, '.crate');
  const crateLib = path.join(crateDir, 'lib');
  const crateBin = path.join(crateDir, 'bin');
  const nodeModules = path.join(cwd, 'node_modules');

  // Show initial activation message
  console.log('');
  console.log(
    '╔══════════════════════════════════════════════════════════════╗'
  );
  console.log(
    '║                    ACTIVATING CRATE ENVIRONMENT              ║'
  );
  console.log(
    '╠══════════════════════════════════════════════════════════════╣'
  );
  console.log(`║  Project: ${project.padEnd(50)} ║`);
  console.log(
    '║                                                              ║'
  );

  // Check if we need to migrate
  if (!fs.existsSync(crateDir)) {
    console.log(
      '║  No Crate environment found, migrating from node_modules...  ║'
    );
    console.log(
      '║                                                              ║'
    );

    // Check if node_modules exists
    if (fs.existsSync(nodeModules)) {
      console.log(
        '║     Migrating dependencies to Crate environment...           ║'
      );
      console.log(
        '╚══════════════════════════════════════════════════════════════╝'
      );
      console.log('');

      console.log('🔄 Migrating dependencies to Crate environment...');
      await migrate();
      console.log('');

      console.log('🗑️  Cleaning up node_modules...');
      try {
        fs.rmSync(nodeModules, { recursive: true, force: true });
        console.log('✅ Successfully deleted node_modules');
      } catch (err) {
        console.log('⚠️  Could not delete node_modules:', err);
      }
    } else {
      console.log(
        '║  No node_modules found to migrate                            ║'
      );
      console.log(
        '║                                                              ║'
      );
      console.log(
        '║     Setting up empty Crate environment...                    ║'
      );
      console.log(
        '╚══════════════════════════════════════════════════════════════╝'
      );
      console.log('');

      // Still need to create the basic structure
      fs.mkdirSync(crateDir, { recursive: true });
      fs.mkdirSync(path.join(crateDir, 'lib'), { recursive: true });
    }
  } else {
    console.log(
      '║  Crate environment already exists                            ║'
    );
    console.log(
      '║                                                              ║'
    );
    console.log(
      '║     Setting up environment...                                ║'
    );
    console.log(
      '╚══════════════════════════════════════════════════════════════╝'
    );
    console.log('');
  }

  ensureShims();

  // Update current environment
  process.env.NODE_PATH =
    crateLib +
    (process.env.NODE_PATH ? path.delimiter + process.env.NODE_PATH : '');
  process.env.PATH = crateBin + path.delimiter + process.env.PATH;

  // Set environment indicator
  process.env.CRATE_ACTIVE = 'true';
  process.env.CRATE_PROJECT = project;

  // Show final activation message
  console.log('');
  console.log(
    '╔═══════════════════════════════════════════════════════════════════════════╗'
  );
  console.log(
    '║                  CRATE ENVIRONMENT ACTIVE                                 ║'
  );
  console.log(
    '╠═══════════════════════════════════════════════════════════════════════════╣'
  );
  console.log(`║  Project: ${project.padEnd(50)} ║`);
  console.log(`║  Path: ${crateBin.padEnd(52)} ║`);
  console.log(
    '║                                                                           ║'
  );
  console.log(
    '║   Node modules are now available in this terminal                         ║'
  );
  console.log(
    '║   Package managers (npm, pnpm, yarn, bun) are active                      ║'
  );
  console.log(
    '║   All dependencies are isolated to this project                           ║'
  );
  console.log(
    '║                                                                           ║'
  );
  console.log(
    "║   Run 'crate disable' to deactivate this environment                      ║"
  );
  console.log(
    '╚═══════════════════════════════════════════════════════════════════════════╝'
  );
  console.log('');
}
