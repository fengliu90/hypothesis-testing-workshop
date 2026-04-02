type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="muted-rule mt-4" />
      <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl md:text-[2.65rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base text-slate/80 sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
