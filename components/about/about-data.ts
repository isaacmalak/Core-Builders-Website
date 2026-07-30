/**
 * Copy in this file uses **double asterisks** to mark words that should be
 * emphasized in the rendered text. See `Emphasis` in app/about/about-page.tsx.
 */

export interface Principle {
  number: string;
  category: string;
  title: string;
  detail: string;
  /** Concrete ways the principle shows up in the work. */
  practices: string[];
}

export const principles: Principle[] = [
  {
    number: "01",
    category: "Ownership",
    title: "One team, start to growth",
    detail:
      "**One team** plans the work, builds it, and answers for it. Nothing gets lost in a handoff because there isn't one.",
    practices: [
      "One point of contact",
      "No hand-off gaps",
      "Direct access to the builders",
      "Same team after launch",
    ],
  },
  {
    number: "02",
    category: "Craft",
    title: "Built to grow with you",
    detail:
      "Most systems get thrown away because nobody planned past version one. We build so **new features drop in** instead of forcing a rewrite.",
    practices: [
      "Code the next developer can read",
      "Design systems, not one-offs",
      "Fast on a bad connection",
      "Security handled by default",
    ],
  },
  {
    number: "03",
    category: "Clarity",
    title: "Plain language, honest scope",
    detail:
      "You'll know what's being built, what it costs, and where it stands. If there's a **cheaper way to the same result**, we'll say so.",
    practices: [
      "Itemized scope before we start",
      "A written update every week",
      "No jargon, no surprise invoices",
      "Straight answers on trade-offs",
    ],
  },
  {
    number: "04",
    category: "Momentum",
    title: "Launch early, then keep going",
    detail:
      "Something real in front of customers in weeks beats something perfect in six months. **Launch is where the work starts.**",
    practices: [
      "Something usable in weeks",
      "Decisions from real usage",
      "Steady improvements, not rewrites",
      "Support that doesn't expire",
    ],
  },
];

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const stats: Stat[] = [
  {
    value: "04",
    label: "Disciplines in-house",
    detail: "Software, apps, design, brand, marketing. All in one team, **no handoffs**.",
  },
  {
    value: "01",
    label: "Team, start to growth",
    detail: "Same people from the first call onward. **No reassignments.**",
  },
  {
    value: "EG",
    label: "Rooted in Egypt",
    detail: "Your hours, your market, **an international standard of work**.",
  },
];

export const capabilities: string[] = [
  "Custom software",
  "Mobile apps",
  "Growth marketing",
  "Business automation",
  "UI / UX design",
  "Brand identity",
];
