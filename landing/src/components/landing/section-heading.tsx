type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
