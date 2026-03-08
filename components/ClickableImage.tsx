"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  /** Set true when the parent is a relative container with a fixed height */
  fill?: boolean;
  /** Pass true for the above-fold hero image on each page */
  priority?: boolean;
  /** Optional inline style applied to the image (e.g. objectPosition) */
  style?: React.CSSProperties;
}

export function ClickableImage({ src, alt, className, caption, fill, priority, style }: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--marsh)] ${fill ? "absolute inset-0 w-full h-full" : "relative block w-full"}`}
        aria-label={`Enlarge: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          {...(!fill && { width: 800, height: 600 })}
          sizes="(max-width: 768px) 100vw, 768px"
          className={className ?? "object-cover"}
          style={style}
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-end justify-end p-2 pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-lg flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5 3a2 2 0 00-2 2v2a1 1 0 01-2 0V5a4 4 0 014-4h2a1 1 0 010 2H5zM15 3a1 1 0 010-2h2a4 4 0 014 4v2a1 1 0 01-2 0V5a2 2 0 00-2-2h-2zM3 13a1 1 0 012 0v2a2 2 0 002 2h2a1 1 0 010 2H5a4 4 0 01-4-4v-2zM15 17a1 1 0 010 2h2a4 4 0 004-4v-2a1 1 0 01-2 0v2a2 2 0 01-2 2h-2z" />
            </svg>
            Enlarge
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div
            className="relative flex flex-col items-center max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition text-sm flex items-center gap-1.5"
              aria-label="Close"
            >
              Press Esc or click outside to close
              <span className="bg-white/10 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/20 transition ml-1">✕</span>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />

            {(caption ?? alt) && (
              <p className="text-xs text-white/50 mt-3 text-center max-w-2xl leading-relaxed">
                {caption ?? alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
