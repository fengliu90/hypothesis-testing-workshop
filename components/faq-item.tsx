"use client";

import { useState } from "react";
import type { FAQ } from "@/data/workshop";

type FAQItemProps = {
  item: FAQ;
};

export function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[24px] border border-line/90 bg-white px-5 py-4 shadow-panel sm:px-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold leading-7 text-ink">
          {item.question}
        </span>
        <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-line text-sm text-teal">
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-slate/80">
          {item.answer}
        </p>
      ) : null}
    </div>
  );
}
