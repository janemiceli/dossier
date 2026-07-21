import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Mic, FileText, Radio, Users, ExternalLink } from "lucide-react";
import { TALKS, ARTICLES, PODCASTS, BOARDS, type Item } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects, Talks & Boards — Jane Miceli" },
      { name: "description", content: "Public speaking at DevOpsDays and DefCon, articles, podcasts, and board work." },
      { property: "og:title", content: "Projects, Talks & Boards — Jane Miceli" },
      { property: "og:description", content: "Talks, podcasts, articles, and board involvement." },
    ],
  }),
  component: ProjectsPage,
});


function Group({ icon: Icon, title, items }: { icon: typeof Mic; title: string; items: Item[] }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-primary">
        <Icon className="h-4 w-4" /> {title}
      </h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((i) => {
          const body = (
            <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex-1">
                <h3 className="text-sm font-semibold leading-snug text-foreground">{i.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  <span className="text-primary">{i.venue}</span>
                  {i.year && <span className="font-mono"> · {i.year}</span>}
                </p>
                {i.blurb && <p className="mt-2 text-sm text-muted-foreground">{i.blurb}</p>}
              </div>
              {i.url && <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
            </div>
          );
          return i.url ? (
            <a key={i.title + i.venue} href={i.url} target="_blank" rel="noreferrer" className="block">
              {body}
            </a>
          ) : (
            <div key={i.title + i.venue}>{body}</div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        command="git log --oneline --author='Jane Miceli' community/"
        title="Talks, Writing & Boards"
        subtitle="Where the work shows up outside the terminal — conference talks, articles, podcasts, and community boards."
      />
      <section className="container-app space-y-14 py-14">
        <Group icon={Mic} title="Public Speaking" items={TALKS} />
        <Group icon={FileText} title="Articles" items={ARTICLES} />
        <Group icon={Radio} title="Podcasts" items={PODCASTS} />
        <Group icon={Users} title="Boards" items={BOARDS} />
      </section>
    </PageShell>
  );
}
