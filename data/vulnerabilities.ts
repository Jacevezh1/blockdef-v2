import type { Vulnerability, VulnerabilityStats, DetectionTool } from "@/types/vulnerability"

export const vulnerabilityStats: VulnerabilityStats = {
  critical: 1,
  common: 2,
  bestPractices: 1,
  tools: 0,
}

export const vulnerabilities: Vulnerability[] = [
  {
    id: "https://scs.owasp.org/SCWE/SCSVS-CODE/SCWE-046",
    title: "Reentrancy Attacks",
    description:
      "Vulnerability where external calls can recursively call back into the contract before state changes are finalized",
    severity: "Critical",
    category: "State Management",
    swcId: "SWC-107",
    icon: "RefreshCw",
    commonIn: ["DeFi protocols", "token contracts", "withdrawal functions"],
    famousCases: ["The DAO (2016)", "Cream Finance (2021)"],
    prevention: ["Checks-Effects-Interactions pattern", "ReentrancyGuard"],
    borderColor: "border-red-200 dark:border-red-800",
    iconColor: "text-red-500",
    badgeVariant: "destructive",
    detailedDescription:
      "Reentrancy attacks occur when a contract makes an external call to another untrusted contract before resolving its own state. The external contract can then call back into the original contract, potentially manipulating its state in unexpected ways. This vulnerability is particularly dangerous because it can lead to funds being drained from contracts.",
    technicalDetails:
      "The vulnerability arises from the order of operations in smart contracts. When a contract calls an external function, it temporarily gives control to the external contract. If the external contract calls back into the original contract before the original function completes, it can exploit inconsistent state.",
    codeExample: {
      vulnerable: `// Vulnerable to reentrancy
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    (bool success,) = msg.sender.call{value: amount}("");
    require(success);
    balances[msg.sender] -= amount; // State change after external call
}`,
      secure: `// Protected against reentrancy
function withdraw(uint amount) public nonReentrant {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount; // State change before external call
    (bool success,) = msg.sender.call{value: amount}("");
    require(success);
}`,
    },
    impact: [
      "Complete drainage of contract funds",
      "Manipulation of contract state",
      "Loss of user deposits",
      "Protocol insolvency",
    ],
    detectionMethods: [
      "Static analysis tools (Slither, MythX)",
      "Manual code review focusing on external calls",
      "Property-based testing with Echidna",
      "Formal verification",
    ],
    references: [
      {
        title: "SWC-107: Reentrancy",
        url: "https://swcregistry.io/docs/SWC-107",
      },
      {
        title: "OpenZeppelin ReentrancyGuard",
        url: "https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard",
      },
    ],
    relatedVulnerabilities: ["access-control", "integer-overflow"],
  },
  {
    id: "https://scs.owasp.org/SCWE/SCSVS-CODE/SCWE-047",
    title: "Integer Overflow/Underflow",
    description: "Happens on arithmetic operations that exceed the maximum or minimum values for integer types",
    severity: "High",
    category: "Arithmetic",
    swcId: "SWC-101",
    icon: "AlertTriangle",
    commonIn: ["Token transfers", "balance calculations", "timestamp operations"],
    famousCases: ["BeautyChain (BEC)", "SMT Token"],
    prevention: ["SafeMath library", "Solidity 0.8+ built-in checks"],
    borderColor: "border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-500",
    badgeVariant: "secondary",
    detailedDescription:
      "Integer overflow and underflow vulnerabilities occur when arithmetic operations result in values that exceed the maximum or fall below the minimum representable value for the integer type. In Solidity versions prior to 0.8.0, these conditions would silently wrap around, leading to unexpected behavior.",
    technicalDetails:
      "Solidity uses fixed-size integer types (uint8, uint256, etc.). When an operation results in a value outside the valid range, it wraps around. For example, adding 1 to the maximum uint8 value (255) results in 0, not 256.",
    codeExample: {
      vulnerable: `// Vulnerable to overflow (Solidity < 0.8.0)
function transfer(address to, uint256 amount) public {
    balances[msg.sender] -= amount; // Can underflow
    balances[to] += amount; // Can overflow
}`,
      secure: `// Protected against overflow (Solidity >= 0.8.0 or SafeMath)
function transfer(address to, uint256 amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount; // Built-in overflow protection
    balances[to] += amount;
}`,
    },
    impact: ["Token supply manipulation", "Unauthorized token minting", "Balance corruption", "Economic exploits"],
    detectionMethods: [
      "Compiler warnings in Solidity 0.8+",
      "Static analysis tools",
      "Unit testing with edge cases",
      "Fuzzing with extreme values",
    ],
    references: [
      {
        title: "SWC-101: Integer Overflow and Underflow",
        url: "https://swcregistry.io/docs/SWC-101",
      },
      {
        title: "OpenZeppelin SafeMath",
        url: "https://docs.openzeppelin.com/contracts/2.x/api/math",
      },
    ],
    relatedVulnerabilities: ["reentrancy", "access-control"],
  },
  {
    id: "https://scs.owasp.org/SCWE/SCSVS-AUTH/SCWE-017/",
    title: "Privileged Role Mismanagement",
    description: "When a smart contract incorrectly assigns roles or permissions, granting excessive privileges to certain users. ",
    severity: "Medium",
    category: "Authorization",
    swcId: "SWC-115",
    icon: "Lock",
    commonIn: ["Admin functions", "ownership transfers", "privileged operations"],
    famousCases: ["Parity Wallet", "Akropolis"],
    prevention: ["OpenZeppelin AccessControl", "proper modifier usage"],
    borderColor: "border-yellow-200 dark:border-yellow-800",
    iconColor: "text-yellow-500",
    badgeVariant: "outline",
    detailedDescription:
      "Privileged role mismanagement occurs when a smart contract incorrectly assigns roles or permissions, granting excessive privileges to certain users.",
    technicalDetails:
      "Access control in smart contracts typically relies on modifiers that check the caller's address or role. Common issues include missing access controls, incorrect role assignments, or flawed permission logic.",
    codeExample: {
      vulnerable: `// Missing access control
function setOwner(address newOwner) public {
    owner = newOwner; // Anyone can change owner!
}`,
      secure: `// Proper access control
modifier onlyOwner() {
    require(msg.sender == owner, "Not authorized");
    _;
}

function setOwner(address newOwner) public onlyOwner {
    owner = newOwner;
}`,
    },
    impact: ["Unauthorized privilege escalation", "Contract takeover", "Fund theft", "State manipulation"],
    detectionMethods: ["Manual code review", "Access control testing", "Role-based testing", "Static analysis"],
    references: [
      {
        title: "SWC-115: Authorization through tx.origin",
        url: "https://swcregistry.io/docs/SWC-115",
      },
      {
        title: "OpenZeppelin Access Control",
        url: "https://docs.openzeppelin.com/contracts/4.x/access-control",
      },
    ],
    relatedVulnerabilities: ["reentrancy", "front-running"],
  },
  {
    id: "front-running",
    title: "Front-Running Vulnerabilities",
    description: "Transactions can be observed in mempool and exploited by miners or bots before execution",
    severity: "Medium",
    category: "MEV",
    swcId: "MEV",
    icon: "Zap",
    commonIn: ["DEX trades", "auctions", "lottery contracts"],
    famousCases: ["MEV extraction", "sandwich attacks", "transaction ordering"],
    prevention: ["Commit-reveal schemes", "private mempools", "batch auctions"],
    borderColor: "border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-500",
    badgeVariant: "outline",
    detailedDescription:
      "Front-running attacks exploit the transparent nature of blockchain transactions. Attackers monitor the mempool for profitable transactions and submit their own transactions with higher gas fees to be executed first, extracting value from the original transaction.",
    technicalDetails:
      "When transactions are submitted to the blockchain, they sit in the mempool before being included in a block. This creates a window where attackers can observe pending transactions and react accordingly, often by paying higher gas fees to ensure their transaction is processed first.",
    codeExample: {
      vulnerable: `// Vulnerable to front-running
function buyToken(uint256 amount) public payable {
    uint256 price = getCurrentPrice();
    require(msg.value >= price * amount);
    tokens[msg.sender] += amount;
}`,
      secure: `// Protected with commit-reveal
mapping(bytes32 => Commit) public commits;

function commitBuy(bytes32 commitment) public {
    commits[commitment] = Commit(msg.sender, block.timestamp);
}

function revealBuy(uint256 amount, uint256 nonce) public payable {
    bytes32 hash = keccak256(abi.encodePacked(amount, nonce, msg.sender));
    require(commits[hash].user == msg.sender);
    // Execute buy with committed parameters
}`,
    },
    impact: ["MEV extraction", "Sandwich attacks", "Auction manipulation", "Price manipulation"],
    detectionMethods: [
      "Mempool monitoring",
      "Transaction ordering analysis",
      "MEV detection tools",
      "Economic analysis",
    ],
    references: [
      {
        title: "Ethereum MEV Research",
        url: "https://ethereum.org/en/developers/docs/mev/",
      },
      {
        title: "Flashboys 2.0 Paper",
        url: "https://arxiv.org/abs/1904.05234",
      },
    ],
    relatedVulnerabilities: ["access-control"],
  },
]

export const detectionTools: DetectionTool[] = [
  {
    id: "slither",
    name: "Slither",
    type: "Static",
    description: "Python-based static analysis framework with 70+ detectors",
    icon: "Code",
        iconColor: "blue",
    color: "blue"
  },
  {
    id: "mythx",
    name: "MythX",
    type: "Hybrid",
    description: "Professional security analysis platform with symbolic execution",
    icon: "Shield",
      iconColor: "green",
     color: "blue"
  },
  {
    id: "echidna",
    name: "Echidna",
    type: "Fuzzing",
    description: "Property-based fuzzing tool for Ethereum smart contracts",
    icon: "Zap",
      iconColor: "purple",
     color: "blue"
  },
]
