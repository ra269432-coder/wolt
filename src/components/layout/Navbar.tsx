import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, Heart, ChevronDown, Briefcase, Laptop, Handshake, Building, Newspaper, BookOpen, Megaphone, Bell, Plus, Minus, Image, FileText, Package, HeartPulse, GraduationCap, Target, Users, MapPin, Leaf, Activity, ShieldAlert } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md transition-all">
      <div className="container mx-auto flex h-[90px] items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group h-full py-2.5">
          <img src="/logo.png" alt="WOLT Foundation" className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <div className="hidden lg:flex gap-9 items-center text-[15px] font-extrabold text-slate-900 uppercase tracking-wider h-full">
          <Link href="/sdg" className="hover:text-blue-600 transition-colors duration-300 flex items-center h-full px-1 relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">SDG&apos;S</Link>
          
          {/* Mega Dropdown: ABOUT US */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 px-1 hover:text-blue-600 transition-colors duration-300 h-full outline-none relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">
              ABOUT US <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[700px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 flex gap-12 text-slate-600 normal-case tracking-normal">
                {/* Column 1 */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg text-slate-900 font-bold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">About us <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/about/vision-mission-values" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                      <span className="group-hover:translate-x-1 transition-transform">Vision, Mission & Values</span>
                    </Link>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg text-slate-900 font-bold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Our Teams <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/teams/team" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                      <span className="group-hover:translate-x-1 transition-transform">Team</span>
                    </Link>
                    <Link href="/teams/governing-board" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                      <span className="group-hover:translate-x-1 transition-transform">Governing Board</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mega Dropdown: WHAT WE DO */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 px-1 hover:text-blue-600 transition-colors duration-300 h-full outline-none relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">
              WHAT WE DO <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[450px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-0 text-slate-600 normal-case tracking-normal overflow-hidden">
                <div className="flex flex-col w-full">
                  {/* Social Development Accordion */}
                  <details className="group/dev border-b border-slate-100" open>
                    <summary className="flex items-center justify-between p-5 bg-white text-slate-900 font-bold text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social development</span>
                      <div className="text-blue-500">
                        <Plus className="w-5 h-5 group-open/dev:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/dev:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100 p-2 gap-1">
                      <Link href="/programs/mental-health" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Mental Health</span>
                      </Link>
                      <Link href="/programs/climate-change" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Climate change</span>
                      </Link>
                      <Link href="/programs/expanding-health-coverage" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Expanding health coverage</span>
                      </Link>
                      <Link href="/programs/advocacy-for-social-change" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Advocacy for Social Change</span>
                      </Link>
                      <Link href="/programs/disability-inclusion" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Disability inclusion</span>
                      </Link>
                    </div>
                  </details>

                  {/* Humanitarian Response Accordion */}
                  <details className="group/hum border-b border-slate-100">
                    <summary className="flex items-center justify-between p-5 bg-white text-slate-900 font-bold text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Humanitarian response</span>
                      <div className="text-blue-500">
                        <Plus className="w-5 h-5 group-open/hum:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/hum:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100 p-2 gap-1">
                      <Link href="/programs/disaster-preparedness" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform leading-snug">Disaster preparedness and response in Bangladesh</span>
                      </Link>
                    </div>
                  </details>

                  {/* Social Enterprise Accordion */}
                  <details className="group/ent">
                    <summary className="flex items-center justify-between p-5 bg-white text-slate-900 font-bold text-[16px] cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                      <span>Social Enterprise</span>
                      <div className="text-blue-500">
                        <Plus className="w-5 h-5 group-open/ent:hidden" />
                        <Minus className="w-5 h-5 hidden group-open/ent:block" />
                      </div>
                    </summary>
                    <div className="flex flex-col bg-slate-50/50 border-t border-slate-100 p-2 gap-1">
                      <Link href="/programs/bashundhara" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Bashundhara</span>
                      </Link>
                      <Link href="/programs/teer" className="px-4 py-2.5 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center font-bold text-[15px] text-slate-800 group">
                        <span className="group-hover:translate-x-1 transition-transform">Teer</span>
                      </Link>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          
          {/* Mega Dropdown: RESOURCES */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 px-1 hover:text-blue-600 transition-colors duration-300 h-full outline-none relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">
              RESOURCES <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[400px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 text-slate-600 normal-case tracking-normal">
                <div className="space-y-2">
                  <h3 className="text-lg text-slate-900 font-bold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Resources <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/resource/news" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-indigo-100 p-1.5 rounded-md group-hover:bg-indigo-500 transition-colors"><Newspaper className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">News</span>
                    </Link>
                    <Link href="/resource/story" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-amber-100 p-1.5 rounded-md group-hover:bg-amber-500 transition-colors"><BookOpen className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Story</span>
                    </Link>
                    <Link href="/resource/campaigns" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-rose-100 p-1.5 rounded-md group-hover:bg-rose-500 transition-colors"><Megaphone className="w-4 h-4 text-rose-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Campaigns</span>
                    </Link>
                    <Link href="/resource/notice" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-emerald-100 p-1.5 rounded-md group-hover:bg-emerald-500 transition-colors"><Bell className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Notice</span>
                    </Link>
                    <Link href="/resource/media" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-purple-100 p-1.5 rounded-md group-hover:bg-purple-500 transition-colors"><Image className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Media</span>
                    </Link>
                    <Link href="/resource/research" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-cyan-100 p-1.5 rounded-md group-hover:bg-cyan-500 transition-colors"><FileText className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Research</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mega Dropdown: GET INVOLVED */}
          <div className="relative group h-full flex items-center">
            <button className="flex items-center gap-1.5 px-1 hover:text-blue-600 transition-colors duration-300 h-full outline-none relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">
              GET INVOLVED <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="absolute top-full right-0 hidden group-hover:block w-[400px] pt-1">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-8 text-slate-600 normal-case tracking-normal">
                <div className="space-y-2">
                  <h3 className="text-lg text-slate-900 font-bold border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">Join Us <span className="text-blue-500">&rarr;</span></h3>
                  <div className="flex flex-col space-y-1">
                    <Link href="/careers" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-amber-100 p-1.5 rounded-md group-hover:bg-amber-500 transition-colors"><Briefcase className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Career</span>
                    </Link>
                    <Link href="/internship" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-cyan-100 p-1.5 rounded-md group-hover:bg-cyan-500 transition-colors"><Laptop className="w-4 h-4 text-cyan-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Internship</span>
                    </Link>
                    <Link href="/partner" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-pink-100 p-1.5 rounded-md group-hover:bg-pink-500 transition-colors"><Handshake className="w-4 h-4 text-pink-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Partner with us</span>
                    </Link>
                    <Link href="/visit" className="px-3 py-2 -mx-3 rounded-md hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center gap-3 font-bold text-[15px] text-slate-800 group">
                      <div className="bg-slate-100 p-1.5 rounded-md group-hover:bg-slate-500 transition-colors"><Building className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" /></div> <span className="group-hover:translate-x-1 transition-transform">Visit WOLT</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden text-base font-bold md:block hover:text-blue-600 uppercase text-slate-500 transition-all duration-300 tracking-wide hover:scale-105">
            LOGIN
          </Link>
          <Link href="/#donate">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 text-white rounded-md px-8 py-6 text-base font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40">
              DONATE
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}
