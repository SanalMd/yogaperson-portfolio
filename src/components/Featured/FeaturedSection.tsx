"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeaturedMomentProps {
  title: string;
  image: string;
}

function FeaturedMoment({ title, image }: FeaturedMomentProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative h-[80vh] w-full overflow-hidden group mb-12"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-700" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-7xl lg:text-8xl text-brand-bg font-serif mb-8"
        >
          {title}
        </motion.h3>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-8 py-3 bg-brand-bg text-charcoal text-sm uppercase tracking-widest hover:bg-sage transition-colors"
        >
          View Story
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function FeaturedSection() {
  const moments = [
    { title: "Sunrise Yoga Flow", image: "/images/hero.png" },
    { title: "Mountain Meditation", image: "/images/story-1.png" },
    { title: "Ocean Yoga Retreat", image: "/images/story-2.png" },
  ];

  return (
    <section id="journal" className="py-24 px-6 md:px-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Selected Works</span>
          <h2 className="text-5xl md:text-7xl">Featured Moments</h2>
        </div>
        
        {moments.map((moment, idx) => (
          <FeaturedMoment key={idx} {...moment} />
        ))}
      </div>
    </section>
  );
}
