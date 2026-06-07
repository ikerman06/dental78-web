"use client";
import { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
}

export default function VideoPlayer({ src, poster, autoPlay = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(autoPlay);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-full group">
      {/* Technical frame */}
      <div className="absolute inset-0 border border-brand/20 z-10 pointer-events-none">
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand/60" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand/60" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand/60" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand/60" />
      </div>

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-cream/80 hover:text-cream text-xs font-dm tracking-wider transition-colors"
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="2" y="1" width="3" height="10" />
              <rect x="7" y="1" width="3" height="10" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1 L10 6 L2 11 Z" />
            </svg>
          )}
          {playing ? "PAUSA" : "REPRODUCIR"}
        </button>

        <button
          onClick={toggleMute}
          className="flex items-center gap-2 text-cream/80 hover:text-cream text-xs font-dm tracking-wider transition-colors"
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5H5L9 2V12L5 9H2V5Z" />
              <line x1="11" y1="5" x2="13" y2="9" />
              <line x1="13" y1="5" x2="11" y2="9" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 5H5L9 2V12L5 9H2V5Z" />
              <path d="M11 4.5C12.2 5.2 13 6.5 13 7C13 7.5 12.2 8.8 11 9.5" />
            </svg>
          )}
          {muted ? "SIN SONIDO" : "CON SONIDO"}
        </button>
      </div>
    </div>
  );
}
