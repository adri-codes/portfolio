const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export function ProjectVisual({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-border bg-accent-soft ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px] opacity-60" />
      <span className="relative font-mono text-4xl font-semibold tracking-tight text-accent/70 sm:text-5xl">
        {initialsOf(name)}
      </span>
    </div>
  );
}
