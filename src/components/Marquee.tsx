"use client";
import { MARQUEE_ITEMS } from "@/lib/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-black/8 py-4 bg-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-syne text-sm font-500 tracking-widest text-[#777] uppercase px-8">
              {item}
            </span>
            <span className="text-[#ccc] text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
