"use client";

import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} className="text-[10px] uppercase tracking-[0.3em] font-medium transition-colors hover:text-sage px-4 py-2">
        {children}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 px-6 md:px-12 py-6 flex justify-between items-center ${
        scrolled ? "bg-brand-bg/90 backdrop-blur-md py-4 border-b border-charcoal/5" : "bg-transparent"
      } text-charcoal`}
    >
      <div className="flex-1 flex items-center">
        <Link href="/" className="text-xl tracking-tighter font-serif font-bold flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-brand-bg text-xs">YP</div>
          YOGAPERSON
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
        <MagneticLink href="#portfolio">Portfolio</MagneticLink>
        <MagneticLink href="#about">About</MagneticLink>
        <MagneticLink href="#contact">Contact</MagneticLink>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <Link 
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-2 bg-sage text-brand-bg text-xs uppercase tracking-widest font-medium rounded-md hover:bg-charcoal transition-colors"
        >
          Book Now
        </Link>
        <div className="lg:hidden w-8 h-[1px] bg-charcoal" />
      </div>
    </motion.nav>
  );
}
