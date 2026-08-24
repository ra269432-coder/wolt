"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Users, BookOpen } from "lucide-react";
import Link from "next/link";

const aboutFeatures = [
  {
    title: "Vision, Mission & Values",
    description: "Discover the driving force behind our initiatives and the core values that guide our mission towards a better tomorrow.",
    icon: Target,
    link: "/about/vision-mission-values",
    color: "bg-blue-600",
    hoverColor: "group-hover:text-blue-600"
  },
  {
    title: "Our Team",
    description: "Meet the passionate individuals who dedicate their lives to making a sustainable impact in communities across Bangladesh.",
    icon: Users,
    link: "/teams/team",
    color: "bg-emerald-600",
    hoverColor: "group-hover:text-emerald-600"
  },
  {
    title: "Governing Board",
    description: "Learn about the experienced leaders and visionaries who provide strategic direction and governance to WOLT Foundation.",
    icon: BookOpen,
    link: "/teams/governing-board",
    color: "bg-indigo-600",
    hoverColor: "group-hover:text-indigo-600"
  }
];

export function AboutUsPreview() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-24 bg-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen"></div>
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
            <span className="block text-blue-400 font-black tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-400 inline-block"></span> About Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
              Who We Are & <br/> What Drives Us.
            </h2>
            <p className="text-xl text-indigo-200 leading-relaxed max-w-2xl font-medium">
              We are a collective of passionate individuals committed to driving sustainable change and empowering vulnerable communities across the nation.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={feature.link} className="group block h-full outline-none">
                <div className="h-full bg-indigo-900/40 backdrop-blur-md rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-800 hover:border-indigo-700 flex flex-col group-focus-visible:ring-4 ring-offset-4 ring-offset-indigo-950 ring-blue-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-lg shadow-${feature.color.replace('bg-', '').replace('-600', '')}-500/30 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-4 transition-colors ${feature.hoverColor.replace('text', 'text-blue-400')}`}>
                    {feature.title}
                  </h3>
                  <p className="text-indigo-200/80 mb-8 flex-grow leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  <div className={`mt-auto flex items-center font-bold text-sm tracking-wide text-white ${feature.hoverColor.replace('text', 'text-blue-400')} transition-colors uppercase`}>
                    Learn More <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
