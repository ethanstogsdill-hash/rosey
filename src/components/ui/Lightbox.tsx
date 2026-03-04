"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { useLightbox } from "@/hooks/useLightbox";

export default function Lightbox() {
  const { isOpen, currentImage, close, prev, next } = useLightbox();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [isOpen, close, prev, next]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-400 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button
        className="absolute top-6 right-6 bg-transparent border-none text-foreground text-3xl cursor-pointer w-12 h-12 flex items-center justify-center hover:text-gold transition-colors z-10"
        onClick={close}
        aria-label="Close lightbox"
      >
        &times;
      </button>
      <button
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-foreground text-3xl cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold-dim hover:text-gold transition-all z-10"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-foreground text-3xl cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold-dim hover:text-gold transition-all z-10"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
      >
        &#8250;
      </button>
      {currentImage && (
        <div
          className={`relative max-w-[90vw] max-h-[85vh] w-[800px] aspect-square transition-transform duration-400 ${
            isOpen ? "scale-100" : "scale-90"
          }`}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain rounded-[12px]"
            sizes="90vw"
            priority
          />
        </div>
      )}
    </div>
  );
}
