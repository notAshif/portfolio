import type { Metadata } from "next";
import ContentPageShell from "../components/content-page-shell";
import GridCard from "../components/client/grid-card";
import PageHeading from "../components/page-heading";
import { experienceEntries } from "../lib/content/experience";

export const metadata: Metadata = {
  title: "Experience — Asif Shah",
  description: "Roles and companies.",
};

export default function ExperiencePage() {
  return (
    <ContentPageShell>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-10">
        <PageHeading title="experience" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {experienceEntries.map((entry) => (
            <GridCard
              key={entry.id}
              title={entry.title}
              description={entry.description}
              meta={entry.meta}
              accent={entry.accent}
            />
          ))}
        </div>
      </div>
    </ContentPageShell>
  );
}
