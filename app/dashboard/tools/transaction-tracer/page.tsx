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
  Search,
  ArrowRight,
  Download,
  Share,
  Eye,
  GitBranch,
} from "lucide-react";

export default function TransactionTracerPage() {
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
                  <BreadcrumbPage>Transaction Tracer</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="mt-4">
            <h1 className="text-sx font-bold">Transaction Flow Tracer</h1>
            <p className="text-muted-foreground">
              Advanced transaction analysis and fund flow tracking across
              multiple hops
            </p>
          </div>

          {/* Trace Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Start New Trace
              </CardTitle>
              <CardDescription>
                Enter transaction hash or address to begin tracing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="0x... (transaction hash or address)"
                  className="flex-1"
                  defaultValue="0x1234567890abcdef1234567890abcdef12345678"
                />
                <Button size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Trace
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sx">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <label>Include internal transactions</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <label>Follow token transfers</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label>Deep trace ({">"} 10 hops)</label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Flow Visualization */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    Transaction Flow Map
                  </CardTitle>
                  <CardDescription>
                    Visual representation of fund flows and interactions
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Transaction Chain */}
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-sx font-medium">1</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Origin
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sx">0x1234...5678</span>
                      <Badge variant="secondary">EOA</Badge>
                    </div>
                    <p className="text-sx text-muted-foreground">
                      Initial transaction: 100 ETH
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Block: 18,945,123</span>
                      <span>Gas: 21,000</span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-sx font-medium">2</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Contract
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sx">0xabcd...efgh</span>
                      <Badge variant="secondary">Uniswap V3</Badge>
                    </div>
                    <p className="text-sx text-muted-foreground">
                      Swap: 100 ETH → 150,000 USDC
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Internal txs: 3</span>
                      <span>Gas used: 180,000</span>
                      <span>Slippage: 0.1%</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <span className="text-sx font-medium">3</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Bridge
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sx">0x9876...5432</span>
                      <Badge variant="secondary">Arbitrum Bridge</Badge>
                    </div>
                    <p className="text-sx text-muted-foreground">
                      Bridge: 150,000 USDC → Arbitrum
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Confirmation time: 15 min</span>
                      <span>Bridge fee: 0.1%</span>
                      <span>Status: Confirmed</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center gap-4 p-4 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                      <span className="text-sx font-medium">4</span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      Suspicious
                    </Badge>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sx">0xdead...beef</span>
                      <Badge variant="outline">Unknown</Badge>
                    </div>
                    <p className="text-sx text-muted-foreground">
                      Multiple small transfers to different addresses (possible
                      mixing)
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Outputs: 47 addresses</span>
                      <span>Pattern: Mixing service</span>
                      <span>Risk: High</span>
                    </div>
                  </div>
                  <Button size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Investigate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Summary */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Flow Analysis</CardTitle>
                <CardDescription>
                  Statistical analysis of the transaction flow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sx font-medium">Total Hops</span>
                  <span className="text-sx">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sx font-medium">Networks Involved</span>
                  <span className="text-sx">Ethereum, Arbitrum</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sx font-medium">Total Value</span>
                  <span className="text-sx">~$150,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sx font-medium">Risk Score</span>
                  <Badge variant="secondary">High (8.2/10)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sx font-medium">Time Span</span>
                  <span className="text-sx">2.5 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Indicators</CardTitle>
                <CardDescription>
                  Potential red flags identified in the flow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sx">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Mixing service usage detected</span>
                </div>
                <div className="flex items-center gap-2 text-sx">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Cross-chain bridge activity</span>
                </div>
                <div className="flex items-center gap-2 text-sx">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Large transaction volume</span>
                </div>
                <div className="flex items-center gap-2 text-sx">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Multiple output addresses</span>
                </div>
                <div className="flex items-center gap-2 text-sx">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Known DEX interaction</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
