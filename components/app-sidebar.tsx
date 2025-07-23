"use client";

import type * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
/* import { SidebarOptInForm } from "@/components/sidebar-form"; */

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Recent Alerts",
          url: "/dashboard/alerts",
        },
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
        {
          title: "Critical CVEs",
          url: "/dashboard/vulnerabilities/cves",
        },
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
      title: "Research Tools",
      url: "/dashboard/tools",
      icon: Settings2,
      items: [
        {
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
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Documentation",
      url: "/dashboard/docs",
      icon: LifeBuoy,
    },
    {
      title: "Report Issue",
      url: "/dashboard/report",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "MEV Attack Analysis",
      url: "/dashboard/projects/mev-analysis",
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
                <Frame className="!size-4" />
                <span className="text-SM font-semibold">BLOCKDEF</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/*   <SidebarFooter>
        <SidebarOptInForm />
      </SidebarFooter> */}
    </Sidebar>
  );
}
