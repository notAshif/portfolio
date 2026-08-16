"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "react-github-calendar/tooltips.css";

const GITHUB_USER = "notAshif";

interface GitHubActivityWidgetProps {
  className?: string;
}

export default function GitHubActivityWidget({
  className = "",
}: GitHubActivityWidgetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`github-activity-widget overflow-hidden rounded-md border border-[#30363d] bg-[#0d1117] p-4 ${className}`}
      data-split-ignore
    >
      {mounted ? (
        <GitHubCalendar
          username={GITHUB_USER}
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={2}
          blockRadius={2}
        />
      ) : (
        <div
          className="h-28 w-full animate-pulse rounded bg-[#161b22]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
