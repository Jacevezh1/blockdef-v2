import type { CybersecurityResource } from "@/types/resources"

export const initialResources: CybersecurityResource[] = [
  {
    id: "1",
    name: "OWASP Smart Contract Security",
    category: "Smart Contract Security",
    description:
      "An OWASP project dedicated to improving the security of smart contracts through community-driven standards and guidelines.",
    links: ["https://scs.owasp.org/"],
    severity: "Info",
    type: "Standard",
    dateAdded: "2024-02-10",
  },
  {
    id: "2",
    name: "OWASP SCSVS",
    category: "Smart Contract Security",
    description:
      "Smart Contract Security Verification Standard (SCSVS) by OWASP, offering a baseline for secure smart contract development.",
    links: ["https://scs.owasp.org/SCSVS/"],
    severity: "Info",
    type: "Standard",
    dateAdded: "2024-02-10",
  },
  {
    id: "3",
    name: "OWASP Smart Contract Top 10",
    category: "Smart Contract Security",
    description:
      "Top 10 most critical security risks facing smart contracts, provided by the OWASP community.",
    links: ["https://scs.owasp.org/sctop10/"],
    severity: "Info",
    type: "Guide",
    dateAdded: "2024-02-10",
  },
  {
    id: "4",
    name: "OWASP SCS GitHub Repository",
    category: "Smart Contract Security",
    description:
      "The official GitHub repository for OWASP's Smart Contract Security (SCS) project.",
    links: ["https://github.com/OWASP/owasp-scs"],
    severity: "Info",
    type: "Repository",
    dateAdded: "2024-02-10",
  },
  {
    id: "5",
    name: "EEA EthTrust Security Levels Specification v3",
    category: "Standards & Specifications",
    description:
      "Security specification developed by the Enterprise Ethereum Alliance for assessing smart contract trust levels.",
    links: [
      "https://entethalliance.org/specs/ethtrust-sl/#sec-eth-broader-considerations",
    ],
    severity: "Info",
    type: "Specification",
    dateAdded: "2024-02-12",
  },
  {
    id: "6",
    name: "Smart Contract Vulnerabilities Collection",
    category: "Learning Resources",
    description:
      "A curated collection of smart contract vulnerabilities with descriptions and mitigation strategies.",
    links: ["https://github.com/kadenzipfel/smart-contract-vulnerabilities"],
    severity: "Info",
    type: "Repository",
    dateAdded: "2024-02-14",
  },
  {
    id: "7",
    name: "SolidityScan Web3 HackHub (2024)",
    category: "CTFs & Hack Analysis",
    description:
      "A hub for real-world web3 hacks and postmortems from 2024, provided by SolidityScan.",
    links: ["https://solidityscan.com/web3hackhub?year=2024"],
    severity: "Info",
    type: "Hack Analysis",
    dateAdded: "2024-02-20",
  },
  {
    id: "8",
    name: "OpenZeppelin Contracts",
    category: "Smart Contract Libraries",
    description:
      "A secure, reusable, and community-vetted library of Solidity contracts implementing ERC standards.",
    links: ["https://www.openzeppelin.com/solidity-contracts"],
    severity: "Info",
    type: "Library",
    dateAdded: "2024-02-22",
  },
  {
    id: "9",
    name: "OpenZeppelin Contracts Wizard",
    category: "Smart Contract Tools",
    description:
      "An interactive tool to generate secure smart contract code based on OpenZeppelin’s best practices.",
    links: ["https://wizard.openzeppelin.com/"],
    severity: "Info",
    type: "Tool",
    dateAdded: "2024-02-22",
    },
    {
        id: "10",
        name: "Cyfrin (Smart Contract Security Audits & Education)",
        category: "Smart Contract Security & Education",
        description:
            "Cyfrin, co‑founded by Patrick Collins (CEO), provides world‑class smart contract security audits, developer tools, and educational platforms such as Updraft, CodeHawks, Aderyn, and Solodit.",
        links: ["https://cyfrin.io/", "https://updraft.cyfrin.io/"],
        severity: "Info",
        type: "Guide",
        dateAdded: "2025-08-30",
    },
    {
        id: "11",
        name: "Flashbots (MEV Research & Infrastructure)",
        category: "Blockchain Security & Research",
        description:
            "Flashbots is an R&D organization tackling MEV (Maximal Extractable Value) challenges by building transparent, permissionless tools (MEV‑Boost, BuilderNet, Protect RPC, MEV‑Share) and fostering open research via proposals, workshops, and publications.",
        links: ["https://flashbots.net/", "https://docs.flashbots.net/"],
        severity: "Info",
        type: "Research",
        dateAdded: "2025-08-30",
    },
    {
        id: "12",
        name: "Cyfrin Aderyn (Static Analyzer)",
        category: "Developer Tools",
        description:
          "Aderyn is a Rust‑based, open‑source static analyzer for Solidity smart contracts—fast, customizable, CI‑friendly, and ideal for pre‑audit checks.",
        links: ["https://support.cyfrin.io/en/articles/10455402-what-is-aderyn"],
        severity: "Info",
        type: "Tool",
        dateAdded: "2025-08-30",
    },
    {
        id: "13",
        name: "Code4rena (Crowdsourced Auditing)",
        category: "Community‑Based Security",
        description:
          "Code4rena runs audit contests where vetted researchers ('wardens') compete to find vulnerabilities—used by protocols like Optimism and zkSync.",
        links: ["https://code4rena.com/"],
        severity: "Info",
        type: "Tool",
        dateAdded: "2025-08-30",
      }
      
]
