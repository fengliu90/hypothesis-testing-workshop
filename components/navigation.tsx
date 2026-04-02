import type { NavItem } from "@/data/workshop";

type NavigationProps = {
  items: NavItem[];
  homeLabel: string;
  submitLabel: string;
};

export function Navigation({ items, homeLabel, submitLabel }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
          <a href="#top" className="font-serif text-[1.15rem] tracking-[-0.02em] text-ink">
            {homeLabel}
          </a>
          <nav
            aria-label="Section navigation"
            className="hidden min-w-0 flex-1 overflow-x-auto md:block"
          >
            <ul className="flex min-w-max items-center justify-center gap-7 text-[0.95rem] text-slate/75">
              {items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#call"
            className="rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink hover:border-teal hover:text-teal"
          >
            {submitLabel}
          </a>
        </div>
        <nav
          aria-label="Mobile section navigation"
          className="-mx-1 overflow-x-auto pb-3 md:hidden"
        >
          <ul className="flex min-w-max snap-x snap-mandatory items-center gap-2 px-1 text-sm text-slate/80">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block snap-start rounded-full border border-line bg-white px-3 py-1.5 hover:border-teal hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
