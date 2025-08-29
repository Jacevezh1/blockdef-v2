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
import { Input } from "@/components/ui/input";
import {
  Network,
  Activity,
  AlertTriangle,
  Eye,
  Play,
  Settings,
} from "lucide-react";

export default function NetworkScannerPage() {
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
                  <BreadcrumbLink href="/dashboard/tools">
                    Research Tools
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Network Scanner</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sx font-bold">Blockchain Network Scanner</h1>
              <p className="text-muted-foreground">
                Real-time monitoring and anomaly detection across multiple
                blockchain networks
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configure
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-2" />
                Start Scan
              </Button>
            </div>
          </div>

          {/* Network Status */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Ethereum</CardTitle>
                <Network className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">Online</div>
                <p className="text-xs text-muted-foreground">
                  Block: 18,945,123
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">BSC</CardTitle>
                <Network className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">Online</div>
                <p className="text-xs text-muted-foreground">
                  Block: 34,567,890
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Polygon</CardTitle>
                <Network className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">Online</div>
                <p className="text-xs text-muted-foreground">
                  Block: 51,234,567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sx font-medium">Arbitrum</CardTitle>
                <Network className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-sx font-bold text-green-600">Online</div>
                <p className="text-xs text-muted-foreground">
                  Block: 156,789,012
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Scan Configuration */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Scan Configuration</CardTitle>
                <CardDescription>
                  Configure network scanning parameters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sx font-medium">
                    Target Address/Contract
                  </label>
                  <Input placeholder="0x... or leave empty for network-wide scan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sx font-medium">
                    Scan Depth (blocks)
                  </label>
                  <Input type="number" placeholder="1000" defaultValue="100" />
                </div>
                <div className="space-y-2">
                  <label className="text-sx font-medium">Networks</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <label className="text-sx">Ethereum</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <label className="text-sx">BSC</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <label className="text-sx">Polygon</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <label className="text-sx">Arbitrum</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detection Rules</CardTitle>
                <CardDescription>
                  Configure what anomalies to detect
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span className="font-medium">Large Transactions</span>
                  </div>
                  <span className="text-sx text-muted-foreground">
                    {">"}$1M
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span className="font-medium">Suspicious Contracts</span>
                  </div>
                  <span className="text-sx text-muted-foreground">
                    Pattern matching
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="font-medium">MEV Activity</span>
                  </div>
                  <span className="text-sx text-muted-foreground">
                    Sandwich attacks
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="font-medium">Flash Loans</span>
                  </div>
                  <span className="text-sx text-muted-foreground">
                    Large borrows
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Live Network Alerts
              </CardTitle>
              <CardDescription>
                Real-time suspicious activity detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">Critical</Badge>
                        <span className="font-medium">
                          Large ETH Transfer Detected
                        </span>
                      </div>
                      <p className="text-sx text-muted-foreground">
                        Transfer of 10,000 ETH from 0x1234...5678 to
                        0xabcd...efgh
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Ethereum</span>
                        <span>Block: 18,945,125</span>
                        <span>2 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Investigate
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">High</Badge>
                        <span className="font-medium">
                          Suspicious Contract Deployment
                        </span>
                      </div>
                      <p className="text-sx text-muted-foreground">
                        New contract with similar bytecode to known malicious
                        contracts
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>BSC</span>
                        <span>Contract: 0x9876...5432</span>
                        <span>5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Analyze
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Info</Badge>
                        <span className="font-medium">
                          High Gas Price Activity
                        </span>
                      </div>
                      <p className="text-sx text-muted-foreground">
                        Multiple transactions with gas price {">"} 100 gwei
                        detected
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Ethereum</span>
                        <span>15 transactions</span>
                        <span>10 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
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
