"use client";

import type * as React from "react";
import {
  BookOpen,
  Bot,
  Map,
  Search,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        /* {
          title: "Overview",
          url: "/dashboard",
        }, */
        /*         {
          title: "Recent Alerts",
          url: "/dashboard/alerts",
        }, */
        /*         {
          title: "Bookmarks",
          url: "/dashboard/bookmarks",
        }, */
      ],
    },
    {
      title: "Vulnerabilities",
      url: "/dashboard/vulnerabilities",
      icon: Bot,
      items: [
        /*   {
          title: "Critical CVEs",
          url: "/dashboard/vulnerabilities/cves",
        }, */
        {
          title: "Smart Contract Bugs",
          url: "/dashboard/vulnerabilities/smart-contracts",
        },
        {
          title: "Protocol Exploits",
          url: "/dashboard/vulnerabilities/exploits",
        },
      ],
    },
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: BookOpen,
      items: [
        /*  {
          title: "Latest News",
          url: "/dashboard/news",
        },
        {
          title: "Security Alerts",
          url: "/dashboard/news?category=security",
        },
        {
          title: "Research Updates",
          url: "/dashboard/news?category=research",
        },
        {
          title: "Tool Releases",
          url: "/dashboard/news?category=tools",
        }, */
      ],
    },
    {
      title: "Research Tools",
      url: "/dashboard/tools",
      icon: Settings2,
      items: [
        /* {
          title: "Code Analysis",
          url: "/dashboard/tools/code-analysis",
        },
        {
          title: "Network Scanner",
          url: "/dashboard/tools/network-scanner",
        },
        {
          title: "Transaction Tracer",
          url: "/dashboard/tools/transaction-tracer",
        }, */
      ],
    },
  ],
  navSecondary: [
    {
      title: "Search",
      url: "/dashboard/docs",
      icon: Search,
    },
  ],
  projects: [
    {
      name: "Coming Soon",
      url: "/dashboard",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <span className="text-SM font-semibold">BlockDef</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        {/*  <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
