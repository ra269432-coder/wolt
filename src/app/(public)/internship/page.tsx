import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InternshipPage() {
  const benefits = [
    "Mentorship from industry-leading development professionals",
    "Hands-on field experience in rural Bangladesh",
    "Monthly stipend and travel allowance",
    "Opportunity to transition into a full-time role"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80" 
            alt="Internship at WOLT" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 block">Get Involved</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Future Leaders Program</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Kickstart your career in the development sector with our rigorous, 6-month immersive internship program.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About the Program</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The WOLT Future Leaders Program is designed for final-year university students and recent graduates who are passionate about social change. Instead of fetching coffee, our interns are placed directly into core project teams—working on everything from climate policy research to managing field logistics during humanitarian crises.
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Gain</h3>
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg shadow-cyan-600/20">
              Apply for Fall 2024 Cohort <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" alt="interns" className="rounded-2xl h-64 object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=80" alt="interns" className="rounded-2xl h-64 object-cover w-full translate-y-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
