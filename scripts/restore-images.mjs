import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const assets = path.join(root, "assets");
if (fs.existsSync(assets)) {
  for (const f of fs.readdirSync(assets)) {
    if (!f.endsWith(".png.b64")) continue;
    const dest = path.join(root, "src", "assets", f.slice(0, -4));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fs.existsSync(dest)) fs.writeFileSync(dest, Buffer.from(fs.readFileSync(path.join(assets, f), "utf8"), "base64"));
  }
}
