"use client";

import { motion } from "framer-motion";
import { Activity, Users, MapPin, Package } from "lucide-react";

const stats = [
  { 
    value: "64", 
    label: "Districts Reached", 
    desc: "National coverage spanning every district with active ground teams.",
    color: "from-emerald-400 to-teal-500",
    icon: MapPin 
  },
  { 
    value: "2.5M+", 
    label: "Patients Treated", 
    desc: "Free medical consultations, surgeries, and medicines via mobile clinics.",
    color: "from-amber-400 to-orange-500",
    icon: Activity
  },
  { 
    value: "50k+", 
    label: "Students Supported", 
    desc: "Ensuring inclusive education through full scholarships.",
    color: "from-blue-400 to-indigo-500",
    icon: Users
  },
  { 
    value: "15M+", 
    label: "Relief Packages", 
    desc: "Emergency food and hygiene kits distributed during climate events.",
    color: "from-pink-400 to-rose-500",
    icon: Package
  },
];

export function Stats() {
  return (
    <section className="py-32 bg-emerald-950 relative overflow-hidden text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-400 font-black tracking-[0.3em] uppercase mb-4 block flex items-center gap-4">
              <span className="w-12 h-1 bg-emerald-400 inline-block"></span> Our Impact
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05]">
              Transforming Lives <br/> At Scale.
            </h2>
            <p className="text-xl text-emerald-100/70 leading-relaxed font-medium">
              We maintain a relentless focus on measurable, sustainable impact across all sectors of society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-emerald-900/40 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-emerald-500/20 relative overflow-hidden group"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="absolute -top-4 -right-4 p-6 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500 transform group-hover:scale-110">
                <stat.icon className="w-32 h-32 text-emerald-100" />
              </div>
              
              <div className="relative z-10">
                <div className={`text-6xl md:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r ${stat.color} drop-shadow-lg`}>
                  {stat.value}
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  {stat.label}
                </div>
                <p className="text-emerald-100/70 text-base leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
