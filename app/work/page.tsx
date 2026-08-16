import type { Metadata } from "next";
import ContentPageShell from "../components/content-page-shell";
import FeaturedProjectCard from "../components/client/featured-project-card";
import GridCard from "../components/client/grid-card";
import PageHeading from "../components/page-heading";
import { featuredProject, workProjects } from "../lib/content/work";

export const metadata: Metadata = {
  title: "Work — Asif Shah",
  description: "Selected projects and product work.",
};

export default function WorkPage() {
  return (
    <ContentPageShell>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-10">
        <PageHeading title="work" />

        <FeaturedProjectCard
          title={featuredProject.title}
          category={featuredProject.category}
          year={featuredProject.year}
          imageSrc={featuredProject.imageSrc}
          imageAlt={featuredProject.imageAlt}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {workProjects.map((project) => (
            <GridCard
              key={project.id}
              title={project.title}
              description={project.description}
              meta={project.meta}
              accent={project.accent}
            />
          ))}
        </div>
      </div>
    </ContentPageShell>
  );
}
