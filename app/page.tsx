import { FAQItem } from "@/components/faq-item";
import { Navigation } from "@/components/navigation";
import { OrganizerCard } from "@/components/organizer-card";
import { ScheduleBlock } from "@/components/schedule-block";
import { SectionTitle } from "@/components/section-title";
import { SpeakerCard } from "@/components/speaker-card";
import { workshop } from "@/data/workshop";

export default function Home() {
  const { site, navigation, links, logistics, hero, sections } = workshop;

  return (
    <main id="top">
      <Navigation
        items={navigation.items}
        homeLabel={site.shortTitle}
        submitLabel={navigation.submitLabel}
      />

      <section className="section-shell pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24">
        <div className="section-frame stat-grid relative overflow-hidden px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.08),transparent_55%)] lg:block" />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_320px] lg:items-end">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <div className="muted-rule mt-5" />
              <h1 className="mt-6 max-w-4xl font-serif text-[2.9rem] leading-[1.04] tracking-[-0.045em] sm:text-[4rem] lg:text-[4.5rem]">
                {site.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate/82 sm:text-[1.4rem] sm:leading-9">
                {site.subtitle}
              </p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate/76">
                {site.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5 text-sm text-slate/78">
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white/75 px-3.5 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={hero.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-teal"
                >
                  {hero.primaryCtaLabel}
                </a>
                <a
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal"
                >
                  {hero.secondaryCtaLabel}
                </a>
              </div>
            </div>

            <aside className="panel relative overflow-hidden p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-teal/10 via-transparent to-ink/5" />
              <div className="relative">
                <p className="eyebrow">{hero.glanceLabel}</p>
                <div className="muted-rule mt-4" />
                <dl className="mt-6 space-y-6 text-sm">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate/55">
                      Date
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-6 text-ink">
                      {logistics.workshopDate}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate/55">
                      Venue
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-6 text-ink">
                      {logistics.venue}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate/55">
                      Submission
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={links.submission}
                        className="font-semibold text-teal underline decoration-line underline-offset-4 hover:text-ink"
                      >
                        {hero.submissionLabel}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="why" className="section-shell py-18 sm:py-24 lg:py-28">
        <SectionTitle
          eyebrow={sections.why.eyebrow}
          title={sections.why.title}
          description={sections.why.description}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {sections.why.items.map((item) => (
            <div key={item} className="panel p-7 sm:p-8">
              <p className="text-[0.98rem] leading-8 text-slate/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="topics" className="border-y border-line/70 bg-mist/30 py-18 sm:py-24 lg:py-28">
        <div className="section-shell">
          <SectionTitle
            eyebrow={sections.topics.eyebrow}
            title={sections.topics.title}
            description={sections.topics.description}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {sections.topics.groups.map((group) => (
              <div key={group.title} className="panel flex h-full flex-col p-7 sm:p-8">
                <h3 className="max-w-sm font-serif text-[1.9rem] leading-tight tracking-[-0.025em]">
                  {group.title}
                </h3>
                <div className="muted-rule mt-5" />
                <ul className="mt-7 grid gap-4">
                  {group.items.map((topic, index) => (
                    <li
                      key={topic}
                      className="grid grid-cols-[34px_1fr] items-start gap-3 rounded-2xl border border-line/70 bg-mist/20 px-4 py-3 text-sm text-slate/82"
                    >
                      <span className="font-semibold text-teal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="section-shell py-18 sm:py-24 lg:py-28">
        <SectionTitle
          eyebrow={sections.speakers.eyebrow}
          title={sections.speakers.title}
          description={sections.speakers.description}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.speakers.items.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              speaker={speaker}
              label={sections.speakers.label}
            />
          ))}
        </div>
      </section>

      <section id="call" className="section-shell py-18 sm:py-24 lg:py-28">
        <div className="panel p-8 sm:p-10 lg:p-12">
          <SectionTitle
            eyebrow={sections.callForPapers.eyebrow}
            title={sections.callForPapers.title}
            description={sections.callForPapers.description}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-8">
              <div>
                <h3 className="font-serif text-[1.8rem] tracking-[-0.02em]">
                  {sections.callForPapers.topicsTitle}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-slate/82">
                  {sections.callForPapers.topics.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-[1.8rem] tracking-[-0.02em]">
                  {sections.callForPapers.submissionTypesTitle}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-3 text-sm text-slate/85">
                  {sections.callForPapers.submissionTypes.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-mist/45 px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-[26px] border border-line bg-mist/45 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/60">
                {sections.callForPapers.detailsTitle}
              </p>
              <ul className="mt-5 space-y-4 text-sm text-slate/80">
                {sections.callForPapers.deadlines.map((item) => (
                  <li key={item} className="border-t border-line/70 pt-4 first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-line/70 bg-white/65 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate/60">
                  {sections.callForPapers.noteLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate/80">
                  {sections.callForPapers.note}
                </p>
              </div>
              <a
                href={links.openReview}
                className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal"
              >
                {sections.callForPapers.submitButtonLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="border-y border-line/70 bg-mist/30 py-18 sm:py-24 lg:py-28">
        <div className="section-shell">
          <SectionTitle
            eyebrow={sections.schedule.eyebrow}
            title={sections.schedule.title}
            description={sections.schedule.description}
          />
          <div className="mt-14 grid gap-6">
            {sections.schedule.sessions.map((session) => (
              <div key={session.title} className="panel p-6 sm:p-8">
                <div className="flex flex-col gap-3 border-b border-line/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-serif text-[1.85rem] leading-tight tracking-[-0.025em]">
                    {session.title}
                  </h3>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-slate/55">
                    {session.items.length} {sections.schedule.sessionCountLabel}
                  </span>
                </div>
                <div className="mt-6">
                  {session.items.map((item) => (
                    <ScheduleBlock key={`${item.time}-${item.title}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="organizers" className="section-shell py-18 sm:py-24 lg:py-28">
        <SectionTitle
          eyebrow={sections.organizers.eyebrow}
          title={sections.organizers.title}
          description={sections.organizers.description}
        />
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate/80">
          {sections.organizers.reviewerRecruitment.text}{" "}
          <a
            href={sections.organizers.reviewerRecruitment.href}
            className="font-semibold text-teal underline decoration-line underline-offset-4 hover:text-ink"
          >
            {sections.organizers.reviewerRecruitment.linkLabel}
          </a>
          .
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.organizers.items.map((organizer) => (
            <OrganizerCard key={organizer.name} organizer={organizer} />
          ))}
        </div>
      </section>

      <section id="attend" className="section-shell py-18 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow={sections.attend.eyebrow}
              title={sections.attend.title}
              description={sections.attend.description}
            />
            <div className="mt-10 space-y-5">
              {sections.attend.details.map((detail) => (
                <p key={detail} className="max-w-2xl text-[0.98rem] leading-8 text-slate/80">
                  {detail}
                </p>
              ))}
            </div>
          </div>
          <div className="panel p-6 sm:p-8">
            <h3 className="font-serif text-[1.8rem] tracking-[-0.02em]">
              {sections.attend.cardTitle}
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-slate/82">
              {[
                logistics.venue,
                logistics.workshopDate,
                logistics.registration,
                logistics.contact,
              ].map((item) => (
                <li key={item} className="border-t border-line/80 pt-4 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-line/80 py-18 sm:py-24 lg:py-28">
        <div className="section-shell">
          <SectionTitle
            eyebrow={sections.faq.eyebrow}
            title={sections.faq.title}
            description={sections.faq.description}
          />
          <div className="mt-14 grid gap-4">
            {sections.faq.items.map((item) => (
              <FAQItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white py-12">
        <div className="section-shell flex flex-col gap-5 text-sm text-slate/75 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-xl tracking-[-0.02em] text-ink">{site.title}</p>
            <p className="mt-2">
              {sections.footer.contactLabel}: {site.contactEmail}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p>{logistics.workshopDate}</p>
            <p>{logistics.venue}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
