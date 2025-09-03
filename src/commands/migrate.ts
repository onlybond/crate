import fs from 'fs';
import path from 'path';
import os from 'os';

export async function migrate() {
  const cwd = process.cwd();
  const nodeModules = path.join(cwd, 'node_modules');
  const crateDir = path.join(cwd, '.crate');
  const storeDir = path.join(os.homedir(), '.crate', 'store');

  if (!fs.existsSync(nodeModules)) {
    console.log('⚠️ No node_modules found to migrate.');
    return;
  }

  console.log('📁 Creating Crate directories...');
  fs.mkdirSync(crateDir, { recursive: true });
  fs.mkdirSync(path.join(crateDir, 'lib'), { recursive: true });
  fs.mkdirSync(storeDir, { recursive: true });

  const pkgs = fs.readdirSync(nodeModules);
  console.log(`📦 Found ${pkgs.length} packages to migrate...`);

  let migrated = 0;
  let linked = 0;

  for (const pkg of pkgs) {
    const src = path.join(nodeModules, pkg);
    const dest = path.join(storeDir, pkg);

    // Copy to store if not already there
    if (!fs.existsSync(dest)) {
      try {
        fs.cpSync(src, dest, { recursive: true });
        migrated++;
        process.stdout.write(
          `\r📦 Migrated ${migrated}/${pkgs.length} packages...`
        );
      } catch (err) {
        console.warn(`\n⚠️ Failed to copy ${pkg}:`, err);
      }
    }

    // Create symlink
    const linkPath = path.join(crateDir, 'lib', pkg);
    try {
      if (!fs.existsSync(linkPath)) {
        fs.symlinkSync(dest, linkPath, 'junction');
        linked++;
      }
    } catch {
      console.warn(`\n⚠️ Failed to link ${pkg}`);
    }
  }

  console.log(
    `\n✅ Migration complete: ${migrated} packages migrated, ${linked} packages linked`
  );
  console.log('✅ Migrated node_modules into Crate.');
}
