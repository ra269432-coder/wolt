"use client";

import { ArrowLeft, Package, HeartPulse, GraduationCap, CheckCircle2, Globe, Users, Award } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const programs = [
    {
      id: "relief",
      title: isBn ? "মানবিক ত্রাণ ও দুর্যোগ প্রতিক্রিয়া" : "Humanitarian Relief & Disaster Response",
      subtitle: isBn ? "সংকটের দ্রুত প্রতিক্রিয়া এবং দুর্বল সম্প্রদায়ের জন্য প্রয়োজনীয় সহায়তা।" : "Rapid response to crises and essential support for vulnerable communities.",
      description: isBn ? "প্রাকৃতিক দুর্যোগ এবং অর্থনৈতিক সংকটের সময়ে, WOLT ফাউন্ডেশন তাৎক্ষণিক জীবন রক্ষাকারী সহায়তা প্রদান করে। আমরা খাদ্য নিরাপত্তার দিকে মনোনিবেশ করি এবং নিশ্চিত করি যে সবচেয়ে প্রান্তিক জনগোষ্ঠীর যখন সবচেয়ে বেশি প্রয়োজন তখন তাদের মৌলিক প্রয়োজনীয় জিনিসগুলিতে অ্যাক্সেস রয়েছে। আমাদের দলগুলো সারা বাংলাদেশে জরুরি অবস্থার প্রথম সারিতে কাজ করে।" : "In times of natural disasters and economic crises, WOLT Foundation provides immediate life-saving support. We focus on food security and ensuring that the most marginalized populations have access to basic necessities when they need them the most. Our teams operate on the frontlines of emergencies across Bangladesh.",
      activities: isBn ? [
        "জরুরি খাবার প্যাকেজ বিতরণ",
        "সঙ্কট ব্যবস্থাপনা এবং দ্রুত প্রতিক্রিয়া দল",
        "শীতবস্ত্র এবং কম্বল বিতরণ",
        "দুর্যোগে ক্ষতিগ্রস্ত পরিবারের জন্য পুনর্বাসন সহায়তা"
      ] : [
        "Emergency food package distribution",
        "Crisis management and rapid response teams",
        "Winter clothing and blanket drives",
        "Rehabilitation support for disaster-affected families"
      ],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      icon: <Package className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      id: "health",
      title: isBn ? "স্বাস্থ্যসেবা অ্যাক্সেস এবং মেডিকেল ক্যাম্প" : "Healthcare Access & Medical Camps",
      subtitle: isBn ? "অবহেলিত জনগোষ্ঠীর কাছে প্রয়োজনীয় স্বাস্থ্যসেবা পৌঁছে দেওয়া।" : "Bringing essential healthcare services directly to underserved populations.",
      description: isBn ? "মানসম্মত স্বাস্থ্যসেবা পাওয়া একটি মৌলিক অধিকার। আমাদের স্বাস্থ্য কর্মসূচি প্রতিরোধমূলক যত্ন, মাতৃস্বাস্থ্য এবং পর্যাপ্ত চিকিৎসা পরিকাঠামোর অভাব রয়েছে এমন সম্প্রদায়কে বিনামূল্যে চিকিৎসা সহায়তা প্রদানের উপর দৃষ্টি নিবদ্ধ করে। যেখানে সবচেয়ে বেশি প্রয়োজন সেখানে উচ্চ-মানের যত্ন প্রদানের জন্য আমরা চিকিৎসা পেশাদারদের সাথে অংশীদারি করি।" : "Access to quality healthcare is a fundamental right. Our health program focuses on preventive care, maternal health, and providing free medical assistance to communities that lack adequate medical infrastructure. We partner with medical professionals to deliver high-quality care where it is most scarce.",
      activities: isBn ? [
        "প্রত্যন্ত গ্রামে বিনামূল্যে মেডিকেল ক্যাম্প",
        "প্রয়োজনীয় ওষুধ বিতরণ",
        "মাতৃ ও শিশু স্বাস্থ্য সচেতনতামূলক কর্মসূচি",
        "বিশেষজ্ঞ চেক-আপ (চোখের যত্ন, ডেন্টাল ইত্যাদি)"
      ] : [
        "Free medical camps in remote villages",
        "Distribution of essential medicines",
        "Maternal and child health awareness programs",
        "Specialized check-ups (eye care, dental, etc.)"
      ],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    },
    {
      id: "education",
      title: isBn ? "শিক্ষা এবং যুব ক্ষমতায়ন" : "Education & Youth Empowerment",
      subtitle: isBn ? "মানসম্মত শিক্ষার মাধ্যমে টেকসই ভবিষ্যতের ভিত্তি তৈরি করা।" : "Building the foundation for a sustainable future through quality learning.",
      description: isBn ? "আমরা বিশ্বাস করি যে দারিদ্র্যের চক্র ভাঙার জন্য শিক্ষা হল সবচেয়ে শক্তিশালী হাতিয়ার। WOLT ফাউন্ডেশন প্রাথমিক শিক্ষাকে সমর্থন করে, অন্তর্ভুক্তিমূলক শিক্ষার পরিবেশ এবং সুবিধাবঞ্চিত শিশুদের মধ্যে ঝরে পড়ার হার কমানোর ওপর দৃষ্টি নিবদ্ধ করে। আমরা নিশ্চিত করি যে প্রতিটি শিশুর সফল হওয়ার জন্য প্রয়োজনীয় উপকরণ এবং সহায়তা রয়েছে।" : "We believe that education is the most powerful tool for breaking the cycle of poverty. WOLT Foundation supports primary education, focusing on inclusive learning environments and reducing dropout rates among disadvantaged children. We ensure every child has the materials and support they need to succeed.",
      activities: isBn ? [
        "স্কুল সরবরাহ এবং পাঠ্যবই প্রদান",
        "সুবিধাবঞ্চিত শিক্ষার্থীদের জন্য টিউশন সহায়তা",
        "কমিউনিটি লার্নিং সেন্টার স্থাপন",
        "যুব দক্ষতা উন্নয়ন এবং মেন্টরশিপ"
      ] : [
        "Providing school supplies and textbooks",
        "Tuition support for underprivileged students",
        "Establishing community learning centers",
        "Youth skills development and mentorship"
      ],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=2000&q=80" 
            alt="WOLT Foundation Programs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors text-sm mb-6 bg-slate-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
              <ArrowLeft className="w-4 h-4" /> {isBn ? "হোমে ফিরে যান" : "Back to Home"}
            </Link>
            <span className="block text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">{isBn ? "আমাদের কাজ" : "What We Do"}</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {isBn ? "আমাদের প্রোগ্রাম ও হস্তক্ষেপ" : "Our Programs & Interventions"}
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium max-w-2xl">
              {isBn ? "আমরা স্থিতিস্থাপক সম্প্রদায় গড়ে তোলার জন্য ত্রাণ, স্বাস্থ্যসেবা এবং শিক্ষায় টেকসই সমাধান বাস্তবায়ন করে সমগ্র বাংলাদেশে কাজ করি।" : "We operate across Bangladesh, implementing sustainable solutions in relief, healthcare, and education to build resilient communities."}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex flex-col items-center text-center p-4">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">64</h3>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">{isBn ? "জেলায় পৌঁছেছি" : "Districts Reached"}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Users className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">50,000+</h3>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">{isBn ? "জীবন প্রভাবিত" : "Lives Impacted"}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Award className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">12+</h3>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">{isBn ? "বছরের সেবা" : "Years of Service"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{isBn ? "সম্প্রদায়ের ক্ষমতায়ন, জীবন পরিবর্তন" : "Empowering Communities, Transforming Lives"}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isBn ? "আমাদের সামগ্রিক দৃষ্টিভঙ্গি নিশ্চিত করে যে দীর্ঘমেয়াদী টেকসই উন্নয়নের ভিত্তি তৈরি করার সাথে সাথে তাৎক্ষণিক মানবিক চাহিদাগুলি পূরণ করা হয়। নিচে আমাদের হস্তক্ষেপের মূল স্তম্ভগুলি আবিষ্কার করুন।" : "Our holistic approach ensures that immediate humanitarian needs are met while building the foundation for long-term sustainable development. Discover our core pillars of intervention below."}
            </p>
          </div>

          <div className="space-y-32">
            {programs.map((program, index) => (
              <div key={program.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 ${program.color} transform -rotate-3 rounded-[3rem] transition-transform duration-500 group-hover:rotate-0`}></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                  {/* Floating Icon Badge */}
                  <div className={`absolute -bottom-8 ${index % 2 !== 0 ? '-left-8' : '-right-8'} w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 ${program.borderColor} z-10 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    {program.icon}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <span className={`inline-block px-4 py-1.5 rounded-full ${program.color} ${program.iconColor} font-bold text-sm tracking-wide uppercase mb-6 border ${program.borderColor}`}>
                    {isBn ? "স্তম্ভ ০" : "Pillar 0"}{index + 1}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {program.title}
                  </h2>
                  <h3 className="text-xl text-slate-700 font-semibold mb-6">
                    {program.subtitle}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {program.description}
                  </p>
                  
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      {isBn ? "প্রধান হস্তক্ষেপ" : "Key Interventions"}
                    </h4>
                    <ul className="space-y-4">
                      {program.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className={`w-6 h-6 ${program.iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700 font-medium leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">{isBn ? "আমাদের হস্তক্ষেপ সমর্থন করুন" : "Support Our Interventions"}</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            {isBn ? "আপনার সমর্থন এই প্রোগ্রামগুলোকে সম্ভব করে তোলে। বাংলাদেশে যাদের সবচেয়ে বেশি প্রয়োজন তাদের কাছে ত্রাণ, স্বাস্থ্য এবং শিক্ষা পৌঁছে দেওয়ার আমাদের মিশনে যোগ দিন।" : "Your support makes these programs possible. Join us in our mission to bring relief, health, and education to those who need it most in Bangladesh."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit#donate">
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95">
                {isBn ? "দান করুন" : "Make a Donation"}
              </button>
            </Link>
            <Link href="/teams/team">
              <button className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 active:scale-95">
                {isBn ? "আমাদের সাথে অংশীদার হন" : "Partner With Us"}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
