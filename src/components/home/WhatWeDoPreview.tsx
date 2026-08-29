"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Anchor, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function WhatWeDoPreview() {
  const { t } = useLanguage();
  
  const pillars = [
    {
      title: t("whatWeDo.pillars.social.title"),
      description: t("whatWeDo.pillars.social.desc"),
      icon: Users,
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      hoverText: "group-hover:text-blue-600",
      link: "/programs/mental-health",
      image: "/generated/what_social_1787805890719.jpg"
    },
    {
      title: t("whatWeDo.pillars.humanitarian.title"),
      description: t("whatWeDo.pillars.humanitarian.desc"),
      icon: Anchor,
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      hoverText: "group-hover:text-blue-600",
      link: "/programs/disaster-preparedness",
      image: "/generated/what_humanitarian_1787805909174.jpg"
    },
    {
      title: t("whatWeDo.pillars.enterprise.title"),
      description: t("whatWeDo.pillars.enterprise.desc"),
      icon: Briefcase,
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      hoverText: "group-hover:text-blue-600",
      link: "/programs/bashundhara",
      image: "/generated/what_enterprise_1787805927545.jpg"
    }
  ];

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-12 bg-[#1E293B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[40%] rounded-full bg-slate-200/50 blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-600 inline-block"></span> {t("whatWeDo.tag")}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              {t("whatWeDo.titleLine1")} <br/> {t("whatWeDo.titleLine2")}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
              {t("whatWeDo.subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={item}
              className="h-full"
            >
              <div className={`h-full bg-[#334155] rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all duration-500 border border-slate-700 hover:border-blue-400 flex flex-col group relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className={`text-2xl font-bold text-white mb-4 transition-colors ${pillar.hoverText}`}>
                  {pillar.title}
                </h3>
                <p className="text-white/80 mb-8 font-medium leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="flex-grow mb-8 relative w-full h-48 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <Image 
                    src={pillar.image} 
                    alt={pillar.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-600">
                  <Link href={pillar.link} className={`inline-flex items-center font-bold text-sm tracking-wide text-white ${pillar.hoverText} transition-colors uppercase`}>
                    {t("whatWeDo.explore")} <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
