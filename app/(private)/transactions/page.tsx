"use client";
import PaginationFooter from "@/components/PaginationFooter";
import TransactionCards from "@/components/TransactionCards";
import SearchInput from "@/components/SearchInput";
import DateFilter from "@/components/DateFilter";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const page = () => {
  const handleSearch = (value: string) => {

  };

  const handleDateSelect = (date: Date | undefined) => {

  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem-2rem)] md:h-[calc(100vh-4rem-4rem)] w-full bg-background rounded-xl border shadow-sm overflow-hidden">
      {/* Fixed Header Area */}
      <div className="shrink-0 p-4 md:p-6 border-b bg-background z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Transactions
            </h2>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">
              Manage & Track
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">

            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
            <SearchInput onSearch={handleSearch} />
            <DateFilter onDateSelect={handleDateSelect} />
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <TransactionCards />
      </div>

      {/* Fixed Footer Area */}
      <div className="shrink-0 border-t bg-muted/20">
        <PaginationFooter />
      </div>
    </div>
  );
};

export default page;
