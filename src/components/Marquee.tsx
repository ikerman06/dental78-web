"use client";
import { MARQUEE_ITEMS } from "@/lib/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-white/5 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-syne text-sm font-500 tracking-widest text-brand uppercase px-8">
              {item}
            </span>
            <span className="text-brand/30 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
