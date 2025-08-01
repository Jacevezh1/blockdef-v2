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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Shield,
  Code,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
export default function NewsDetailPage() {
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
                  <BreadcrumbLink href="/dashboard/news">News</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Article Details</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col">
          {/* Back Navigation */}
          <div className="p-6 pb-0">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </div>

          <div className="flex-1 px-6 pb-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Article Header */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="font-medium">
                      Breaking
                    </Badge>
                    <Badge variant="outline">Critical</Badge>
                    <Badge variant="secondary">DeFi</Badge>
                  </div>

                  <h1 className="text-4xl font-bold leading-tight tracking-tight">
                    Major Vulnerability Discovered in Popular DeFi Protocol
                    Leads to $50M Exploit
                  </h1>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Security researchers have identified a critical reentrancy
                    vulnerability in a leading DeFi lending protocol, resulting
                    in one of the largest exploits of 2024. The attack vector
                    exploited a flaw in the protocol's liquidation mechanism.
                  </p>
                </div>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between py-4 border-y">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Alex Chen"
                      />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Alex Chen</span>
                        <Badge variant="outline" className="text-xs">
                          Senior Security Researcher
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>January 15, 2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>5 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>2,347 views</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <div className="space-y-6">
                  {/* Executive Summary */}
                  <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertTriangle className="h-5 w-5" />
                        Executive Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="space-y-2 text-sm">
                        <li>
                          • Critical reentrancy vulnerability discovered in
                          major DeFi lending protocol
                        </li>
                        <li>
                          • Exploit resulted in $50 million loss, affecting over
                          15,000 users
                        </li>
                        <li>
                          • Attack vector exploited flaw in liquidation
                          mechanism
                        </li>
                        <li>
                          • Protocol has been paused and emergency measures
                          implemented
                        </li>
                        <li>
                          • Similar vulnerabilities may exist in other protocols
                          using similar patterns
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Main Content */}
                  <div className="space-y-6 text-base leading-relaxed">
                    <p>
                      On January 15, 2024, at approximately 14:30 UTC, a
                      sophisticated attacker exploited a critical reentrancy
                      vulnerability in one of the largest DeFi lending
                      protocols, resulting in the theft of approximately $50
                      million worth of digital assets. This incident represents
                      one of the most significant security breaches in the DeFi
                      space this year and highlights ongoing challenges in smart
                      contract security.
                    </p>

                    <h2 className="text-sm font-bold mt-8 mb-4">
                      Technical Analysis
                    </h2>

                    <p>
                      The vulnerability was located in the protocol's
                      liquidation mechanism, specifically in the
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        liquidateUser()
                      </code>{" "}
                      function. The function made external calls to transfer
                      collateral before updating the user's debt position,
                      creating a classic reentrancy attack vector.
                    </p>

                    {/* Code Example */}
                    <Card className="bg-muted/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Code className="h-4 w-4" />
                          Vulnerable Code Pattern
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="text-sm overflow-x-auto">
                          <code>{`function liquidateUser(address user, uint256 amount) external {
    require(isLiquidatable(user), "User not liquidatable");
    
    // VULNERABLE: External call before state update
    collateralToken.transfer(msg.sender, collateralAmount);
    
    // State update happens after external call
    userDebt[user] -= amount;
    userCollateral[user] -= collateralAmount;
    
    emit Liquidation(user, amount, collateralAmount);
}`}</code>
                        </pre>
                      </CardContent>
                    </Card>

                    <h2 className="text-sm font-bold mt-8 mb-4">
                      Attack Timeline
                    </h2>

                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
                        <div className="font-mono text-sm text-red-600 dark:text-red-400 min-w-[80px]">
                          14:30 UTC
                        </div>
                        <div>
                          <p className="font-medium">
                            Initial Attack Transaction
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Attacker deploys malicious contract and initiates
                            first reentrancy attack
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/20">
                        <div className="font-mono text-sm text-orange-600 dark:text-orange-400 min-w-[80px]">
                          14:35 UTC
                        </div>
                        <div>
                          <p className="font-medium">Escalation Phase</p>
                          <p className="text-sm text-muted-foreground">
                            Multiple transactions executed, draining
                            approximately $15M per transaction
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
                        <div className="font-mono text-sm text-blue-600 dark:text-blue-400 min-w-[80px]">
                          14:42 UTC
                        </div>
                        <div>
                          <p className="font-medium">Community Detection</p>
                          <p className="text-sm text-muted-foreground">
                            Security researchers and community members identify
                            the ongoing attack
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20">
                        <div className="font-mono text-sm text-green-600 dark:text-green-400 min-w-[80px]">
                          14:48 UTC
                        </div>
                        <div>
                          <p className="font-medium">Protocol Paused</p>
                          <p className="text-sm text-muted-foreground">
                            Protocol team activates emergency pause mechanism,
                            halting all operations
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-sm font-bold mt-8 mb-4">
                      Impact Assessment
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            Financial Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Total Loss:</span>
                            <span className="font-mono">$50,247,892</span>
                          </div>
                          <div className="flex justify-between">
                            <span>ETH Drained:</span>
                            <span className="font-mono">22,847 ETH</span>
                          </div>
                          <div className="flex justify-between">
                            <span>USDC Drained:</span>
                            <span className="font-mono">15,230,445 USDC</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Other Assets:</span>
                            <span className="font-mono">$12,170,555</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">
                            User Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Affected Users:</span>
                            <span className="font-mono">15,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Avg. Loss per User:</span>
                            <span className="font-mono">$3,294</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Largest Individual Loss:</span>
                            <span className="font-mono">$2,450,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Protocol TVL Before:</span>
                            <span className="font-mono">$1.2B</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <h2 className="text-sm font-bold mt-8 mb-4">
                      Mitigation and Response
                    </h2>

                    <p>
                      The protocol team responded swiftly to the attack,
                      implementing emergency measures within 18 minutes of the
                      initial exploit. The response included:
                    </p>

                    <ul className="space-y-2 ml-6">
                      <li>
                        • Immediate activation of the emergency pause mechanism
                      </li>
                      <li>
                        • Coordination with major exchanges to freeze attacker
                        addresses
                      </li>
                      <li>
                        • Deployment of a patched version of the smart contract
                      </li>
                      <li>
                        • Establishment of a $10M recovery fund for affected
                        users
                      </li>
                      <li>
                        • Engagement with law enforcement and blockchain
                        analysis firms
                      </li>
                    </ul>

                    <h2 className="text-sm font-bold mt-8 mb-4">
                      Prevention and Best Practices
                    </h2>

                    <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                          <Shield className="h-5 w-5" />
                          Security Recommendations
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">
                              1. Implement Checks-Effects-Interactions Pattern
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Always update state variables before making
                              external calls to prevent reentrancy attacks.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              2. Use Reentrancy Guards
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Implement OpenZeppelin's ReentrancyGuard or
                              similar mechanisms to prevent recursive calls.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              3. Comprehensive Testing
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Conduct thorough testing including fuzzing and
                              formal verification of critical functions.
                            </p>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">
                              4. Multiple Security Audits
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Engage multiple independent security firms for
                              comprehensive code reviews.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Article Footer */}
              <div className="space-y-6 pt-8 border-t">
                {/* Tags */}
                <div className="space-y-2">
                  <h3 className="font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">DeFi</Badge>
                    <Badge variant="outline">Reentrancy</Badge>
                    <Badge variant="outline">Smart Contract</Badge>
                    <Badge variant="outline">Security</Badge>
                    <Badge variant="outline">Exploit</Badge>
                    <Badge variant="outline">Ethereum</Badge>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between py-4 border-y">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      47 Likes
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      12 Comments
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold">Related Articles</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <Badge variant="outline" className="text-xs">
                            Security Guide
                          </Badge>
                          <h4 className="font-medium leading-tight">
                            Complete Guide to Preventing Reentrancy Attacks in
                            Smart Contracts
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Learn how to identify and prevent reentrancy
                            vulnerabilities in your smart contracts.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <Badge variant="outline" className="text-xs">
                            Analysis
                          </Badge>
                          <h4 className="font-medium leading-tight">
                            Top 10 DeFi Exploits of 2024: Lessons Learned
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive analysis of the most significant DeFi
                            security incidents this year.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
