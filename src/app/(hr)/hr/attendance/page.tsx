import { Search, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const attendance = [
  { date: "2026-08-20", name: "Rahim Uddin", checkIn: "08:55 AM", checkOut: "--:--", status: "Present", location: "Dhaka HQ" },
  { date: "2026-08-20", name: "Dr. Salma Begum", checkIn: "09:15 AM", checkOut: "--:--", status: "Late", location: "Medical Camp - Sylhet" },
  { date: "2026-08-20", name: "Kamal Hossain", checkIn: "--:--", checkOut: "--:--", status: "Absent", location: "--" },
  { date: "2026-08-20", name: "Nusrat Jahan", checkIn: "08:50 AM", checkOut: "--:--", status: "Present", location: "Dhaka HQ" },
];

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Daily Attendance</h2>
          <p className="text-slate-500">Track employee check-ins and check-outs.</p>
        </div>
        <Button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Report
        </Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex flex-wrap items-center gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50 text-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-sm border rounded-lg px-3 py-2 text-slate-600 bg-slate-50">
            <Calendar className="w-4 h-4" />
            <span>Today: 20 Aug 2026</span>
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Employee Name</th>
              <th className="p-4 font-medium">Check In</th>
              <th className="p-4 font-medium">Check Out</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {attendance.map((record, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="p-4 text-slate-600">{record.date}</td>
                <td className="p-4 font-medium text-slate-800">{record.name}</td>
                <td className="p-4 text-slate-600 font-mono">{record.checkIn}</td>
                <td className="p-4 text-slate-400 font-mono">{record.checkOut}</td>
                <td className="p-4 text-slate-600">{record.location}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    record.status === "Present" ? "bg-green-100 text-green-700" : 
                    record.status === "Late" ? "bg-orange-100 text-orange-700" : 
                    "bg-red-100 text-red-700"
                  }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
