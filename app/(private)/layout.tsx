"use client";
import Sidebar from "@/components/Sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset className="bg-linear-to-br from-background via-background to-primary/5">
        {/* Mobile Header - Glass effect via Tailwind */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-6 md:hidden sticky top-0 z-10">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border/60 mx-2" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-[10px] font-bold text-primary-foreground">
                F
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Finura
            </span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 animate-in fade-in duration-700">
          <div className="mx-auto h-full w-full">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
