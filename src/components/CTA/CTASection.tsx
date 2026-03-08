"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 px-6 md:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl mb-8 leading-tight">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-lg md:text-xl text-charcoal/60 font-sans mb-12 max-w-2xl mx-auto">
            Looking to capture your yoga journey, retreat, or brand? Let&apos;s collaborate to transform your vision into timeless imagery.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-charcoal text-brand-bg text-sm uppercase tracking-[0.2em] hover:bg-sage transition-all shadow-xl"
          >
            Book a Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
