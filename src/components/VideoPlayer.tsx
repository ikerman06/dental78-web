"use client";

export default function VideoPlayer() {
  return (
    <div className="relative w-full h-full">
      {/* Technical frame */}
      <div className="absolute inset-0 border border-brand/20 z-10 pointer-events-none">
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand/60" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand/60" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand/60" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand/60" />
      </div>

      <iframe
        src="https://player.vimeo.com/video/1199237496?badge=0&autopause=0&autoplay=1&muted=1&loop=1&controls=0&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title="Dental 78 — Laboratorio"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent pointer-events-none z-10" />
    </div>
  );
}
