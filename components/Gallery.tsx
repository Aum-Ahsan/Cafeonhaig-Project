"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  // We'll map the types to specific Tailwind classes for an asymmetric grid
  const getGridClasses = (type: string) => {
    switch (type) {
      case "large":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
      case "tall":
        return "col-span-1 row-span-2 md:col-span-1 md:row-span-2";
      case "square":
        return "col-span-1 row-span-1 md:col-span-1 md:row-span-1";
      case "small":
      default:
        return "col-span-1 row-span-1 md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="gallery" className="py-10 md:py-24 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-caramel mb-4">
            Atmosphere
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
            Inside the cafe.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${getGridClasses(img.type)}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
