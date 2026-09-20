"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, ShoppingBag, Heart } from "lucide-react";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "All-Day Breakfast",
    subtitle: "Freshly made every day",
  },
  {
    icon: Coffee,
    title: "Specialty Coffee",
    subtitle: "Locally roasted beans",
  },
  {
    icon: ShoppingBag,
    title: "Takeaway & Dine-In",
    subtitle: "Eat in or grab & go",
  },
  {
    icon: Heart,
    title: "Local Favourite",
    subtitle: "Georges Hall's own café",
  },
];

export default function Highlights() {
  return (
    <section className="bg-brand-dark text-brand-white pt-16 pb-8 md:py-14 lg:pt-56">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group px-4"
            >
              <div className="mb-4 text-brand-caramel group-hover:scale-110 transition-transform duration-300">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg tracking-wide mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
