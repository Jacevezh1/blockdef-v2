export interface SecurityTool {
    id: string
    name: string
    description: string
    category: string
    bgColor: string
    textColor: string
    url: string
  }
  
  export interface ResearchTopic {
    id: string
    title: string
    description: string
    category: string
    url: string
    trending: boolean
  }
  
  export interface BestPractice {
    id: string
    title: string
    description: string
    category: string
    url: string
    priority: "high" | "medium" | "low"
  }
  
  export interface NavigationCard {
    id: string
    title: string
    description: string
    count: number
    icon: string
    href: string
    color: string
  }
  