import fs from 'fs';

export function safeSymlink(target: string, path: string) {
  try {
    if (!fs.existsSync(path)) {
      fs.symlinkSync(target, path, 'junction');
    }
  } catch (err) {
    console.warn(`⚠️ Failed to link ${target} -> ${path}`, err);
  }
}
