"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-6 md:py-8 lg:py-20 overflow-hidden bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md md:max-w-2xl mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000"
                alt="Cafe exterior and lifestyle"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-olive -z-10 rounded-sm" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-caramel mb-6">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-8">
              More than just a café. A community.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Cafe on Haig is Georges Hall’s favourite neighbourhood café  a warm, family-friendly spot known for specialty coffee, inventive brunch and all-day breakfast. From our signature Iced Strawberry Matcha and Mediterranean Breakfast Boards to handcrafted espresso and loaded bagels, everything is made fresh and served with genuine hospitality.
            </p>

            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-brand-dark font-semibold tracking-wide hover:text-brand-olive transition-colors group"
            >
              <span className="border-b border-brand-dark group-hover:border-brand-olive transition-colors pb-1">
                Discover Our Menu
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
