"use client";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Database,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Code,
  Search,
  Bot,
  Network,
} from "lucide-react";

export default function DataSourcesPage() {
  const blockchains = [
    {
      name: "Ethereum",
      coverage: 98,
      transactions: "1.2M",
      status: "active",
      color: "bg-blue-500",
    },
    {
      name: "Binance Smart Chain",
      coverage: 95,
      transactions: "800K",
      status: "active",
      color: "bg-yellow-500",
    },
    {
      name: "Polygon",
      coverage: 92,
      transactions: "600K",
      status: "active",
      color: "bg-purple-500",
    },
    {
      name: "Arbitrum",
      coverage: 88,
      transactions: "400K",
      status: "active",
      color: "bg-blue-400",
    },
    {
      name: "Optimism",
      coverage: 85,
      transactions: "300K",
      status: "active",
      color: "bg-red-500",
    },
    {
      name: "Avalanche",
      coverage: 82,
      transactions: "250K",
      status: "active",
      color: "bg-red-400",
    },
    {
      name: "Fantom",
      coverage: 78,
      transactions: "200K",
      status: "active",
      color: "bg-blue-300",
    },
    {
      name: "Solana",
      coverage: 75,
      transactions: "180K",
      status: "beta",
      color: "bg-green-500",
    },
  ];

  const dataSources = [
    {
      category: "Vulnerability Databases",
      icon: Database,
      sources: [
        {
          name: "CVE Database",
          description: "Common Vulnerabilities and Exposures",
          coverage: "100%",
          status: "active",
        },
        {
          name: "DeFiSafety Reports",
          description: "DeFi protocol security assessments",
          coverage: "95%",
          status: "active",
        },
        {
          name: "Immunefi Bug Bounties",
          description: "Active bug bounty programs",
          coverage: "90%",
          status: "active",
        },
        {
          name: "Code4rena Audits",
          description: "Community audit contests",
          coverage: "85%",
          status: "active",
        },
      ],
    },
    {
      category: "Blockchain Data",
      icon: Network,
      sources: [
        {
          name: "On-chain Transaction Data",
          description: "Real-time blockchain transactions",
          coverage: "98%",
          status: "active",
        },
        {
          name: "Smart Contract Code",
          description: "Verified contract source code",
          coverage: "92%",
          status: "active",
        },
        {
          name: "Protocol Documentation",
          description: "Official protocol specifications",
          coverage: "88%",
          status: "active",
        },
        {
          name: "Governance Proposals",
          description: "DAO governance and voting data",
          coverage: "75%",
          status: "active",
        },
      ],
    },
    {
      category: "Security Intelligence",
      icon: Shield,
      sources: [
        {
          name: "Threat Intelligence Feeds",
          description: "Real-time security threat data",
          coverage: "95%",
          status: "active",
        },
        {
          name: "Exploit Databases",
          description: "Known exploits and attack vectors",
          coverage: "90%",
          status: "active",
        },
        {
          name: "Security Research Papers",
          description: "Academic and industry research",
          coverage: "85%",
          status: "active",
        },
        {
          name: "Incident Response Reports",
          description: "Post-mortem analysis reports",
          coverage: "80%",
          status: "active",
        },
      ],
    },
    {
      category: "Community Sources",
      icon: Users,
      sources: [
        {
          name: "Security Twitter",
          description: "Real-time security discussions",
          coverage: "70%",
          status: "active",
        },
        {
          name: "Discord Communities",
          description: "Developer and security communities",
          coverage: "65%",
          status: "active",
        },
        {
          name: "GitHub Repositories",
          description: "Open source security tools",
          coverage: "85%",
          status: "active",
        },
        {
          name: "Security Forums",
          description: "Specialized security discussion forums",
          coverage: "60%",
          status: "active",
        },
      ],
    },
  ];

  const analysisTools = [
    {
      name: "Static Code Analysis",
      description: "Automated vulnerability detection in smart contracts",
      icon: Code,
      accuracy: 92,
      speed: "< 30s",
    },
    {
      name: "Dynamic Analysis",
      description: "Runtime behavior analysis and fuzzing",
      icon: Zap,
      accuracy: 88,
      speed: "< 5min",
    },
    {
      name: "AI Pattern Recognition",
      description: "Machine learning-based vulnerability patterns",
      icon: Bot,
      accuracy: 85,
      speed: "< 10s",
    },
    {
      name: "Cross-chain Analysis",
      description: "Multi-chain vulnerability correlation",
      icon: Network,
      accuracy: 78,
      speed: "< 2min",
    },
  ];

  const coverageStats = [
    { label: "Total Protocols Monitored", value: "2,500+", change: "+12%" },
    { label: "Daily Vulnerability Scans", value: "1.2M", change: "+8%" },
    { label: "Data Sources Integrated", value: "150+", change: "+15%" },
    { label: "Real-time Alerts", value: "50K+", change: "+25%" },
  ];

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
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Sources & Coverage</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sx font-bold">Data Sources & Coverage</h1>
              <p className="text-muted-foreground">
                Comprehensive overview of our data collection and analysis
                capabilities
              </p>
            </div>
          </div>

          {/* Coverage Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {coverageStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sx font-bold">{stat.value}</div>
                      <p className="text-sx text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-green-600">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="blockchains" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="blockchains">Blockchain Coverage</TabsTrigger>
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
              <TabsTrigger value="analysis">Analysis Tools</TabsTrigger>
              <TabsTrigger value="quality">Data Quality</TabsTrigger>
            </TabsList>

            <TabsContent value="blockchains" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Supported Blockchain Networks
                  </CardTitle>
                  <CardDescription>
                    Real-time monitoring and vulnerability tracking across major
                    blockchain networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {blockchains.map((blockchain, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-3 w-3 rounded-full ${blockchain.color}`}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">
                                {blockchain.name}
                              </h4>
                              <Badge
                                variant={
                                  blockchain.status === "active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {blockchain.status}
                              </Badge>
                            </div>
                            <p className="text-sx text-muted-foreground">
                              {blockchain.transactions} daily transactions
                              monitored
                            </p>
                          </div>
                        </div>
                        <div className="text-right min-w-[120px]">
                          <div className="text-sx font-medium mb-1">
                            {blockchain.coverage}% Coverage
                          </div>
                          <Progress
                            value={blockchain.coverage}
                            className="w-20"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sources" className="space-y-6">
              <div className="grid gap-6">
                {dataSources.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className="h-5 w-5" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        {category.sources.map((source, sourceIndex) => (
                          <div
                            key={sourceIndex}
                            className="flex items-start gap-3 p-3 border rounded-lg"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium">{source.name}</h4>
                                <Badge variant="outline">
                                  {source.coverage}
                                </Badge>
                              </div>
                              <p className="text-sx text-muted-foreground">
                                {source.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Analysis & Detection Tools
                  </CardTitle>
                  <CardDescription>
                    Advanced tools for vulnerability detection and security
                    analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {analysisTools.map((tool, index) => (
                      <div key={index} className="p-6 border rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{tool.name}</h4>
                            <p className="text-sx text-muted-foreground">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sx">Accuracy</span>
                            <span className="text-sx font-medium">
                              {tool.accuracy}%
                            </span>
                          </div>
                          <Progress value={tool.accuracy} />
                          <div className="flex justify-between items-center">
                            <span className="text-sx">Average Speed</span>
                            <Badge variant="secondary">{tool.speed}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quality" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Data Quality Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sx font-medium">
                          Data Accuracy
                        </span>
                        <span className="text-sx">96.8%</span>
                      </div>
                      <Progress value={96.8} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sx font-medium">
                          Data Freshness
                        </span>
                        <span className="text-sx">98.2%</span>
                      </div>
                      <Progress value={98.2} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sx font-medium">
                          Coverage Completeness
                        </span>
                        <span className="text-sx">94.5%</span>
                      </div>
                      <Progress value={94.5} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sx font-medium">
                          Source Reliability
                        </span>
                        <span className="text-sx">97.1%</span>
                      </div>
                      <Progress value={97.1} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Update Frequency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">
                            Critical Vulnerabilities
                          </div>
                          <div className="text-sx text-muted-foreground">
                            High-priority security issues
                          </div>
                        </div>
                        <Badge>Real-time</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Blockchain Data</div>
                          <div className="text-sx text-muted-foreground">
                            Transaction and contract data
                          </div>
                        </div>
                        <Badge variant="secondary">Every 15s</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Security Reports</div>
                          <div className="text-sx text-muted-foreground">
                            Audit reports and research
                          </div>
                        </div>
                        <Badge variant="secondary">Hourly</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">
                            Community Intelligence
                          </div>
                          <div className="text-sx text-muted-foreground">
                            Social media and forums
                          </div>
                        </div>
                        <Badge variant="secondary">Every 5min</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
