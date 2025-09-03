#!/usr/bin/env node
import { execa } from 'execa';
import path from 'path';

async function main() {
  const crateLib = path.join(process.cwd(), '.crate', 'lib');
  const args = process.argv.slice(2);

  await execa('yarn', [...args, '--modules-folder', crateLib], {
    stdio: 'inherit',
  });
}

main();
