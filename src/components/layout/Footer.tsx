import Link from "next/link";
import { Landmark, Building2, FileBadge, CheckCircle2, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: About, Connect */}
          <div className="space-y-10">
            <div>
              <Link href="/" className="inline-block mb-4 bg-white p-2.5 rounded-lg shadow-sm">
                <img src="/logo.png" alt="WOLT Foundation" className="h-12 w-auto object-contain" />
              </Link>
              <p className="text-[15px] text-slate-400 leading-relaxed mb-8">
                Empowering communities through sustainable development and humanitarian response.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl font-normal mb-5">Connect</h3>
              <div className="flex gap-3">
                <Link href="#" className="text-slate-400 hover:text-white hover:bg-slate-700 transition-colors bg-slate-800/80 border border-slate-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white hover:bg-slate-700 transition-colors bg-slate-800/80 border border-slate-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white hover:bg-slate-700 transition-colors bg-slate-800/80 border border-slate-700/50 w-10 h-10 flex items-center justify-center rounded-full">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-white text-xl font-normal mb-5">Contact</h3>
            <div className="space-y-4 text-[15px] text-slate-400 leading-relaxed">
              <p>
                Flat 6B, House 49, Road 28,<br />
                Gulshan 1, Dhaka.
              </p>
              <div className="flex flex-col space-y-1">
                <a href="tel:+8801931396996" className="underline underline-offset-4 decoration-slate-600 hover:text-white hover:decoration-white transition-colors">+880 1931-396996</a>
              </div>
              <div className="pt-2">
                <a href="mailto:robic2000@hotmail.com" className="hover:text-white transition-colors">robic2000@hotmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 3: Legal Status */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-normal mb-5">Legal Status</h3>
            <div className="space-y-6 text-[13px] text-slate-400">
              <div className="flex gap-4 items-start group cursor-default">
                <div className="bg-white p-2 rounded flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Landmark className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5 leading-tight uppercase tracking-tight">Microcredit Regulatory<br/>Authority Reg. No.</p>
                  <p className="text-slate-500">00176-00059-00018</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group cursor-default">
                <div className="bg-white p-2 rounded flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5 leading-tight uppercase tracking-tight">NGO Affairs Bureau<br/>Registration No.</p>
                  <p className="text-slate-500">626</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group cursor-default">
                <div className="bg-white p-2 rounded flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <FileBadge className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5 leading-tight uppercase tracking-tight">Joint Stock & Firms<br/>Registration No.</p>
                  <p className="text-slate-500">S-5803(47)06</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Careers */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-normal mb-5">Careers</h3>
            <Link href="/careers" className="block bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="bg-blue-500/20 text-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Join Our Team</h4>
                <p className="text-[14px] text-slate-400 leading-relaxed mb-4">
                  Explore exciting career opportunities and help us make a difference.
                </p>
                <div className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  View Openings <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/60 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <div>
            <Link href="/privacy" className="text-white font-semibold hover:underline">Privacy Policy Terms and Conditions</Link>
          </div>
          <div className="text-slate-400 text-center md:text-right leading-relaxed">
            Copyright &copy; {new Date().getFullYear()} Way of Light Trust (WOLT).<br className="hidden md:inline" /> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
