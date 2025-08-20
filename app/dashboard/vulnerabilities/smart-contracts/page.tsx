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
  Code,
  Shield,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import {
  vulnerabilities,
  vulnerabilityStats,
  detectionTools,
} from "@/data/vulnerabilities";
import Link from "next/link";

export default function SmartContractBugsPage() {
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
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard/vulnerabilities">
                    Vulnerabilities
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Smart Contract Bugs</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">
                Smart Contract Vulnerability Patterns
              </h1>
              <p className="text-muted-foreground text-sm">
                Common vulnerability patterns and anti-patterns in smart
                contract development
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Patterns
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-red-600">
                  {vulnerabilityStats.critical}
                </div>
                <p className="text-xs text-muted-foreground">
                  High-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Common Issues
                </CardTitle>
                <Code className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-orange-600">
                  {vulnerabilityStats.common}
                </div>
                <p className="text-xs text-muted-foreground">
                  Frequently seen bugs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Best Practices
                </CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-green-600">
                  {vulnerabilityStats.bestPractices}
                </div>
                <p className="text-xs text-muted-foreground">
                  Prevention techniques
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tools Available
                </CardTitle>
                <Zap className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-blue-600">
                  {vulnerabilityStats.tools}
                </div>
                <p className="text-xs text-muted-foreground">Detection tools</p>
              </CardContent>
            </Card>
          </div>

          {/* Vulnerability Categories */}
          <div className="grid gap-4 md:grid-cols-2">
            {vulnerabilities.map((vulnerability) => {
              const iconMap = {
                RefreshCw,
                AlertTriangle,
                Lock,
                Zap,
              };
              const IconComponent =
                iconMap[vulnerability.icon as keyof typeof iconMap];

              return (
                <Card
                  key={vulnerability.id}
                  className={`border-${
                    vulnerability.severity === "Critical"
                      ? "red"
                      : vulnerability.severity === "High"
                      ? "orange"
                      : vulnerability.severity === "Medium"
                      ? "yellow"
                      : "blue"
                  }-200 dark:border-${
                    vulnerability.severity === "Critical"
                      ? "red"
                      : vulnerability.severity === "High"
                      ? "orange"
                      : vulnerability.severity === "Medium"
                      ? "yellow"
                      : "blue"
                  }-800`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <IconComponent
                            className={`h-5 w-5 text-${
                              vulnerability.severity === "Critical"
                                ? "red"
                                : vulnerability.severity === "High"
                                ? "orange"
                                : vulnerability.severity === "Medium"
                                ? "yellow"
                                : "blue"
                            }-500`}
                          />
                          <Badge
                            variant={
                              vulnerability.severity === "Critical"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {vulnerability.severity}
                          </Badge>
                          <Badge variant="outline">{vulnerability.swcId}</Badge>
                        </div>
                        <CardTitle className="text-sm pt-3">
                          {vulnerability.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {vulnerability.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-medium">Common in:</span>{" "}
                        {vulnerability.commonIn.join(", ")}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Famous Cases:</span>{" "}
                        {vulnerability.famousCases.join(", ")}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Prevention:</span>{" "}
                        {vulnerability.prevention.join(", ")}
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/dashboard/vulnerabilities/smart-contracts/${vulnerability.id}`}
                        >
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detection Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                Automated Detection Tools
              </CardTitle>
              <CardDescription className="text-sm">
                Static and dynamic analysis tools for smart contract
                vulnerability detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {detectionTools.map((tool) => {
                  const toolIconMap = {
                    Code,
                    Shield,
                    Zap,
                  };
                  const ToolIconComponent =
                    toolIconMap[tool.icon as keyof typeof toolIconMap];

                  return (
                    <div
                      key={tool.id}
                      className="space-y-2 p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <ToolIconComponent
                          className={`h-4 w-4 text-${tool.color}-500`}
                        />
                        <span className="font-medium text-sm">{tool.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {tool.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                      <Button size="sm" className="w-full">
                        Use Tool
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
