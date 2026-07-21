import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { ExternalLink } from "lucide-react";

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

type Role = {
  title: string;
  company: string;
  period: string;
  url?: string;
  tags: string[];
  summary?: string;
  current?: boolean;
};

const ROLES: Role[] = [
  {
    title: "Manager of Cloud Infra, Ops and Reliability Engineering",
    company: "Global Payments",
    period: "Present",
    url: "https://www.globalpayments.com",
    current: true,
    tags: ["Leadership", "Cloud Infrastructure", "Operations", "Reliability Engineering"],
    summary:
      "Leading cloud infrastructure, operations, and reliability engineering — building resilient platforms and the empowered teams that run them.",
  },
  {
    title: "Senior Manager, Site Reliability Engineering",
    company: "Kohl's",
    period: "Jan 2021 – Jul 2023",
    url: "https://www.kohls.com",
    tags: ["SRE", "Retail Scale", "People Leadership"],
    summary:
      "Grew and led SRE at retail scale — reliability, on-call health, and platform practice.",
  },
  {
    title: "Principal Engineer & Team Lead, DevOps Now",
    company: "IBM (formerly Taos Mountain Inc)",
    period: "Dec 2019 – Jan 2021",
    url: "https://www.ibm.com",
    tags: ["DevOps", "Consulting", "Platform"],
  },
  {
    title: "Cloud Enterprise Architect",
    company: "Micron",
    period: "Feb 2018 – Dec 2019",
    url: "https://www.micron.com",
    tags: ["Cloud Architecture", "Enterprise"],
  },
  {
    title: "Lead, Senior Site Reliability Engineer",
    company: "HP Inc (formerly Hewlett-Packard)",
    period: "Nov 2014 – Feb 2018",
    url: "https://www.hp.com",
    tags: ["SRE", "Reliability", "Automation"],
  },
  {
    title: "Software Development Engineer",
    company: "Xylem (formerly Sensus)",
    period: "Sep 2013 – Nov 2014",
    url: "https://www.xylem.com/en-us/",
    tags: ["Software Engineering"],
  },
  {
    title: "Software Engineer",
    company: "EdPower (formerly Silverback Learning Solutions)",
    period: "Jan 2012 – Sep 2013",
    url: "https://www.myedpower.com",
    tags: ["Software Engineering", "EdTech"],
  },
  {
    title: "Software Engineer II/III",
    company: "Adecco (assigned to Hewlett-Packard)",
    period: "Mar 2010 – Dec 2011",
    url: "https://www.hp.com",
    tags: ["Software Engineering"],
  },
  {
    title: "Quality Assurance Engineer",
    company: "Bodybuilding.com",
    period: "Oct 2008 – Mar 2010",
    url: "https://www.bodybuilding.com",
    tags: ["QA", "Web Scale"],
  },
  {
    title: "Firmware Design Engineer",
    company: "Hewlett-Packard",
    period: "Jun 2007 – Oct 2008",
    url: "https://www.hp.com",
    tags: ["Firmware", "Embedded"],
  },
  {
    title: "Software Test Engineer",
    company: "Rockwell Automation (formerly Rockwell Software)",
    period: "Mar 2002 – Jun 2007",
    url: "https://www.rockwellautomation.com",
    tags: ["Automation", "Testing"],
  },
];

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
