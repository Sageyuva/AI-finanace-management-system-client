import React from 'react';

const App = () => {
  return (
    // 1. Background: "App Background (Deepest)" with "Finura Gradient" vibe
    <div className="min-h-screen bg-navy-deep relative flex items-center justify-center overflow-hidden font-sans selection:bg-brand selection:text-white">
      
      {/* Background Gradient Orbs (Visual Effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-ai/20 rounded-full blur-[120px]" />

      {/* 2. The "Glass" Card (Core Container) - Centered */}
      <div className="relative z-10 max-w-2xl mx-4 p-8 md:p-14 
        bg-navy-surface/50 backdrop-blur-md 
        border border-white/10 rounded-2xl shadow-2xl text-center flex flex-col items-center">
        
        {/* Logo / Brand Name with Gradient Text */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-brand to-ai bg-clip-text text-transparent">
            Finura
          </span>
        </h1>

        {/* Status Badge (Mono font for data-like feel) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand/30 bg-brand/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span className="text-brand font-mono text-sm font-medium tracking-wide uppercase">
            Coming Soon
          </span>
        </div>

        {/* 3. Summary (Based on your Project Vision) */}
        <p className="text-slate-300 text-lg md:text-2xl leading-relaxed max-w-lg mx-auto">
          We are building India's intelligent, <span className="text-white font-semibold">fully automated personal finance assistant</span>. 
        </p>
        
        <p className="text-slate-400 text-base md:text-lg mt-4 max-w-lg mx-auto">
           Finura uses AI to ingest data, categorize expenses, and predict your financial future—so you can master your money without the manual effort.
        </p>

        {/* Footer Text / Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 w-full">
            <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">
            v1.0 • AI-Powered Finance
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
