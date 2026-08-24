import { Plus, Search, MoreVertical, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { id: "JOB-101", title: "Medical Officer", department: "Health", location: "Sylhet", status: "Active", applicants: 45 },
  { id: "JOB-102", title: "Field Coordinator", department: "Relief", location: "Barisal", status: "Active", applicants: 12 },
  { id: "JOB-103", title: "Primary Teacher", department: "Education", location: "Dhaka", status: "Closed", applicants: 89 },
];

export default function RecruitmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Recruitment & Hiring</h2>
          <p className="text-slate-500">Manage job postings and applicant tracking.</p>
        </div>
        <Button className="bg-wolt-blue hover:bg-wolt-blue/90 text-white flex items-center gap-2">
          <Plus className="w-4 h-4" /> Post New Job
        </Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-4 border-b flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search job postings..." 
              className="w-full pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50 text-sm"
            />
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b text-sm text-slate-500">
              <th className="p-4 font-medium">Job Title</th>
              <th className="p-4 font-medium">Department</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Applicants</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">{job.title}</div>
                      <div className="text-slate-400 text-xs">{job.id}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-600">{job.department}</td>
                <td className="p-4 text-slate-600">{job.location}</td>
                <td className="p-4 font-medium text-slate-800">{job.applicants}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    job.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {job.status}
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
