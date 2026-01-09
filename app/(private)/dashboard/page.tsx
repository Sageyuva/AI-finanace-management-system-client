"use client"
import DailyReport from "@/components/DailyReport";
import LastTenHistory from "@/components/LastTenHistory";
import React, { useEffect, useState } from "react";
import WeeklyReport from "@/components/WeeklyReport";
import TotalBalance from "@/components/TotalBalance";
import { dashboardDataApi } from "@/lib/api/Dashboard/DashboardData";

const page = () => {

  const [WeeklyData, setWeeklyData] = useState<Array<any>>([])
  const [DailyData, setDailyData] = useState<Array<any>>([])
  const [TotalData, setTotalData] = useState<number>(0)
  const [LastTenData, setLastTenData] = useState<Array<any>>([])

  const fetchDashboardData = async () => {
    try {
      const data = await dashboardDataApi()
      const userData = data.data
      setTotalData(userData.userBalance)
      setWeeklyData(userData.weekTransactions)
      setDailyData(userData.todayTransactions)
      setLastTenData(userData.last10Transactions)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

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
        <TotalBalance totalBalance={TotalData} />
      </div>

      {/* Restored 3-Block Symmetry */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Daily Stats (1/3) */}
        <div className="lg:col-span-4 h-full">
          <DailyReport dailyTransactions={DailyData} />
        </div>

        {/* Right: Weekly Chart (2/3) */}
        <div className="lg:col-span-8 h-full">
          <WeeklyReport weeklyTransactions={WeeklyData} />
        </div>
      </div>

      {/* Bottom: Full Width Activity */}
      <div className="w-full pt-4">
        <LastTenHistory lastTenData={LastTenData} />
      </div>
    </div>
  );
};

export default page;
