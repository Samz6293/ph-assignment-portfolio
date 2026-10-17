interface SectionHeadingProps {
  /** Zero-based position of the section — rendered as "01", "02", ... */
  index: number;
  label: string;
  /** Optional short description under the heading */
  description?: string;
}

/**
 * Shared section header: mono numbered eyebrow + serif heading + hairline.
 * Keeps every section visually consistent (design system rule: no emoji,
 * mono labels, display serif headings).
 */
export function SectionHeading({ index, label, description }: SectionHeadingProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-widest text-highlight uppercase">
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}
