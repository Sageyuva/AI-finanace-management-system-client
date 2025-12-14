"use client"
import Link from "next/link";
import { toast } from "sonner";
import { Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { signInApi } from "@/lib/api/userAuth/userAuthApi";
import Cookies from "js-cookie";
export default function SignInPage() {


    const [email, setEmail] = useState('')
    const[ password, setPassword] = useState('')

  const signIn = async() => {
try {
    const signin = await signInApi({email,password})
    const token = signin
    console.log(signin)
 Cookies.set("token",token)
    toast.success("Signin Success")
    setTimeout(() => {
        window.location.href = "/home"
    }, 1000);
} catch (error) {
    console.log(error)
    toast.error("Signin Failed")
}    
  }


    return (
    <div className="w-full bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-sm">
          Enter your credentials to access your finance dashboard.
        </p>
      </div>

      <form className="space-y-6">
        {/* 2. Email Input */}
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="email">Email Address</label>
            <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
                    <Mail size={18} />
                </div>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans"
                    placeholder="name@example.com"
                />
            </div>
        </div>

        {/* 3. Password Input */}
        <div className="space-y-2">
             <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
            </div>
            <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
                    <Lock size={18} />
                </div>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    id="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans"
                    placeholder="••••••••"
                />
                {/* Visual-only Eye Icon */}
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <Eye size={18} />
                </button>
            </div>
        </div>

        {/* 4. Remember Me */}
        <div className="flex items-center space-x-2">
            <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-white/10 bg-white/5 text-emerald-600 focus:ring-emerald-500/50 focus:ring-offset-0 cursor-pointer"
            />
            <label htmlFor="remember" className="text-sm text-gray-400 select-none cursor-pointer">
                Remember me for 30 days
            </label>
        </div>

        {/* 5. Sign In Button */}
        <button 
        onClick={signIn}
            type="button" 
            className="w-full py-3 px-4 bg-[#108981] hover:bg-[#0d746d] text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
        >
            Sign In <ArrowRight size={18} />
        </button>
      </form>
      
      {/* 6. Sign Up Link */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
            Sign Up
        </Link>
      </div>
    </div>
  )
}