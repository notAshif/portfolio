export interface ExperienceEntry {
  id: string;
  title: string;
  description: string;
  meta: string;
  accent: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "vercel",
    title: "Vercel",
    description: "Led product design for developer experience tooling and onboarding flows.",
    meta: "Senior Product Designer · 2023–Present",
    accent: "#111111",
  },
  {
    id: "stripe",
    title: "Stripe",
    description: "Shipped payment UI patterns used across merchant dashboards worldwide.",
    meta: "Product Designer · 2021–2023",
    accent: "#635BFF",
  },
  {
    id: "linear",
    title: "Linear",
    description: "Crafted issue tracking workflows and keyboard-first interaction models.",
    meta: "Design Engineer · 2019–2021",
    accent: "#5E6AD2",
  },
  {
    id: "independent",
    title: "Independent",
    description: "Partnered with early-stage teams on brand, product, and frontend builds.",
    meta: "Consultant · 2017–2019",
    accent: "#EC4899",
  },
];
