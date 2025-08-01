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
  AlertTriangle,
  Code,
  Filter,
  Search,
  Shield,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
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

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">
                Smart Contract Vulnerability Patterns
              </h1>
              <p className="text-muted-foreground">
                Common vulnerability patterns and anti-patterns in smart
                contract development
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search patterns..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Patterns
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-red-600">12</div>
                <p className="text-xs text-muted-foreground">
                  High-impact vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Common Issues
                </CardTitle>
                <Code className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-orange-600">47</div>
                <p className="text-xs text-muted-foreground">
                  Frequently seen bugs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Best Practices
                </CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-green-600">89</div>
                <p className="text-xs text-muted-foreground">
                  Prevention techniques
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tools Available
                </CardTitle>
                <Zap className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold text-blue-600">23</div>
                <p className="text-xs text-muted-foreground">Detection tools</p>
              </CardContent>
            </Card>
          </div>

          {/* Vulnerability Categories */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Reentrancy */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-red-500" />
                      <Badge variant="destructive">Critical</Badge>
                      <Badge variant="outline">SWC-107</Badge>
                    </div>
                    <CardTitle className="text-sm">
                      Reentrancy Attacks
                    </CardTitle>
                    <CardDescription>
                      Vulnerability where external calls can recursively call
                      back into the contract before state changes are finalized
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Common in:</span> DeFi
                    protocols, token contracts, withdrawal functions
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Famous Cases:</span> The DAO
                    (2016), Cream Finance (2021)
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Prevention:</span>{" "}
                    Checks-Effects-Interactions pattern, ReentrancyGuard
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">View Examples</Button>
                    <Button variant="outline" size="sm">
                      Prevention Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integer Overflow/Underflow */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <Badge variant="secondary">High</Badge>
                      <Badge variant="outline">SWC-101</Badge>
                    </div>
                    <CardTitle className="text-sm">
                      Integer Overflow/Underflow
                    </CardTitle>
                    <CardDescription>
                      Arithmetic operations that exceed the maximum or minimum
                      values for integer types
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Common in:</span> Token
                    transfers, balance calculations, timestamp operations
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Famous Cases:</span>{" "}
                    BeautyChain (BEC), SMT Token
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Prevention:</span> SafeMath
                    library, Solidity 0.8+ built-in checks
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">View Examples</Button>
                    <Button variant="outline" size="sm">
                      SafeMath Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access Control */}
            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-yellow-500" />
                      <Badge variant="outline">Medium</Badge>
                      <Badge variant="outline">SWC-115</Badge>
                    </div>
                    <CardTitle className="text-sm">
                      Access Control Issues
                    </CardTitle>
                    <CardDescription>
                      Improper implementation of authorization checks allowing
                      unauthorized access to functions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Common in:</span> Admin
                    functions, ownership transfers, privileged operations
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Famous Cases:</span> Parity
                    Wallet, Akropolis
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Prevention:</span>{" "}
                    OpenZeppelin AccessControl, proper modifier usage
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">View Examples</Button>
                    <Button variant="outline" size="sm">
                      Access Patterns
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Front-Running */}
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-blue-500" />
                      <Badge variant="outline">Medium</Badge>
                      <Badge variant="outline">MEV</Badge>
                    </div>
                    <CardTitle className="text-sm">
                      Front-Running Vulnerabilities
                    </CardTitle>
                    <CardDescription>
                      Transactions can be observed in mempool and exploited by
                      miners or bots before execution
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Common in:</span> DEX trades,
                    auctions, lottery contracts
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Impact:</span> MEV extraction,
                    sandwich attacks, transaction ordering
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Prevention:</span>{" "}
                    Commit-reveal schemes, private mempools, batch auctions
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">MEV Analysis</Button>
                    <Button variant="outline" size="sm">
                      Protection Methods
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detection Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Automated Detection Tools</CardTitle>
              <CardDescription>
                Static and dynamic analysis tools for smart contract
                vulnerability detection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">Slither</span>
                    <Badge variant="outline" className="text-xs">
                      Static
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Python-based static analysis framework with 70+ detectors
                  </p>
                  <Button size="sm" className="w-full">
                    Use Tool
                  </Button>
                </div>

                <div className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="font-medium">MythX</span>
                    <Badge variant="outline" className="text-xs">
                      Hybrid
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional security analysis platform with symbolic
                    execution
                  </p>
                  <Button size="sm" className="w-full">
                    Use Tool
                  </Button>
                </div>

                <div className="space-y-2 p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">Echidna</span>
                    <Badge variant="outline" className="text-xs">
                      Fuzzing
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Property-based fuzzing tool for Ethereum smart contracts
                  </p>
                  <Button size="sm" className="w-full">
                    Use Tool
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
