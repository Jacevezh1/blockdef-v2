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
import { AlertTriangle, Zap, RefreshCw, Lock } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { vulnerabilities } from "@/data/vulnerabilities";
import Link from "next/link";

export default function SmartContractBugsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
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

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold tracking-tight text-sx">
                Smart Contract Vulnerability Patterns
              </h1>
              <p className="text-muted-foreground text-xs mt-1">
                Common vulnerability patterns and anti-patterns in smart
                contract development
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Critical</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold text-red-600">
                  {vulnerabilityStats.critical}
                </div>
                <p className="text-xs text-muted-foreground">
                  Critical-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">High</CardTitle>
                <Code className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-orange-600">
                  {vulnerabilityStats.common}
                </div>
                <p className="text-xs text-muted-foreground">
                  High-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Medium</CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">
                  {vulnerabilityStats.bestPractices}
                </div>
                <p className="text-xs text-muted-foreground">
                  Medium-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Low</CardTitle>
                <Zap className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-blue-600">
                  {vulnerabilityStats.tools}
                </div>
                <p className="text-xs text-muted-foreground">
                  Low-impact vulnerabilities
                </p>
              </CardContent>
            </Card>
          </div> */}

          {/* Vulnerability Categories */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vulnerabilities.map((vulnerability) => {
              const iconMap = {
                RefreshCw,
                AlertTriangle,
                Lock,
                Zap,
              };
              const IconComponent =
                iconMap[vulnerability.icon as keyof typeof iconMap];

              const severityColors = {
                Critical: {
                  border: "border-l-red-500",
                  text: "text-red-500",
                  bg: "bg-red-50 dark:bg-red-950/20",
                },
                High: {
                  border: "border-l-orange-500",
                  text: "text-orange-500",
                  bg: "bg-orange-50 dark:bg-orange-950/20",
                },
                Medium: {
                  border: "border-l-yellow-500",
                  text: "text-yellow-500",
                  bg: "bg-yellow-50 dark:bg-yellow-950/20",
                },
                Low: {
                  border: "border-l-blue-500",
                  text: "text-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-950/20",
                },
              };

              const colors =
                severityColors[
                  vulnerability.severity as keyof typeof severityColors
                ] || severityColors.Low;

              return (
                <Card
                  key={vulnerability.id}
                  className={`${colors.border} border-l-4 hover:shadow-md transition-shadow duration-200 ${colors.bg}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <IconComponent className={`h-4 w-4 ${colors.text}`} />
                        <Badge
                          variant={
                            vulnerability.severity === "Critical"
                              ? "destructive"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {vulnerability.severity}
                        </Badge>
                        {/*  <Badge variant="outline" className="text-xs">
                          {vulnerability.swcId}
                        </Badge> */}
                      </div>
                    </div>
                    <CardTitle className="text-sx mt-2 leading-tight">
                      {vulnerability.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {vulnerability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="font-medium text-muted-foreground">
                            Common in:
                          </span>
                          <div className="mt-1 text-xs">
                            {vulnerability.commonIn.join(", ")}
                          </div>
                        </div>

                        <div className="text-xs">
                          <span className="font-medium text-muted-foreground">
                            Famous Cases:
                          </span>
                          <div className="mt-1 text-xs">
                            {vulnerability.famousCases.join(", ")}
                          </div>
                        </div>

                        <div className="text-xs">
                          <span className="font-medium text-muted-foreground">
                            Prevention:
                          </span>
                          <div className="mt-1 text-xs">
                            {vulnerability.prevention.join(", ")}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/dashboard/vulnerabilities/smart-contracts/${vulnerability.id}`}
                          className="w-full"
                        >
                          <Button size="sm" className="w-full text-xs">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
