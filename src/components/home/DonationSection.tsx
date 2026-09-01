"use client";

import { CreditCard, Lock, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

const amounts = [25, 50, 100, 500];

export function DonationSection() {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);

  return (
    <section id="donate" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/50 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] z-0"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 shadow-sm border border-slate-200"
          >
            <Heart className="w-4 h-4 fill-current text-rose-500" /> {t("donateSection.tag")}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter"
          >
            {t("donateSection.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-900/80 text-xl font-bold"
          >
            {t("donateSection.subtitle")}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 relative z-20"
        >
          
          {/* Info Side */}
          <div className="lg:w-5/12 bg-slate-950 text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-950 to-slate-900 opacity-100 z-0"></div>
            <div className="absolute -top-[20%] -left-[20%] w-[100%] h-[100%] rounded-full bg-blue-500/10 blur-[100px] z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 leading-tight tracking-tight">{t("donateSection.dollar")}</h3>
              <ul className="space-y-6 mb-12 text-blue-100 font-medium text-lg">
                <li className="flex items-center gap-4"><ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" /> {t("donateSection.secure")}</li>
                <li className="flex items-center gap-4"><ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" /> {t("donateSection.transparent")}</li>
                <li className="flex items-center gap-4"><ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" /> {t("donateSection.grassroots")}</li>
              </ul>
            </div>
            
            <div className="relative z-10 bg-black/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <p className="text-lg font-bold leading-relaxed tracking-wide">{t("donateSection.quote")}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 bg-white">
            <form onSubmit={(e) => { e.preventDefault(); alert("Mock Payment Successful! Thank you for your donation."); }} className="space-y-8">
              
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-black tracking-widest uppercase text-slate-400 mb-4">{t("donateSection.selectAmount")}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-4 rounded-2xl border-2 font-black text-xl transition-all duration-300 ${
                        selectedAmount === amount 
                          ? "border-blue-600 bg-blue-50 text-blue-600 scale-105 shadow-md shadow-blue-600/10" 
                          : "border-slate-200 text-slate-500 hover:border-blue-600/50 hover:text-blue-600"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input 
                    type="number" 
                    placeholder={t("donateSection.customAmount")} 
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-bold text-lg text-slate-900 placeholder:text-slate-400"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Payment Details Mock */}
              <div>
                <label className="block text-sm font-black tracking-widest uppercase text-slate-400 mb-4">{t("donateSection.paymentDetails")}</label>
                <div className="space-y-4">
                  <input type="text" placeholder={t("donateSection.cardName")} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-bold text-slate-900 placeholder:text-slate-400" required />
                  <div className="relative">
                    <CreditCard className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                    <input type="text" placeholder={t("donateSection.cardNumber")} className="w-full pl-16 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-mono font-bold text-slate-900 placeholder:text-slate-400" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-bold text-slate-900 placeholder:text-slate-400" required />
                    <input type="text" placeholder="CVC" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-bold text-slate-900 placeholder:text-slate-400" required />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-6 text-xl font-black flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-blue-600/20 group hover:-translate-y-1">
                <Lock className="w-6 h-6 opacity-80" /> {t("donateSection.donateSecurely")} ${selectedAmount || 0} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
