"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-sand/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2">
          <span className="text-sm uppercase tracking-widest text-sage mb-4 block">Connect</span>
          <h2 className="text-5xl md:text-7xl mb-12">Get in Touch</h2>
          
          <div className="space-y-8">
            <a href="mailto:personinda@gmail.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-brand-bg transition-all">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Email</span>
                <p className="text-lg font-sans">personinda@gmail.com</p>
              </div>
            </a>

            <a href="tel:7356026049" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-brand-bg transition-all">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Mobile</span>
                <p className="text-lg font-sans">+91 7356026049</p>
              </div>
            </a>
            
            <a href="https://instagram.com/yogaperson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-brand-bg transition-all">
                <Instagram size={20} />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Instagram</span>
                <p className="text-lg">@yogaperson</p>
              </div>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors font-sans" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-[10px] uppercase tracking-widest text-charcoal/40">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:border-charcoal outline-none transition-colors font-sans resize-none"></textarea>
            </div>
            <motion.button
              whileHover={{ x: 10 }}
              className="group flex items-center gap-4 py-4 text-sm uppercase tracking-[0.2em] font-medium"
            >
              Send Message
              <div className="w-8 h-[1px] bg-charcoal group-hover:w-16 transition-all" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
