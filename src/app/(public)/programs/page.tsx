import { ArrowLeft, Package, HeartPulse, GraduationCap, CheckCircle2, Globe, Users, Award } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "relief",
    title: "Humanitarian Relief & Disaster Response",
    subtitle: "Rapid response to crises and essential support for vulnerable communities.",
    description: "In times of natural disasters and economic crises, WOLT Foundation provides immediate life-saving support. We focus on food security and ensuring that the most marginalized populations have access to basic necessities when they need them the most. Our teams operate on the frontlines of emergencies across Bangladesh.",
    activities: [
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
    title: "Healthcare Access & Medical Camps",
    subtitle: "Bringing essential healthcare services directly to underserved populations.",
    description: "Access to quality healthcare is a fundamental right. Our health program focuses on preventive care, maternal health, and providing free medical assistance to communities that lack adequate medical infrastructure. We partner with medical professionals to deliver high-quality care where it is most scarce.",
    activities: [
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
    title: "Education & Youth Empowerment",
    subtitle: "Building the foundation for a sustainable future through quality learning.",
    description: "We believe that education is the most powerful tool for breaking the cycle of poverty. WOLT Foundation supports primary education, focusing on inclusive learning environments and reducing dropout rates among disadvantaged children. We ensure every child has the materials and support they need to succeed.",
    activities: [
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

export default function ProgramsPage() {
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
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="block text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">What We Do</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Our Programs & Interventions
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed font-medium max-w-2xl">
              We operate across Bangladesh, implementing sustainable solutions in relief, healthcare, and education to build resilient communities.
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
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">Districts Reached</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Users className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">50,000+</h3>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">Lives Impacted</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <Award className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900 mb-2">12+</h3>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Empowering Communities, Transforming Lives</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our holistic approach ensures that immediate humanitarian needs are met while building the foundation for long-term sustainable development. Discover our core pillars of intervention below.
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
                    Pillar 0{index + 1}
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
                      Key Interventions
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Support Our Interventions</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Your support makes these programs possible. Join us in our mission to bring relief, health, and education to those who need it most in Bangladesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit#donate">
              <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95">
                Make a Donation
              </button>
            </Link>
            <Link href="/teams/team">
              <button className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 active:scale-95">
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
