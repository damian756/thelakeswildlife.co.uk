"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  photos: Photo[];
}

export function PhotoGallery({ photos }: Props) {
  const [active, setActive] = useState<Photo | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        const i = photos.indexOf(active);
        if (i < photos.length - 1) setActive(photos[i + 1]);
      }
      if (e.key === "ArrowLeft") {
        const i = photos.indexOf(active);
        if (i > 0) setActive(photos[i - 1]);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, photos]);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(photo)}
            className="group relative aspect-square overflow-hidden rounded-xl block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--marsh)]"
            aria-label={`View: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl" />
            <div className="absolute inset-0 flex items-end justify-end p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-black/70 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                ⊕
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <div
            className="relative flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition text-sm flex items-center gap-1.5"
              aria-label="Close"
            >
              Esc to close
              <span className="bg-white/10 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/20 transition ml-1">✕</span>
            </button>

            {/* Prev / Next */}
            {photos.indexOf(active) > 0 && (
              <button
                type="button"
                onClick={() => setActive(photos[photos.indexOf(active) - 1])}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/60 hover:text-white transition hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60"
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}
            {photos.indexOf(active) < photos.length - 1 && (
              <button
                type="button"
                onClick={() => setActive(photos[photos.indexOf(active) + 1])}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/60 hover:text-white transition hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60"
                aria-label="Next photo"
              >
                ›
              </button>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />

            {(active.caption ?? active.alt) && (
              <p className="text-xs text-white/50 mt-3 text-center max-w-2xl leading-relaxed">
                {active.caption ?? active.alt}
              </p>
            )}

            {/* Counter */}
            <p className="text-xs text-white/30 mt-1.5">
              {photos.indexOf(active) + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
