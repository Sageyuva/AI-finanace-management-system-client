"use client"

import Link from "next/link";
import { Loader2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { verityAccount } from "@/lib/api/userAuth/userAuthApi";

export default function VerifyPage() {
  // Status state: 'loading' | 'success' | 'error'
  // Initializing to 'loading' to show the initial state.
  // user will implement the actual API logic later.
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

const verifyAccount = async(userId : string , token : string) => {
    try {
      const verify =await  verityAccount(userId,token)
      if(verify?.status === 200){
        setStatus('success')
      }
    } catch (error) {
      setStatus('error')
    }
}

  // SIMULATION: Demo visual transition (Remove this useEffect when integrating API)
  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get("userId")
    const token = new URLSearchParams(window.location.search).get("token")
    verifyAccount(userId!,token!)
  }, []);

  return (
    <div className="w-full bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center justify-center text-center">
      
      {/* 1. Loading State */}
      {status === 'loading' && (
        <div className="space-y-6">
            <div className="relative flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                <Loader2 className="w-16 h-16 text-emerald-500 animate-spin relative z-10" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-white">Verifying Account</h1>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    Please wait while we securely verify your credentials. This won't take long.
                </p>
            </div>
        </div>
      )}

      {/* 2. Success State */}
      {status === 'success' && (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
            <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                 <CheckCircle2 className="w-20 h-20 text-emerald-500 relative z-10" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-white">Verification Successful</h1>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    Your account has been verified. You now have full access to the Finura dashboard.
                </p>
            </div>
            <div className="pt-4">
                 <Link 
                    href="/auth/signin" 
                    className="w-full py-3 px-8 bg-[#108981] hover:bg-[#0d746d] text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:scale-[1.01] inline-flex items-center justify-center gap-2"
                >
                    Continue to Sign In <ArrowRight size={18} />
                </Link>
            </div>
        </div>
      )}

      {/* 3. Error State */}
      {status === 'error' && (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
             <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                 <XCircle className="w-20 h-20 text-red-500 relative z-10" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-white">Verification Failed</h1>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    We couldn't verify your account. The link may be invalid or expired.
                </p>
            </div>
             <div className="pt-4 flex flex-col gap-3">
                 <button 
                    onClick={() => window.location.reload()}
                    className="w-full py-3 px-8 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold rounded-lg transition-all duration-200"
                >
                    Try Again
                </button>
                 <Link href="/auth/signin" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Back to Sign In
                </Link>
            </div>
        </div>
      )}

    </div>
  )
}