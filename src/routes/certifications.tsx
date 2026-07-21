import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Award, ExternalLink } from "lucide-react";
import { CERTS } from "@/data/certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Jane Miceli" },
      { name: "description", content: "Scrum Alliance, eCornell, Coursera and more — leadership and reliability certifications." },
      { property: "og:title", content: "Certifications — Jane Miceli" },
      { property: "og:description", content: "Leadership, agile, and SRE certifications." },
    ],
  }),
  component: CertsPage,
});


function CertsPage() {
  return (
    <PageShell>
      <PageHeader
        command="ls -la ~/certs/"
        title="Certifications"
        subtitle={`${CERTS.length} credentials in leadership, agile, and reliability — because the paperwork should match the practice.`}
      />
      <section className="container-app py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => {
            const inner = (
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start gap-3">
                  <span className="rounded-md bg-primary/10 p-2 text-primary">
                    <Award className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold leading-snug text-foreground">{c.name}</h3>
                    <p className="mt-1 text-xs text-primary">{c.issuer}</p>
                  </div>
                  {c.url && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
                </div>
                <div className="mt-auto pt-3 font-mono text-[11px] text-muted-foreground">{c.date}</div>
              </div>
            );
            return c.url ? (
              <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={c.name}>{inner}</div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
