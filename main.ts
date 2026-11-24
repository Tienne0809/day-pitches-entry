// A Day of One-Line Pitches — make.fun bounty entry.
// Writes the one-sentence pitch to <out>/entry.txt, where <out> is
// process.env.MAKEFUN_OUTPUT_DIR or "/output" when unset.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  `You tell an AI agent your app idea in plain words, and it writes the code, tests it, and hands you a working app — you never have to learn programming to bring your idea to life.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
