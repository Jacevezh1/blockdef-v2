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
import { vulnerabilities, vulnerabilityStats } from "@/data/vulnerabilities";
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

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
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
                <CardTitle className="text-sm font-medium">Critical</CardTitle>
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
                <CardTitle className="text-sm font-medium">High</CardTitle>
                <Code className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-orange-600">
                  {vulnerabilityStats.common}
                </div>
                <p className="text-xs text-muted-foreground">
                  High-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Medium</CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-green-600">
                  {vulnerabilityStats.bestPractices}
                </div>
                <p className="text-xs text-muted-foreground">
                  Medium-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low</CardTitle>
                <Zap className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-blue-600">
                  {vulnerabilityStats.tools}
                </div>
                <p className="text-xs text-muted-foreground">
                  Low-impact vulnerabilities
                </p>
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
                          className="w-full text-center"
                        >
                          <Button size="sm" className="w-full text-center">
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
