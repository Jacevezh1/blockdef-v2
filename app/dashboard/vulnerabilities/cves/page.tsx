import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Calendar, ExternalLink, Filter, Search, Shield, TrendingDown, TrendingUp } from "lucide-react"

export default function CVEsPage() {
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
                  <BreadcrumbLink href="/dashboard/vulnerabilities">Vulnerabilities</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Critical CVEs</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-2xl font-bold">Critical CVEs Database</h1>
              <p className="text-muted-foreground">
                Common Vulnerabilities and Exposures affecting blockchain infrastructure and protocols
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search CVEs..." className="pl-8 w-64" />
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
                <CardTitle className="text-sm font-medium">Critical (9.0-10.0)</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">23</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +3 this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High (7.0-8.9)</CardTitle>
                <Shield className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">67</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12 this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Patched</CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="h-3 w-3" />
                  -5% unpatched
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Zero-Day</CardTitle>
                <AlertTriangle className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">7</div>
                <p className="text-xs text-muted-foreground">Active threats</p>
              </CardContent>
            </Card>
          </div>

          {/* CVE List */}
          <div className="space-y-4">
            {/* CVE-2024-0001 */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">CVE-2024-0001</Badge>
                      <Badge variant="outline">CVSS 9.8</Badge>
                      <Badge variant="secondary">Ethereum</Badge>
                    </div>
                    <CardTitle className="text-lg">Geth Client Remote Code Execution</CardTitle>
                    <CardDescription>
                      Critical vulnerability in Go Ethereum client allowing remote code execution through malformed P2P
                      messages
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      NVD
                    </Button>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Affected Versions:</span>
                      <span>Geth v1.13.0 - v1.13.14</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Attack Vector:</span>
                      <span>Network (Remote)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Complexity:</span>
                      <span>Low</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Published:</span>
                      <Calendar className="h-3 w-3" />
                      <span>2024-01-15</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Status:</span>
                      <Badge variant="destructive" className="text-xs">
                        Unpatched
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Exploited:</span>
                      <Badge variant="outline" className="text-xs">
                        In the Wild
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CVE-2024-0002 */}
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">CVE-2024-0002</Badge>
                      <Badge variant="outline">CVSS 9.1</Badge>
                      <Badge variant="secondary">Solidity</Badge>
                    </div>
                    <CardTitle className="text-lg">Solidity Compiler Storage Collision</CardTitle>
                    <CardDescription>
                      Critical bug in Solidity compiler causing storage layout collisions in contracts with inheritance
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Affected Versions:</span>
                      <span>Solidity 0.8.20 - 0.8.23</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Attack Vector:</span>
                      <span>Local (Compilation)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Impact:</span>
                      <span>Data Corruption</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Published:</span>
                      <Calendar className="h-3 w-3" />
                      <span>2024-01-10</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Status:</span>
                      <Badge variant="outline" className="text-xs">
                        Patched
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Fix Version:</span>
                      <span>0.8.24</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CVE-2023-0156 */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">CVE-2023-0156</Badge>
                      <Badge variant="outline">CVSS 8.2</Badge>
                      <Badge variant="secondary">Chainlink</Badge>
                    </div>
                    <CardTitle className="text-lg">Chainlink Oracle Price Manipulation</CardTitle>
                    <CardDescription>
                      High-severity vulnerability allowing price feed manipulation through aggregator contract flaws
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Advisory
                    </Button>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Affected Versions:</span>
                      <span>Aggregator v3.0.0 - v3.2.1</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Attack Vector:</span>
                      <span>Network (DeFi Integration)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Complexity:</span>
                      <span>Medium</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Published:</span>
                      <Calendar className="h-3 w-3" />
                      <span>2023-12-08</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Status:</span>
                      <Badge variant="outline" className="text-xs">
                        Patched
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">Bounty:</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
