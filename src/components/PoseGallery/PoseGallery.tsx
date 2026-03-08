"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const poses = [
  { name: "Vrikshasana", description: "Tree Pose - Improving balance and stability through grounding.", image: "/images/hero.png" },
  { name: "Virabhadrasana", description: "Warrior Pose - Building strength and focus in body and mind.", image: "/images/service-1.png" },
  { name: "Adho Mukha Svanasana", description: "Downward-Facing Dog - Lengthening the spine and calming the nervous system.", image: "/images/story-1.png" },
  { name: "Natarajasana", description: "Dancer's Pose - A beautiful expression of grace and equilibrium.", image: "/images/service-2.png" },
];

export default function PoseGallery() {
  return (
    <section className="py-32 px-6 md:px-24 bg-sand/20">
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
