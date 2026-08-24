import Link from "next/link";
import { Landmark, Building2, FileBadge, CheckCircle2, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: About, Connect, Careers */}
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

            <div>
              <h3 className="text-white text-xl font-normal mb-3">Careers</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed">
                Learn about <Link href="/careers" className="text-white font-medium underline underline-offset-4 decoration-slate-500 hover:decoration-white">Careers</Link>, and view our<br className="hidden lg:block" />current openings
              </p>
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
