import { execa } from 'execa';
import fs from 'fs';
import path from 'path';
import os from 'os';

export async function init() {
  const cwd = process.cwd();
  const crateDir = path.join(cwd, '.crate');
  const storeDir = path.join(os.homedir(), '.crate', 'store');

  fs.mkdirSync(crateDir, { recursive: true });
  fs.mkdirSync(path.join(crateDir, 'lib'), { recursive: true });
  fs.mkdirSync(storeDir, { recursive: true });

  console.log('🔄 Installing deps into Crate store...');
  await execa(
    'pnpm',
    ['install', `--store-dir=${storeDir}`, '--ignore-scripts'],
    { stdio: 'inherit' }
  );

  const pkg = JSON.parse(
    fs.readFileSync(path.join(cwd, 'package.json'), 'utf-8')
  );
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  fs.writeFileSync(
    path.join(crateDir, 'manifest.json'),
    JSON.stringify(deps, null, 2)
  );
  console.log(
    '✅ Crate initialized! Run `eval "$(crate activate)"` to activate.'
  );
}
