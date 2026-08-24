"use client";

import { 
  Users, 
  UserCheck, 
  CalendarOff, 
  Briefcase 
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', hires: 4 },
  { name: 'Feb', hires: 3 },
  { name: 'Mar', hires: 7 },
  { name: 'Apr', hires: 2 },
  { name: 'May', hires: 5 },
  { name: 'Jun', hires: 8 },
];

export default function HRDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-500">Total Employees</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-800">1,248</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-500">Present Today</h3>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-800">1,180</p>
          <p className="text-sm text-slate-500 mt-2">94.5% attendance rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-500">On Leave</h3>
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <CalendarOff className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-800">42</p>
          <p className="text-sm text-slate-500 mt-2">15 pending requests</p>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-500">Open Roles</h3>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-800">18</p>
          <p className="text-sm text-blue-600 mt-2">124 applicants</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm h-[400px]">
          <h3 className="font-semibold text-lg text-slate-800 mb-6">Hiring Trend</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#f8fafc'}} />
              <Bar dataKey="hires" fill="#0b2b5b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="font-semibold text-lg text-slate-800 mb-6">Recent Leave Requests</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-medium text-slate-800">Employee Name</p>
                    <p className="text-sm text-slate-500">Sick Leave • 2 days</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded border border-green-200 hover:bg-green-100">Approve</button>
                  <button className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded border border-red-200 hover:bg-red-100">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
