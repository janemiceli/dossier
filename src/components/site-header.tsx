import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";

const NAV = [
  { to: "/experience", label: "./experience" },
  { to: "/education", label: "./education" },
  { to: "/certifications", label: "./certifications" },
  { to: "/projects", label: "./projects" },
  { to: "/skills", label: "./skills" },
] as const;

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link to="/" className="font-mono text-base font-semibold text-primary">
          <span className="text-muted-foreground">~/</span>jane-miceli
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "font-mono text-sm text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/janemiceli"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/janemiceli"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="rounded-md p-2 text-muted-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-app flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-sm text-muted-foreground hover:text-primary"
                activeProps={{ className: "py-2 font-mono text-sm text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
