import { FileText, Download, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
  { name: "Employee Code of Conduct.pdf", size: "2.4 MB", type: "Policy", date: "2025-12-01" },
  { name: "Health Insurance Plan 2026.pdf", size: "1.1 MB", type: "Benefits", date: "2026-01-10" },
  { name: "Expense Claim Form.xlsx", size: "45 KB", type: "Form", date: "2024-05-15" },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">HR Documents</h2>
          <p className="text-slate-500">Central repository for foundation policies and forms.</p>
        </div>
        <Button className="bg-wolt-blue hover:bg-wolt-blue/90 text-white flex items-center gap-2">
          <UploadCloud className="w-4 h-4" /> Upload Document
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {docs.map((doc, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                {doc.type}
              </span>
            </div>
            <h3 className="font-semibold text-slate-800 truncate" title={doc.name}>{doc.name}</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">{doc.size} • Uploaded {doc.date}</p>
            
            <Button variant="outline" className="mt-auto w-full flex gap-2">
              <Download className="w-4 h-4" /> Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
