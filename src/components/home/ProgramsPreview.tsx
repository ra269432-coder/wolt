"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, GraduationCap, Package, Wind, BrainCircuit, Accessibility } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Humanitarian Response",
    description: "Rapid deployment of life-saving relief, rescue boats, and emergency shelters during catastrophic cyclones and floods.",
    icon: Package,
    color: "bg-orange-600",
    bgHover: "hover:bg-orange-500",
    link: "/programs/disaster-preparedness",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Access",
    description: "Operating 40+ free mobile medical clinics, ensuring safe maternal delivery, and distributing essential medicines.",
    icon: HeartPulse,
    color: "bg-emerald-600",
    bgHover: "hover:bg-emerald-500",
    link: "/programs/expanding-health-coverage",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Climate Resilience",
    description: "Planting 2 million trees, introducing saline-tolerant crops to local farmers, and building resilient infrastructure.",
    icon: Wind,
    color: "bg-teal-600",
    bgHover: "hover:bg-teal-500",
    link: "/programs/climate-change",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mental Health",
    description: "Breaking social stigmas by providing free psychological counseling, trauma support, and community awareness programs.",
    icon: BrainCircuit,
    color: "bg-purple-600",
    bgHover: "hover:bg-purple-500",
    link: "/programs/mental-health",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Disability Inclusion",
    description: "Distributing customized wheelchairs, facilitating vocational training, and fiercely advocating for accessible infrastructure.",
    icon: Accessibility,
    color: "bg-blue-600",
    bgHover: "hover:bg-blue-500",
    link: "/programs/disability-inclusion",
    image: "https://images.pexels.com/photos/4063618/pexels-photo-4063618.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Social Enterprise",
    description: "Empowering rural farmers through fair-trade market linkages and micro-loans. 100% of profits are reinvested.",
    icon: GraduationCap,
    color: "bg-pink-600",
    bgHover: "hover:bg-pink-500",
    link: "/programs/bashundhara",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80"
  }
];

export function ProgramsPreview() {
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-slate-900 font-black tracking-[0.3em] uppercase text-sm mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-slate-900 inline-block"></span> Our Core Programs
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
              Impact Through <br/> Innovation.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              We tackle the root causes of poverty, illness, and inequality with vibrant, tailored solutions across multiple sectors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/programs">
              <button className="hidden md:flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-colors shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-2 transform text-lg">
                View All Impact <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link href={program.link} className="group block h-full outline-none">
                <div className={`h-full rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group-focus-visible:ring-4 ring-offset-4 ring-slate-900 ${program.color} ${program.bgHover}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 mix-blend-overlay opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30 text-white opacity-0 group-hover:opacity-100 transform translate-x-[20px] group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <program.icon className="w-10 h-10 text-white mb-2" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight tracking-tight">{program.title}</h3>
                    <p className="text-white/80 mb-8 flex-grow leading-relaxed text-lg font-medium">
                      {program.description}
                    </p>
                    
                    <div className="inline-flex items-center font-bold text-sm tracking-widest uppercase text-white/90 group-hover:text-white">
                      Explore Initiative <span className="w-8 h-0.5 bg-white ml-4 group-hover:w-12 transition-all duration-300"></span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center md:hidden">
          <Link href="/programs">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold w-full justify-center shadow-xl active:scale-95 transition-transform text-lg">
              View All Impact <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
