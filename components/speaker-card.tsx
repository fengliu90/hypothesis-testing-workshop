import type { Speaker } from "@/data/workshop";

type SpeakerCardProps = {
  speaker: Speaker;
  label: string;
};

export function SpeakerCard({ speaker, label }: SpeakerCardProps) {
  const initials = speaker.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="panel group h-full p-7 sm:p-8">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{label}</p>
            </div>
            {speaker.headshot ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={speaker.headshot}
                  alt={`${speaker.name} headshot`}
                  className="h-24 w-20 rounded-[20px] border border-line bg-mist/30 object-cover object-top shadow-sm sm:h-28 sm:w-24"
                />
              </>
            ) : (
              <div className="flex h-24 w-20 items-center justify-center rounded-[20px] border border-line bg-mist/50 text-sm font-semibold text-teal shadow-sm sm:h-28 sm:w-24">
                {initials}
              </div>
            )}
          </div>
          <h3 className="mt-5 font-serif text-[1.75rem] leading-tight tracking-[-0.02em]">
            {speaker.name}
          </h3>
          <p className="mt-3 text-sm font-medium leading-6 text-slate/78">
            {speaker.affiliation}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="muted-rule" />
          <span className="rounded-full border border-line bg-mist/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate/70">
            {speaker.topic}
          </span>
        </div>
      </div>
    </article>
  );
}
