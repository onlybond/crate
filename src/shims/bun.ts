#!/usr/bin/env node
import { execa } from 'execa';
import os from 'os';
import path from 'path';

async function main() {
  const storeDir = path.join(os.homedir(), '.crate', 'store');
  const crateLib = path.join(process.cwd(), '.crate', 'lib');
  const args = process.argv.slice(2);

  await execa('bun', ['install', '--modules-dir', crateLib, ...args], {
    stdio: 'inherit',
    env: {
      ...process.env,
      BUN_INSTALL_CACHE: storeDir,
    },
  });
}

main();
