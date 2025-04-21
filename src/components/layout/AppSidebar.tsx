
import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, BrainCircuit, CheckSquare, Timer, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AppSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Tasks",
      path: "/tasks",
      icon: CheckSquare,
    },
    {
      title: "Thought Web",
      path: "/thought-web",
      icon: BrainCircuit,
    },
    {
      title: "Focus Mode",
      path: "/focus",
      icon: Timer,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="py-6 px-3">
        <div className="flex items-center gap-2 px-2">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-400 w-8 h-8 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
          </div>
          <span className="font-semibold text-xl">Astral Path</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild className={cn(
                location.pathname === item.path && "bg-secondary text-primary"
              )}>
                <Link to={item.path} className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center justify-center">
              <span className="font-medium text-white">J</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Jane Cooper</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
