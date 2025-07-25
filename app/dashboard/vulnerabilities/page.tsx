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

export default function VulnerabilitiesPage() {
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
                <div className="text-lg font-bold text-red-600">23</div>
                <p className="text-xs text-muted-foreground">+3 this week</p>
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
                <div className="text-lg font-bold text-orange-600">67</div>
                <p className="text-xs text-muted-foreground">+12 this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Patched</CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-green-600">1,247</div>
                <p className="text-xs text-muted-foreground">+89 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Under Review
                </CardTitle>
                <Activity className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-blue-600">34</div>
                <p className="text-xs text-muted-foreground">
                  Active investigations
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Critical CVEs
                </CardTitle>
                <CardDescription>
                  High-severity Common Vulnerabilities and Exposures affecting
                  blockchain protocols
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-red-600">23</p>
                    <p className="text-xs text-muted-foreground">
                      Active critical issues
                    </p>
                  </div>
                  <Button>View All</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Smart Contract Bugs
                </CardTitle>
                <CardDescription>
                  Common vulnerabilities found in smart contract implementations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-blue-600">156</p>
                    <p className="text-xs text-muted-foreground">
                      Documented patterns
                    </p>
                  </div>
                  <Button>Explore</Button>
                </div>
              </CardContent>
            </Card>

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
                    <p className="text-lg font-bold text-orange-600">89</p>
                    <p className="text-xs text-muted-foreground">
                      Analyzed exploits
                    </p>
                  </div>
                  <Button>Analyze</Button>
                </div>
              </CardContent>
            </Card>
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
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium text-sm">
                        CVE-2024-0123: Uniswap V4 Hook Vulnerability
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Reentrancy attack vector discovered in custom hook
                      implementations
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">High</Badge>
                      <span className="font-medium text-sm">
                        Compound V3 Oracle Manipulation
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Price oracle manipulation through flash loan attacks
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Medium</Badge>
                      <span className="font-medium text-sm">
                        Arbitrum Bridge DoS Vector
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Denial of service attack on cross-chain message passing
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
