"use client";

import React from "react";
import { Wallet } from "lucide-react";

const TotalBalance = () => {
  const totalBalance = 2450.75;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-2xl">
      <div className="p-1.5 bg-primary/20 rounded-lg">
        <Wallet className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none">
          Total Balance
        </span>
        <span className="text-sm font-black text-foreground tracking-tight">
          $
          {totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
};

export default TotalBalance;
