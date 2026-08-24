"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Grameenphone", domain: "grameenphone.com" },
  { name: "bKash", domain: "bkash.com" },
  { name: "BRAC", domain: "brac.net" },
  { name: "Walton", domain: "waltonbd.com" },
  { name: "Nagad", domain: "nagad.com.bd" },
];

export function InvestorsMarquee() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Our <span className="text-[#0ea5e9]">Networks and Partners</span>
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
              <div className="relative h-24 w-48 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <img 
                  src={`https://cdn.brandfetch.io/${partner.domain}/w/400/h/400`} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('brandfetch')) {
                      // Fallback 1: Clearbit API
                      img.src = `https://logo.clearbit.com/${partner.domain}`;
                    } else if (img.src.includes('clearbit')) {
                      // Fallback 2: Google Favicon V2 (high res)
                      img.src = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${partner.domain}&size=128`;
                    } else if (img.src.includes('gstatic')) {
                      // Fallback 3: Text
                      img.style.display = 'none';
                      const parent = img.parentElement;
                      if (parent && parent.children.length === 1) {
                        const span = document.createElement('span');
                        span.className = "text-xl font-bold text-slate-500 whitespace-normal text-center";
                        span.innerText = partner.name;
                        parent.appendChild(span);
                      }
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
