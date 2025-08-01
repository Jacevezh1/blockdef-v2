"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Shield,
  Target,
  Zap,
  Users,
  Globe,
  Lock,
  TrendingUp,
} from "lucide-react";
import { ModeSwitcher } from "@/components/mode-switcher";
import { CommandMenu } from "@/components/command-menu";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description:
        "Real-time monitoring and analysis of blockchain vulnerabilities across multiple networks.",
    },
    {
      icon: Target,
      title: "Precision Analysis",
      description:
        "AI-powered vulnerability assessment with detailed impact analysis and remediation guidance.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Alerts",
      description:
        "Instant notifications for critical vulnerabilities affecting your assets and protocols.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Collaborative platform where security researchers share insights and discoveries.",
    },
    {
      icon: Globe,
      title: "Multi-Chain Coverage",
      description:
        "Comprehensive coverage across Ethereum, BSC, Polygon, Arbitrum, and 15+ other chains.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Bank-grade security infrastructure protecting sensitive vulnerability data.",
    },
  ];

  const stats = [
    { label: "Vulnerabilities Tracked", value: "50,000+", icon: Target },
    { label: "Blockchain Networks", value: "20+", icon: Globe },
    { label: "Security Researchers", value: "5,000+", icon: Users },
    { label: "Daily Scans", value: "1M+", icon: Zap },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      description:
        "Blockdef was founded by a team of blockchain security experts after the major DeFi exploits of 2021.",
    },
    {
      year: "2022",
      title: "Platform Launch",
      description:
        "Launched our first vulnerability tracking platform covering Ethereum and major DeFi protocols.",
    },
    {
      year: "2023",
      title: "Multi-Chain Expansion",
      description:
        "Extended coverage to 15+ blockchain networks and introduced AI-powered threat detection.",
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description:
        "Launched enterprise-grade security solutions and real-time monitoring capabilities.",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>About Blockdef</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">About Blockdef</h1>
              <p className="text-muted-foreground text-sm">
                Leading blockchain security intelligence platform
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">
                    Securing the Future of Web3
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Protecting billions in digital assets through advanced
                    security intelligence
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Blockdef is the world's most comprehensive blockchain security
                intelligence platform. We provide real-time vulnerability
                tracking, threat analysis, and security insights across 20+
                blockchain networks, helping developers, auditors, and
                organizations stay ahead of emerging threats in the rapidly
                evolving Web3 ecosystem.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-md font-bold">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Target className="h-5 w-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-sm">
                  To democratize blockchain security by providing comprehensive,
                  real-time vulnerability intelligence that empowers developers,
                  auditors, and organizations to build safer Web3 applications
                  and protect digital assets from emerging threats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-5 w-5" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-sm">
                  A Web3 ecosystem where security vulnerabilities are
                  identified, analyzed, and mitigated before they can cause
                  harm, creating a safer and more trustworthy blockchain
                  infrastructure for everyone.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Platform Features</CardTitle>
              <CardDescription className="text-sm">
                Comprehensive security intelligence tools and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
