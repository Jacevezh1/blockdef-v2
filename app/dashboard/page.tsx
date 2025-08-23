import type React from "react";
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
import { AlertTriangle, Shield, Clock, ArrowUpRight } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { vulnerabilities } from "@/data/vulnerabilities";
import {
  getNavigationCards,
  getSecurityTools,
  getTrendingResearch,
  getAllBestPractices,
} from "@/data/dashboard";
import type {
  NavigationCard,
  SecurityTool,
  ResearchTopic,
  BestPractice,
} from "@/types/dashboard";
import Link from "next/link";

/* type IconName = "shield-alert" | "book-open" | "wrench" | "file-text"; */

/* const getIconComponent = (
  iconName: string
): React.ComponentType<{ className?: string }> => {
  const icons: Record<IconName, React.ComponentType<{ className?: string }>> = {
    "shield-alert": AlertTriangle,
    "book-open": BookOpen,
    wrench: Wrench,
    "file-text": FileText,
  };
  return icons[iconName as IconName] || FileText;
}; */

type ColorName = "red" | "blue" | "green" | "purple";

const getColorClasses = (color: string): string => {
  const colorMap: Record<ColorName, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };
  return colorMap[color as ColorName] || "text-gray-500";
};

export default function Page() {
  const navigationCards: NavigationCard[] = getNavigationCards();
  const securityTools: SecurityTool[] = getSecurityTools();
  const trendingResearch: ResearchTopic[] = getTrendingResearch();
  const bestPractices: BestPractice[] = getAllBestPractices();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-6 pt-0">
          {/*  <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 mt-4">
            {navigationCards.map((card: NavigationCard) => {
              const IconComponent = getIconComponent(card.icon);
              const colorClass = getColorClasses(card.color);

              return (
                <Link key={card.id} href={card.href}>
                  <Card
                    className={`cursor-pointer hover:shadow-md transition-shadow duration-200`}
                  >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                      <CardTitle className="text-sm font-semibold">
                        {card.title}
                      </CardTitle>
                      <div className="p-2 rounded-lg bg-gray-50">
                        <IconComponent className={`h-4 w-4 ${colorClass}`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm font-bold mb-1">
                        {card.count} Items
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div> */}

          {/* Main Content Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="size-3.5 text-red-500" />
                  Recently Added
                </CardTitle>
                <CardDescription className="text-sm">
                  Latest security vulnerabilities newly added to the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {vulnerabilities.slice(0, 3).map((vulnerability) => (
                  <div
                    key={vulnerability.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            vulnerability.severity === "Critical"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {vulnerability.severity}
                        </Badge>
                        <span className="font-medium text-sm">
                          {vulnerability.title}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {vulnerability.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />A few days ago
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {vulnerability.severity === "Critical"
                            ? "41 views"
                            : vulnerability.severity === "High"
                            ? "23 views"
                            : "15 views"}
                        </span> */}
                      </div>
                    </div>
                    <Link
                      href={`/dashboard/vulnerabilities/smart-contracts/${vulnerability.id}`}
                      target="_blank"
                    >
                      <Button variant="outline" size="sm">
                        <ArrowUpRight className="size-4" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Blockchain Security Tools
                </CardTitle>
                <CardDescription className="text-sm">
                  Essential tools for smart contract security analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityTools.map((tool: SecurityTool) => (
                    <div
                      key={tool.id}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div
                        className={`w-2 h-2 ${tool.textColor.replace(
                          "text-",
                          "bg-"
                        )} rounded-full`}
                      ></div>
                      <div>
                        <Link
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-sm font-medium hover:text-blue-600 cursor-pointer">
                            {tool.name} - {tool.category}
                          </p>
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  Trending Research
                </CardTitle>
                <CardDescription className="text-sm">
                  External security research for this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {trendingResearch.map((research: ResearchTopic, index) => (
                  <div key={research.id}>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="text-xs mt-0.5">
                        {research.category}
                      </Badge>
                      <div className="space-y-2 flex-1">
                        <Link
                          href={research.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-sm font-medium leading-tight hover:text-blue-600 cursor-pointer">
                            {research.title}
                          </p>
                        </Link>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {research.description}
                        </p>
                      </div>
                    </div>
                    {index < trendingResearch.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Security Best Practices
                </CardTitle>
                <CardDescription className="text-sm">
                  Recommended security guidelines and practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bestPractices.map((practice: BestPractice) => (
                    <div key={practice.id} className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <Link
                          href={practice.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-sm font-medium hover:text-blue-600 cursor-pointer">
                            {practice.title}
                          </p>
                        </Link>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
