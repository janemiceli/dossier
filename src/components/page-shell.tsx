import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ command, title, subtitle }: { command: string; title: string; subtitle?: string }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-accent/40 to-transparent">
      <div className="container-app py-14 md:py-20">
        <p className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">$</span> {command}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
