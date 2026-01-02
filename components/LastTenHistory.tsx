"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const recentTransactions = [
  { id: 1, category: "Groceries", amount: 45.2, date: "2:45 PM" },
  { id: 2, category: "Coffee", amount: 5.5, date: "10:15 AM" },
  { id: 3, category: "Electronics", amount: 899.0, date: "Yesterday" },
  { id: 4, category: "Rent", amount: 1200.0, date: "Yesterday" },
  { id: 5, category: "Transport", amount: 12.0, date: "2 days ago" },
];

const LastTenHistory = () => {
  return (
    <Card className="border shadow-sm rounded-xl overflow-hidden">
      <CardHeader className="p-6 border-b bg-muted/20 flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold tracking-tight">
            Recent Activity
          </CardTitle>
          <CardDescription className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Last 10 Movements
          </CardDescription>
        </div>
        <button className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1 uppercase tracking-wider">
          View All Transactions <ArrowRight className="h-3 w-3" />
        </button>
      </CardHeader>

      <CardContent className="p-6">
        <div className="divide-y divide-border">
          {recentTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between py-4 first:pt-0 last:pb-0 group hover:bg-muted/5 transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-foreground">
                  {tx.category}
                </h4>
                <p className="text-[11px] font-medium text-muted-foreground">
                  {tx.date}
                </p>
              </div>
              <div className="text-right space-y-0.5">
                <p className="text-sm font-bold text-destructive">
                  -$
                  {tx.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <div className="flex items-center justify-end gap-1 px-1.5 py-0.5 bg-muted rounded text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">
                  Completed
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LastTenHistory;
