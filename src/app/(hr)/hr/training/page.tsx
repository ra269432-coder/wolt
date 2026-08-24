import { GraduationCap, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  { id: "TR-01", title: "Disaster Relief Protocol", date: "2026-09-10", attendees: 45, status: "Upcoming" },
  { id: "TR-02", title: "First Aid Certification", date: "2026-08-01", attendees: 20, status: "Completed" },
  { id: "TR-03", title: "HR Compliance 2026", date: "2026-10-15", attendees: 8, status: "Upcoming" },
];

export default function TrainingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Training & Development</h2>
          <p className="text-slate-500">Manage employee training programs and certificates.</p>
        </div>
        <Button className="bg-wolt-green hover:bg-wolt-green/90 text-white flex items-center gap-2">
          <GraduationCap className="w-4 h-4" /> Create Program
        </Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Program Title</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Attendees Enrolled</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {programs.map((prog) => (
              <tr key={prog.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-medium text-slate-800">{prog.title}</td>
                <td className="p-4 text-slate-600">{prog.date}</td>
                <td className="p-4 text-slate-600">{prog.attendees}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    prog.status === "Completed" ? "bg-slate-100 text-slate-600" : "bg-green-100 text-green-700"
                  }`}>
                    {prog.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-md text-slate-500">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
