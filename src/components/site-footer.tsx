import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo &quot;built with resilience &amp; caffeine&quot; — © {new Date().getFullYear()} Jane Miceli
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/janemiceli" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/janemiceli" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:jane+github@janemiceli.com" aria-label="Email" className="text-muted-foreground hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
