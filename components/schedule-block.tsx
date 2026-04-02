type ScheduleEntry = {
  time: string;
  title: string;
};

type ScheduleBlockProps = {
  item: ScheduleEntry;
};

export function ScheduleBlock({ item }: ScheduleBlockProps) {
  return (
    <div className="grid gap-3 border-t border-line/80 py-4 first:border-t-0 first:pt-0 md:grid-cols-[156px_1fr] md:gap-6">
      <div className="inline-flex w-fit rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-[13px] font-semibold tracking-[0.08em] text-teal md:w-auto md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:pt-0.5">
        {item.time}
      </div>
      <div>
        <h3 className="text-[1.02rem] font-semibold leading-6 text-ink">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
