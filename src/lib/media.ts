import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");

/** URL of public/portrait.(png|jpg|jpeg|webp) if it exists, otherwise null. */
export function portrait() {
  for (const ext of ["png", "webp", "jpg", "jpeg"]) {
    if (fs.existsSync(path.join(publicDir, `portrait.${ext}`))) return `/portrait.${ext}`;
  }
  return null;
}
