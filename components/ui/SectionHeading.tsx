export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-baseline gap-3 font-mono text-xs tracking-widest text-muted uppercase">
        <span className="text-accent">{index}</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
