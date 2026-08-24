"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-wolt-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wolt-orange via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Mail className="w-8 h-8 text-wolt-orange" />
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">Stay Updated</h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter to receive the latest news about our relief efforts, medical camps, and educational programs.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-wolt-orange/30 placeholder:text-slate-400"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 rounded-full font-bold bg-wolt-orange text-white hover:bg-wolt-orange/90 transition-colors shadow-lg shadow-wolt-orange/20"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
