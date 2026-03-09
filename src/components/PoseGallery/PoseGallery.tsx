"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const poses = [
  { name: "Asana Focus", description: "Presence and balance in every movement.", image: "/images/IMG_0046.jpeg" },
  { name: "Mindful Reach", description: "Finding space and length in the practice.", image: "/images/IMG_0048.jpeg" },
  { name: "Nature Connection", description: "Grounding exercises at the shoreline.", image: "/images/IMG_0049.jpeg" },
  { name: "Fluid Motion", description: "The grace of movement by the water.", image: "/images/IMG_0051.jpeg" },
];

export default function PoseGallery() {
  return (
    <section className="py-24 px-6 md:px-24 bg-sand/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Practice & Form</span>
          <h2 className="text-5xl md:text-7xl">Yoga Poses</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {poses.map((pose, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative bg-brand-bg p-4 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src={pose.image}
                  alt={pose.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/10 transition-colors duration-500" />
              </div>
              <h4 className="text-2xl mb-2 text-charcoal">{pose.name}</h4>
              <p className="text-sm text-charcoal/60 font-sans">{pose.description}</p>
              
              <div className="absolute inset-0 rounded-2xl border-2 border-sage/0 group-hover:border-sage/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
