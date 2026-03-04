export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/portfolio/portfolio-1.jpg", alt: "Fade with design lines" },
  { id: 2, src: "/images/portfolio/portfolio-2.jpg", alt: "Clean wave cut with sharp lineup" },
  { id: 3, src: "/images/portfolio/portfolio-3.jpg", alt: "Blue dye fade with design" },
  { id: 4, src: "/images/portfolio/portfolio-4.jpg", alt: "Blue dye fade with clean lineup" },
  { id: 5, src: "/images/portfolio/portfolio-5.jpg", alt: "Classic fade with textured top" },
  { id: 6, src: "/images/portfolio/portfolio-6.jpg", alt: "Kids cut with clean fade" },
  { id: 7, src: "/images/portfolio/portfolio-7.jpg", alt: "Sharp fade" },
];
