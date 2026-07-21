export type Stat = { value: string; label: string; note: string };

export const STATS: Stat[] = [
  { value: "20+", label: "Years in tech", note: "Since 2002 — before DevOps was a word." },
  { value: "10+", label: "Companies", note: "Kohl's, IBM, Micron, HP, Global Payments…" },
  { value: "100s", label: "Engineers led", note: "People-first, always." },
  { value: "∞", label: "Post-mortems", note: "Blameless, with teeth." },
  { value: "99.99%", label: "Uptime target", note: "0.01% error budget, gone by Tuesday." },
  { value: "0", label: "Blame given", note: "Systems thinking > finger pointing." },
];
