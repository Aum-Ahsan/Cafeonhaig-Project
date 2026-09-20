"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageBanner() {
  return (
    <section className="relative h-[45vh] md:h-[60vh] min-h-[280px] md:min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Cafe atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-brand-white px-4"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
          MORE THAN JUST COFFEE.
        </h2>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-gray-200">
          A place to eat, meet and relax.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-10 py-4 bg-transparent border border-white text-white font-medium tracking-wide hover:bg-white hover:text-brand-dark transition-colors duration-300"
        >
          Visit Us
        </a>
      </motion.div>
    </section>
  );
}
