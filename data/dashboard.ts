import type { SecurityTool, ResearchTopic, BestPractice, NavigationCard } from "@/types/dashboard"

export const securityTools: SecurityTool[] = [
  {
    id: "mythril",
    name: "Mythril",
    description: "Security analysis tool smart contracts using symbolic execution",
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
    description: "Property-based fuzzing tool for smart contracts",
    category: "Fuzzing",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    url: "https://github.com/crytic/echidna",
  },
  {
    id: "manticore",
    name: "Manticore",
    description: "A symbolic execution tool for the analysis of smart contracts and binaries",
    category: "(Maintenance Mode)",
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
    url: "https://docs.flashbots.net/flashbots-protect/overview",
    trending: true,
  },
  {
    id: "zk-security",
    title: "Zero-Knowledge Proof Security",
    description: "Enhancing Privacy and Security in Large-Language Models: A ZeroKnowledge Proof Approach",
    category: "Cryptography",
    url: "https://pdfs.semanticscholar.org/772f/d3f8d8838bdb0b6e4fa57bdd7fd69dd1c958.pdf",
    trending: true,
  },
  {
    id: "cross-chain-bridges",
    title: "Cross-Chain Bridge Vulnerabilities",
    description: "Analysis different  bridge exploits and best practices",
    category: "Infrastructure",
    url: "https://chain.link/education-hub/cross-chain-bridge-vulnerabilities",
    trending: true,
  },
]

export const bestPractices: BestPractice[] = [
  {
    id: "secure-coding",
    title: "OWASP Smart Contract Security Verification Standard",
    description: "An open security standard for designing, building, and testing secure smart contracts",
    category: "Development",
    url: "https://owasp.org/www-project-smart-contract-security-verification-standard",
    priority: "high",
  },
  {
    id: "audit-checklist",
    title: "Smart Contract Security Verification Standard",
    description: "Comprehensive checklist for security audits",
    category: "Auditing",
    url: "https://github.com/securing/SCSVS",
    priority: "high",
  },
  {
    id: "testing-strategies",
    title: "Advanced Testing Strategies",
    description: "How to test smart contracts before deploying on the Ethereum network.",
    category: "Testing",
    url: "https://ethereum.org/en/developers/docs/smart-contracts/testing",
    priority: "medium",
  },
  {
    id: "audit-checklist",
    title: "EEA EthTrust Security Levels Specification",
    description: "Certifications confirming a smart contract is free from known security vulnerabilities",
    category: "Checklist",
    url: "https://entethalliance.org/specs/ethtrust-sl/v3",
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
