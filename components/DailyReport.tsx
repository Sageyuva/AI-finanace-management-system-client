"use client";

import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Wallet, TrendingUp } from "lucide-react";
import { Area, AreaChart, XAxis, Tooltip } from "recharts";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

interface Transaction {
  _id: string;
  amount: number;
  type: "credit" | "debit";
  category: string;
  description: string;
  date: string;
}

const chartConfig = {
  spent: {
    label: "Spent",
    color: "var(--primary)",
  },
};

const DailyReport = ({ dailyTransactions = [] }: { dailyTransactions: Transaction[] }) => {

  const { dailyTotal, chartData } = useMemo(() => {
    let total = 0;
    const hourlyData: { [key: number]: number } = {};

    // Initialize all hours with 0
    for (let i = 0; i < 24; i++) {
      hourlyData[i] = 0;
    }

    if (dailyTransactions && dailyTransactions.length > 0) {
      dailyTransactions.forEach((t: any) => {
        // Robust type check
        const type = t.type ? String(t.type).toLowerCase().trim() : "";
        if (type === "debit") {
          const amount = Number(t.amount) || 0;
          total += amount;

          // Robust date parsing: prioritize date, fallback to createdAt, then default to now (to ensuring data shows up)
          const dateStr = t.date || t.createdAt;
          const date = dateStr ? new Date(dateStr) : new Date();

          const hour = date.getHours();
          if (!isNaN(hour)) {
            hourlyData[hour] = (hourlyData[hour] || 0) + amount;
          }
        }
      });
    }

    // Create chart data for all hours
    const data = Object.keys(hourlyData)
      .map((hour) => parseInt(hour))
      .sort((a, b) => a - b)
      .map((hour) => {
        const ampm = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return {
          time: `${hour12}${ampm}`,
          originalHour: hour,
          spent: hourlyData[hour],
        };
      });

    return { dailyTotal: total, chartData: data };
  }, [dailyTransactions]);

  const percentageChange = 12.5; // Static for now as we don't have yesterday's data

  return (
    <Card className="h-full border shadow-sm rounded-xl overflow-hidden">
      <CardHeader className="p-6 border-b bg-muted/20 flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold tracking-tight">
            Daily Spending
          </CardTitle>
          <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Today's Total
          </CardDescription>
        </div>
        <div className="p-2 bg-primary/10 rounded-lg">
          <Wallet className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col justify-between gap-6">
        <div className="space-y-1">
          <p className="text-4xl font-bold tracking-tight text-foreground">
            $
            {dailyTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
          <div className="flex items-center gap-1.5 pt-1">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-destructive/10 rounded-full">
              {/* <TrendingUp className="h-3 w-3 text-destructive" /> */}
              {/* <span className="text-[11px] font-bold text-destructive">
                +{percentageChange}%
              </span> */}
            </div>
            {/* <span className="text-[11px] font-medium text-muted-foreground">
              vs. yesterday
            </span> */}
          </div>
        </div>

        <div className="h-24 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient
                  id="colorSpentDailyStatic"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--primary)"
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--primary)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                hide
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ stroke: "var(--primary)", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="spent"
                stroke="var(--primary)"
                strokeWidth={2}
                fill="url(#colorSpentDailyStatic)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyReport;
