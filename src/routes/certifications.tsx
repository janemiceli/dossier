import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Award, ExternalLink } from "lucide-react";

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

type Cert = { name: string; issuer: string; date: string; url?: string };

const CERTS: Cert[] = [
  { name: "Berkeley Chief Technology Officer Program", issuer: "UC Berkeley Executive Education", date: "Jun 2026", url: "https://execedcertificates.berkeley.edu/6bc3ccaa-4550-4f7e-8da6-cb36c1e1c40b" },
  { name: "Certified Facilitator", issuer: "Scrum Alliance", date: "Feb 2024", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Women in Leadership", issuer: "eCornell", date: "Nov 2022" },
  { name: "Certified Agile Leader", issuer: "Scrum Alliance", date: "Feb 2022", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Scrum Foundations Educator", issuer: "Scrum Alliance", date: "Feb 2022", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "SRE — Measuring and Managing Reliability", issuer: "Coursera", date: "Feb 2021", url: "https://coursera.org/share/424f6dd1f7881ab1f684f6d7a5707273" },
  { name: "Certified Agile Leadership — Essentials (CAL-E)", issuer: "Scrum Alliance", date: "Feb 2021", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Certified Agile Leadership — Teams (CAL-T)", issuer: "Scrum Alliance", date: "Feb 2021", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Advanced Certified Scrum Master (ACSM)", issuer: "Scrum Alliance", date: "Jan 2021", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Certified Scrum Developer (CSD)", issuer: "Scrum Alliance", date: "2020", url: "https://bcert.me/slhhxzvpz" },
  { name: "Application Platform Operations Production Provisioning", issuer: "SCTE·ISBE", date: "2020" },
  { name: "SAFe Training (SA 4.0)", issuer: "scaledagileacademy.com", date: "2016" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", date: "Apr 2016", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Certified Scrum Professional (CSP)", issuer: "Scrum Alliance", date: "Jun 2014", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "Professional Scrum Master 1 (PSM1)", issuer: "Scrum.org", date: "Feb 2014", url: "https://www.scrum.org/user/176683" },
  { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", date: "Jun 2009", url: "https://www.scrumalliance.org/community/profile/jmiceli" },
  { name: "System Administrator / Network Manager Security", issuer: "US ARRTC", date: "Jan 2004" },
];

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
