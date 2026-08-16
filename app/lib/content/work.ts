export interface WorkProject {
  id: string;
  title: string;
  description: string;
  meta: string;
  accent: string;
}

export interface FeaturedProject {
  title: string;
  category: string;
  year: string;
  imageSrc: string;
  imageAlt: string;
}

export const featuredProject: FeaturedProject = {
  title: "Safe Ecosystem",
  category: "Multisig Wallet",
  year: "2025",
  imageSrc: "/projects/safe-ecosystem.png",
  imageAlt: "Safe Ecosystem multisig wallet project preview",
};

export const workProjects: WorkProject[] = [
  {
    id: "domi",
    title: "Domi",
    description: "A spatial interface for collaborative product thinking.",
    meta: "Product · 2025",
    accent: "#FF5F5E",
  },
  {
    id: "atlas",
    title: "Atlas",
    description: "Design system and component library for a fintech platform.",
    meta: "Design · 2024",
    accent: "#3B82F6",
  },
  {
    id: "pulse",
    title: "Pulse",
    description: "Real-time analytics dashboard for onchain activity.",
    meta: "Engineering · 2024",
    accent: "#10B981",
  },
  {
    id: "loom",
    title: "Loom",
    description: "Editorial publishing tool with AI-assisted drafting.",
    meta: "Product · 2023",
    accent: "#F59E0B",
  },
];
