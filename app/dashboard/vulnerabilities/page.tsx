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
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { vulnerabilities } from "@/data/vulnerabilities";
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
                <BreadcrumbItem>
                  <BreadcrumbPage>Vulnerabilities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h1 className="text-[0.8rem] font-semibold tracking-tight">
              Vulnerability Database
            </h1>
            <p className="text-muted-foreground text-xs mt-1">
              Comprehensive database of blockchain and smart contract
              vulnerabilities
            </p>
          </div>

          {/* Stats Overview */}
          {/*  <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">
                  Critical Vulnerabilities
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-red-600">
                  {criticalVulns}
                </div>
                <p className="text-xs text-muted-foreground">
                  Active critical issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">
                  High Priority
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-orange-600">
                  {highVulns}
                </div>
                <p className="text-xs text-muted-foreground">
                  High severity issues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">
                  Total Exploits
                </CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">
                  {exploitStats.totalExploits}
                </div>
                <p className="text-xs text-muted-foreground">
                  Documented exploits
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">
                  Detection Tools
                </CardTitle>
                <Activity className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-blue-600">
                  {detectionTools.length}
                </div>
                <p className="text-xs text-muted-foreground">Available tools</p>
              </CardContent>
            </Card>
          </div> */}

          {/* Quick Access Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/dashboard/vulnerabilities/smart-contracts">
              <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-red-500 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sx">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Smart Contract Vulnerabilities
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Common vulnerabilities found in smart contract
                    implementations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-red-600">
                        Documented Patterns
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Security vulnerabilities
                      </p>
                    </div>
                    <Button size="sm" className="text-xs">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/exploits">
              <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sx">
                    <TrendingUp className="h-4 w-4 text-orange-500" />
                    Protocol Exploits
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Real-world exploits and attack vectors targeting DeFi
                    protocols
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-orange-600">
                        Major Incidents
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Attack documentation
                      </p>
                    </div>
                    <Button size="sm" className="text-xs">
                      Analyze
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/blog">
              <Card className="cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-blue-500 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sx">
                    <Shield className="h-4 w-4 text-blue-500" />
                    Security Research
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    The latest research and insights on blockchain security
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-blue-600">
                        Latest Research
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Security insights
                      </p>
                    </div>
                    <Button size="sm" className="text-xs">
                      Read
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-sx">
                Recent Vulnerability Updates
              </CardTitle>
              <CardDescription className="text-xs">
                Latest additions and updates to the vulnerability database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {vulnerabilities.slice(0, 3).map((vuln) => (
                  <Link
                    key={vuln.id}
                    href={`/dashboard/vulnerabilities/smart-contracts/${vuln.id}`}
                  >
                    <div className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors group my-3">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={vuln.badgeVariant as any}
                            className="text-xs"
                          >
                            {vuln.severity}
                          </Badge>
                          <span className="font-medium text-sx group-hover:text-primary transition-colors">
                            {vuln.title}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {vuln.description}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs ml-4 shrink-0 bg-transparent"
                      >
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
