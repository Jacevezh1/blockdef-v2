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
import { Progress } from "@/components/ui/progress"
import { BarChart, DollarSign, TrendingUp, Zap, Activity, AlertTriangle } from "lucide-react"

export default function MEVAnalysisPage() {
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
                  <BreadcrumbPage>MEV Attack Analysis</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-2xl font-bold">MEV Attack Pattern Analysis</h1>
              <p className="text-muted-foreground">
                Comprehensive study of Maximum Extractable Value attacks and protection mechanisms
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Active Research</Badge>
              <Button variant="outline">
                <BarChart className="h-4 w-4 mr-2" />
                View Charts
              </Button>
              <Button>Export Data</Button>
            </div>
          </div>

          {/* MEV Statistics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total MEV Extracted</CardTitle>
                <DollarSign className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.3B</div>
                <p className="text-xs text-muted-foreground">Since January 2020</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sandwich Attacks</CardTitle>
                <Zap className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <p className="text-xs text-muted-foreground">+15% this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Arbitrage Volume</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$450M</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
                <Activity className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,247</div>
                <p className="text-xs text-muted-foreground">Identified MEV bots</p>
              </CardContent>
            </Card>
          </div>

          {/* MEV Attack Types */}
          <Card>
            <CardHeader>
              <CardTitle>MEV Attack Vector Analysis</CardTitle>
              <CardDescription>Breakdown of different MEV extraction strategies and their prevalence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Sandwich Attacks</p>
                      <p className="text-sm text-muted-foreground">
                        Front-run and back-run user transactions to extract value
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">45.2%</p>
                    <p className="text-sm text-muted-foreground">$1.04B extracted</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Arbitrage</p>
                      <p className="text-sm text-muted-foreground">Exploit price differences across DEXs and markets</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">32.1%</p>
                    <p className="text-sm text-muted-foreground">$738M extracted</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Liquidations</p>
                      <p className="text-sm text-muted-foreground">
                        Extract value from liquidating undercollateralized positions
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">15.7%</p>
                    <p className="text-sm text-muted-foreground">$361M extracted</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Time-bandit Attacks</p>
                      <p className="text-sm text-muted-foreground">
                        Reorganize blocks to extract historical MEV opportunities
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">4.2%</p>
                    <p className="text-sm text-muted-foreground">$97M extracted</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Other</p>
                      <p className="text-sm text-muted-foreground">
                        NFT sniping, governance attacks, and novel strategies
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">2.8%</p>
                    <p className="text-sm text-muted-foreground">$64M extracted</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent MEV Incidents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Recent High-Value MEV Incidents
              </CardTitle>
              <CardDescription>Notable MEV extraction events from the past 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <Zap className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Sandwich</Badge>
                      <span className="font-medium">$2.3M Uniswap V3 Sandwich Attack</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Large USDC/ETH swap sandwiched by MEV bot, extracting $2.3M in profit through price manipulation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Block: 18,945,123</span>
                      <span>Bot: jaredfromsubway.eth</span>
                      <span>Jan 15, 2024</span>
                    </div>
                  </div>
                  <Button size="sm">Analyze</Button>
                </div>

                <div className="flex items-start gap-3 p-4 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Arbitrage</Badge>
                      <span className="font-medium">$1.8M Cross-DEX Arbitrage</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Atomic arbitrage between Uniswap, SushiSwap, and Curve exploiting temporary price discrepancies
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Transactions: 47</span>
                      <span>Gas cost: $180k</span>
                      <span>Jan 12, 2024</span>
                    </div>
                  </div>
                  <Button size="sm">Analyze</Button>
                </div>

                <div className="flex items-start gap-3 p-4 border border-green-200 dark:border-green-800 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Liquidation</Badge>
                      <span className="font-medium">$950k Compound Liquidation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mass liquidation event during market volatility, with MEV bots competing for liquidation rewards
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Positions liquidated: 23</span>
                      <span>Competing bots: 12</span>
                      <span>Jan 10, 2024</span>
                    </div>
                  </div>
                  <Button size="sm">Analyze</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protection Mechanisms */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>MEV Protection Research</CardTitle>
                <CardDescription>Analysis of current and proposed MEV mitigation strategies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Private Mempools</span>
                    <Badge variant="outline">Effective</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">85% reduction in sandwich attacks</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Commit-Reveal Schemes</span>
                    <Badge variant="outline">Moderate</Badge>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-muted-foreground">65% MEV reduction, UX trade-offs</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Batch Auctions</span>
                    <Badge variant="outline">Promising</Badge>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground">75% front-running elimination</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">MEV-Share</span>
                    <Badge variant="secondary">Experimental</Badge>
                  </div>
                  <Progress value={45} className="h-2" />
                  <p className="text-xs text-muted-foreground">Revenue sharing model</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Findings</CardTitle>
                <CardDescription>Key insights from our MEV analysis research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">MEV extraction is becoming more sophisticated</p>
                    <p className="text-xs text-muted-foreground">
                      Advanced bots using ML and game theory for optimal strategies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Cross-chain MEV is emerging</p>
                    <p className="text-xs text-muted-foreground">
                      Arbitrage opportunities across different blockchain networks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">User losses are significant</p>
                    <p className="text-xs text-muted-foreground">Average user loses $50-200 per sandwich attack</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Protection mechanisms show promise</p>
                    <p className="text-xs text-muted-foreground">
                      Private mempools and batch auctions reduce MEV by 60-85%
                    </p>
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
