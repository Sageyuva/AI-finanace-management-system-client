"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Wallet, TrendingUp } from "lucide-react";
import { Area, AreaChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const dailyChartData = [
  { time: "9AM", spent: 10 },
  { time: "11AM", spent: 45 },
  { time: "1PM", spent: 120 },
  { time: "3PM", spent: 80 },
  { time: "5PM", spent: 170 },
];

const chartConfig = {
  spent: {
    label: "Spent",
    color: "var(--primary)",
  },
};

const DailyReport = () => {
  const dailyTotal = 425.5;
  const percentageChange = 12.5;

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
              <TrendingUp className="h-3 w-3 text-destructive" />
              <span className="text-[11px] font-bold text-destructive">
                +{percentageChange}%
              </span>
            </div>
            <span className="text-[11px] font-medium text-muted-foreground">
              vs. yesterday
            </span>
          </div>
        </div>

        <div className="h-24 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <AreaChart data={dailyChartData}>
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
