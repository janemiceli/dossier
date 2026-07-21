import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo &quot;built with resilience &amp; caffeine&quot; — © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex items-center gap-3">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} target="_blank" rel="noreferrer" aria-label="Email" className="text-muted-foreground hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
