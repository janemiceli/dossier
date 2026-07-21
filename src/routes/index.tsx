import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, ArrowRight, Linkedin, Mail } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Terminal } from "@/components/terminal";
import { PROFILE } from "@/data/profile";
import { STATS } from "@/data/stats";

export const Route = createFileRoute("/")({
  component: Home,
});

function ProdOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-red-900/40 backdrop-blur-sm">
      <div className="animate-pulse rounded-xl border-2 border-red-500 bg-red-950/90 p-8 text-center shadow-2xl scale-110">
        <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-widest text-red-500">
          ⚠️ SEV-1 INCIDENT ⚠️
        </h2>
        <p className="font-mono text-xl text-red-200">PRODUCTION DATABASE DROPPED</p>
        <p className="mt-4 text-sm text-red-400">
          (Just kidding. But you felt that panic, didn&apos;t you?)
        </p>
        <button
          onClick={onClose}
          className="mt-8 rounded bg-red-600 px-6 py-2 font-bold text-white hover:bg-red-500"
        >
          Rollback &amp; Resolve
        </button>
      </div>
    </div>
  );
}


function Home() {
  const [showProd, setShowProd] = useState(false);
  return (
    <PageShell>
      {showProd && <ProdOverlay onClose={() => setShowProd(false)} />}
      {/* Sev-1 banner */}
      <div className="border-b border-destructive/30 bg-destructive/10">
        <div className="container-app flex flex-col items-center justify-between gap-2 py-2.5 text-center md:flex-row md:text-left">
          <p className="font-mono text-xs text-destructive">
            <AlertTriangle className="mr-1 inline h-3.5 w-3.5" />
            SEV-1 INCIDENT · Legacy portfolio page returning 200s. Rolling forward.
          </p>
          <span className="font-mono text-[11px] text-destructive/80">
            (Just kidding. The blameless post-mortem is scheduled.)
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="container-app grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-mono text-sm text-primary">$ whoami</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Hi, I&apos;m <span className="text-primary">{PROFILE.name}</span>
          </h1>
          <p className="mt-5 font-mono text-lg text-muted-foreground">
            {PROFILE.role} <span className="text-primary">|</span> {PROFILE.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
            {PROFILE.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              View Experience <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}?subject=Hello%20Jane`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>


          <button
            type="button"
            onClick={() => setShowProd(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/5 px-4 py-2 font-mono text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
          >
            <AlertTriangle className="h-3.5 w-3.5" /> Deploy to Prod
          </button>
        </div>

        <div className="md:pt-4">
          <Terminal />
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-accent/30">
        <div className="container-app grid grid-cols-2 gap-8 py-14 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <p className="mt-2 text-xs text-muted-foreground/80">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-app py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Ready to build something resilient?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Whether it&apos;s scaling production engineering orgs, standing up SRE
          practices, or coaching teams through change — let&apos;s talk.
        </p>
        <a
          href={`mailto:${PROFILE.email}?subject=Let%27s%20Talk`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Let&apos;s Talk <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-10 font-mono text-xs text-muted-foreground/70">
          $ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </div>
      </section>
    </PageShell>
  );
}
