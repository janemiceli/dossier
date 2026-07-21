import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { SKILL_GROUPS as GROUPS } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Jane Miceli" },
      { name: "description", content: "Leadership, SRE, DevOps, cloud, agile — the toolkit for building resilient systems and teams." },
      { property: "og:title", content: "Skills — Jane Miceli" },
      { property: "og:description", content: "Leadership and technical skills across SRE, DevOps, and cloud." },
    ],
  }),
  component: SkillsPage,
});


function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        command="cat /etc/skills.conf"
        title="Skills"
        subtitle="The toolkit for building resilient systems — and the teams that run them."
      />
      <section className="container-app py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary">
                # {g.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[12px] text-foreground/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
