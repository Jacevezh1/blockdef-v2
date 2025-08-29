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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Clock,
  Eye,
  NewspaperIcon,
  TrendingUp,
  User,
} from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { blogPosts, getFeaturedPosts, categories } from "@/data/blog";
import type { BlogPost, Category } from "@/types/blog";
import Link from "next/link";

function getStatusColor(
  status: string
): "destructive" | "secondary" | "outline" {
  switch (status) {
    case "breaking":
    case "security-alert":
    case "exploit":
      return "destructive";
    case "research":
    case "analysis":
      return "secondary";
    default:
      return "outline";
  }
}

function getGradientColor(status: string): string {
  switch (status) {
    case "breaking":
    case "security-alert":
      return "bg-gradient-to-r from-blue-400/20 to-slate-500/20";
    case "exploit":
      return "bg-gradient-to-r from-slate-500/20 to-blue-600/20";
    case "research":
      return "bg-gradient-to-r from-blue-300/20 to-slate-400/20";
    case "analysis":
      return "bg-gradient-to-r from-slate-400/20 to-blue-500/20";
    case "tool-release":
      return "bg-gradient-to-r from-blue-500/20 to-slate-600/20";
    default:
      return "bg-gradient-to-r from-blue-400/20 to-slate-400/20";
  }
}

export default function NewsPage() {
  const featuredPosts: BlogPost[] = getFeaturedPosts();
  const recentPosts: BlogPost[] = blogPosts
    .filter((post: BlogPost) => !post.featured)
    .slice(0, 4);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Blockchain News</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="space-y-1">
            <h1 className="text-[0.8rem] font-semibold tracking-tight">
              Blockchain Security News
            </h1>
            <p className="text-xs text-muted-foreground">
              Latest updates, vulnerabilities, and security developments in the
              blockchain space
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <h2 className="text-sx font-medium">Featured Stories</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featuredPosts.map((post: BlogPost) => {
                const categoryName: string | undefined = categories.find(
                  (c: Category) => c.id === post.category
                )?.name;
                return (
                  <Link key={post.id} href={`/dashboard/blog/${post.id}`}>
                    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md border overflow-hidden">
                      <div
                        className={`h-36 ${getGradientColor(
                          post.status
                        )} border-b`}
                      />
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={getStatusColor(post.status)}
                            className="text-xs"
                          >
                            {post.status === "breaking"
                              ? "Breaking"
                              : post.status === "security-alert"
                              ? "Security Alert"
                              : post.status === "research"
                              ? "Research"
                              : post.status === "analysis"
                              ? "Analysis"
                              : post.status === "tool-release"
                              ? "Tool Release"
                              : post.status === "exploit"
                              ? "Exploit"
                              : "News"}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {categoryName}
                          </Badge>
                        </div>
                        <CardTitle className="text-sx leading-tight group-hover:text-muted-foreground transition-colors">
                          {post.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}m</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <NewspaperIcon className="h-4 w-4 text-orange-500" />
              <h2 className="text-sx font-medium">Latest Updates</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {recentPosts.map((post: BlogPost) => {
                const categoryName: string | undefined = categories.find(
                  (c: Category) => c.id === post.category
                )?.name;
                return (
                  <Link key={post.id} href={`/dashboard/blog/${post.id}`}>
                    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-md border overflow-hidden">
                      <div
                        className={`h-32 ${getGradientColor(
                          post.status
                        )} border-b`}
                      />
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={getStatusColor(post.status)}
                            className="text-xs"
                          >
                            {post.status === "breaking"
                              ? "Breaking"
                              : post.status === "security-alert"
                              ? "Security Alert"
                              : post.status === "research"
                              ? "Research"
                              : post.status === "analysis"
                              ? "Analysis"
                              : post.status === "tool-release"
                              ? "Tool Release"
                              : post.status === "exploit"
                              ? "Exploit"
                              : "News"}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {categoryName}
                          </Badge>
                        </div>
                        <CardTitle className="text-sx leading-tight group-hover:text-muted-foreground transition-colors">
                          {post.title}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}m</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
