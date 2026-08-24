import { Star, TrendingUp, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { empId: "EMP-001", name: "Rahim Uddin", reviewDate: "2026-06-15", rating: 4.8, status: "Completed" },
  { empId: "EMP-002", name: "Dr. Salma Begum", reviewDate: "2026-07-20", rating: 4.9, status: "Completed" },
  { empId: "EMP-004", name: "Nusrat Jahan", reviewDate: "2026-08-25", rating: 0, status: "Pending" },
];

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Performance Reviews</h2>
          <p className="text-slate-500">Track employee KPIs, reviews, and evaluations.</p>
        </div>
        <Button className="bg-wolt-blue hover:bg-wolt-blue/90 text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> Start Review Cycle
        </Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Review Date</th>
              <th className="p-4 font-medium">Rating (Out of 5)</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {reviews.map((rev) => (
              <tr key={rev.empId} className="hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="font-medium text-slate-800">{rev.name}</div>
                  <div className="text-slate-400 text-xs">{rev.empId}</div>
                </td>
                <td className="p-4 text-slate-600">{rev.reviewDate}</td>
                <td className="p-4">
                  {rev.status === "Completed" ? (
                    <div className="flex items-center gap-1 text-wolt-orange font-bold">
                      <Star className="w-4 h-4 fill-wolt-orange" />
                      {rev.rating}
                    </div>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    rev.status === "Completed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {rev.status}
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
