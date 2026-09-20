"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "../data/reviews";
import { restaurantInfo } from "../data/restaurant";

export default function Reviews() {
  return (
    <section id="reviews" className="py-10 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
              Loved by locals.
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-medium text-brand-dark">{restaurantInfo.rating} / 5</span>
              <span className="text-gray-500 hidden sm:inline">Based on Google Reviews</span>
            </div>
          </div>
          <a
            href={restaurantInfo.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-caramel font-semibold hover:text-brand-dark transition-colors"
          >
            Read Google Reviews →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-bg p-8 rounded-sm shadow-sm"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-serif italic mb-6">
                "{review.review}"
              </p>
              <div>
                <p className="font-semibold text-brand-dark">{review.name}</p>
                <p className="text-sm text-gray-500">{review.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
