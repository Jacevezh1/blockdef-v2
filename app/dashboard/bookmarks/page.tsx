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
  Bookmark,
  Clock,
  Eye,
  Filter,
  Search,
  Star,
  Trash2,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function BookmarksPage() {
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
                  <BreadcrumbPage>Bookmarks</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-sm font-bold">Saved Research & Resources</h1>
              <p className="text-muted-foreground">
                Your bookmarked vulnerabilities, research papers, and security
                resources
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookmarks..."
                  className="pl-8 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Bookmarked Vulnerability */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-blue-500" />
                    <Badge variant="destructive">Critical CVE</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-sm">
                  Uniswap V4 Hook Vulnerability
                </CardTitle>
                <CardDescription>
                  Reentrancy attack vector in custom hooks allowing fund
                  drainage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Saved 2 days ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Last viewed yesterday
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">View Details</Button>
                    <Button variant="outline" size="sm">
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bookmarked Research Paper */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-green-500" />
                    <Badge variant="outline">Research</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-sm">
                  Advanced MEV Protection Mechanisms
                </CardTitle>
                <CardDescription>
                  Comprehensive analysis of MEV protection strategies and their
                  effectiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Saved 1 week ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Last viewed 3 days ago
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">Read Paper</Button>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bookmarked Tool */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-purple-500" />
                    <Badge variant="secondary">Tool</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-sm">
                  Slither Static Analysis
                </CardTitle>
                <CardDescription>
                  Smart contract static analysis tool for vulnerability
                  detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Saved 3 days ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Used yesterday
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">Use Tool</Button>
                    <Button variant="outline" size="sm">
                      Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bookmarked Incident Report */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-orange-500" />
                    <Badge variant="outline">Incident</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-sm">
                  Wormhole Bridge Exploit Analysis
                </CardTitle>
                <CardDescription>
                  Detailed post-mortem analysis of the $320M Wormhole bridge
                  hack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Saved 1 month ago
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      Referenced in 3 reports
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm">View Analysis</Button>
                    <Button variant="outline" size="sm">
                      Timeline
                    </Button>
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
