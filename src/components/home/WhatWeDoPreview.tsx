"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Anchor, Briefcase } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Social Development",
    description: "Fostering sustainable communities through mental health support, climate action, and disability inclusion.",
    icon: Users,
    color: "bg-pink-600",
    lightBg: "bg-pink-50",
    hoverText: "group-hover:text-pink-600",
    link: "/programs/mental-health",
    subItems: [
      { name: "Mental Health", link: "/programs/mental-health" },
      { name: "Climate Change", link: "/programs/climate-change" },
      { name: "Expanding Health Coverage", link: "/programs/expanding-health-coverage" },
      { name: "Advocacy for Social Change", link: "/programs/advocacy-for-social-change" },
      { name: "Disability Inclusion", link: "/programs/disability-inclusion" },
    ]
  },
  {
    title: "Humanitarian Response",
    description: "Rapid deployment of life-saving relief and building preparedness for natural disasters.",
    icon: Anchor,
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
    hoverText: "group-hover:text-blue-600",
    link: "/programs/disaster-preparedness",
    subItems: [
      { name: "Disaster Preparedness in Bangladesh", link: "/programs/disaster-preparedness" }
    ]
  },
  {
    title: "Social Enterprise",
    description: "Empowering communities through market linkages and sustainable business initiatives.",
    icon: Briefcase,
    color: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    hoverText: "group-hover:text-emerald-600",
    link: "/programs/bashundhara",
    subItems: [
      { name: "Bashundhara", link: "/programs/bashundhara" },
      { name: "Teer", link: "/programs/teer" }
    ]
  }
];

export function WhatWeDoPreview() {
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
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[40%] rounded-full bg-pink-500/10 blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-pink-400 font-black tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-pink-400 inline-block"></span> What We Do
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Our Core Pillars of <br/> Impact.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
              We focus our efforts across three main areas to ensure comprehensive and sustainable development for those who need it most.
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
              <div className={`h-full bg-slate-800/80 backdrop-blur-md rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-slate-600 flex flex-col group relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-16 h-16 rounded-2xl ${pillar.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-${pillar.color.replace('bg-', '').replace('-600', '')}-500/20 transform group-hover:-translate-y-1 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-4 transition-colors ${pillar.hoverText}`}>
                  {pillar.title}
                </h3>
                <p className="text-slate-300 mb-8 font-medium leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="flex-grow space-y-3 mb-8">
                  {pillar.subItems.map((subItem, idx) => (
                    <Link key={idx} href={subItem.link} className="flex items-center text-[15px] font-semibold text-slate-400 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-3 group-hover:bg-pink-400 transition-colors"></span>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-700">
                  <Link href={pillar.link} className={`inline-flex items-center font-bold text-sm tracking-wide text-white ${pillar.hoverText} transition-colors uppercase`}>
                    Explore Area <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
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
