"use client"

import type * as React from "react"
import { BookOpen, Bot, Command, Frame, LifeBuoy, Map, PieChart, Send, Settings2, SquareTerminal } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Alex Chen",
    email: "alex@blockdef.io",
    avatar: "/avatars/alex.jpg",
  },
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
        {
          title: "Bookmarks",
          url: "/dashboard/bookmarks",
        },
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
      title: "Threat Intelligence",
      url: "/dashboard/threat-intelligence",
      icon: BookOpen,
      items: [
        {
          title: "Attack Vectors",
          url: "/dashboard/threat-intelligence/attack-vectors",
        },
        {
          title: "Incident Reports",
          url: "/dashboard/threat-intelligence/incidents",
        },
        {
          title: "IOCs Database",
          url: "/dashboard/threat-intelligence/iocs",
        },
        {
          title: "Threat Actors",
          url: "/dashboard/threat-intelligence/actors",
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
        {
          title: "API Access",
          url: "/dashboard/tools/api",
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
      name: "DeFi Security Audit",
      url: "/dashboard/projects/defi-audit",
      icon: Frame,
    },
    {
      name: "Bridge Vulnerability Research",
      url: "/dashboard/projects/bridge-research",
      icon: PieChart,
    },
    {
      name: "MEV Attack Analysis",
      url: "/dashboard/projects/mev-analysis",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">BlockDef</span>
                  <span className="truncate text-xs">Security Research</span>
                </div>
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
