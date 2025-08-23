import type { CryptoEvent } from "@/types/event"

export const cryptoEvents: CryptoEvent[] = [
  {
    id: "bitcoin-halving-anniversary",
    title: "Bitcoin Halving Anniversary",
    description: "Commemorating the 2024 Bitcoin halving with market analysis",
    date: new Date("2025-08-20"),
    category: "launch",
    isVirtual: true,
    importance: "high",
  },
  {
    id: "solana-breakpoint-2025",
    title: "Solana Breakpoint 2025",
    description: "Solana ecosystem conference featuring new projects and technical innovations",
    date: new Date("2025-12-11"),
    category: "conference",
    location: "Abu Dhabi, United Arab Emirates",
    isVirtual: false,
    importance: "high",
    url: "https://solana.com/breakpoint",
  },
  {
    id: "chainlink-smartcon-2025",
    title: "Chainlink SmartCon 2025",
    description: "Premier smart contract and oracle conference with industry leaders",
    date: new Date("2025-11-4"),
    category: "conference",
    location: "New York, USA",
    isVirtual: false,
    importance: "high",
    url: "https://smartcon.chain.link",
  },
  {
    id: "cardano-summit-2025",
    title: "Cardano Summit 2025",
    description: "Global Cardano community event with governance and development updates",
    date: new Date("2025-11-12"),
    category: "conference",
    location: "Berlin, Germany",
    isVirtual: false,
    importance: "medium",
    url: "https://summit.cardano.org/",
  },
  {
    id: "token-2049-singapore",
    title: "Token2049 Singapore",
    description: "Global community event with governance and development updates",
    date: new Date("2025-10-1"),
    category: "conference",
    location: "Marina Bay Sands",
    isVirtual: false,
    importance: "medium",
    url: "https://www.asia.token2049.com",
  },
]

export const getEventsByDate = (): { [dateString: string]: CryptoEvent[] } => {
  const eventsByDate: { [dateString: string]: CryptoEvent[] } = {}

  cryptoEvents.forEach((event) => {
    const dateString = event.date.toISOString().split("T")[0]
    if (!eventsByDate[dateString]) {
      eventsByDate[dateString] = []
    }
    eventsByDate[dateString].push(event)
  })

  return eventsByDate
}

export const getEventsForMonth = (year: number, month: number): CryptoEvent[] => {
  return cryptoEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month
  })
}

export const getCategoryColor = (category: CryptoEvent["category"]): string => {
  switch (category) {
    case "conference":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "launch":
      return "bg-green-100 text-green-800 border-green-200"
    case "upgrade":
      return "bg-purple-100 text-purple-800 border-purple-200"
    case "regulation":
      return "bg-red-100 text-red-800 border-red-200"
    case "partnership":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export const getImportanceIcon = (importance: CryptoEvent["importance"]): string => {
  switch (importance) {
    case "high":
      return "🔥"
    case "medium":
      return "⭐"
    case "low":
      return "📅"
    default:
      return "📅"
  }
}
