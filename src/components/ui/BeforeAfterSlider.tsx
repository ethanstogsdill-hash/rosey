"use client";

import { useRef, useCallback, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(5, Math.min(95, p));
    setPercent(p);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSlider(e.clientX);
    const onMove = (ev: MouseEvent) => {
      if (isDragging.current) updateSlider(ev.clientX);
    };
    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updateSlider(e.touches[0].clientX);
    const onMove = (ev: TouchEvent) => {
      if (isDragging.current) updateSlider(ev.touches[0].clientX);
    };
    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
  };

  return (
    <div className="rounded-[12px] overflow-hidden border border-[rgba(255,255,255,0.05)]">
      <div
        ref={sliderRef}
        className="relative aspect-[3/2] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After (background) */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={afterSrc}
            alt={afterAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-3 right-3 px-3 py-1 bg-[rgba(11,11,11,0.7)] backdrop-blur-sm rounded-full text-[0.7rem] font-semibold tracking-wider uppercase text-foreground z-[1]">
            After
          </span>
        </div>
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-3 left-3 px-3 py-1 bg-[rgba(11,11,11,0.7)] backdrop-blur-sm rounded-full text-[0.7rem] font-semibold tracking-wider uppercase text-foreground z-[5]">
            Before
          </span>
        </div>
        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex flex-col items-center justify-center -translate-x-1/2 pointer-events-none"
          style={{ left: `${percent}%` }}
        >
          <div className="flex-1 w-[2px] bg-gold" />
          <div className="w-9 h-9 rounded-full bg-gold text-background flex items-center justify-center text-base font-bold shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            ↔
          </div>
          <div className="flex-1 w-[2px] bg-gold" />
        </div>
      </div>
    </div>
  );
}
