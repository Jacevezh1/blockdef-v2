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
import { Textarea } from "@/components/ui/textarea"
import { Code, Play, Upload, FileText, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export default function CodeAnalysisPage() {
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
                  <BreadcrumbLink href="/dashboard/tools">Research Tools</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Code Analysis</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Smart Contract Code Analysis</h1>
            <p className="text-muted-foreground">
              Comprehensive static and dynamic analysis tools for smart contract security
            </p>
          </div>

          {/* Analysis Input */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Contract Analysis
                </CardTitle>
                <CardDescription>Paste your Solidity code or contract address for analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contract Address or Code</label>
                  <Textarea
                    placeholder="0x... or paste Solidity code here"
                    className="min-h-[120px] font-mono text-sm"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Analyze
                  </Button>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analysis Tools</CardTitle>
                <CardDescription>Select which tools to run on your contract</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="font-medium">Slither</span>
                    <Badge variant="outline" className="text-xs">
                      Static
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">70+ detectors</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="font-medium">Mythril</span>
                    <Badge variant="outline" className="text-xs">
                      Symbolic
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">Deep analysis</span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="font-medium">Echidna</span>
                    <Badge variant="outline" className="text-xs">
                      Fuzzing
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">Property testing</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Analysis Results */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>Latest analysis of contract 0x1234...5678</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Critical Issue */}
                <div className="flex items-start gap-3 p-4 border border-red-200 dark:border-red-800 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Critical</Badge>
                      <span className="font-medium">Reentrancy Vulnerability</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Function `withdraw()` at line 45 is vulnerable to reentrancy attacks. External call to
                      `msg.sender.call()` before state update.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Line 45-52</span>
                      <span>Slither: reentrancy-eth</span>
                      <span>Confidence: High</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Fix
                  </Button>
                </div>

                {/* High Issue */}
                <div className="flex items-start gap-3 p-4 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">High</Badge>
                      <span className="font-medium">Unchecked Return Value</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Return value of external call at line 67 is not checked. This could lead to silent failures.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Line 67</span>
                      <span>Slither: unchecked-lowlevel</span>
                      <span>Confidence: Medium</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Fix
                  </Button>
                </div>

                {/* Passed Check */}
                <div className="flex items-start gap-3 p-4 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Passed</Badge>
                      <span className="font-medium">Access Control</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All administrative functions properly protected with access control modifiers.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Multiple functions</span>
                      <span>Slither: access-control</span>
                      <span>Status: Secure</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline">Share Results</Button>
                <Button variant="outline">Run Again</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
