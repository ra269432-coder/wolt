"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ShieldCheck, Globe2, Users, ArrowRight, Play, HeartHandshake, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section ref={ref} className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden text-white bg-slate-950 pt-20">
      {/* Heavy Dynamic Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 z-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/40 blur-[120px] rounded-full z-20 pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/30 blur-[120px] rounded-full z-20 pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c56108158d5?auto=format&fit=crop&w=1920&q=80')] opacity-[0.12] mix-blend-luminosity z-30 bg-cover bg-center" />
      </motion.div>

      <div className="container relative z-40 px-4 py-16 lg:py-28 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: opacityText }}
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl mb-8 border border-white/10 shadow-2xl">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400">Serving Bangladesh Since 2010</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[1.02]">
              Redefining <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Impact.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl">
              A frontline humanitarian organization eradicating extreme poverty, delivering emergency healthcare, and building climate resilience across 64 districts.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-14">
              <Link href="#donate">
                <Button size="lg" className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 rounded-full px-12 py-8 text-xl font-black shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] group">
                  Start Donating
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/resource/media">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-10 py-8 text-xl border-white/20 bg-white/5 hover:bg-white/10 hover:text-white font-bold backdrop-blur-md transition-all hover:scale-105">
                  <Play className="w-5 h-5 mr-3 fill-current" />
                  Watch Video
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">100% Secure</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                  <Globe2 className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">Global NGO</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">5M+ Reached</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Single Full Premium Photo Showcase (No overlapping sad photo) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[560px] w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)] border border-white/15 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" 
                alt="WOLT Foundation Community Impact" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              
              {/* Refined gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Top Tag */}
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-xs font-bold uppercase tracking-widest text-white">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Featured Mission
                </span>
              </div>

              {/* Bottom Card Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-2xl p-6 rounded-3xl border border-white/20 text-white shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Emergency & Child Care</span>
                    <span className="text-xs font-bold text-slate-300">2024 - 2025</span>
                  </div>
                  <h3 className="font-black text-2xl tracking-tight">National Relief & Health Outreach</h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    Delivering vital food, healthcare, and educational aid directly to frontline vulnerable communities.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="absolute top-6 right-6 z-30 bg-indigo-600/90 backdrop-blur-xl text-white px-5 py-3.5 rounded-2xl shadow-[0_15px_35px_rgba(79,70,229,0.6)] border border-indigo-400/40 flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-indigo-200 font-bold uppercase tracking-wider leading-none mb-1">Total Impact</p>
                  <p className="text-lg font-black leading-none">$45M+ Raised</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
