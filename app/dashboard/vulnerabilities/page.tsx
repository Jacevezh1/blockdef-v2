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
import { AlertTriangle, TrendingUp, Shield, Activity } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { vulnerabilities, detectionTools } from "@/data/vulnerabilities";
import { exploitStats } from "@/data/exploits";
import Link from "next/link";

export default function VulnerabilitiesPage() {
  const criticalVulns = vulnerabilities.filter(
    (v) => v.severity === "Critical"
  ).length;
  const highVulns = vulnerabilities.filter((v) => v.severity === "High").length;

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
                  <BreadcrumbPage>Vulnerabilities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="mt-4">
            <h1 className="text-sm font-bold">Vulnerability Database</h1>
            <p className="text-muted-foreground text-sm">
              Comprehensive database of blockchain and smart contract
              vulnerabilities
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Vulnerabilities
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-red-600">
                  {criticalVulns}
                </div>
                <p className="text-xs text-muted-foreground">
                  Active critical issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  High Priority
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-orange-600">
                  {highVulns}
                </div>
                <p className="text-xs text-muted-foreground">
                  High severity issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Exploits
                </CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-green-600">
                  {exploitStats.totalExploits}
                </div>
                <p className="text-xs text-muted-foreground">
                  Documented exploits
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Detection Tools
                </CardTitle>
                <Activity className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-blue-600">
                  {detectionTools.length}
                </div>
                <p className="text-xs text-muted-foreground">Available tools</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/dashboard/vulnerabilities/smart-contracts">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Smart Contract Vulnerabilities
                  </CardTitle>
                  <CardDescription>
                    Common vulnerabilities found in smart contract
                    implementations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-orange-600">List</p>
                      <p className="text-xs text-muted-foreground">
                        Of documented patterns
                      </p>
                    </div>
                    <Button size="sm">Explore</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/exploits">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-5 w-5 text-orange-500" />
                    Protocol Exploits
                  </CardTitle>
                  <CardDescription>
                    Real-world exploits and attack vectors targeting DeFi
                    protocols
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-orange-600">
                        Documentation
                      </p>
                      <p className="text-xs text-muted-foreground">
                        On major incidents
                      </p>
                    </div>
                    <Button size="sm">Analyze</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/blog">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Security Research
                  </CardTitle>
                  <CardDescription>
                    The latest research and insights on blockchain security
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-blue-600">
                        Research
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Security insights
                      </p>
                    </div>
                    <Button size="sm">Read</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                Recent Vulnerability Updates
              </CardTitle>
              <CardDescription className="text-sm">
                Latest additions and updates to the vulnerability database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="">
                {vulnerabilities.slice(0, 3).map((vuln) => (
                  <Link
                    key={vuln.id}
                    href={`/dashboard/vulnerabilities/smart-contracts/${vuln.id}`}
                  >
                    <div className="flex items-center justify-between p-3 border rounded-lg my-3 hover:bg-muted/50 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={vuln.badgeVariant as any}>
                            {vuln.severity}
                          </Badge>
                          <span className="font-medium text-sm">
                            {vuln.title}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {vuln.description}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
