"use client";

import { useEffect, useRef, useState } from "react";

type Line = { prompt: string; output: string };

const lines: Line[] = [
  { prompt: "whoami", output: "Adriane — CE student, UP Diliman" },
  { prompt: "status --now", output: "building · learning · shipping" },
  { prompt: "stack", output: "Next.js · TypeScript · Supabase · Python" },
  { prompt: "editing --tool", output: "Premiere Pro · CapCut" },
];

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setVisibleLines(lines.length);
      return;
    }

    let cancelled = false;

    async function play() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const text = lines[i].prompt;
        for (let c = 1; c <= text.length; c++) {
          if (cancelled) return;
          setCharCount(c);
          await new Promise((r) => setTimeout(r, 18));
        }
        await new Promise((r) => setTimeout(r, 220));
        if (cancelled) return;
        setVisibleLines((v) => v + 1);
        setCharCount(0);
      }
    }

    play();
    return () => {
      cancelled = true;
    };
  }, []);

  const typingLine = lines[visibleLines];

  return (
    <div
      className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-xl"
      role="img"
      aria-label="Terminal showing: who am I — Adriane, CE student, UP Diliman. Status now — building, learning, shipping. Stack — Next.js, TypeScript, Supabase, Python. Editing tool — Premiere Pro, CapCut."
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 font-mono text-xs text-muted">
          adriane@portfolio
        </span>
      </div>
      <div
        className="space-y-2.5 px-4 py-4 font-mono text-[13px] leading-relaxed"
        aria-hidden="true"
      >
        {lines.slice(0, visibleLines).map((line) => (
          <div key={line.prompt}>
            <div className="text-muted-foreground">
              <span className="text-accent">$</span> {line.prompt}
            </div>
            <div className="text-foreground">{line.output}</div>
          </div>
        ))}
        {typingLine && (
          <div>
            <div className="text-muted-foreground">
              <span className="text-accent">$</span>{" "}
              {typingLine.prompt.slice(0, charCount)}
              <span className="animate-pulse">▍</span>
            </div>
          </div>
        )}
        {visibleLines >= lines.length && (
          <div className="pt-1 text-muted-foreground">
            <span className="text-accent">$</span>{" "}
            <span className="animate-pulse">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}
