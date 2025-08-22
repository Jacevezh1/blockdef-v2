import type { SecurityTool, ResearchTopic, BestPractice, NavigationCard } from "@/types/dashboard"

export const securityTools: SecurityTool[] = [
  {
    id: "mythril",
    name: "Mythril",
    description: "Security analysis tool for Ethereum smart contracts using symbolic execution",
    category: "Static Analysis",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    url: "https://github.com/ConsenSys/mythril",
  },
  {
    id: "slither",
    name: "Slither",
    description: "Static analysis framework for Solidity with 90+ built-in detectors",
    category: "Static Analysis",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    url: "https://github.com/crytic/slither",
  },
  {
    id: "echidna",
    name: "Echidna",
    description: "Property-based fuzzing tool for Ethereum smart contracts",
    category: "Fuzzing",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    url: "https://github.com/crytic/echidna",
  },
  {
    id: "manticore",
    name: "Manticore",
    description: "Dynamic binary analysis tool with EVM support for deep vulnerability detection",
    category: "Dynamic Analysis",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    url: "https://github.com/trailofbits/manticore",
  },
]

export const researchTopics: ResearchTopic[] = [
  {
    id: "mev-protection",
    title: "MEV Protection Mechanisms",
    description: "Latest research on protecting against Maximum Extractable Value attacks",
    category: "DeFi Security",
    url: "https://ethereum.org/en/developers/docs/mev/",
    trending: true,
  },
  {
    id: "zk-security",
    title: "Zero-Knowledge Proof Security",
    description: "Security considerations in ZK-SNARK implementations",
    category: "Cryptography",
    url: "https://blog.trailofbits.com/2022/04/18/the-frozen-heart-vulnerability-in-plonk/",
    trending: true,
  },
  {
    id: "cross-chain-bridges",
    title: "Cross-Chain Bridge Vulnerabilities",
    description: "Analysis of recent bridge exploits and prevention strategies",
    category: "Infrastructure",
    url: "https://blog.chainalysis.com/reports/cross-chain-bridge-hacks-2022/",
    trending: true,
  },
]

export const bestPractices: BestPractice[] = [
  {
    id: "secure-coding",
    title: "Secure Smart Contract Development",
    description: "Essential coding practices to prevent common vulnerabilities",
    category: "Development",
    url: "https://consensys.github.io/smart-contract-best-practices/",
    priority: "high",
  },
  {
    id: "audit-checklist",
    title: "Smart Contract Audit Checklist",
    description: "Comprehensive checklist for security audits",
    category: "Auditing",
    url: "https://github.com/securing/SCSVS",
    priority: "high",
  },
  {
    id: "testing-strategies",
    title: "Advanced Testing Strategies",
    description: "Property-based testing and formal verification techniques",
    category: "Testing",
    url: "https://docs.openzeppelin.com/test-helpers/0.5/",
    priority: "medium",
  },
  {
    id: "incident-response",
    title: "Security Incident Response",
    description: "Best practices for handling security breaches",
    category: "Operations",
    url: "https://blog.openzeppelin.com/security-incident-response-plan/",
    priority: "medium",
    },
    {
        id: "access-control",
        title: "Access Control Patterns",
        description: "Implementing secure role-based access control in smart contracts",
        category: "Development",
        url: "https://docs.openzeppelin.com/contracts/4.x/access-control",
        priority: "high",
      },
]

export const navigationCards: NavigationCard[] = [
  {
    id: "vulnerabilities",
    title: "Smart Contract Vulnerabilities",
    description: "Explore common security vulnerabilities and their prevention",
    count: 12,
    icon: "shield-alert",
    href: "/dashboard/vulnerabilities/smart-contracts",
    color: "red",
  },
  {
    id: "blog",
    title: "Security Research Blog",
    description: "Latest insights on blockchain security and tokenomics",
    count: 8,
    icon: "book-open",
    href: "/dashboard/blog",
    color: "blue",
  },
  {
    id: "tools",
    title: "Security Tools",
    description: "Comprehensive toolkit for smart contract analysis",
    count: 15,
    icon: "wrench",
    href: "/dashboard/tools",
    color: "green",
  },
  {
    id: "reports",
    title: "Audit Reports",
    description: "Detailed security audit reports and findings",
    count: 24,
    icon: "file-text",
    href: "/dashboard/reports",
    color: "purple",
  },
]

// Helper functions
export const getSecurityTools = (): SecurityTool[] => securityTools

export const getTrendingResearch = (): ResearchTopic[] => researchTopics.filter((topic) => topic.trending)

export const getAllResearch = (): ResearchTopic[] => researchTopics

export const getHighPriorityPractices = (): BestPractice[] =>
  bestPractices.filter((practice) => practice.priority === "high")

export const getAllBestPractices = (): BestPractice[] => bestPractices

export const getNavigationCards = (): NavigationCard[] => navigationCards
