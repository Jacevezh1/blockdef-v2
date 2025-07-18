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
import { Code, Copy, Key, Book, Activity, Zap } from "lucide-react"

export default function APIPage() {
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
                  <BreadcrumbPage>API Access</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-2xl font-bold">BlockDef API Documentation</h1>
              <p className="text-muted-foreground">
                Programmatic access to security data, vulnerability feeds, and analysis tools
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Book className="h-4 w-4 mr-2" />
                Full Docs
              </Button>
              <Button>
                <Key className="h-4 w-4 mr-2" />
                Get API Key
              </Button>
            </div>
          </div>

          {/* API Key Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Key Management
              </CardTitle>
              <CardDescription>Manage your API keys and access tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Input value="bd_sk_1234567890abcdef1234567890abcdef" readOnly className="font-mono text-sm flex-1" />
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  Regenerate
                </Button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <p className="font-medium">Current Plan: Professional</p>
                  <p className="text-muted-foreground">10,000 requests/hour • 100,000 requests/month</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-medium">Usage This Month</p>
                  <p className="text-muted-foreground">23,456 / 100,000 requests</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Endpoints */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-red-500" />
                  Vulnerability Data
                </CardTitle>
                <CardDescription>Access CVE database and vulnerability information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">GET /api/v1/cves</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Retrieve all CVE records with filtering</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">GET /api/v1/vulnerabilities</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Smart contract vulnerability patterns</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">GET /api/v1/exploits</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Protocol exploit database</p>
                </div>

                <Button size="sm" className="w-full">
                  View Examples
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  Analysis Tools
                </CardTitle>
                <CardDescription>Programmatic access to security analysis tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">POST /api/v1/analyze</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Submit contract for static analysis</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">GET /api/v1/scan</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Network scanning and monitoring</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-muted px-2 py-1 rounded">POST /api/v1/trace</code>
                    <Badge variant="outline">REST</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Transaction flow tracing</p>
                </div>

                <Button size="sm" className="w-full">
                  View Examples
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Code Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Quick Start Examples
              </CardTitle>
              <CardDescription>Get started with common API usage patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Fetch Latest CVEs</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">
                      {`curl -H "Authorization: Bearer bd_sk_your_api_key" \\
     -H "Content-Type: application/json" \\
     "https://api.blockdef.io/v1/cves?severity=critical&limit=10"`}
                    </code>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Analyze Smart Contract</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">
                      {`curl -X POST -H "Authorization: Bearer bd_sk_your_api_key" \\
     -H "Content-Type: application/json" \\
     -d '{"address": "0x1234...5678", "tools": ["slither", "mythril"]}' \\
     "https://api.blockdef.io/v1/analyze"`}
                    </code>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">JavaScript/Node.js Example</h4>
                  <div className="bg-muted p-3 rounded-lg">
                    <code className="text-sm">
                      {`const response = await fetch('https://api.blockdef.io/v1/vulnerabilities', {
  headers: {
    'Authorization': 'Bearer bd_sk_your_api_key',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rate Limits & Pricing */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Rate Limits
                </CardTitle>
                <CardDescription>API usage limits and best practices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Requests per minute</span>
                  <span className="text-sm">1,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Requests per hour</span>
                  <span className="text-sm">10,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Monthly limit</span>
                  <span className="text-sm">100,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Concurrent requests</span>
                  <span className="text-sm">50</span>
                </div>
                <Button size="sm" className="w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Format</CardTitle>
                <CardDescription>Standard API response structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded-lg">
                  <code className="text-sm">
                    {`{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0"
  }
}`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
