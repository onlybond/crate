import fs from 'fs';
import path from 'path';

export function getEnvPath(cwd = process.cwd()) {
  return path.join(cwd, '.crate');
}

export function ensureEnv(cwd = process.cwd()) {
  const envPath = getEnvPath(cwd);
  fs.mkdirSync(envPath, { recursive: true });
  fs.mkdirSync(path.join(envPath, 'lib'), { recursive: true });
  fs.mkdirSync(path.join(envPath, 'bin'), { recursive: true });
  return envPath;
}
