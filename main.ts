// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// The program writes a single honest line to /output/entry.txt.
// Deterministic: a fixed string, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You keep typing 'just fix it' under a cropped screenshot, a deadline you invented, and a prompt you wrote at 2am — then ask why I sound tired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
