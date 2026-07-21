import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { ExternalLink } from "lucide-react";
import { ROLES } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jane Miceli" },
      { name: "description", content: "20+ years leading engineering, SRE, and DevOps at Global Payments, Kohl's, IBM, Micron, HP and more." },
      { property: "og:title", content: "Experience — Jane Miceli" },
      { property: "og:description", content: "20+ years leading engineering, SRE, and DevOps." },
    ],
  }),
  component: ExperiencePage,
});


function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        command="cat ~/experience.log"
        title="Experience"
        subtitle="20+ years shipping software, running production, and growing engineering teams."
      />
      <section className="container-app py-14">
        <ol className="relative border-l border-border pl-6 md:pl-8">
          {ROLES.map((role) => (
            <li key={role.title + role.company} className="relative mb-10">
              <span
                className={`absolute -left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ${
                  role.current ? "bg-primary pulse-dot" : "bg-muted-foreground/50"
                } md:-left-[11px]`}
              />
              <div className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-primary">{role.company}</span>
                  {role.url && (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                      aria-label={`${role.company} website`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {role.current && (
                    <span className="ml-auto rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      current
                    </span>
                  )}
                </div>
                {role.summary && (
                  <p className="mt-3 text-sm text-muted-foreground">{role.summary}</p>
                )}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {role.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
