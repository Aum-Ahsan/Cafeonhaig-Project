"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-brand-dark text-brand-white py-10 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Hungry yet?</h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
            Good food is waiting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollTo("menu")}
              className="px-10 py-4 bg-brand-olive text-white font-semibold tracking-wide hover:bg-brand-caramel transition-colors duration-300"
            >
              View Menu
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-10 py-4 bg-transparent border border-gray-600 text-white font-semibold tracking-wide hover:border-white transition-colors duration-300"
            >
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
