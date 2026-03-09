"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface StoryFrameProps {
  image: string;
  title: string;
  text: string;
  reversed?: boolean;
}

function StoryFrame({ image, title, text, reversed }: StoryFrameProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24 md:mb-32 last:mb-0`}>
      <motion.div 
        style={{ y, opacity }}
        className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden"
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h3 className="text-3xl md:text-5xl mb-6 text-charcoal">{title}</h3>
        <p className="text-lg text-charcoal/70 leading-relaxed font-sans mb-8">
          {text}
        </p>
      </motion.div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-brand-bg relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">The Journey</span>
          <h2 className="text-5xl md:text-7xl">The Person Behind the Camera</h2>
        </motion.div>

        <StoryFrame 
          image="/images/IMG_0040.jpeg"
          title="Presence in Motion"
          text="Yoga is more than movement — it is presence, balance, and energy. Through my lens, I capture authentic moments of yoga, telling the story of teachers, retreats, and the spirit of mindful living."
        />

        <div className="my-20 text-center max-w-3xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl italic font-serif text-charcoal/80 mb-6"
          >
            “Yoga is the journey of the self, through the self, to the self.”
          </motion.blockquote>
          <cite className="text-sm uppercase tracking-widest text-sage">— Bhagavad Gita</cite>
        </div>

        <StoryFrame 
          image="/images/IMG_0042.jpeg"
          title="Capturing the Spirit"
          text="Creating timeless images for yoga teachers, retreats, and wellness brands around the world. Every shoot is a collaboration, a meditation on light and form."
          reversed
        />
      </div>
    </section>
  );
}
