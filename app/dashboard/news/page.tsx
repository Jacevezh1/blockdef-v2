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
  Calendar,
  Clock,
  Eye,
  Filter,
  Plus,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
export default function NewsPage() {
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
                  <BreadcrumbPage>Blockchain News</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-sm font-bold tracking-tight">
                Blockchain Security News
              </h1>
              <p className="text-muted-foreground text-sm">
                Latest updates, vulnerabilities, and security developments in
                the blockchain space
              </p>
            </div>
            {/* <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search news..." className="pl-9 w-80" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add News
              </Button>
            </div> */}
          </div>

          {/* Featured News */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <h2 className="text-sm font-semibold">Featured Stories</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Main Featured Article */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="destructive" className="font-medium">
                      Breaking
                    </Badge>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                  <CardTitle className="text-sm leading-tight group-hover:text-blue-600 transition-colors">
                    Major Vulnerability Discovered in Popular DeFi Protocol
                    Leads to $50M Exploit
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-sm">
                    Security researchers have identified a critical reentrancy
                    vulnerability in a leading DeFi lending protocol, resulting
                    in one of the largest exploits of 2024. The attack vector
                    exploited a flaw in the protocol's liquidation mechanism.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>Alex Chen</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Jan 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>2.3k views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Featured */}
              <Card className="group cursor-pointer transition-all hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">Research</Badge>
                    <Badge variant="outline">Analysis</Badge>
                  </div>
                  <CardTitle className="text-sm leading-tight group-hover:text-green-600 transition-colors">
                    New Zero-Knowledge Proof Vulnerability Pattern Identified in
                    Layer 2 Solutions
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-sm">
                    Comprehensive analysis reveals a systematic vulnerability in
                    ZK-proof implementations across multiple Layer 2 scaling
                    solutions, potentially affecting millions of users.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>Sarah Martinez</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Jan 14, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>8 min read</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>1.8k views</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent News */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold">Latest Updates</h2>

            <div className="space-y-4">
              {/* News Item 1 */}
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Security Alert</Badge>
                        <Badge variant="secondary">Ethereum</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold leading-tight group-hover:text-blue-600 transition-colors">
                          Ethereum Foundation Releases Security Advisory for
                          Upcoming Shanghai Upgrade
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          The Ethereum Foundation has published a comprehensive
                          security advisory detailing potential risks and
                          mitigation strategies for the upcoming Shanghai
                          upgrade, including validator withdrawal mechanisms and
                          smart contract compatibility issues.
                        </p>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>David Johnson</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Jan 13, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>6 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>1.2k views</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600 dark:text-blue-300 font-mono text-sm">
                        ETH
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* News Item 2 */}
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive">Exploit</Badge>
                        <Badge variant="secondary">Cross-Chain</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold leading-tight group-hover:text-orange-600 transition-colors">
                          Cross-Chain Bridge Suffers $15M Attack Due to
                          Signature Verification Flaw
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          A popular cross-chain bridge protocol has been
                          exploited for $15 million due to a critical flaw in
                          its multi-signature verification system. The attack
                          highlights ongoing security challenges in cross-chain
                          infrastructure.
                        </p>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>Emily Rodriguez</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Jan 12, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>4 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>3.1k views</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-24 bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900 dark:to-red-800 rounded-lg flex items-center justify-center">
                      <div className="text-orange-600 dark:text-orange-300 font-mono text-sm">
                        BRIDGE
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* News Item 3 */}
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-green-200 dark:hover:border-green-800">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Tool Release</Badge>
                        <Badge variant="secondary">Open Source</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold leading-tight group-hover:text-green-600 transition-colors">
                          New Open-Source Smart Contract Fuzzing Tool Achieves
                          95% Bug Detection Rate
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Researchers have released a new fuzzing tool
                          specifically designed for smart contract vulnerability
                          detection, demonstrating superior performance compared
                          to existing solutions in comprehensive benchmarks.
                        </p>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>Michael Chang</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Jan 11, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>7 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>892 views</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-24 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 rounded-lg flex items-center justify-center">
                      <div className="text-green-600 dark:text-green-300 font-mono text-sm">
                        TOOL
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* News Item 4 */}
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Research</Badge>
                        <Badge variant="secondary">MEV</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold leading-tight group-hover:text-purple-600 transition-colors">
                          Study Reveals MEV Extraction Has Cost Users Over $1.2B
                          in 2023
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          A comprehensive analysis of Maximum Extractable Value
                          (MEV) activities shows that users have lost over $1.2
                          billion to sandwich attacks and front-running in 2023,
                          with new protection mechanisms showing promising
                          results.
                        </p>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>Lisa Park</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Jan 10, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>9 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>1.5k views</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-32 h-24 bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900 dark:to-violet-800 rounded-lg flex items-center justify-center">
                      <div className="text-purple-600 dark:text-purple-300 font-mono text-sm">
                        MEV
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Load More */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
