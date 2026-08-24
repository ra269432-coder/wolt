import { Check, X, Search } from "lucide-react";

const requests = [
  { id: "LR-101", name: "Kamal Hossain", type: "Sick Leave", dates: "2026-08-15 to 2026-08-17", status: "Approved" },
  { id: "LR-102", name: "Rahim Uddin", type: "Annual Leave", dates: "2026-09-01 to 2026-09-05", status: "Pending" },
  { id: "LR-103", name: "Tariqul Islam", type: "Casual Leave", dates: "2026-08-22", status: "Pending" },
  { id: "LR-104", name: "Dr. Salma Begum", type: "Emergency Leave", dates: "2026-08-10", status: "Rejected" },
];

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Leave Management</h2>
        <p className="text-slate-500">Approve or reject employee leave requests.</p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search requests..." 
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50 text-sm"
            />
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Request ID</th>
              <th className="p-4 font-medium">Employee Name</th>
              <th className="p-4 font-medium">Leave Type</th>
              <th className="p-4 font-medium">Dates</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-medium text-slate-700">{req.id}</td>
                <td className="p-4 font-medium text-slate-800">{req.name}</td>
                <td className="p-4 text-slate-600">{req.type}</td>
                <td className="p-4 text-slate-600">{req.dates}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    req.status === "Approved" ? "bg-green-100 text-green-700" : 
                    req.status === "Pending" ? "bg-orange-100 text-orange-700" : 
                    "bg-red-100 text-red-700"
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  {req.status === "Pending" ? (
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 border border-green-200" title="Approve">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 border border-red-200" title="Reject">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs">Processed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
