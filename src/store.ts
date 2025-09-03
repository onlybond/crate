import fs from 'fs';
import os from 'os';
import path from 'path';

export function getStorePath() {
  return path.join(os.homedir(), '.crate', 'store');
}

export function ensureStore() {
  const store = getStorePath();
  fs.mkdirSync(store, { recursive: true });
  return store;
}
