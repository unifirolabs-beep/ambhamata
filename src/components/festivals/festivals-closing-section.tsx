"use client";

import React from "react";
import { motion } from "motion/react";
import { useContentTranslation } from "@/messages/content-translations";
import { cn } from "@/lib/utils";

export function FestivalsClosingSection() {
  const { t, isKannada } = useContentTranslation();
  const closing = t.festivalsPage.closing;

  return (
    <section className="relative w-full pt-8 pb-20 sm:pt-10 sm:pb-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        
        {/* Sacred Sri (श्री) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-3.5 select-none"
          aria-hidden="true"
        >
          <span className="font-sans text-3xl sm:text-4xl font-black text-[#D99A00]/45 leading-none tracking-wide">
            श्री
          </span>
        </motion.div>

        {/* Heading: The Spirit of Celebration */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-sans italic font-bold text-[#8B1538] leading-tight mb-4",
            isKannada && "font-kannada not-italic leading-tight font-extrabold"
          )}
        >
          {closing.heading}
        </motion.h2>

        {/* Lead Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            "text-sm sm:text-base md:text-[16.5px] text-[#4A4A4A] leading-relaxed max-w-3xl mx-auto mb-6",
            isKannada && "font-kannada text-base"
          )}
        >
          {closing.description}
        </motion.p>

        {/* Closing Blessing Message */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="my-5"
        >
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl font-sans italic font-bold text-[#8B1538] text-center",
              isKannada && "font-kannada not-italic text-lg"
            )}
          >
            {closing.blessing}
          </p>
        </motion.div>

        {/* Sacred Danda Chants: ॥ Jai Sri Ambamata ॥ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3"
        >
          <span
            className={cn(
              "inline-block font-sans font-black text-lg sm:text-xl md:text-2xl text-[#8B1538] tracking-widest select-none",
              isKannada && "font-kannada"
            )}
          >
            {closing.mantra}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

