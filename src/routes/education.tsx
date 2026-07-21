import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { GraduationCap, ExternalLink } from "lucide-react";
import { DEGREES } from "@/data/education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Jane Miceli" },
      { name: "description", content: "Master and Bachelor of Science, University of Wisconsin - Milwaukee." },
      { property: "og:title", content: "Education — Jane Miceli" },
      { property: "og:description", content: "University of Wisconsin - Milwaukee, MS and BS." },
    ],
  }),
  component: EducationPage,
});


function EducationPage() {
  return (
    <PageShell>
      <PageHeader command="cat ~/education.log" title="Education" />
      <section className="container-app py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {DEGREES.map((d) => (
            <a
              key={d.degree}
              href={d.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-primary/10 p-3 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{d.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{d.school}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
