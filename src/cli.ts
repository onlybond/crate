#!/usr/bin/env node
import { init } from './commands/init';
import { migrate } from './commands/migrate';
import { activate } from './commands/activate';
import { disable } from './commands/disable';

const [, , cmd] = process.argv;

async function main() {
  switch (cmd) {
    case 'init':
      await init();
      break;
    case 'migrate':
      await migrate();
      break;
    case 'activate':
      activate();
      break;
    case 'disable':
      disable();
      break;
    default:
      console.log(`Usage: crate <command>
Commands:
  init      Initialize a Crate environment
  migrate   Migrate from node_modules
  activate  Print shell snippet to activate env
  disable   Disable Crate for this project`);
  }
}

main();
