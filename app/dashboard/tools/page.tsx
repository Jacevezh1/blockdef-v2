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
import { Code, Network, Search, Settings, Shield, Zap } from "lucide-react";

export default function ToolsPage() {
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
                  <BreadcrumbPage>Research Tools</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="mt-4">
            <h1 className="text-sm font-bold">Security Research Tools</h1>
            <p className="text-muted-foreground text-sm">
              Comprehensive suite of tools for blockchain security analysis and
              research
            </p>
          </div>

          {/* Tool Categories */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {/* Code Analysis */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Code className="h-6 w-6 text-blue-500" />
                  Code Analysis Suite
                </CardTitle>
                <CardDescription className="text-sm">
                  Static and dynamic analysis tools for smart contract
                  vulnerability detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Available Tools</p>
                      <p className="text-xs text-muted-foreground">
                        Slither, MythX, Echidna, Manticore
                      </p>
                    </div>
                    <Badge variant="outline">12 Tools</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Detection Coverage</p>
                      <p className="text-xs text-muted-foreground">
                        70+ vulnerability patterns
                      </p>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <Button className="w-full">Access Tools</Button>
                </div>
              </CardContent>
            </Card>

            {/* Network Scanner */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Network className="h-6 w-6 text-green-500" />
                  Network Scanner
                </CardTitle>
                <CardDescription className="text-sm">
                  Real-time blockchain network monitoring and anomaly detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Networks Monitored</p>
                      <p className="text-xs text-muted-foreground">
                        Ethereum, BSC, Polygon, Arbitrum
                      </p>
                    </div>
                    <Badge variant="outline">15 Networks</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Real-time Alerts</p>
                      <p className="text-xs text-muted-foreground">
                        Suspicious transactions & contracts
                      </p>
                    </div>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <Button className="w-full">Launch Scanner</Button>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Tracer */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Search className="h-6 w-6 text-purple-500" />
                  Transaction Tracer
                </CardTitle>
                <CardDescription className="text-sm">
                  Advanced transaction analysis and fund flow tracking
                  capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Trace Depth</p>
                      <p className="text-xs text-muted-foreground">
                        Multi-hop transaction analysis
                      </p>
                    </div>
                    <Badge variant="outline">∞ Hops</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Visualization</p>
                      <p className="text-xs text-muted-foreground">
                        Interactive flow diagrams
                      </p>
                    </div>
                    <Badge variant="secondary">Visual</Badge>
                  </div>
                  <Button className="w-full">Start Tracing</Button>
                </div>
              </CardContent>
            </Card>

            {/* API Access */}
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Settings className="h-6 w-6 text-orange-500" />
                  API Access Hub
                </CardTitle>
                <CardDescription className="text-sm">
                  Programmatic access to security data, vulnerability feeds, and
                  analysis tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">API Endpoints</p>
                      <p className="text-xs text-muted-foreground">
                        RESTful & GraphQL interfaces
                      </p>
                    </div>
                    <Badge variant="outline">50+ Endpoints</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Rate Limits</p>
                      <p className="text-xs text-muted-foreground">
                        10,000 requests/hour
                      </p>
                    </div>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                  <Button className="w-full">View Documentation</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Featured Security Tools</CardTitle>
              <CardDescription className="text-sm">
                Most popular and effective tools in our research arsenal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Slither */}
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">Slither</span>
                    </div>
                    <Badge variant="outline">Static Analysis</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Python-based static analysis framework with 70+ built-in
                    detectors for Solidity smart contracts
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>• Reentrancy detection</span>
                    <span>• Gas optimization</span>
                  </div>
                  <Button size="sm" className="w-full">
                    Launch Slither
                  </Button>
                </div>

                {/* Mythril */}
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-500" />
                      <span className="font-medium">Mythril</span>
                    </div>
                    <Badge variant="outline">Symbolic Execution</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Security analysis tool using symbolic execution and SMT
                    solving for deep vulnerability detection
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>• Integer overflows</span>
                    <span>• Access control</span>
                  </div>
                  <Button size="sm" className="w-full">
                    Launch Mythril
                  </Button>
                </div>

                {/* Echidna */}
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Echidna</span>
                    </div>
                    <Badge variant="outline">Fuzzing</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Property-based fuzzing tool that generates random inputs to
                    test smart contract invariants
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>• Property testing</span>
                    <span>• Invariant checking</span>
                  </div>
                  <Button size="sm" className="w-full">
                    Launch Echidna
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Analysis</CardTitle>
                <CardDescription>
                  Analyze a smart contract or transaction instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1">Analyze Contract</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Trace Transaction
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Paste contract address or transaction hash to get started
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Batch Processing</CardTitle>
                <CardDescription>
                  Run analysis on multiple contracts or addresses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1">Upload CSV</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    API Integration
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Process up to 1,000 contracts in a single batch
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
