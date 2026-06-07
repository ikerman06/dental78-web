"use client";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: 1199237496,
      autoplay: true,
      loop: true,
      muted: true, // browsers require muted for autoplay
      controls: false,
      responsive: true,
    });

    player.on("play", () => setPlaying(true));
    player.on("pause", () => setPlaying(false));

    playerRef.current = player;
    return () => { player.destroy(); };
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    playing ? player.pause() : player.play();
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;
    const newMuted = !muted;
    player.setMuted(newMuted);
    setMuted(newMuted);
  };

  return (
    <div className="relative w-full group">
      <div ref={containerRef} className="w-full" />

      {/* Technical frame */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-brand/70" />
        <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-brand/70" />
        <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-brand/70" />
        <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-brand/70" />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent pointer-events-none z-10" />

      {/* Controls — always visible */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-200 opacity-0 group-hover:opacity-100"
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
            {playing ? "Pausa" : "Play"}
          </span>
        </button>

        {/* Mute/Unmute — always visible so user knows they can activate sound */}
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-3 py-1.5 border border-brand/40 hover:border-brand text-cream/80 hover:text-cream transition-all duration-200"
        >
          {muted ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 5H5L9 2V12L5 9H2V5Z" />
                <line x1="11" y1="4" x2="13" y2="10" />
                <line x1="13" y1="4" x2="11" y2="10" />
              </svg>
              <span className="font-dm text-xs tracking-widest uppercase">Activar sonido</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 5H5L9 2V12L5 9H2V5Z" />
                <path d="M11 4.5C12.2 5.2 13 6 13 7C13 8 12.2 8.8 11 9.5" />
              </svg>
              <span className="font-dm text-xs tracking-widest uppercase">Silenciar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
