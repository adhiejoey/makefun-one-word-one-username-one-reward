import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const handle = "adhiejoey";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard the fixed entry before writing: one plain ASCII word, no
// whitespace, no trailing newline, and within the 30-character cap.
if (!/^[A-Za-z0-9]+$/.test(handle) || handle.length > 30) {
  throw new Error("Entry must be a single ASCII word of at most 30 characters");
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, handle, "utf8");
console.log(`Wrote entry to ${target}`);
