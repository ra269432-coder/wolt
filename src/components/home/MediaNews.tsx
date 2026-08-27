"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Play, Newspaper, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

const featuredStory = {
  title: "WOLT Foundation Launches 40+ Mobile Healthcare Units Across Sunamganj & Sylhet",
  date: "October 24, 2024",
  category: "Emergency Healthcare",
  categoryColor: "bg-emerald-500 text-white",
  image: "/images/humanitarian_response.jpg",
  excerpt: "In direct response to severe floodings, emergency rescue boats and fully stocked mobile clinics have provided immediate care to over 45,000 isolated families across the floodplains.",
  readTime: "4 min read",
  link: "/resource/news"
};

const recentNews = [
  {
    title: "WOLT Relief Program: Serving with Compassion in Bangladesh",
    date: "October 22, 2024",
    category: "Relief Program",
    categoryColor: "bg-orange-500 text-white",
    image: "/images/humanitarian_response_bd.jpg",
    link: "/resource/news"
  },
  {
    title: "WOLT Education Program: Class 1 to 5 Education Provided",
    date: "October 18, 2024",
    category: "Education",
    categoryColor: "bg-blue-500 text-white",
    image: "/images/social_development_bd.jpg",
    link: "/resource/news"
  },
  {
    title: "WOLT Health Program: Free Medical Camps in 64 Districts",
    date: "October 12, 2024",
    category: "Healthcare",
    categoryColor: "bg-teal-500 text-white",
    image: "/images/social_development.jpg",
    link: "/resource/news"
  },
  {
    title: "WOLT Housing Project: Homes for the Homeless in Bangladesh",
    date: "October 5, 2024",
    category: "Housing",
    categoryColor: "bg-pink-500 text-white",
    image: "/images/social_enterprise_bd.jpg",
    link: "/resource/news"
  }
];

const mediaHighlights = [
  {
    title: "Documentary: Voices of the Coastline",
    duration: "12:40",
    views: "24K views",
    type: "Documentary",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    link: "/resource/media"
  },
  {
    title: "Special Report: Frontline Mobile Clinics in Action",
    duration: "05:15",
    views: "18K views",
    type: "Report",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
    link: "/resource/media"
  }
];

import { useLanguage } from "@/context/LanguageContext";

export function MediaNews() {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-cyan-400 font-black tracking-[0.3em] uppercase text-sm mb-4 flex items-center gap-3">
              <Newspaper className="w-4 h-4 text-cyan-400" /> {t("media.tag")}
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
              {t("media.titleLine1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">{t("media.titleLine2")}</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/resource/news">
              <button className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-slate-950 rounded-full font-bold transition-all duration-300 backdrop-blur-md border border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                {t("media.allPress")} <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Main Grid: Featured Story + News List */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Featured News Card (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Link href={featuredStory.link} className="group block h-full">
              <div className="h-full bg-slate-800/80 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-cyan-500/50 shadow-2xl transition-all duration-500 flex flex-col group-hover:-translate-y-2">
                <div className="relative h-[340px] w-full overflow-hidden">
                  <img 
                    src={featuredStory.image} 
                    alt={featuredStory.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider ${featuredStory.categoryColor} shadow-lg`}>
                      {featuredStory.category}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-semibold">
                      {t("media.featured")}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-slate-300 text-xs font-semibold">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" /> {featuredStory.date}
                    </span>
                    <span>{featuredStory.readTime}</span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                      {featuredStory.title}
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium mb-6">
                      {featuredStory.excerpt}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 font-bold text-cyan-400 text-sm uppercase tracking-widest group-hover:text-cyan-300">
                    {t("media.readComplete")} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Column: 3 Recent News Items (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {recentNews.map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={news.link} className="group block">
                  <div className="bg-slate-800/60 hover:bg-slate-800 p-5 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-5 group-hover:translate-x-2">
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${news.categoryColor}`}>
                          {news.category}
                        </span>
                        <span className="text-slate-400 text-xs font-medium">{news.date}</span>
                      </div>
                      <h4 className="font-bold text-white group-hover:text-cyan-400 text-base leading-snug line-clamp-2 transition-colors mb-2">
                        {news.title}
                      </h4>
                      <span className="text-xs font-bold text-slate-400 group-hover:text-cyan-300 inline-flex items-center gap-1.5">
                        {t("media.readMore")} <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Video / Media Highlights Strip */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white flex items-center gap-3">
              <Play className="w-5 h-5 text-red-500 fill-current" /> {t("media.videoTag")}
            </h3>
            <Link href="/resource/media" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
              {t("media.exploreVideo")}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaHighlights.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Link href={video.link} className="group block relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={video.image} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                        <Play className="w-7 h-7 ml-1 fill-current" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/20">
                      {video.duration}
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1 block">
                        {video.type} • {video.views}
                      </span>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
