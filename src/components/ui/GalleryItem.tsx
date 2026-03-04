"use client";

import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";
import { useLightbox } from "@/hooks/useLightbox";

export default function GalleryItem({
  image,
  index,
}: {
  image: GalleryImage;
  index: number;
}) {
  const { open } = useLightbox();

  return (
    <div
      className="relative rounded-[12px] overflow-hidden cursor-pointer aspect-square border border-[rgba(255,255,255,0.05)] transition-colors duration-400 hover:border-[rgba(201,169,110,0.3)] group"
      onClick={() => open(index)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-[rgba(11,11,11,0.5)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <span className="text-3xl text-gold w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center scale-80 group-hover:scale-100 transition-transform duration-400">
          +
        </span>
      </div>
    </div>
  );
}
