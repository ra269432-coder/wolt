"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "EBF", src: "/partners/media_1787805003778.png" },
  { name: "Baptist Union of Scotland", src: "/partners/media_1787805012657.png" },
  { name: "Eglise Baptiste du Calvaire", src: "/partners/media_1787805025175.png" },
  { name: "Baptist Gottingen", src: "/partners/media_1787805031290.png" },
  { name: "Partner 5", src: "/partners/media_1787805038741.png" },
  { name: "New Partner 1", src: "/partners/media_1787805074828.png" },
  { name: "New Partner 2", src: "/partners/media_1787805083630.png" },
  { name: "New Partner 3", src: "/partners/media_1787805089983.png" }
];
import { useLanguage } from "@/context/LanguageContext";

export function InvestorsMarquee() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          {t("partners.title1")} <span className="text-[#0ea5e9]">{t("partners.title2")}</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden group py-4">
        {/* Gradient overlays for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array twice to ensure seamless infinite scrolling */}
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center mx-12 min-w-[200px]"
            >
              <div className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 hover:scale-105 group/logo">
                <img 
                  src={partner.src} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
