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
import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  CheckCircle,
  Clock,
  GitBranch,
  Shield,
  Sparkles,
  TrendingUp,
  Plus,
  Settings,
} from "lucide-react";

export default function DashboardUpdatesPage() {
  const recentUpdates = [
    {
      id: 1,
      type: "feature",
      title: "Enhanced Multi-Chain Analysis",
      description:
        "Added support for cross-chain vulnerability correlation across 5 new networks including Base and Linea.",
      date: "2024-01-15",
      version: "v2.4.0",
      status: "released",
      impact: "high",
    },
    {
      id: 2,
      type: "security",
      title: "Critical Security Patch",
      description:
        "Fixed vulnerability in API authentication that could allow unauthorized access to sensitive data.",
      date: "2024-01-12",
      version: "v2.3.2",
      status: "released",
      impact: "critical",
    },
    {
      id: 3,
      type: "improvement",
      title: "Dashboard Performance Optimization",
      description:
        "Improved loading times by 40% and reduced memory usage for large datasets.",
      date: "2024-01-10",
      version: "v2.3.1",
      status: "released",
      impact: "medium",
    },
    {
      id: 4,
      type: "feature",
      title: "AI-Powered Threat Detection",
      description:
        "Introduced machine learning models for automated vulnerability pattern recognition.",
      date: "2024-01-08",
      version: "v2.3.0",
      status: "released",
      impact: "high",
    },
  ];

  const upcomingFeatures = [
    {
      title: "Real-time Collaboration Tools",
      description:
        "Team workspaces with shared vulnerability tracking and analysis",
      eta: "Q1 2024",
      status: "in-development",
    },
    {
      title: "Advanced API Integration",
      description:
        "GraphQL API with real-time subscriptions for vulnerability feeds",
      eta: "Q1 2024",
      status: "planning",
    },
    {
      title: "Mobile Application",
      description:
        "Native iOS and Android apps for on-the-go security monitoring",
      eta: "Q2 2024",
      status: "planning",
    },
    {
      title: "Custom Alert Rules",
      description:
        "User-defined alert conditions with advanced filtering options",
      eta: "Q1 2024",
      status: "in-development",
    },
  ];

  const systemStatus = [
    {
      service: "Vulnerability Scanner",
      status: "operational",
      uptime: "99.9%",
    },
    { service: "Real-time Alerts", status: "operational", uptime: "99.8%" },
    { service: "API Gateway", status: "operational", uptime: "99.9%" },
    { service: "Data Pipeline", status: "maintenance", uptime: "99.5%" },
    { service: "Web Dashboard", status: "operational", uptime: "99.9%" },
  ];

  const changelog = [
    {
      version: "v2.4.0",
      date: "2024-01-15",
      changes: [
        { type: "added", description: "Multi-chain vulnerability correlation" },
        { type: "added", description: "Support for Base and Linea networks" },
        { type: "improved", description: "Enhanced search functionality" },
        { type: "fixed", description: "Minor UI inconsistencies in dark mode" },
      ],
    },
    {
      version: "v2.3.2",
      date: "2024-01-12",
      changes: [
        {
          type: "security",
          description: "Fixed API authentication vulnerability",
        },
        { type: "improved", description: "Enhanced rate limiting" },
      ],
    },
    {
      version: "v2.3.1",
      date: "2024-01-10",
      changes: [
        { type: "improved", description: "40% faster dashboard loading" },
        {
          type: "improved",
          description: "Reduced memory usage for large datasets",
        },
        {
          type: "fixed",
          description: "Export functionality for vulnerability reports",
        },
      ],
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <Sparkles className="h-4 w-4" />;
      case "security":
        return <Shield className="h-4 w-4" />;
      case "improvement":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-blue-500";
      case "security":
        return "bg-red-500";
      case "improvement":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "high":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-600">High</Badge>
        );
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Operational</Badge>
        );
      case "maintenance":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">
            Maintenance
          </Badge>
        );
      case "degraded":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-600">Degraded</Badge>
        );
      case "outage":
        return <Badge variant="destructive">Outage</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

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
                  <BreadcrumbPage>Dashboard Updates</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">Dashboard Updates</h1>
              <p className="text-muted-foreground text-sm">
                Latest features, improvements, and system status
              </p>
            </div>
          </div>

          {/* System Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                System Status
              </CardTitle>
              <CardDescription className="text-sm">
                Current operational status of all Blockdef services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {systemStatus.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-sm">
                        {service.service}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Uptime: {service.uptime}
                      </div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="recent" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recent" className="text-xs">
                Recent Updates
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="text-xs">
                Upcoming Features
              </TabsTrigger>
              <TabsTrigger value="changelog" className="text-xs">
                Changelog
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-6">
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <Card key={update.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-8 w-8 rounded-lg ${getTypeColor(
                            update.type
                          )} flex items-center justify-center text-white`}
                        >
                          {getTypeIcon(update.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-sm">
                              {update.title}
                            </h3>
                            {getImpactBadge(update.impact)}
                            <Badge variant="outline">{update.version}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3 text-sm">
                            {update.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1 text-xs">
                              <Clock className="h-4 w-4" />
                              {update.date}
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Released
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Plus className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-sm">
                              {feature.title}
                            </h3>
                            <Badge
                              className="text-xs"
                              variant={
                                feature.status === "in-development"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {feature.status === "in-development"
                                ? "In Development"
                                : "Planning"}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3 text-sm">
                            {feature.description}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground text-xs">
                            <Clock className="h-4 w-4" />
                            Expected: {feature.eta}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="changelog" className="space-y-6">
              <div className="space-y-6">
                {changelog.map((version, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2 text-md">
                          <GitBranch className="h-5 w-5 text-sm" />
                          {version.version}
                        </CardTitle>
                        <Badge variant="outline">{version.date}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {version.changes.map((change, changeIndex) => (
                          <div
                            key={changeIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                change.type === "added"
                                  ? "bg-green-100 text-green-700"
                                  : change.type === "improved"
                                  ? "bg-blue-100 text-blue-700"
                                  : change.type === "fixed"
                                  ? "bg-orange-100 text-orange-700"
                                  : change.type === "security"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {change.type === "added"
                                ? "+"
                                : change.type === "improved"
                                ? "↑"
                                : change.type === "fixed"
                                ? "🔧"
                                : change.type === "security"
                                ? "🛡️"
                                : "•"}
                            </div>
                            <div className="flex-1">
                              <span className="capitalize font-medium text-sm">
                                {change.type}:{" "}
                              </span>
                              <span className="text-sm">
                                {change.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
