"use client";

import { motion } from "framer-motion";
import { restaurantInfo } from "../data/restaurant";
import { MapPin, Phone, Clock } from "lucide-react";

const today = new Date().toLocaleDateString("en-AU", { weekday: "long" });

export default function Location() {
  return (
    <section id="contact" className="py-10 md:py-24 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand-caramel mb-4">
            Find Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
            Visit Us.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[420px] relative rounded-sm overflow-hidden shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5218295769887!2d150.9774831!3d-33.8960983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bdaecfa5c575%3A0x6c38cd00fc4d7b02!2sCafe%20On%20Haig!5e0!3m2!1sen!2sau!4v1726629000000!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Cafe on Haig location map"
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center gap-10"
          >
            {/* Address */}
            <div className="flex gap-4">
              <MapPin size={24} className="text-brand-caramel shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-caramel mb-2">
                  Address
                </h3>
                <p className="text-lg font-medium text-brand-dark">{restaurantInfo.name}</p>
                <p className="text-gray-600">{restaurantInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone size={24} className="text-brand-caramel shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-caramel mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
                  className="text-lg font-medium text-brand-dark hover:text-brand-olive transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={24} className="text-brand-caramel shrink-0 mt-1" strokeWidth={1.5} />
              <div className="flex-1">
                <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-caramel mb-3">
                  Opening Hours
                </h3>
                <ul className="space-y-2">
                  {restaurantInfo.openingHours.map((slot, index) => {
                    const isToday = slot.day === today;
                    return (
                      <li
                        key={index}
                        className={`flex justify-between border-b border-gray-200 pb-2 ${
                          isToday ? "text-brand-olive font-semibold" : ""
                        }`}
                      >
                        <span className={isToday ? "text-brand-olive" : "text-gray-600"}>
                          {slot.day}
                          {isToday && (
                            <span className="ml-2 text-xs bg-brand-olive text-white px-2 py-0.5 rounded-full">
                              Today
                            </span>
                          )}
                        </span>
                        <span className={isToday ? "text-brand-olive" : "text-brand-dark"}>
                          {slot.hours}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-3 bg-brand-olive text-white font-medium hover:bg-brand-dark transition-colors"
              >
                Get Directions
              </a>
              <a
                href={`tel:${restaurantInfo.phone.replace(/\s/g, "")}`}
                className="inline-block text-center px-6 py-3 border border-brand-dark text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-colors"
              >
                Call {restaurantInfo.phone}
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
