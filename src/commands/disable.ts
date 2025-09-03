import { execa } from 'execa';
import path from 'path';

export async function disable() {
  const project = process.env.CRATE_PROJECT || path.basename(process.cwd());

  // Clear console and show deactivation message
  console.clear();
  console.log(
    '╔══════════════════════════════════════════════════════════════╗'
  );
  console.log(
    '║                    CRATE ENVIRONMENT DISABLED                ║'
  );
  console.log(
    '╠══════════════════════════════════════════════════════════════╣'
  );
  console.log(`║  Project: ${project.padEnd(50)} ║`);
  console.log(
    '║                                                              ║'
  );
  console.log(
    '║     Reinstalling into node_modules...                        ║'
  );
  console.log(
    '╚══════════════════════════════════════════════════════════════╝'
  );
  console.log('');

  await execa('pnpm', ['install'], { stdio: 'inherit' });

  // Clear environment variables
  delete process.env.CRATE_ACTIVE;
  delete process.env.CRATE_PROJECT;

  console.log('');
  console.log(
    '╔══════════════════════════════════════════════════════════════╗'
  );
  console.log(
    '║                     CRATE DISABLED SUCCESSFULLY              ║'
  );
  console.log(
    '╠══════════════════════════════════════════════════════════════╣'
  );
  console.log(
    '║  Project is now back to standard node_modules mode           ║'
  );
  console.log(
    '║  All dependencies are installed in ./node_modules            ║'
  );
  console.log(
    '║                                                              ║'
  );
  console.log(
    "║   Run 'crate activate' to re-enable the Crate environment    ║"
  );
  console.log(
    '╚══════════════════════════════════════════════════════════════╝'
  );
  console.log('');
}
