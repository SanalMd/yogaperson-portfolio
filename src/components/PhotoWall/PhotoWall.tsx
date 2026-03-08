"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const wallImages = [
  "/images/hero.png",
  "/images/story-1.png",
  "/images/service-1.png",
  "/images/story-2.png",
  "/images/service-2.png",
  "/images/service-3.png",
];

export default function PhotoWall() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="py-32 bg-charcoal overflow-hidden">
      <div className="mb-20 px-6 md:px-24">
        <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Immersive Experience</span>
        <h2 className="text-5xl md:text-7xl text-brand-bg">A Journey Through Light</h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-8 whitespace-nowrap">
          {[...wallImages, ...wallImages].map((src, idx) => (
            <div key={idx} className="relative w-[400px] md:w-[600px] aspect-[16/9] flex-shrink-0">
              <Image
                src={src}
                alt={`Wall ${idx}`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap">
          {[...wallImages, ...wallImages].reverse().map((src, idx) => (
            <div key={idx} className="relative w-[400px] md:w-[600px] aspect-[16/9] flex-shrink-0">
              <Image
                src={src}
                alt={`Wall Rev ${idx}`}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
