"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { restaurantInfo } from "../data/restaurant";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[90vh] md:h-[75vh] lg:h-[90vh] min-h-[600px] w-full flex items-center pt-28 md:pt-16 lg:pt-64">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
          alt="Cafe on Haig atmosphere"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16 text-brand-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-sm md:text-xs font-semibold tracking-widest uppercase mb-4 text-brand-caramel">
            Your Local Brunch Destination
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
            Good food.<br />
            Great coffee.<br />
            Good mornings.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed">
            Your neighbourhood cafe serving fresh breakfast, brunch, great coffee and local favourites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 lg:mb-12">
            <button
              onClick={() => scrollTo("menu")}
              className="px-8 py-4 bg-brand-olive hover:bg-brand-dark transition-colors duration-300 text-white font-medium tracking-wide"
            >
              View Our Menu
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 bg-brand-white hover:bg-gray-100 transition-colors duration-300 text-brand-dark font-medium tracking-wide"
            >
              Get Directions
            </button>
          </div>

          <div className="flex items-center gap-3 mt-16 md:mt-4 lg:mt-12">
            <div className="flex text-yellow-400">
              {/* 5 Stars */}
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          <span className="text-sm font-medium text-gray-200">
              {restaurantInfo.rating} Google Rating · Loved by locals
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
