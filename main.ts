import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one job title, 60 characters at most, nothing else.
// A deadpan-real job with one gloriously specific twist: measuring
// giraffe necks is almost plausible, and "(Entry Level)" sells the
// bureaucracy of it — a career ladder for neck measurement.
// No trailing newline: the file must hold the title and nothing else.
const title = "Giraffe Neck Measurer (Entry Level)";

if (title.length < 1 || title.length > 60 || title.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${title.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
