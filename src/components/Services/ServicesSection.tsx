"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
    >
      <div 
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl border border-white/20 z-20 pointer-events-none"
      />
      
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent z-10" />
      
      <div 
        style={{
          transform: "translateZ(50px)",
        }}
        className="absolute bottom-8 left-8 right-8 z-20"
      >
        <h4 className="text-2xl md:text-3xl text-brand-bg mb-2">{title}</h4>
        <p className="text-brand-bg/70 text-sm font-sans">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Yoga Teacher Portraits",
      description: "Professional photography for yoga instructors to elevate their personal brand.",
      image: "/images/service-1.png",
    },
    {
      title: "Yoga Retreat Photography",
      description: "Capturing the mindful experience and spiritual energy of yoga retreats worldwide.",
      image: "/images/service-2.png",
    },
    {
      title: "Wellness Brand Photography",
      description: "Premium imagery for wellness brands seeking to tell an authentic story.",
      image: "/images/service-3.png",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-24 bg-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl mb-8">Elevating Yoga Through Art</h2>
          <p className="max-w-xl text-charcoal/60 font-sans leading-relaxed">
            We specialize in capturing the essence of yoga — its movement, its stillness, and the energy that flows through every practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-[1000px]">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
