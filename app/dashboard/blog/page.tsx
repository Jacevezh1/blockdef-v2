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
    case "tool-release":
    default:
      return "outline";
  }
}

function getCategoryColor(categoryId: string): string {
  const category: Category | undefined = categories.find(
    (c: Category) => c.id === categoryId
  );
  return category?.color || "gray";
}

function getCategoryColorClass(color: string): string {
  switch (color) {
    case "blue":
      return "border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700";
    case "red":
      return "border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700";
    case "green":
      return "border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700";
    case "purple":
      return "border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700";
    case "orange":
      return "border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700";
    default:
      return "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700";
  }
}

function getTitleColorClass(color: string): string {
  switch (color) {
    case "blue":
      return "group-hover:text-blue-600 dark:group-hover:text-blue-400";
    case "red":
      return "group-hover:text-red-600 dark:group-hover:text-red-400";
    case "green":
      return "group-hover:text-green-600 dark:group-hover:text-green-400";
    case "purple":
      return "group-hover:text-purple-600 dark:group-hover:text-purple-400";
    case "orange":
      return "group-hover:text-orange-600 dark:group-hover:text-orange-400";
    default:
      return "group-hover:text-gray-600 dark:group-hover:text-gray-400";
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
                  <BreadcrumbPage>Blockchain News</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Header Section */}
          <div>
            <h1 className="text-sm font-semibold tracking-tight">
              Blockchain Security News
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Latest updates, vulnerabilities, and security developments in the
              blockchain space
            </p>
          </div>

          {/* Featured Stories */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <h2 className="text-sm font-medium">Featured Stories</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post: BlogPost) => {
                const categoryColor: string = getCategoryColor(post.category);
                const categoryName: string | undefined = categories.find(
                  (c: Category) => c.id === post.category
                )?.name;
                return (
                  <Link key={post.id} href={`/dashboard/blog/${post.id}`}>
                    <Card
                      className={`group cursor-pointer transition-all duration-200 hover:shadow-lg ${getCategoryColorClass(
                        categoryColor
                      )}`}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant={getStatusColor(post.status)}
                            className="text-xs font-medium"
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
                        <CardTitle
                          className={`text-sm leading-tight transition-colors ${getTitleColorClass(
                            categoryColor
                          )}`}
                        >
                          {post.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-4">
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
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recent News */}
          <div className="space-y-6">
            <h2 className="flex text-sm font-medium mt-4">
              <NewspaperIcon className="h-4 w-4 mr-2 text-orange-500" />
              Latest Updates
            </h2>

            <div className="space-y-4">
              {recentPosts.map((post: BlogPost) => {
                const categoryColor: string = getCategoryColor(post.category);
                const categoryName: string | undefined = categories.find(
                  (c: Category) => c.id === post.category
                )?.name;
                return (
                  <Link key={post.id} href={`/dashboard/blog/${post.id}`}>
                    <Card
                      className={`group cursor-pointer transition-all duration-200 hover:shadow-md my-3 ${getCategoryColorClass(
                        categoryColor
                      )}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-2">
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
                              <Badge variant="secondary" className="text-xs">
                                {categoryName}
                              </Badge>
                            </div>
                            <div className="space-y-2">
                              <h3
                                className={`text-sm font-medium leading-tight transition-colors ${getTitleColorClass(
                                  categoryColor
                                )}`}
                              >
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>
                            <div className="flex items-center gap-6 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{post.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                <span>
                                  {new Date(
                                    post.publishedAt
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime} min read</span>
                              </div>
                              {/*  <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views.toLocaleString()} views</span>
                              </div> */}
                            </div>
                          </div>
                          <div
                            className={`w-24 h-16 bg-gradient-to-br rounded-lg flex items-center justify-center ${
                              categoryColor === "blue"
                                ? "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
                                : categoryColor === "red"
                                ? "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900"
                                : categoryColor === "green"
                                ? "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
                                : categoryColor === "purple"
                                ? "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
                                : categoryColor === "orange"
                                ? "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
                                : "from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
                            }`}
                          >
                            <div
                              className={`font-mono text-xs font-medium ${
                                categoryColor === "blue"
                                  ? "text-blue-600 dark:text-blue-400"
                                  : categoryColor === "red"
                                  ? "text-red-600 dark:text-red-400"
                                  : categoryColor === "green"
                                  ? "text-green-600 dark:text-green-400"
                                  : categoryColor === "purple"
                                  ? "text-purple-600 dark:text-purple-400"
                                  : categoryColor === "orange"
                                  ? "text-orange-600 dark:text-orange-400"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              {post.category.toUpperCase().slice(0, 4)}
                            </div>
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
