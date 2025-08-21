export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  readTime: number
  views: number
  category: string
  tags: string[]
  featured: boolean
  status: "breaking" | "research" | "analysis" | "tool-release" | "security-alert" | "exploit" | "standard"
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  color: string
}

export type Category = BlogCategory
