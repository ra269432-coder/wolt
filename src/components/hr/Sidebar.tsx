"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Briefcase, 
  CalendarCheck, 
  CalendarOff, 
  Banknote, 
  Target, 
  GraduationCap, 
  FileText, 
  BarChart3,
  LogOut,
  Heart
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", href: "/hr/dashboard", icon: BarChart3 },
  { title: "Employees", href: "/hr/employees", icon: Users },
  { title: "Recruitment", href: "/hr/recruitment", icon: Briefcase },
  { title: "Attendance", href: "/hr/attendance", icon: CalendarCheck },
  { title: "Leave", href: "/hr/leave", icon: CalendarOff },
  { title: "Payroll", href: "/hr/payroll", icon: Banknote },
  { title: "Performance", href: "/hr/performance", icon: Target },
  { title: "Training", href: "/hr/training", icon: GraduationCap },
  { title: "Documents", href: "/hr/documents", icon: FileText },
  { title: "Reports", href: "/hr/reports", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 bg-slate-950 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-wolt-blue p-1.5">
            <Heart className="h-4 w-4 text-wolt-orange" fill="currentColor" />
          </div>
          <span className="font-bold text-white tracking-wide">WOLT HR</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-wolt-blue text-white" 
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
