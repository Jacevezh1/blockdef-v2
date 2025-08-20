import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Lock,
  Zap,
  Copy,
} from "lucide-react";
import { vulnerabilities } from "@/data/vulnerabilities";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const iconMap = {
  AlertTriangle,
  RefreshCw,
  Lock,
  Zap,
};

interface VulnerabilityDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VulnerabilityDetailPage({
  params,
}: VulnerabilityDetailPageProps) {
  const { id } = await params;
  const vulnerability = vulnerabilities.find((v) => v.id === id);

  if (!vulnerability) {
    notFound();
  }

  const IconComponent = iconMap[vulnerability.icon as keyof typeof iconMap];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-500 bg-red-50 dark:bg-red-950";
      case "high":
        return "text-orange-500 bg-orange-50 dark:bg-orange-950";
      case "medium":
        return "text-yellow-500 bg-yellow-50 dark:bg-yellow-950";
      case "low":
        return "text-blue-500 bg-blue-50 dark:bg-blue-950";
      default:
        return "text-gray-500 bg-gray-50 dark:bg-gray-950";
    }
  };

  const relatedVulns = vulnerabilities.filter((v) =>
    vulnerability.relatedVulnerabilities.includes(v.id)
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="mt-4">
          <SiteFunctionsHeader />
        </div>
        <div className="flex-1 space-y-6 p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/dashboard/vulnerabilities/smart-contracts"
                className="hover:text-foreground flex items-center gap-1 text-xs"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to Vulnerabilities
              </Link>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-start">
                  <h1 className="text-sm font-bold tracking-tight">
                    {vulnerability.title}
                  </h1>
                  <Badge
                    variant={vulnerability.badgeVariant}
                    className="capitalize text-xs ml-2"
                  >
                    {vulnerability.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vulnerability.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Detailed Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed text-sm">
                    {vulnerability.detailedDescription}
                  </p>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">
                      Technical Details
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {vulnerability.technicalDetails}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Code Examples */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Code Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-red-600 dark:text-red-400 text-sm">
                        Vulnerable Code
                      </h4>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-xs">
                        {vulnerability.codeExample.vulnerable}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-600 dark:text-green-400 text-sm">
                        Secure Code
                      </h4>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-xs">
                        {vulnerability.codeExample.secure}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Potential Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vulnerability.impact.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Common In</h4>
                    <div className="flex flex-wrap gap-1">
                      {vulnerability.commonIn.map((item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Famous Cases</h4>
                    <ul className="space-y-1">
                      {vulnerability.famousCases.map((case_, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          {case_}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Prevention */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Prevention Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vulnerability.prevention.map((method, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {method}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Detection Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Detection Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vulnerability.detectionMethods.map((method, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {method}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* References */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">References</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {vulnerability.references.map((ref, index) => (
                      <a
                        key={index}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {ref.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Vulnerabilities */}
              {relatedVulns.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">
                      Related Vulnerabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {relatedVulns.map((vuln) => (
                        <Link
                          key={vuln.id}
                          href={`/dashboard/vulnerabilities/smart-contracts/${vuln.id}`}
                          className="block p-2 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="text-xs capitalize"
                            >
                              {vuln.severity}
                            </Badge>
                            <span className="text-sm font-medium">
                              {vuln.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
