import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";

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

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Leadership",
    items: [
      "Servant Leadership",
      "People-First Management",
      "Team Building",
      "Psychological Safety",
      "Coaching & Mentorship",
      "Org Design",
      "Change Management",
    ],
  },
  {
    title: "Practice",
    items: [
      "Site Reliability Engineering",
      "Production Engineering",
      "DevOps",
      "Incident Management",
      "Blameless Post-Mortems",
      "On-Call Health",
      "SLO / SLI / Error Budgets",
    ],
  },
  {
    title: "Agile & Process",
    items: [
      "Scrum (CSM, ACSM, CSP)",
      "SAFe",
      "Kanban",
      "Certified Agile Leadership",
      "Product Ownership (CSPO)",
      "Facilitation",
    ],
  },
  {
    title: "Architecture & Cloud",
    items: [
      "Cloud Enterprise Architecture",
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Microservices",
      "Platform Engineering",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Software Engineering",
      "Firmware / Embedded",
      "Automation",
      "CI/CD",
      "Observability",
      "Testing & QA",
    ],
  },
  {
    title: "Domain",
    items: [
      "Payments",
      "Retail Scale",
      "Enterprise IT",
      "Consulting",
      "EdTech",
      "Industrial Automation",
    ],
  },
];

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
