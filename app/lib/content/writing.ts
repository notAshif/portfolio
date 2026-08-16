export interface WritingPiece {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const writingPieces: WritingPiece[] = [
  {
    id: "i-build",
    title: "I build",
    excerpt: "Self musings 2024~",
    date: "2024",
    content:
      "A running log of what I'm building, breaking, and learning — less polished essay, more honest notebook.",
  },
  {
    id: "selfishness-is-necessary",
    title: "Selfishness is necessary",
    excerpt: "Selfishness isn't a flaw. It's the oxygen mask.",
    date: "2024",
    content:
      "We're taught to put others first, but sustainable generosity starts with protecting your own capacity. The oxygen mask metaphor isn't selfish — it's structural.",
  },
  {
    id: "everything-everywhere",
    title: "Everything, everywhere, all at once (in my head)",
    excerpt: "Too many tabs open. All of them me.",
    date: "2024",
    content:
      "The modern mind runs parallel processes — ideas, obligations, identities — all competing for foreground. Making peace with the noise is part of the work.",
  },
  {
    id: "contextual-reputation",
    title: "Contextual reputation",
    excerpt: "Proof of behavior > proof of profile",
    date: "2024",
    content:
      "Credentials and bios are static. Reputation should be earned in context — through repeated, observable behavior in the environments where it matters.",
  },
  {
    id: "agent-native-internet",
    title: "The agent-native internet",
    excerpt:
      "The internet was never made for us. we just happened to use it first.",
    date: "2024",
    content:
      "The next layer of the web won't be optimized for human browsing alone. Agents will navigate, negotiate, and transact — and the interfaces we build need to account for that.",
  },
  {
    id: "why-create",
    title: "Why Create?",
    excerpt:
      "Humans were not designed to scroll. We were designed to create.",
    date: "2024",
    content:
      "Consumption is passive. Creation is how we make sense of the world and leave something behind. The best products don't trap attention — they convert it into output.",
  },
  {
    id: "persistence",
    title: "Persistence",
    excerpt: "Being relentless.",
    date: "2024",
    content:
      "Talent opens doors. Persistence walks through them, again and again, until something sticks. Most of building is showing up after the excitement fades.",
  },
];
