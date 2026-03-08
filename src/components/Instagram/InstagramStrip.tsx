"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instaImages = [
  "/images/hero.png",
  "/images/story-1.png",
  "/images/service-1.png",
  "/images/story-2.png",
  "/images/service-2.png",
  "/images/service-3.png",
];

export default function InstagramStrip() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <a href="https://instagram.com/yogaperson" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-6xl lg:text-8xl text-brand-bg/10 font-serif uppercase tracking-widest rotate-[-5deg] hover:text-brand-bg/30 transition-colors pointer-events-auto">
          Follow @yogaperson
        </a>
      </div>
      
      <div className="flex gap-4">
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 min-w-full"
        >
          {[...instaImages, ...instaImages].map((src, idx) => (
            <div key={idx} className="relative w-48 md:w-72 aspect-square flex-shrink-0">
              <Image
                src={src}
                alt={`Insta ${idx}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 min-w-full"
        >
          {[...instaImages, ...instaImages].map((src, idx) => (
            <div key={idx} className="relative w-48 md:w-72 aspect-square flex-shrink-0">
              <Image
                src={src}
                alt={`Insta ${idx}`}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
