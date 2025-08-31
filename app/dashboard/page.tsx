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
import {
  AlertTriangle,
  Shield,
  Clock,
  ArrowUpRight,
  Search,
  Bug,
  Zap,
  Code,
  FileSearch,
  Scan,
  Target,
  Wrench,
} from "lucide-react";
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

const getToolIcon = (toolName: string, category: string) => {
  const name = toolName.toLowerCase();
  const cat = category.toLowerCase();

  if (name.includes("slither") || cat.includes("analyzer")) return Search;
  if (name.includes("mythril") || cat.includes("symbolic")) return Bug;
  if (name.includes("echidna") || cat.includes("fuzzer")) return Zap;
  if (name.includes("manticore") || cat.includes("execution")) return Code;
  if (name.includes("securify") || cat.includes("verification"))
    return FileSearch;
  if (name.includes("smartcheck") || cat.includes("scanner")) return Scan;
  if (name.includes("oyente") || cat.includes("detector")) return Target;

  return Wrench; // default icon
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
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
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

        <div className="flex flex-1 flex-col gap-4 p-6 pt-2">
          <div className="space-y-1 mt-4">
            <h1 className="text-[0.8rem] font-semibold tracking-tight">
              BlockDef Security Dashboard
            </h1>
            <p className="text-xs text-muted-foreground">
              Monitor smart contract vulnerabilities, security tools, and
              research insights
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sx">
                  <AlertTriangle className="size-3.5 text-red-500" />
                  Security Weaknesses
                </CardTitle>
                <CardDescription className="text-xs">
                  Displayed from the Smart Contract Security Weakness
                  Enumeration (SCWE) maintained by OWASP —{" "}
                  <a
                    href="https://scs.owasp.org/SCWE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    SCWE
                  </a>
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
                        <span className="font-medium text-xs">
                          {vulnerability.title}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {vulnerability.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />A few days ago
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`${vulnerability.id}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
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
                <CardTitle className="text-sx">
                  Blockchain Security Tools
                </CardTitle>
                <CardDescription className="text-xs">
                  Essential tools for smart contract security analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityTools.map((tool: SecurityTool) => {
                    const IconComponent = getToolIcon(tool.name, tool.category);
                    return (
                      <div
                        key={tool.id}
                        className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <IconComponent
                          className={`w-4 h-4 ${tool.textColor}`}
                        />
                        <div>
                          <Link
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p className="text-xs font-medium hover:text-blue-600 cursor-pointer">
                              {tool.name} - {tool.category}
                            </p>
                          </Link>
                          <p className="text-xs text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sx">
                  Trending Research
                </CardTitle>
                <CardDescription className="text-xs">
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
                          <p className="text-xs font-medium leading-tight hover:text-blue-600 cursor-pointer">
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
                <CardTitle className="text-sx">
                  Security Best Practices
                </CardTitle>
                <CardDescription className="text-xs">
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
                          <p className="text-xs font-medium hover:text-blue-600 cursor-pointer">
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
