"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { id: 1, src: "/images/hero.png", category: "Yoga Poses", title: "Sunrise Flow" },
  { id: 2, src: "/images/story-1.png", category: "Meditation", title: "Inner Peace" },
  { id: 3, src: "/images/service-1.png", category: "Studio Yoga", title: "Portrait of Focus" },
  { id: 4, src: "/images/story-2.png", category: "Yoga Retreats", title: "Coastal Spirit" },
  { id: 5, src: "/images/service-2.png", category: "Outdoor Yoga", title: "Earth Connection" },
  { id: 6, src: "/images/service-3.png", category: "Wellness Brand", title: "Mindful Objects" },
];

const categories = ["All", "Yoga Poses", "Meditation", "Outdoor Yoga", "Yoga Retreats", "Studio Yoga"];

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter || (filter === "Studio Yoga" && img.category === "Wellness Brand")); 
    // Small hack to ensure we have images in categories

  const currentIdx = selectedImage !== null ? images.findIndex(img => img.id === selectedImage) : -1;

  const nextImage = () => {
    if (currentIdx !== -1) {
      const nextIdx = (currentIdx + 1) % images.length;
      setSelectedImage(images[nextIdx].id);
    }
  };

  const prevImage = () => {
    if (currentIdx !== -1) {
      const prevIdx = (currentIdx - 1 + images.length) % images.length;
      setSelectedImage(images[prevIdx].id);
    }
  };

  return (
    <section id="portfolio" className="py-32 px-6 md:px-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Our Portfolio</span>
          <h2 className="text-5xl md:text-7xl mb-12">Visual Stories</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest pb-2 transition-all border-b ${
                  filter === cat ? "text-charcoal border-charcoal" : "text-charcoal/40 border-transparent hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative break-inside-avoid overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(img.id)}
              >
                <div className="relative aspect-auto">
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={800}
                    height={1000}
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-xs uppercase tracking-tighter text-brand-bg/70 mb-1">{img.category}</span>
                    <h4 className="text-xl text-brand-bg font-serif">{img.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-20"
          >
            <button 
              className="absolute top-10 right-10 text-brand-bg hover:text-sage transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <button className="absolute left-6 text-brand-bg/50 hover:text-brand-bg transition-colors" onClick={prevImage}>
              <ChevronLeft size={48} />
            </button>
            
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={images.find(img => img.id === selectedImage)?.src || ""}
                alt="Selected"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-[-60px] left-0 right-0 text-center text-brand-bg">
                 <h4 className="text-2xl font-serif">{images.find(img => img.id === selectedImage)?.title}</h4>
                 <p className="text-sm uppercase tracking-widest text-sage">{images.find(img => img.id === selectedImage)?.category}</p>
              </div>
            </div>

            <button className="absolute right-6 text-brand-bg/50 hover:text-brand-bg transition-colors" onClick={nextImage}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
