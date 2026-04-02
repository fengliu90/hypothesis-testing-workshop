import type { Organizer } from "@/data/workshop";

type OrganizerCardProps = {
  organizer: Organizer;
};

export function OrganizerCard({ organizer }: OrganizerCardProps) {
  const initials = organizer.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="panel h-full bg-[linear-gradient(180deg,rgba(239,246,246,0.34),rgba(255,255,255,0.96))] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow">Organizer</p>
        {organizer.headshot ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={organizer.headshot}
              alt={`${organizer.name} headshot`}
              className="h-24 w-20 rounded-[20px] border border-line bg-mist/30 object-cover object-top shadow-sm sm:h-28 sm:w-24"
            />
          </>
        ) : (
          <div className="flex h-24 w-20 items-center justify-center rounded-[20px] border border-line bg-mist/50 text-sm font-semibold text-teal shadow-sm sm:h-28 sm:w-24">
            {initials}
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-[1.45rem] leading-tight tracking-[-0.02em]">
        {organizer.name}
      </h3>
      <p className="mt-3 text-sm font-medium text-teal">{organizer.role}</p>
      <p className="mt-4 text-sm leading-6 text-slate/78">{organizer.affiliation}</p>
      <p className="mt-4 text-sm leading-7 text-slate/78">{organizer.bio}</p>
    </article>
  );
}
