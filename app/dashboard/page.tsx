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
  TrendingUp,
  Users,
  Eye,
  Clock,
  Star,
} from "lucide-react";

export default function Page() {
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
                  <BreadcrumbLink href="/dashboard">Research</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Security Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4 mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Vulnerabilities
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-red-600">23</div>
                <p className="text-xs text-muted-foreground">
                  +3 from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Protocols Monitored
                </CardTitle>
                <Shield className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Research Papers
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  Published this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Researchers
                </CardTitle>
                <Users className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  +0 new this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Vulnerabilities */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Recent Critical Vulnerabilities
                </CardTitle>
                <CardDescription className="text-sm">
                  Latest security issues discovered in blockchain protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium text-sm">
                        Uniswap V4 Hook Vulnerability
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Reentrancy attack vector in custom hooks allowing fund
                      drainage
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />2 hours ago
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        41 views
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium text-sm">
                        Compound V3 Oracle Manipulation
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Price oracle can be manipulated through flash loan attacks
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />5 hours ago
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />3 views
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">High</Badge>
                      <span className="font-medium text-sm">
                        Arbitrum Bridge DoS Vector
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Denial of service attack on cross-chain message passing
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />1 day ago
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        20 views
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trending Research */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Trending Research
                </CardTitle>
                <CardDescription className="text-sm">
                  Most viewed security research this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      MEV
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-tight">
                        Advanced MEV Protection Mechanisms
                      </p>
                      <p className="text-xs text-muted-foreground">
                        3 views • 2 days ago
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      ZK
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-tight">
                        Zero-Knowledge Proof Vulnerabilities
                      </p>
                      <p className="text-xs text-muted-foreground">
                        6 views • 3 days ago
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      DeFi
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-tight">
                        Cross-Chain Bridge Security Analysis
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2.1k views • 4 days ago
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs">
                      L2
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-tight">
                        Layer 2 Sequencer Centralization Risks
                      </p>
                      <p className="text-xs text-muted-foreground">
                        1.9k views • 5 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Threat Intelligence Feed
                </CardTitle>
                <CardDescription className="text-sm">
                  Real-time security alerts and threat indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Suspicious transaction pattern detected
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Ethereum mainnet • 15 minutes ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New malicious contract deployed
                      </p>
                      <p className="text-xs text-muted-foreground">
                        BSC • 1 hour ago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Protocol upgrade scheduled
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Polygon • 3 hours ago
                      </p>
                    </div>
                  </div>
                </div>
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
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Multi-signature wallet implementation
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Essential for protocol governance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Time-locked contract upgrades
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Prevent malicious instant changes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Comprehensive audit coverage
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Multiple independent security reviews
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">
                        Emergency pause mechanisms
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Circuit breakers for critical functions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
