import { useEffect, useRef, useState } from "react";

type Line = { kind: "prompt" | "out" | "banner" | "warn"; text: string };

const BANNER = `
     ██╗ █████╗ ███╗   ██╗███████╗
     ██║██╔══██╗████╗  ██║██╔════╝
     ██║███████║██╔██╗ ██║█████╗
██   ██║██╔══██║██║╚██╗██║██╔══╝
╚█████╔╝██║  ██║██║ ╚████║███████╗
 ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
`;

const HELP = [
  "Available commands:",
  "  whoami       — who is behind this terminal",
  "  experience   — jump to work history",
  "  skills       — list technical skill inventory",
  "  contact      — how to reach me",
  "  sudo hire    — the fast path",
  "  clear        — clear the screen",
];

function runCommand(cmd: string): Line[] {
  const c = cmd.trim().toLowerCase();
  if (!c) return [];
  if (c === "help") return HELP.map((text) => ({ kind: "out" as const, text }));
  if (c === "whoami")
    return [
      { kind: "out", text: "jane — Director of Production Engineering @ Global Payments" },
      { kind: "out", text: "roles: engineering leader • sre • devops • agile coach" },
      { kind: "out", text: "mode:  always learning, always solving" },
    ];
  if (c === "experience")
    return [{ kind: "out", text: "→ opening ./experience" }];
  if (c === "skills") return [{ kind: "out", text: "→ opening ./skills" }];
  if (c === "contact")
    return [
      { kind: "out", text: "email:    jane+github@janemiceli.com" },
      { kind: "out", text: "linkedin: linkedin.com/in/janemiceli" },
    ];
  if (c === "sudo hire")
    return [
      { kind: "warn", text: "[sudo] password for recruiter: ********" },
      { kind: "out", text: "Access granted. Redirecting to inbox…" },
    ];
  if (c === "ls")
    return [{ kind: "out", text: "experience  education  certifications  projects  skills" }];
  if (c === "clear") return [];
  return [{ kind: "warn", text: `command not found: ${cmd} — type 'help'` }];
}

const INITIAL: Line[] = [
  { kind: "banner", text: BANNER },
  { kind: "out", text: "Welcome to Jane Miceli's interactive portfolio." },
  { kind: "out", text: "Type 'help' to see available commands." },
];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(INITIAL);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const submit = () => {
    const cmd = input;
    const newHistory = cmd.trim() ? [...history, cmd] : history;
    const promptLine: Line = { kind: "prompt", text: cmd };
    const out = runCommand(cmd);
    setLines(cmd.trim().toLowerCase() === "clear" ? [] : [...lines, promptLine, ...out]);
    setHistory(newHistory);
    setHistIdx(null);
    setInput("");
  };

  return (
    <div className="terminal-window w-full">
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-500/90" />
        <span className="ml-auto text-xs text-white/60">guest@jane-portfolio:~</span>
      </div>
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="h-[360px] overflow-y-auto px-5 py-4 text-[13px] leading-relaxed"
      >
        {lines.map((line, i) => {
          if (line.kind === "banner")
            return (
              <pre key={i} className="text-[color:var(--color-terminal-accent)] text-[10px] leading-tight">
                {line.text}
              </pre>
            );
          if (line.kind === "prompt")
            return (
              <div key={i}>
                <Prompt />
                <span>{line.text}</span>
              </div>
            );
          if (line.kind === "warn")
            return (
              <div key={i} className="text-[color:var(--color-terminal-yellow)]">
                {line.text}
              </div>
            );
          return <div key={i}>{line.text}</div>;
        })}
        <div className="flex items-center">
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
              if (e.key === "ArrowUp" && history.length) {
                const idx = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1);
                setHistIdx(idx);
                setInput(history[idx]);
              }
              if (e.key === "ArrowDown" && histIdx !== null) {
                const idx = histIdx + 1;
                if (idx >= history.length) {
                  setHistIdx(null);
                  setInput("");
                } else {
                  setHistIdx(idx);
                  setInput(history[idx]);
                }
              }
            }}
            className="flex-1 bg-transparent outline-none text-[color:var(--color-terminal-fg)] caret-[color:var(--color-terminal-accent)]"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <span className="mr-2 whitespace-nowrap">
      <span className="text-[color:var(--color-terminal-accent)]">guest@jane-portfolio</span>
      <span className="text-white/60">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-white/60">$ </span>
    </span>
  );
}
