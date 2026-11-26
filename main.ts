// entry.txt: a two-sentence horror story, <=400 chars
import { mkdirSync, writeFileSync } from "node:fs";

// The first sentence is safe and domestic; the second turns it by putting the
// voice on the wrong side of the door, and leaves the reader to imagine who.
// No explanation of what answered: the horror is the missing third sentence.
const STORY =
  "I trained the smart lock to my voice so it would stop shutting me out. " +
  "Last night it asked, in my voice, to be let in.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", STORY + "\n", "utf8");
