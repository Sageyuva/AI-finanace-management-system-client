"use client";
import Cookies from "js-cookie";
import {
  LayoutDashboard,
  LogOut,
  ArrowRightLeft,
  Settings,
  BotMessageSquare,
  Menu,
  Sparkles,
  ChevronRight,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

function Logo({ expanded }: { expanded: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 ring-1 ring-white/20 transition-all hover:scale-105">
        <Sparkles className="h-5 w-5 text-primary-foreground" />
      </div>
      {expanded && (
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-none tracking-tight text-foreground">
            Finura
          </span>
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-0.5">
            Intelligence
          </span>
        </div>
      )}
    </div>
  );
}

function SidebarComponent() {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/auth/login");
  };
  const pathname = usePathname();
  const { toggleSidebar, state, isMobile } = useSidebar();

  const mainNav = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Transactions",
      href: "/transactions",
      icon: ArrowRightLeft,
    },
    {
      title: "AI Assistant",
      href: "/chat",
      icon: BotMessageSquare,
      badge: "Pro",
    },
  ];

  const userSettings = [
    {
      title: "General Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  const isExpanded = state === "expanded" || isMobile;

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="border-none shadow-xl"
    >
      <SidebarHeader className="h-20 flex flex-row items-center justify-between px-4 pb-0 border-none">
        <Logo expanded={isExpanded} />
        {!isMobile && (
          <button
            onClick={toggleSidebar}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-lg border bg-background transition-all hover:bg-accent hover:text-accent-foreground",
              !isExpanded && "absolute -right-3 top-6"
            )}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </button>
        )}
      </SidebarHeader>

      <SidebarContent className="px-3 gap-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest px-2 mb-2">
            Insights & Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        "h-10 px-3 transition-all duration-200 hover:scale-[1.02]",
                        isActive
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center w-full"
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )}
                        />
                        <span className="ml-3 font-medium">{item.title}</span>
                        {item.badge && isExpanded && (
                          <span className="ml-auto px-1.5 py-0.5 text-[9px] font-black bg-primary/20 text-primary rounded-full uppercase">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest px-2 mb-2">
            Configuration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {userSettings.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="h-10 px-3 transition-all duration-200"
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span className="ml-3 font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto border-none">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-12 px-3 rounded-xl bg-destructive/5 text-destructive hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
              tooltip="Logout"
            >
              <button
                onClick={handleLogout}
                className="flex items-center w-full cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span className="ml-3 font-semibold">Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarComponent;
