"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instaImages = [
  "/images/IMG_0040.jpeg",
  "/images/IMG_0041.jpeg",
  "/images/IMG_0042.jpeg",
  "/images/IMG_0043.jpeg",
  "/images/IMG_0044.jpeg",
  "/images/IMG_0045.jpeg",
  "/images/IMG_0046.jpeg",
  "/images/IMG_0048.jpeg",
  "/images/IMG_0049.jpeg",
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
                unoptimized
                className="object-cover transition-opacity"
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
                unoptimized
                className="object-cover transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
