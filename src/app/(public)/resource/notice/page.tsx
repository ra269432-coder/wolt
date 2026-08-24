import { Bell, FileText, Download } from "lucide-react";
import Link from "next/link";

export default function NoticePage() {
  const notices = [
    {
      title: "Tender Notice for Construction of Cyclone Shelters in Khulna",
      date: "October 10, 2024",
      type: "Tender",
      ref: "WOLT/TEND/24-102"
    },
    {
      title: "Call for Applications: Primary School Teachers in Rural Cohort",
      date: "September 25, 2024",
      type: "Recruitment",
      ref: "WOLT/HR/24-089"
    },
    {
      title: "Notice of Annual General Meeting (AGM) 2024",
      date: "September 05, 2024",
      type: "Corporate",
      ref: "WOLT/CORP/24-001"
    },
    {
      title: "Approved Vendor List Update for Medical Supplies 2024-25",
      date: "August 18, 2024",
      type: "Procurement",
      ref: "WOLT/PROC/24-045"
    },
    {
      title: "Holiday Notice: Eid-ul-Fitr Office Closures",
      date: "April 02, 2024",
      type: "General",
      ref: "WOLT/HR/24-022"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Bell className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Official Notices</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Tenders, recruitment circulars, and official organizational announcements.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs font-bold tracking-wider">
                  <th className="p-6">Date</th>
                  <th className="p-6">Type</th>
                  <th className="p-6">Notice Title & Reference</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {notices.map((notice, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="p-6 text-sm font-medium text-slate-600 whitespace-nowrap">{notice.date}</td>
                    <td className="p-6 whitespace-nowrap">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-full">
                        {notice.type}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="text-slate-900 font-bold mb-1 group-hover:text-blue-600 transition-colors">{notice.title}</p>
                      <p className="text-xs text-slate-400 font-mono">Ref: {notice.ref}</p>
                    </td>
                    <td className="p-6 text-right">
                      <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg">
                        <Download className="w-4 h-4" /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
