export interface CybersecurityResource {
    id: string
    name: string
    category: string
    description: string
    links: string[]
    severity: "Critical" | "High" | "Medium" | "Low" | "Info"
    type: "Standard" | "Tool" | "Research" | "Best Practice" | "Guide"  | "Repository" | "Hack Analysis" | "Library"  | "Specification"
    dateAdded: string
  }
  
  export type SeverityLevel = CybersecurityResource["severity"]
  export type ResourceType = CybersecurityResource["type"]
  