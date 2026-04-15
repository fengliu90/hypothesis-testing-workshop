import { flyerData } from "@/features/flyer/data";

type FlyerVariant = "print" | "social";

type FlyerProps = {
  variant: FlyerVariant;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Headshot({
  src,
  name,
  shape = "rounded",
  sizeClassName,
  objectPositionClassName = "object-center",
}: {
  src: string | null;
  name: string;
  shape?: "rounded" | "circle";
  sizeClassName: string;
  objectPositionClassName?: string;
}) {
  const frameClassName =
    shape === "circle" ? "rounded-full" : "rounded-[24px]";

  if (src) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${name} headshot`}
          className={`${sizeClassName} ${frameClassName} ${objectPositionClassName} border border-line/90 bg-mist object-cover shadow-sm`}
        />
      </>
    );
  }

  return (
    <div
      className={`${sizeClassName} ${frameClassName} flex items-center justify-center border border-line/90 bg-mist text-sm font-semibold tracking-[0.12em] text-teal shadow-sm`}
      aria-label={`${name} initials`}
    >
      {getInitials(name)}
    </div>
  );
}

function KeynoteCard({
  speaker,
  compact = false,
}: {
  speaker: (typeof flyerData.keynoteSpeakers)[number];
  compact?: boolean;
}) {
  return (
    <article className="rounded-[26px] border border-line/80 bg-white/92 p-4 shadow-panel">
      <div
        className={`grid ${compact ? "grid-cols-[92px_1fr]" : "grid-cols-[118px_1fr]"} items-center gap-4`}
      >
        <Headshot
          src={speaker.headshot}
          name={speaker.name}
          sizeClassName={compact ? "h-[118px] w-[92px]" : "h-[136px] w-[118px]"}
          objectPositionClassName="object-[center_20%]"
        />
        <div>
          <h3 className="font-serif text-[1.34rem] leading-[1.05] tracking-[-0.025em] text-ink">
            {speaker.name}
          </h3>
          <p className="mt-2 min-h-[2.8rem] text-[0.88rem] leading-5 text-slate/82">
            {speaker.affiliation}
          </p>
          <span className="mt-3 inline-flex rounded-full border border-teal/15 bg-teal/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
            {speaker.topic}
          </span>
        </div>
      </div>
    </article>
  );
}

function OrganizerCard({
  organizer,
  compact = false,
}: {
  organizer: (typeof flyerData.organizers)[number];
  compact?: boolean;
}) {
  return (
    <article className="flex flex-col items-center text-center">
      <Headshot
        src={organizer.headshot}
        name={organizer.name}
        shape="circle"
        sizeClassName={compact ? "h-16 w-16" : "h-[4.6rem] w-[4.6rem]"}
        objectPositionClassName="object-[center_18%]"
      />
      <h3 className="mt-3 text-[0.94rem] font-medium leading-5 text-ink">
        {organizer.name}
      </h3>
      <p className="mt-1 text-[0.78rem] leading-5 text-slate/76">
        {organizer.affiliation}
      </p>
    </article>
  );
}

function TopicCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="rounded-[26px] border border-line/80 bg-white/92 p-5 shadow-panel">
      <h3 className="font-serif text-[1.4rem] leading-tight tracking-[-0.025em] text-ink">
        {title}
      </h3>
      <div className="muted-rule mt-4" />
      <ul className="mt-5 space-y-3.5 text-[0.92rem] leading-6 text-slate/82">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Flyer({ variant }: FlyerProps) {
  const isSocial = variant === "social";
  const { workshop, keynoteSpeakers, organizers, topics, importantDates, websiteUrl } =
    flyerData;

  return (
    <div className={`flyer-wrap ${isSocial ? "flyer-wrap-social" : "flyer-wrap-print"}`}>
      <article className={`flyer-page ${isSocial ? "flyer-social" : "flyer-print"} text-ink`}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.11),transparent_28%),radial-gradient(circle_at_top_left,rgba(18,48,71,0.07),transparent_26%)]" />
          <div className="absolute inset-x-6 top-6 bottom-6 rounded-[32px] border border-line/50" />
          <div className="absolute inset-0 opacity-70 flyer-grid" />
          <div className="absolute -left-16 top-[16%] h-56 w-56 rounded-full border border-teal/10" />
          <div className="absolute right-[-4.5rem] top-[9%] h-64 w-64 rounded-full border border-ink/8" />
          <div className="absolute left-[7%] bottom-[16%] h-28 w-[24rem] rounded-full border border-teal/12" />
        </div>

        <div className={`flyer-content relative z-10 flex h-full flex-col ${isSocial ? "p-8" : "p-8 sm:p-10"}`}>
          <header className="flyer-header grid gap-7 border-b border-line/80 pb-7 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <p className="eyebrow text-[12px]">{workshop.hero.eyebrow}</p>
              <div className="muted-rule mt-4" />
              <h1 className={`mt-5 font-serif leading-[0.92] tracking-[-0.06em] ${isSocial ? "text-[3.25rem]" : "text-[3.7rem] sm:text-[4.2rem]"}`}>
                CALL FOR PAPERS
              </h1>
              <h2 className={`mt-3 font-serif leading-[1] tracking-[-0.045em] ${isSocial ? "text-[2.25rem]" : "text-[2.55rem]"}`}>
                Hypothesis Testing
              </h2>
              <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-slate/82">
                {workshop.site.subtitle}
              </p>
              <p className="mt-5 max-w-[42rem] text-[0.95rem] leading-7 text-slate/78">
                {workshop.site.description}
              </p>
            </div>

            <aside className="flyer-dates rounded-[30px] border border-teal/18 bg-[linear-gradient(180deg,rgba(15,118,110,0.07),rgba(255,255,255,0.97))] p-6 shadow-panel">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal">
                Important Dates
              </p>
              <div className="muted-rule mt-4" />
              <ul className="mt-5 space-y-3.5">
                {importantDates.map((item, index) => (
                  <li
                    key={item}
                    className={`rounded-[20px] border px-4 py-3.5 ${
                      index === 0
                        ? "border-teal/20 bg-white shadow-[0_6px_18px_rgba(15,118,110,0.08)]"
                        : "border-line/65 bg-white/75"
                    }`}
                  >
                    <p className={`${index === 0 ? "text-[1rem] font-semibold" : "text-[0.95rem] font-medium"} leading-6 text-ink`}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          </header>

          <section className="flyer-submission mt-6 rounded-[28px] border border-teal/20 bg-[linear-gradient(135deg,rgba(15,118,110,0.08),rgba(255,255,255,0.94))] px-5 py-5 shadow-panel">
            <p className="text-[1rem] font-semibold leading-7 text-ink">
              We invite submissions on modern hypothesis testing in machine learning.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex flex-wrap gap-3 text-[0.88rem] text-slate/82">
                <span className="rounded-full border border-line bg-white/85 px-3.5 py-2">
                  Short papers: 4 pages
                </span>
                <span className="rounded-full border border-line bg-white/85 px-3.5 py-2">
                  Long papers: 8 pages
                </span>
                <span className="rounded-full border border-line bg-white/85 px-3.5 py-2">
                  Posters + selected contributed talks
                </span>
              </div>
              {workshop.links.openReview.startsWith("http") ? (
                <a
                  href={workshop.links.openReview}
                  className="flyer-openreview inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {workshop.sections.callForPapers.submitButtonLabel}
                </a>
              ) : (
                <div className="flyer-openreview inline-flex items-center justify-center rounded-full border border-ink/15 bg-ink px-5 py-2.5 text-sm font-semibold text-white">
                  Submit via OpenReview
                  <span className="ml-2 text-white/70">Link forthcoming</span>
                </div>
              )}
            </div>
          </section>

          <section className="flyer-keynotes mt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-[11px]">Confirmed Keynote Speakers</p>
                <h3 className="mt-3 font-serif text-[2rem] leading-tight tracking-[-0.03em] text-ink">
                  Confirmed Keynote Speakers
                </h3>
              </div>
            </div>
            <div className={`flyer-keynote-grid mt-5 grid gap-4 ${isSocial ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2"}`}>
              {keynoteSpeakers.map((speaker) => (
                <KeynoteCard key={speaker.name} speaker={speaker} compact={isSocial} />
              ))}
            </div>
          </section>

          <section className={`flyer-topic-snapshot mt-6 grid gap-5 ${isSocial ? "grid-cols-1" : "lg:grid-cols-[1.08fr_0.92fr]"}`}>
            <div className="flyer-topic-grid grid gap-5 md:grid-cols-2">
              {topics.map((topic) => (
                <TopicCard key={topic.title} title={topic.title} items={topic.items} />
              ))}
            </div>

            <div className="flyer-snapshot rounded-[28px] border border-line/85 bg-white/92 p-5 shadow-panel">
              <p className="eyebrow text-[11px]">Workshop Information</p>
              <div className="muted-rule mt-4" />
              <p className="mt-5 text-[0.95rem] leading-7 text-slate/80">
                A workshop bringing together researchers developing modern testing
                methodology and applying it across machine learning, including
                robustness, distribution shift, security, medicine, and LLM
                evaluation.
              </p>
              <dl className="mt-6 space-y-4 text-[0.9rem] leading-6 text-slate/82">
                <div className="rounded-[20px] border border-line/70 bg-mist/35 px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate/58">
                    Venue
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    The COEX Convention & Exhibition Center, Seoul, South Korea
                  </dd>
                </div>
                <div className="rounded-[20px] border border-line/70 bg-mist/35 px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate/58">
                    Workshop Date
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    July 10 or 11, 2026 (TBA)
                  </dd>
                </div>
                <div className="rounded-[20px] border border-line/70 bg-mist/35 px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate/58">
                    Website
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    testing.ml
                  </dd>
                </div>
                <div className="rounded-[20px] border border-line/70 bg-mist/35 px-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate/58">
                    Contact
                  </dt>
                  <dd className="mt-1 font-medium text-ink">
                    {workshop.site.contactEmail}
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="flyer-organizers mt-7 rounded-[28px] border border-line/85 bg-white/90 p-5 shadow-panel">
            <div className="flex flex-col gap-3 border-b border-line/75 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="mt-2 font-serif text-[1.42rem] leading-tight tracking-[-0.02em] text-ink">
                  Organizing Team (alphabetical order)
                </h3>
              </div>
            </div>
            <div className={`flyer-organizer-grid mt-5 grid gap-x-4 gap-y-5 ${isSocial ? "grid-cols-3" : "grid-cols-3 md:grid-cols-6"}`}>
              {organizers.map((organizer) => (
                <OrganizerCard
                  key={organizer.name}
                  organizer={organizer}
                  compact={isSocial}
                />
              ))}
            </div>
          </section>

          <footer className="flyer-footer mt-6 border-t border-line/80 pt-5">
            <div className="grid grid-cols-[96px_1fr_auto] items-center gap-4 rounded-[24px] border border-line/80 bg-white/90 p-4 shadow-panel">
              <a
                href={websiteUrl}
                aria-label="Workshop website QR code"
                className="self-start rounded-[18px] border border-line/70 bg-white p-1.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=176x176&data=${encodeURIComponent(websiteUrl)}`}
                  alt="QR code linking to the workshop website"
                  className="h-[92px] w-[92px] rounded-[14px] bg-white"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                    Visit the Website
                  </p>
                  <p className="mt-2 text-[0.84rem] leading-6 text-slate/80">
                    Scan for the full workshop page, updates, and submission details.
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-5 text-slate/68">
                    testing.ml
                  </p>
                </div>
              </div>
              <div className="justify-self-end">
                <div className="mt-3">
                  {workshop.links.openReview.startsWith("http") ? (
                    <a
                      href={workshop.links.openReview}
                      className="flyer-openreview inline-flex rounded-full border border-ink bg-ink px-4 py-2 text-sm font-semibold text-white"
                    >
                      Submit via OpenReview
                    </a>
                  ) : (
                    <div className="flyer-openreview inline-flex rounded-full border border-line bg-mist/50 px-4 py-2 text-sm font-semibold text-ink">
                      Submit via OpenReview
                    </div>
                  )}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
