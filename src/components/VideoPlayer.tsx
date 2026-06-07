"use client";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: 1199237496,
      autoplay: true,
      loop: true,
      muted: false,
      controls: false,
      responsive: true,
    });

    player.on("play", () => setPlaying(true));
    player.on("pause", () => setPlaying(false));

    playerRef.current = player;

    return () => {
      player.destroy();
    };
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    if (playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <div className="relative w-full group">
      {/* Video container — responsive keeps the native aspect ratio */}
      <div ref={containerRef} className="w-full" />

      {/* Technical frame — positioned over the iframe */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-brand/70" />
        <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-brand/70" />
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-brand/70" />
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-brand/70" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent pointer-events-none z-10" />

      {/* Play/Pause button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-200 opacity-0 group-hover:opacity-100"
      >
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <rect x="2" y="1" width="3" height="10" rx="0.5" />
            <rect x="7" y="1" width="3" height="10" rx="0.5" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 1 L10 6 L2 11 Z" />
          </svg>
        )}
        <span className="font-dm text-xs tracking-widest uppercase">
          {playing ? "Pausa" : "Reproducir"}
        </span>
      </button>
    </div>
  );
}
