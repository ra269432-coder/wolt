"use client";

import { Handshake, Target, ShieldCheck, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnerPage() {
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const benefits = [
    { icon: <Target className="w-8 h-8 text-pink-600" />, title: isBn ? "পরিমাপযোগ্য প্রভাব" : "Measurable Impact", desc: isBn ? "আমরা ব্যাপক M&E রিপোর্টিং প্রদান করি যাতে আপনি ট্র্যাক করতে পারেন যে আপনার CSR বাজেটের প্রতিটি ডলার কোথায় যায়।" : "We provide comprehensive M&E reporting so you can track exactly where every dollar of your CSR budget goes." },
    { icon: <ShieldCheck className="w-8 h-8 text-pink-600" />, title: isBn ? "স্বচ্ছ শাসন" : "Transparent Governance", desc: isBn ? "টিয়ার-১ গ্লোবাল অ্যাকাউন্টিং ফার্ম দ্বারা বার্ষিক নিরীক্ষিত, যা পরম আর্থিক অখণ্ডতা এবং সম্মতি নিশ্চিত করে।" : "Audited annually by tier-1 global accounting firms, ensuring absolute financial integrity and compliance." },
    { icon: <Globe2 className="w-8 h-8 text-pink-600" />, title: isBn ? "ব্র্যান্ড অ্যালাইনমেন্ট" : "Brand Alignment", desc: isBn ? "আপনার কর্পোরেট ব্র্যান্ডকে বাংলাদেশ জুড়ে উচ্চ-দৃশ্যমানতা, জীবন রক্ষাকারী মানবিক প্রকল্পগুলির সাথে সারিবদ্ধ করুন।" : "Align your corporate brand with high-visibility, life-saving humanitarian projects across Bangladesh." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" 
            alt="Corporate Partnerships" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-pink-400 font-bold tracking-widest uppercase mb-4 block">{isBn ? "জড়িত হন" : "Get Involved"}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{isBn ? "আমাদের সাথে অংশীদার হন" : "Partner With Us"}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{isBn ? "আপনার কর্পোরেট সামাজিক দায়বদ্ধতা (CSR) লক্ষ্যগুলিকে মাটিতে পরিমাপযোগ্য, জীবন পরিবর্তনকারী প্রভাবে রূপান্তর করুন।" : "Transform your corporate social responsibility (CSR) goals into measurable, life-changing impact on the ground."}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{isBn ? "কেন WOLT ফাউন্ডেশনের সাথে অংশীদার হবেন?" : "Why Partner with WOLT Foundation?"}</h2>
          <p className="text-lg text-slate-600">{isBn ? "আমরা শুধু অনুদান চাই না; আমরা কৌশলগত অংশীদারিত্ব তৈরি করি। আমরা আপনার ব্র্যান্ডের মূল্যবোধ এবং আমাদের মানবিক লক্ষ্য উভয়ের সাথে সামঞ্জস্যপূর্ণ কাস্টম CSR উদ্যোগ ডিজাইন করতে স্থানীয় এবং আন্তর্জাতিক কর্পোরেশনের সাথে কাজ করি।" : "We don't just ask for donations; we build strategic partnerships. We work with local and international corporations to design custom CSR initiatives that align with both your brand values and our humanitarian goals."}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-slate-900 text-white p-12 relative overflow-hidden">
            <Handshake className="absolute -bottom-10 -left-10 w-64 h-64 text-slate-800 rotate-12" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">{isBn ? "আসুন প্রভাব সম্পর্কে কথা বলি।" : "Let's talk about impact."}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">{isBn ? "আপনার কর্পোরেট বিশদ দিয়ে ফর্মটি পূরণ করুন, এবং আমাদের বাহ্যিক বিষয়ক দল পরামর্শের সময়সূচী করতে 24 ঘন্টার মধ্যে পৌঁছাবে।" : "Fill out the form with your corporate details, and our external affairs team will reach out within 24 hours to schedule a consultation."}</p>
              
              <div className="space-y-4 text-sm font-medium">
                <p className="text-slate-300">{isBn ? "ইমেইল: partnerships@woltfoundation.org" : "Email: partnerships@woltfoundation.org"}</p>
                <p className="text-slate-300">{isBn ? "ফোন: +880 2 9876543" : "Phone: +880 2 9876543"}</p>
              </div>
            </div>
          </div>
          <div className="md:w-7/12 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isBn ? "নামের প্রথমাংশ" : "First Name"}</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{isBn ? "নামের শেষাংশ" : "Last Name"}</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{isBn ? "কোম্পানির নাম" : "Company Name"}</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{isBn ? "কর্পোরেট ইমেইল" : "Corporate Email"}</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{isBn ? "বার্তা" : "Message"}</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors">
                {isBn ? "তদন্ত জমা দিন" : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
