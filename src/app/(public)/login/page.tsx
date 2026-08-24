"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock Auth Logic
    const lowercaseEmail = email.toLowerCase();
    if (lowercaseEmail.includes("admin") || lowercaseEmail.includes("hr")) {
      // HR/Admin accounts (pre-created) go to the dashboard
      router.push("/hr/dashboard");
    } else {
      // Normal users just go back home (no normal user dashboard needed yet)
      router.push("/");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-wolt-blue mb-2">Welcome Back</h1>
          <p className="text-slate-500">Sign in to your WOLT account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wolt-blue/50"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded text-wolt-blue" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <Link href="#" className="text-wolt-blue hover:underline">Forgot password?</Link>
          </div>

          <Button type="submit" className="w-full bg-wolt-blue hover:bg-wolt-blue/90 text-white rounded-lg py-6 text-lg">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-wolt-orange font-semibold hover:underline">
            Create one now
          </Link>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 text-blue-800 text-xs rounded-lg text-center">
          <strong>Demo Info:</strong> Use an email containing &quot;admin&quot; or &quot;hr&quot; to access the Admin/HR Dashboard. Any other email logs you in as a regular user.
        </div>
      </div>
    </div>
  );
}
