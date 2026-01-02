"use client";

import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartData = [
  { day: "Mon", spent: 120 },
  { day: "Tue", spent: 80 },
  { day: "Wed", spent: 250 },
  { day: "Thu", spent: 150 },
  { day: "Fri", spent: 300 },
  { day: "Sat", spent: 180 },
  { day: "Sun", spent: 40 },
];

const chartConfig = {
  spent: {
    label: "Spent",
    color: "var(--primary)",
  },
};

const WeeklyReport = () => {
  return (
    <Card className="h-full border shadow-sm rounded-xl overflow-hidden">
      <CardHeader className="p-6 border-b bg-muted/20">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold tracking-tight">
            Weekly Spending
          </CardTitle>
          <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Last 7 Days Overview
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSpentWeekly" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.2}
                />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="var(--border)"
              opacity={0.4}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-xs font-medium fill-muted-foreground"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs font-medium fill-muted-foreground"
              tickFormatter={(value) => `$${value}`}
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
              fillOpacity={1}
              fill="url(#colorSpentWeekly)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklyReport;
