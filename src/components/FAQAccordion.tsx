import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card-surface overflow-hidden">
            <button
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-foreground">{it.q}</span>
              <HiChevronDown
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                size={22}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
