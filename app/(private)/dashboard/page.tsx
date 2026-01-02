import DailyReport from "@/components/DailyReport";
import LastTenHistory from "@/components/LastTenHistory";
import React from "react";
import WeeklyReport from "@/components/WeeklyReport";
import TotalBalance from "@/components/TotalBalance";

const page = () => {
  return (
    <div className="flex-1 space-y-8 p-0 max-w-[1500px] mx-auto pb-10">
      <div className="flex flex-row items-center justify-between pb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            Dashboard
          </h2>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
            Account Overview
          </p>
        </div>

        {/* Discrete Balance Stat */}
        <TotalBalance />
      </div>

      {/* Restored 3-Block Symmetry */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Daily Stats (1/3) */}
        <div className="lg:col-span-4 h-full">
          <DailyReport />
        </div>

        {/* Right: Weekly Chart (2/3) */}
        <div className="lg:col-span-8 h-full">
          <WeeklyReport />
        </div>
      </div>

      {/* Bottom: Full Width Activity */}
      <div className="w-full pt-4">
        <LastTenHistory />
      </div>
    </div>
  );
};

export default page;
