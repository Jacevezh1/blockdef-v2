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
  Search,
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
                  <BreadcrumbPage>Tools</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="space-y-1">
            <h1 className="text-[0.8rem] font-semibold tracking-tight">
              Security Tools & Services
            </h1>
            <p className="text-xs text-muted-foreground">
              Comprehensive suite of tools and third-party services for
              blockchain security analysis and research
            </p>
          </div>

          {/* Featured Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sx">Featured Security Tools</CardTitle>
              <CardDescription className="text-xs">
                Most popular and effective tools in our research arsenal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="space-y-3 border rounded-lg overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-blue-500/20 to-slate-500/20"></div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="font-medium text-sx">Slither</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Static Analysis
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
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
                </div>

                <div className="space-y-3 border rounded-lg overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-purple-500/20 to-slate-500/20"></div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-500" />
                        <span className="font-medium text-sx">Mythril</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Symbolic Execution
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
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
                </div>

                <div className="space-y-3 border rounded-lg overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-green-500/20 to-slate-500/20"></div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-sx">Echidna</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Fuzzing
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Property-based fuzzing tool that generates random inputs
                      to test smart contract invariants
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
              </div>
            </CardContent>
          </Card>

          {/* Tool Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sx">
                <Building2 className="h-4 w-4" />
                Third-Party Security Services
              </CardTitle>
              <CardDescription className="text-xs">
                Leading third-party providers offering blockchain security
                services. These companies are independent and not affiliated
                with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-3">
                {thirdPartyServices.map((service, index) => (
                  <Card
                    key={index}
                    className="group relative hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
                  >
                    <div className="h-20 bg-gradient-to-br from-slate-500/10 to-slate-600/20"></div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 rounded-lg border bg-muted/50">
                          <service.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Link
                            href={service.externalLink as string}
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-sx">
                            {service.name}
                          </h3>
                          <div
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border mt-1 ${service.categoryColor}`}
                          >
                            {service.category}
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
