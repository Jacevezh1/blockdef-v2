export interface CryptoEvent {
    id: string
    title: string
    description: string
    date: Date
    category: "conference" | "launch" | "upgrade" | "regulation" | "partnership"
    location?: string
    isVirtual: boolean
    importance: "high" | "medium" | "low"
    url?: string
  }
  
  export interface EventsByDate {
    [dateString: string]: CryptoEvent[]
  }
  