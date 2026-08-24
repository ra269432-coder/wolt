import { Download, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const payroll = [
  { id: "EMP-001", name: "Rahim Uddin", role: "Field Coordinator", basic: "৳25,000", allowances: "৳5,000", netPay: "৳28,500", status: "Paid" },
  { id: "EMP-002", name: "Dr. Salma Begum", role: "Medical Officer", basic: "৳60,000", allowances: "৳15,000", netPay: "৳71,000", status: "Pending" },
  { id: "EMP-003", name: "Kamal Hossain", role: "Teacher", basic: "৳20,000", allowances: "৳3,000", netPay: "৳22,500", status: "Paid" },
  { id: "EMP-004", name: "Nusrat Jahan", role: "HR Manager", basic: "৳45,000", allowances: "৳10,000", netPay: "৳52,000", status: "Paid" },
];

export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Payroll Processing</h2>
          <p className="text-slate-500">Manage salaries, allowances, and slips for August 2026.</p>
        </div>
        <Button className="bg-wolt-green hover:bg-wolt-green/90 text-white flex items-center gap-2">
          Run Payroll
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Payroll Cost</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">৳4,50,000</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-sm font-medium text-slate-500">Processed</p>
          <p className="text-3xl font-bold text-green-600 mt-2">85%</p>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">15</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50 text-sm"
            />
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Basic Salary</th>
              <th className="p-4 font-medium">Allowances</th>
              <th className="p-4 font-medium">Net Pay</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Payslip</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {payroll.map((pay, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="font-medium text-slate-800">{pay.name}</div>
                  <div className="text-slate-500 text-xs">{pay.role}</div>
                </td>
                <td className="p-4 text-slate-600 font-mono">{pay.basic}</td>
                <td className="p-4 text-slate-600 font-mono">{pay.allowances}</td>
                <td className="p-4 font-bold text-slate-800 font-mono">{pay.netPay}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    pay.status === "Paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}>
                    {pay.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-md text-slate-500 inline-flex items-center gap-2 text-xs font-medium">
                    <FileText className="w-4 h-4" /> View
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-md text-slate-500 inline-flex items-center gap-2 text-xs font-medium ml-2">
                    <Download className="w-4 h-4" /> Download
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
