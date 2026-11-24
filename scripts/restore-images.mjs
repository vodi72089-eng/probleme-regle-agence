import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const assets = path.join(root, "assets");
if (fs.existsSync(assets)) {
  for (const entry of fs.readdirSync(assets, { recursive: true })) {
    const rel = String(entry);
    if (!rel.endsWith(".b64")) continue;
    const src = path.join(assets, rel);
    const dest = path.join(root, "public", rel.slice(0, -4));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fs.existsSync(dest)) {
      fs.writeFileSync(dest, Buffer.from(fs.readFileSync(src, "utf8"), "base64"));
    }
  }
}
