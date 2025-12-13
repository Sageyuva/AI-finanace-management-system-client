import { Wallet, PieChart, TrendingUp, Bot, ArrowUpRight, Activity } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2 min-h-[600px] bg-black text-white overflow-hidden">
      
      {/* LEFT SIDE (Branding / Dashboard Showcase) */}
      <div className="hidden lg:flex relative flex-col items-center justify-center bg-[#1E1B4B] overflow-hidden">
        
        {/* Background Effects (Studio Lighting) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[128px] pointer-events-none" />
        
        {/* Logo Area */}
        <div className="absolute top-12 left-12 z-20">
           <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-indigo-500 flex items-center justify-center">
               <span className="text-white text-lg font-bold">F</span>
             </div>
             Finura.
           </h1>
        </div>

        {/* 3D Tilted Dashboard Showcase Container */}
        <div className="relative z-10 p-10 transition-transform duration-700 hover:scale-[1.02] [transform:perspective(2000px)_rotateX(5deg)_rotateY(10deg)_rotateZ(-2deg)_scale(0.9)]">
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 gap-4 w-[600px]">
            
            {/* Card 1: Total Balance (Wide) */}
            <div className="col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-xl bg-white/10 text-emerald-400">
                  <Wallet size={24} />
                </div>
                <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded-full">
                  <TrendingUp size={14} /> +12.5%
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Total Balance</p>
                <h2 className="text-4xl font-bold tracking-tight text-white">$124,592.00</h2>
              </div>
            </div>

            {/* Card 2: AI Insights (Tall - Left) */}
            <div className="row-span-2 p-6 rounded-2xl bg-indigo-950/40 backdrop-blur-xl border border-indigo-500/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/30 blur-2xl rounded-full" />
               
               <div className="space-y-4">
                  <div className="flex items-center gap-2 text-violet-300 mb-2">
                    <Bot size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">AI Insight</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Based on your spending habits, you could save <span className="text-white font-bold">$400</span> by optimizing subscription renewals.
                  </p>
                  
                  <div className="space-y-3 mt-4">
                     <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 w-[75%]" />
                     </div>
                     <p className="text-xs text-violet-300">Optimization Score: 92/100</p>
                  </div>
               </div>

               <button className="mt-6 w-full py-2 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 rounded-lg text-sm text-violet-200 transition-colors cursor-pointer">
                 View Details
               </button>
            </div>

            {/* Card 3: Recent Activity (Square - Right) */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-200">Activity</h3>
                <Activity size={16} className="text-gray-500" />
              </div>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                         <ArrowUpRight size={14} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Netflix</p>
                        <p className="text-[10px] text-gray-500">Subscription</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-300">-$15.99</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Card 4: Monthly Target (Wide Bottom) */}
             <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-transparent backdrop-blur-xl border border-white/10 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                     <PieChart size={24} />
                   </div>
                   <div>
                      <p className="text-sm text-gray-400">Monthly Budget</p>
                      <p className="text-xl font-bold text-white">68% <span className="text-sm font-normal text-gray-500">used</span></p>
                   </div>
                </div>
                
                {/* Simple CSS Line Chart visualization */}
                <div className="flex gap-1 items-end h-8">
                   {[40, 70, 45, 90, 60, 80].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className={`w-1.5 rounded-t-sm ${i === 3 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                   ))}
                </div>
             </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE (The Form injects here) */}
      <div className="flex items-center justify-center p-8 bg-[#020617] relative">
         {/* Subtle pattern for the right side */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
         
        <div className="w-full max-w-md space-y-6 relative z-10">
          {children}
        </div>
      </div>
      
    </div>
  )
}