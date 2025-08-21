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
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Calendar, Clock, Eye, User, ArrowLeft } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { getBlogPost, categories } from "@/data/blogs";
import type { BlogPost, Category } from "@/types/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { ReactNode } from "react";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

interface MarkdownComponentProps {
  children: ReactNode;
}

interface CodeComponentProps extends MarkdownComponentProps {
  className?: string;
}

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

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post: BlogPost | null = getBlogPost(id);

  if (!post) {
    notFound();
  }

  const category: Category | undefined = categories.find(
    (c: Category) => c.id === post.category
  );

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
                  <BreadcrumbLink href="/dashboard/news">News</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="max-w-[200px] truncate">
                    {post.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6 max-w-4xl mx-auto">
          <Link
            href="/dashboard/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to News
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={getStatusColor(post.status)} className="text-xs">
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
            </div>

            <h1 className="text-sm font-semibold leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                h1: ({ children }: MarkdownComponentProps) => (
                  <h1 className="text-sm font-semibold mb-4">{children}</h1>
                ),
                h2: ({ children }: MarkdownComponentProps) => (
                  <h2 className="text-sm font-medium mb-3 mt-6">{children}</h2>
                ),
                h3: ({ children }: MarkdownComponentProps) => (
                  <h3 className="text-sm font-medium mb-2 mt-4">{children}</h3>
                ),
                p: ({ children }: MarkdownComponentProps) => (
                  <p className="text-sm leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }: MarkdownComponentProps) => (
                  <ul className="text-sm space-y-1 mb-4 ml-4">{children}</ul>
                ),
                ol: ({ children }: MarkdownComponentProps) => (
                  <ol className="text-sm space-y-1 mb-4 ml-4">{children}</ol>
                ),
                li: ({ children }: MarkdownComponentProps) => (
                  <li className="text-sm">{children}</li>
                ),
                code: ({ children, className }: CodeComponentProps) => {
                  const isBlock: boolean =
                    className?.includes("language-") ?? false;
                  if (isBlock) {
                    return (
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                        <code className="text-xs font-mono">{children}</code>
                      </pre>
                    );
                  }
                  return (
                    <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">
                      {children}
                    </code>
                  );
                },
                blockquote: ({ children }: MarkdownComponentProps) => (
                  <blockquote className="border-l-4 border-muted-foreground/20 pl-4 italic text-sm mb-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
