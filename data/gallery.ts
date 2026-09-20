export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  type: "large" | "tall" | "small" | "square";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    alt: "Cafe interior atmosphere",
    type: "large",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    alt: "Barista pouring latte art",
    type: "tall",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
    alt: "Delicious brunch plate",
    type: "square",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800",
    alt: "Breakfast spread on table",
    type: "small",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
    alt: "Cafe seating area",
    type: "large",
  }
];
