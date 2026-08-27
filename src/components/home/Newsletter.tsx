"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 mb-6 shadow-sm border border-slate-800">
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tighter">{t("newsletter.title")}</h2>
          <p className="text-slate-400 text-lg mb-8">
            {t("newsletter.subtitle")}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t("newsletter.placeholder")} 
              className="flex-1 px-6 py-4 rounded-full bg-slate-900 text-white border border-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-600/30 placeholder:text-slate-500"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 rounded-full font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              {t("newsletter.subscribe")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
