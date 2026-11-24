import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A Day of One-Line Pitches — make.fun bounty entry.
// The program writes one pitch sentence to the output entry file.
const line =
  `You describe the app you have always wanted over coffee, and an AI agent builds it, tests it, and hands you the working thing — no code, no tutorials, just your idea made real.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
