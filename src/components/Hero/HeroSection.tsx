"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-brand-bg pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="z-10"
        >

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-charcoal leading-[1] mb-8 font-sans uppercase tracking-tighter">
            Capture The <br /> 
            <span className="text-sage">Stillness</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal/60 max-w-lg mb-12 leading-relaxed font-sans">
            Professional photography that captures the raw presence and soul of 
            your yoga practice. We specialize in creating timeless, cinematic 
            storytelling for instructors and wellness brands.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-sage text-brand-bg text-sm uppercase tracking-widest font-bold rounded hover:bg-charcoal transition-all shadow-xl shadow-sage/10"
            >
              Book A Session
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-4 text-charcoal text-sm uppercase tracking-widest font-bold group"
            >
              Contact Us
              <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-brand-bg transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[600px] lg:h-[850px] w-full"
        >
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg z-10" />
          <Image
            src="/images/hero.png"
            alt="Yogaperson Practice"
            fill
            priority
            quality={100}
            unoptimized
            className="object-contain object-bottom select-none"
          />
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-sand/10 rounded-l-full blur-3xl -z-0" />
    </section>
  );
}
