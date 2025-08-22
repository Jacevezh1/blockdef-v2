import type { CryptoEvent } from "@/types/event"

export const cryptoEvents: CryptoEvent[] = [
  {
    id: "ethereum-devcon-2025",
    title: "Ethereum Devcon 2025",
    description: "Annual Ethereum developer conference with latest protocol updates and ecosystem developments",
    date: new Date("2025-09-15"),
    category: "conference",
    location: "Bangkok, Thailand",
    isVirtual: false,
    importance: "high",
    url: "https://devcon.org",
  },
  {
    id: "bitcoin-halving-anniversary",
    title: "Bitcoin Halving Anniversary",
    description: "Commemorating the 2024 Bitcoin halving with market analysis and future predictions",
    date: new Date("2025-08-20"),
    category: "launch",
    isVirtual: true,
    importance: "high",
  },
  {
    id: "solana-breakpoint-2025",
    title: "Solana Breakpoint 2025",
    description: "Solana ecosystem conference featuring new projects and technical innovations",
    date: new Date("2025-10-08"),
    category: "conference",
    location: "Amsterdam, Netherlands",
    isVirtual: false,
    importance: "high",
    url: "https://solana.com/breakpoint",
  },
  {
    id: "polygon-zkevm-upgrade",
    title: "Polygon zkEVM Major Upgrade",
    description: "Significant protocol upgrade improving scalability and reducing transaction costs",
    date: new Date("2025-09-03"),
    category: "upgrade",
    isVirtual: true,
    importance: "medium",
  },
  {
    id: "chainlink-smartcon-2025",
    title: "Chainlink SmartCon 2025",
    description: "Premier smart contract and oracle conference with industry leaders",
    date: new Date("2025-11-12"),
    category: "conference",
    location: "New York, USA",
    isVirtual: false,
    importance: "high",
    url: "https://smartcon.chain.link",
  },
  {
    id: "eu-crypto-regulation",
    title: "EU MiCA Regulation Full Implementation",
    description: "Complete implementation of Markets in Crypto-Assets regulation across EU",
    date: new Date("2025-12-30"),
    category: "regulation",
    isVirtual: true,
    importance: "high",
  },
  {
    id: "avalanche-summit-2025",
    title: "Avalanche Summit 2025",
    description: "Annual Avalanche ecosystem conference showcasing subnet innovations",
    date: new Date("2025-10-25"),
    category: "conference",
    location: "Barcelona, Spain",
    isVirtual: false,
    importance: "medium",
  },
  {
    id: "cardano-summit-2025",
    title: "Cardano Summit 2025",
    description: "Global Cardano community event with governance and development updates",
    date: new Date("2025-09-28"),
    category: "conference",
    location: "Edinburgh, Scotland",
    isVirtual: false,
    importance: "medium",
    url: "https://summit.cardano.org",
  },
  {
    id: "defi-week-london",
    title: "DeFi Week London",
    description: "Week-long DeFi conference series covering protocols, yield farming, and regulation",
    date: new Date("2025-11-05"),
    category: "conference",
    location: "London, UK",
    isVirtual: false,
    importance: "medium",
  },
  {
    id: "web3-gaming-expo",
    title: "Web3 Gaming Expo 2025",
    description: "Largest blockchain gaming conference with NFT marketplaces and play-to-earn games",
    date: new Date("2025-12-15"),
    category: "conference",
    location: "Tokyo, Japan",
    isVirtual: false,
    importance: "medium",
  },
  {
    id: "layer2-scaling-summit",
    title: "Layer 2 Scaling Summit",
    description: "Technical conference focused on Ethereum L2 solutions and scaling innovations",
    date: new Date("2025-08-30"),
    category: "conference",
    isVirtual: true,
    importance: "medium",
  },
  {
    id: "nft-paris-2025",
    title: "NFT Paris 2025",
    description: "European NFT conference featuring digital art, collectibles, and utility NFTs",
    date: new Date("2025-11-20"),
    category: "conference",
    location: "Paris, France",
    isVirtual: false,
    importance: "low",
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
