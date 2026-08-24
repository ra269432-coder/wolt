import { Plus, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const employees = [
  { id: "EMP-001", name: "Rahim Uddin", role: "Field Coordinator", dept: "Relief", status: "Active", joinDate: "2023-01-15" },
  { id: "EMP-002", name: "Dr. Salma Begum", role: "Medical Officer", dept: "Health", status: "Active", joinDate: "2023-03-22" },
  { id: "EMP-003", name: "Kamal Hossain", role: "Teacher", dept: "Education", status: "On Leave", joinDate: "2023-06-10" },
  { id: "EMP-004", name: "Nusrat Jahan", role: "HR Manager", dept: "Administration", status: "Active", joinDate: "2022-11-05" },
  { id: "EMP-005", name: "Tariqul Islam", role: "Logistics Officer", dept: "Relief", status: "Active", joinDate: "2024-02-01" },
];

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Employee Management</h2>
          <p className="text-slate-500">Manage your foundation staff and volunteers.</p>
        </div>
        <Button className="bg-wolt-blue hover:bg-wolt-blue/90 text-white flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Employee
        </Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50 text-sm"
            />
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Employee ID</th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Role & Department</th>
              <th className="p-4 font-medium">Join Date</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-medium text-slate-700">{emp.id}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      {emp.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-800">{emp.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-medium text-slate-800">{emp.role}</div>
                  <div className="text-slate-500 text-xs">{emp.dept}</div>
                </td>
                <td className="p-4 text-slate-600">{emp.joinDate}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    emp.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {emp.status}
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
