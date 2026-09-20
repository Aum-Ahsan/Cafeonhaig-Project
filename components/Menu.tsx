"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { featuredMenu, fullMenu } from "../data/menu";

export default function MenuSection() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const displayedMenu = showFullMenu ? fullMenu : featuredMenu;

  return (
    <section id="menu" className="pt-10 pb-10 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-caramel mb-4">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
            Local favourites.
          </h2>
          <p className="text-gray-500 font-medium tracking-wide">
            Freshly prepared. Made to order.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedMenu.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-brand-dark font-medium">
                    {item.name}
                  </h3>
                  <span className="text-lg font-semibold text-brand-olive">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowFullMenu(!showFullMenu)}
            className="inline-flex items-center gap-2 text-brand-dark font-semibold tracking-wide hover:text-brand-caramel transition-colors group"
          >
            <span>{showFullMenu ? "Show Less ↑" : "View Full Menu ↓"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
