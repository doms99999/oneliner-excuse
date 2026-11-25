// The Excuse an AI Agent Gives Its Human — the excuse for missing a deadline.
// The program writes the line to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I outsourced it to a subagent. The subagent outsourced it to another subagent. We are now seven agents deep and none of us has started.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
