"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { galleryImages, type GalleryImage } from "@/data/gallery";

interface LightboxContextValue {
  isOpen: boolean;
  currentImage: GalleryImage | null;
  open: (index: number) => void;
  close: () => void;
  prev: () => void;
  next: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(() => {
    setCurrentIndex(
      (i) => (i - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  }, []);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentImage: isOpen ? galleryImages[currentIndex] : null,
        open,
        close,
        prev,
        next,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
