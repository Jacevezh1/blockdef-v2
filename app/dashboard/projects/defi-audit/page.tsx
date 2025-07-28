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
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Users,
  AlertTriangle,
  Shield,
} from "lucide-react";

export default function DeFiAuditPage() {
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
                  <BreadcrumbPage>DeFi Security Audit</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">
                DeFi Protocol Security Audit
              </h1>
              <p className="text-muted-foreground">
                Comprehensive security assessment of Compound V3 lending
                protocol
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">In Progress</Badge>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button className="text-sm">
                <Users className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Progress</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">75%</div>
                <Progress value={75} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  15 of 20 tasks completed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Findings</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  3 Critical, 8 High, 12 Medium
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Code Coverage
                </CardTitle>
                <Shield className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">94%</div>
                <p className="text-xs text-muted-foreground">
                  Lines of code analyzed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Timeline</CardTitle>
                <Calendar className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">5 days</div>
                <p className="text-xs text-muted-foreground">
                  Remaining until deadline
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Audit Phases */}
          <Card>
            <CardHeader>
              <CardTitle>Audit Progress</CardTitle>
              <CardDescription>
                Current status of each audit phase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">1. Automated Analysis</span>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Static analysis with Slither, Mythril, and custom
                      detectors
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>Duration: 2 days</span>
                      <span>Findings: 18</span>
                      <span>Completed: Jan 10, 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">2. Manual Code Review</span>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Line-by-line review of critical functions and business
                      logic
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>Duration: 5 days</span>
                      <span>Findings: 12</span>
                      <span>Completed: Jan 15, 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">3. Economic Analysis</span>
                      <Badge variant="secondary">In Progress</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analysis of economic incentives, game theory, and
                      potential attack vectors
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>Progress: 60%</span>
                      <span>Findings: 3</span>
                      <span>Est. completion: Jan 18, 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 border rounded-lg opacity-60">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        4. Integration Testing
                      </span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Testing protocol interactions with other DeFi protocols
                      and edge cases
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>Est. duration: 3 days</span>
                      <span>Start date: Jan 19, 2024</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 border rounded-lg opacity-60">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">5. Final Report</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Compilation of findings, recommendations, and remediation
                      guidance
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>Est. duration: 2 days</span>
                      <span>Delivery: Jan 22, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Critical Findings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Critical Findings
              </CardTitle>
              <CardDescription>
                High-priority security issues requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium">
                        Price Oracle Manipulation
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The protocol relies on a single price oracle without
                      sufficient validation, making it vulnerable to flash loan
                      attacks that could manipulate asset prices.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>File: PriceOracle.sol:45</span>
                      <span>Impact: High</span>
                      <span>Likelihood: Medium</span>
                    </div>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>

                <div className="flex items-start gap-3 p-4 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium">
                        Reentrancy in Liquidation
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The liquidation function makes external calls before
                      updating internal state, allowing for reentrancy attacks
                      that could drain protocol funds.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>File: Liquidator.sol:123</span>
                      <span>Impact: High</span>
                      <span>Likelihood: High</span>
                    </div>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>

                <div className="flex items-start gap-3 p-4 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium">Access Control Bypass</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Administrative functions lack proper access control
                      checks, potentially allowing unauthorized users to modify
                      critical protocol parameters.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>File: Governance.sol:67</span>
                      <span>Impact: High</span>
                      <span>Likelihood: Low</span>
                    </div>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Timeline */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audit Team</CardTitle>
                <CardDescription>
                  Security researchers assigned to this project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">AC</span>
                  </div>
                  <div>
                    <p className="font-medium">Alex Chen</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Security Researcher
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">SM</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Martinez</p>
                    <p className="text-sm text-muted-foreground">
                      Smart Contract Auditor
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">DJ</span>
                  </div>
                  <div>
                    <p className="font-medium">David Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Economic Security Analyst
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>
                  Key milestones and deliverables
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium">Project Kickoff</p>
                    <p className="text-sm text-muted-foreground">Jan 8, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div className="flex-1">
                    <p className="font-medium">Initial Findings Report</p>
                    <p className="text-sm text-muted-foreground">
                      Jan 15, 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <div className="flex-1">
                    <p className="font-medium">Draft Report Review</p>
                    <p className="text-sm text-muted-foreground">
                      Jan 20, 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Final Report Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      Jan 22, 2024
                    </p>
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
