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
import {
  Bot,
  Building2,
  Code,
  ExternalLink,
  Eye,
  Network,
  Search,
  Settings,
  Shield,
  Zap,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import Link from "next/link";

const thirdPartyServices = [
  {
    name: "Blockaid",
    category: "Transaction Security",
    categoryColor: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Blockaid provides an end-to-end solution that can help any company building in the space keep their users safe - including tools like smart contract monitoring, transaction simulation, dApp scanning, token security tools, on-chain and off-chain threat hunting capabilities, and more.",
    icon: Shield,
    status: "Active",
    website: "blockaid.io",
    externalLink: "https://www.blockaid.io",
  },
  {
    name: "Cyfrin",
    category: "Smart Contract Auditing",
    categoryColor: "bg-green-100 text-green-700 border-green-200",
    description:
      "Cyfrin offers a full-stack smart contract security solution, combining expert audits, automated analysis tools, and comprehensive blockchain education to help teams build, review, and maintain secure contracts across multiple ecosystems worldwide.",
    icon: Code,
    status: "Active",
    website: "cyfrin.io",
    externalLink: "https://www.octane.security",
  },
  {
    name: "Forta",
    category: "Runtime Monitoring",
    categoryColor: "bg-purple-100 text-purple-700 border-purple-200",
    description:
      "Forta is a decentralized real-time monitoring network that uses AI and machine learning to detect threats, anomalies, and scams across multiple blockchains. It enables protocols to proactively secure smart contracts and transactions through detection bots and alerts.",
    icon: Eye,
    status: "Active",
    website: "forta.org",
    externalLink: "https://www.octane.security",
  },
  {
    name: "Octane",
    category: "Security Tool",
    categoryColor: "bg-orange-100 text-orange-700 border-orange-200",
    description:
      "Octane is a developer-first platform designed to battle-test smart contracts using cutting-edge machine learning. Its powerful engines analyze your source code, pinpoint critical issues, and provide clear, actionable insights on what matters most and how to fix it effectively.",
    icon: Zap,
    status: "Active",
    website: "octane.security",
    externalLink: "https://www.octane.security",
  },
  {
    name: "Spearbit",
    category: "Blockchain Auditing Companies",
    categoryColor: "bg-red-100 text-red-700 border-red-200",
    description:
      "Spearbit is a decentralized network of elite security researchers offering comprehensive Web3 security assessments. Their services include smart contract audits, penetration testing, threat modeling, and advanced security reviews for complex protocols.",
    icon: Search,
    status: "Active",
    website: "cantina.xyz",
    externalLink: "https://cantina.xyz/solutions/spearbit",
  },
  {
    name: "BlockSec",
    category: "Security Analysis",
    categoryColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    description:
      "BlockSec is a full-stack blockchain security provider offering smart contract audits, real-time attack monitoring, and automated blocking through its Phalcon platform. Trusted by over 300 clients, including Uniswap and MetaMask, to safeguard Web3 protocols and assets.",
    icon: Bot,
    status: "Active",
    website: "blocksec.com",
    externalLink: "https://blocksec.com/",
  },
];

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
                  <BreadcrumbPage>Tools</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h1 className="text-sm font-bold">Security Tools</h1>
            <p className="text-muted-foreground text-sm mt-2">
              Comprehensive suite of tools for blockchain security analysis and
              research
            </p>
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
                      <span className="font-medium text-sm">Slither</span>
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
                  <Button size="sm" variant="default" className="w-full">
                    <Link
                      href="https://github.com/crytic/slither"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Slither
                    </Link>
                  </Button>
                </div>

                {/* Mythril */}
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-500" />
                      <span className="font-medium text-sm">Mythril</span>
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
                  <Button size="sm" variant="default" className="w-full">
                    <Link
                      href="https://github.com/ConsenSysDiligence/mythril"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Mythril
                    </Link>
                  </Button>
                </div>

                {/* Echidna */}
                <div className="space-y-3 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-sm">Echidna</span>
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
                  <Button size="sm" variant="default" className="w-full">
                    <Link
                      href="https://github.com/crytic/echidna"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Echidna
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tool Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Third-Party Security Services
              </CardTitle>
              <CardDescription>
                Here are some leading third-party providers offering blockchain
                security services. These companies are independent and not
                affiliated with or sponsored by us — we’re simply sharing
                examples to help you explore available options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {thirdPartyServices.map((service, index) => (
                  <Card
                    key={index}
                    className="group relative hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg border bg-muted/50">
                          <service.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Link
                            href={service.externalLink as string}
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-sm">
                            {service.name}
                          </h3>
                          <div
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mt-1 ${service.categoryColor}`}
                          >
                            {service.category}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-xs text-muted-foreground">
                              {service.status}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">
                            {service.website}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          {/* <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Quick Analysis</CardTitle>
                <CardDescription className="text-sm">
                  Analyze a smart contract or transaction instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Analyze Contract
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    size="sm"
                  >
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
                <CardTitle className="text-sm">Batch Processing</CardTitle>
                <CardDescription className="text-sm">
                  Run analysis on multiple contracts or addresses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Upload CSV
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    size="sm"
                  >
                    API Integration
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Process up to 1,000 contracts in a single batch
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
