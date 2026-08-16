import type { Metadata } from "next";
import ContentPageShell from "../components/content-page-shell";
import WritingList from "../components/client/writing-list";
import PageHeading from "../components/page-heading";
import { writingPieces } from "../lib/content/writing";

export const metadata: Metadata = {
  title: "Writing — Asif Shah",
  description: "Essays on craft, product, and building.",
};

export default function WritingPage() {
  return (
    <ContentPageShell>
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-10">
        <PageHeading title="Writing." />
        <WritingList pieces={writingPieces} />
      </div>
    </ContentPageShell>
  );
}
