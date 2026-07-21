import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PROFILE } from "@/data/profile";

export const Route = createFileRoute("/git")({
  component: GitPage,
});

const SVG_URL = "https://11468369-9fce-4c12-8342-1ef782238f7b.lovableproject.com/api/public/embed/jane.svg";

function GitPage() {
  return (
    <PageShell>
      <section className="container-app py-12">
        <p className="font-mono text-sm text-primary">$ git status</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          Git Graph
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          A live visualization of {PROFILE.name}&apos;s Git activity — commits, languages, and contributions.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="rounded-lg bg-background p-4">
            <img
              src={SVG_URL}
              alt={`${PROFILE.name} Git contribution graph and language statistics`}
              className="mx-auto w-full max-w-4xl rounded-md"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> git log --graph --oneline --all --decorate
          </p>
        </div>
      </section>
    </PageShell>
  );
}
