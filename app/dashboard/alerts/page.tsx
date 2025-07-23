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
import { AlertTriangle, Clock, Eye, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AlertsPage() {
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
                  <BreadcrumbPage>Recent Alerts</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">Recent Security Alerts</h1>
              <p className="text-muted-foreground text-sm">
                Real-time security notifications and threat alerts
              </p>
            </div>
            {/*  <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search alerts..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div> */}
          </div>

          <div className="grid gap-4">
            {/* Critical Alert */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <Badge variant="destructive">Critical</Badge>
                    <CardTitle className="text-sm">
                      Flash Loan Attack Detected
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>2 minutes ago</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  Suspicious flash loan activity detected on Ethereum mainnet
                  targeting DeFi protocol
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>Protocol:</strong> Compound V3
                    </span>
                    <span>
                      <strong>Network:</strong> Ethereum
                    </span>
                    <span>
                      <strong>Amount:</strong> $2.3M
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>Transaction:</strong> 0x1234...5678
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <strong>Status:</strong> Under Investigation
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">View Details</Button>
                    <Button variant="outline" size="sm">
                      Mark as Reviewed
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High Priority Alert */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <Badge variant="secondary">High</Badge>
                    <CardTitle className="text-sm">
                      Unusual Contract Deployment
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes ago</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  New contract deployed with suspicious code patterns similar to
                  known exploits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>Network:</strong> BSC
                    </span>
                    <span>
                      <strong>Contract:</strong> 0xabcd...efgh
                    </span>
                    <span>
                      <strong>Similarity:</strong> 87% match
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">Analyze Contract</Button>
                    <Button variant="outline" size="sm">
                      Add to Watchlist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medium Priority Alert */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <Badge variant="outline">Medium</Badge>
                    <CardTitle className="text-sm">
                      Price Oracle Deviation
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>1 hour ago</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  Significant price deviation detected in Chainlink oracle feed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm">
                    <span>
                      <strong>Asset:</strong> ETH/USD
                    </span>
                    <span>
                      <strong>Deviation:</strong> 3.2%
                    </span>
                    <span className="text-xs">
                      <strong>Duration:</strong> 45 minutes
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm">
                      Dismiss
                    </Button>
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
