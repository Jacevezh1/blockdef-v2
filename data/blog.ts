import type { BlogPost, BlogCategory } from "@/types/blog"

export const categories: BlogCategory[] = [
  { id: "tokenization", name: "Tokenization", description: "Asset tokenization and digital ownership", color: "blue" },
  { id: "security", name: "Security", description: "Blockchain security and vulnerabilities", color: "red" },
  { id: "tokenomics", name: "Tokenomics", description: "Token economics and governance", color: "green" },
  { id: "defi", name: "DeFi", description: "Decentralized finance protocols", color: "purple" },
  { id: "research", name: "Research", description: "Academic research and analysis", color: "orange" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "real-world-asset-tokenization-2024",
    title: "Real-World Asset Tokenization: The $16 Trillion Opportunity",
    excerpt:
      "Exploring how traditional assets are being tokenized on blockchain networks, from real estate to commodities, and the regulatory frameworks enabling this transformation.",
    content: `# Real-World Asset Tokenization: The $16 Trillion Opportunity

The tokenization of real-world assets (RWAs) represents one of the most significant opportunities in blockchain technology today. With traditional financial markets worth over $16 trillion globally, the potential for blockchain-based tokenization is immense.

## What is Asset Tokenization?

Asset tokenization is the process of converting rights to an asset into a digital token on a blockchain. This process enables:

- **Fractional ownership**: Expensive assets can be divided into smaller, more affordable pieces
- **Increased liquidity**: Previously illiquid assets can be traded 24/7 on global markets
- **Reduced barriers**: Lower minimum investments and simplified processes
- **Transparency**: All transactions are recorded on an immutable ledger

## Current Market Landscape

The RWA tokenization market has seen explosive growth in 2024:

- **Real Estate**: Over $2.3 billion in tokenized real estate transactions
- **Commodities**: Gold and silver tokenization reaching $890 million
- **Art & Collectibles**: NFT-backed physical assets worth $450 million
- **Carbon Credits**: Environmental tokens exceeding $120 million

## Technical Implementation

Modern tokenization platforms utilize several key technologies:

### Smart Contract Architecture
\`\`\`solidity
contract RealEstateToken {
    mapping(address => uint256) public ownership;
    uint256 public totalSupply;
    string public propertyAddress;
    
    function transferOwnership(address to, uint256 amount) external {
        require(ownership[msg.sender] >= amount, "Insufficient balance");
        ownership[msg.sender] -= amount;
        ownership[to] += amount;
    }
}
\`\`\`

### Oracle Integration
Reliable price feeds and asset verification require robust oracle networks to ensure accurate valuation and compliance.

## Regulatory Considerations

The regulatory landscape for RWA tokenization is rapidly evolving:

- **SEC Guidelines**: New frameworks for digital asset securities
- **European MiCA Regulation**: Comprehensive crypto asset regulation
- **Singapore MAS**: Progressive approach to tokenized assets

## Challenges and Solutions

### Custody and Storage
Physical assets require secure custody solutions that bridge traditional and digital worlds.

### Legal Framework
Clear legal structures must define ownership rights and transfer mechanisms.

### Market Infrastructure
Robust trading platforms and settlement systems are essential for liquidity.

## Future Outlook

By 2030, analysts predict that tokenized RWAs could represent 10-15% of traditional asset markets, creating a multi-trillion dollar ecosystem that bridges traditional finance with decentralized technologies.

The convergence of regulatory clarity, technological maturity, and market demand positions 2024 as a pivotal year for mainstream RWA adoption.`,
    author: { name: "Sarah Chen" },
    publishedAt: "2024-01-15",
    readTime: 8,
    views: 3200,
    category: "tokenization",
    tags: ["RWA", "Tokenization", "DeFi", "Regulation"],
    featured: true,
    status: "analysis",
  },
  {
    id: "defi-protocol-exploit-50m",
    title: "Major DeFi Protocol Suffers $50M Exploit Through Reentrancy Attack",
    excerpt:
      "A critical reentrancy vulnerability in a leading DeFi lending protocol resulted in one of the largest exploits of 2024, highlighting the importance of proper security audits.",
    content: `# Major DeFi Protocol Suffers $50M Exploit Through Reentrancy Attack

In a devastating security breach that shook the DeFi ecosystem, a prominent lending protocol lost $50 million to a sophisticated reentrancy attack, marking one of the most significant exploits of 2024.

## Attack Overview

The exploit occurred on January 14, 2024, when an attacker identified and exploited a critical reentrancy vulnerability in the protocol's liquidation mechanism. The attack was executed in a series of complex transactions that drained the protocol's reserves.

### Timeline of Events

- **12:34 UTC**: First malicious transaction initiated
- **12:35 UTC**: Reentrancy loop begins, draining funds
- **12:41 UTC**: Protocol team detects unusual activity
- **12:45 UTC**: Emergency pause activated
- **13:15 UTC**: Full extent of damage assessed

## Technical Analysis

The vulnerability existed in the liquidation function where external calls were made before state updates:

\`\`\`solidity
function liquidate(address user, uint256 amount) external {
    // VULNERABLE: External call before state update
    collateralToken.transfer(msg.sender, collateralAmount);
    
    // State update happens after external call
    userDebt[user] -= amount;
    totalDebt -= amount;
}
\`\`\`

### The Attack Vector

1. **Initial Setup**: Attacker deployed a malicious contract
2. **Reentrancy Trigger**: Called liquidate function with crafted parameters
3. **Recursive Calls**: Malicious contract re-entered liquidate function
4. **Fund Drainage**: Multiple withdrawals before state updates

## Security Implications

This exploit highlights several critical security considerations:

### Audit Limitations
Despite multiple security audits, the vulnerability went undetected, demonstrating the limitations of traditional audit approaches.

### Code Complexity
The interaction between multiple smart contracts created unexpected attack vectors that weren't apparent in isolated testing.

### Time-Sensitive Responses
The 11-minute window between attack initiation and protocol pause shows the importance of real-time monitoring systems.

## Industry Response

The DeFi community responded swiftly:

- **Immediate Patches**: Similar protocols updated their code
- **Enhanced Monitoring**: New real-time security tools deployed
- **Insurance Claims**: Affected users filed claims with DeFi insurance protocols

## Prevention Strategies

### Checks-Effects-Interactions Pattern
\`\`\`solidity
function liquidate(address user, uint256 amount) external {
    // Checks
    require(amount > 0, "Invalid amount");
    require(userDebt[user] >= amount, "Insufficient debt");
    
    // Effects
    userDebt[user] -= amount;
    totalDebt -= amount;
    
    // Interactions
    collateralToken.transfer(msg.sender, collateralAmount);
}
\`\`\`

### Reentrancy Guards
Implementing OpenZeppelin's ReentrancyGuard modifier provides additional protection.

### Formal Verification
Mathematical proofs of contract correctness can catch vulnerabilities that traditional audits miss.

## Recovery Efforts

The protocol team has announced a comprehensive recovery plan:

1. **Immediate**: Pause all protocol functions
2. **Short-term**: Deploy patched contracts
3. **Long-term**: Implement governance-approved compensation plan

## Lessons Learned

This incident reinforces the critical importance of:
- Comprehensive security testing
- Real-time monitoring systems
- Rapid incident response procedures
- Community-driven security research

The DeFi ecosystem continues to evolve and strengthen its security practices, with each incident providing valuable lessons for building more resilient protocols.`,
    author: { name: "Alex Rodriguez" },
    publishedAt: "2024-01-14",
    readTime: 6,
    views: 5100,
    category: "security",
    tags: ["DeFi", "Exploit", "Reentrancy", "Security"],
    featured: true,
    status: "breaking",
  },
  {
    id: "tokenomics-design-patterns-2024",
    title: "Tokenomics Design Patterns: Building Sustainable Crypto Economies",
    excerpt:
      "A comprehensive analysis of successful tokenomics models, from deflationary mechanisms to governance tokens, and how to design sustainable token economies.",
    content: `# Tokenomics Design Patterns: Building Sustainable Crypto Economies

Tokenomics—the economic design of cryptocurrency tokens—has evolved from simple utility tokens to sophisticated economic systems that drive entire ecosystems. Understanding these design patterns is crucial for building sustainable crypto economies.

## Core Tokenomics Principles

### Value Accrual Mechanisms

Successful tokens implement clear value accrual mechanisms:

1. **Fee Capture**: Tokens capture value from network usage
2. **Staking Rewards**: Token holders earn rewards for securing the network
3. **Governance Rights**: Voting power creates demand for tokens
4. **Burn Mechanisms**: Reducing supply to increase scarcity

### Supply Dynamics

Token supply models significantly impact long-term sustainability:

#### Inflationary Models
- **Pros**: Incentivize early adoption and network security
- **Cons**: Potential devaluation over time
- **Examples**: Ethereum (pre-merge), Polkadot

#### Deflationary Models
- **Pros**: Create scarcity and potential price appreciation
- **Cons**: May discourage spending and usage
- **Examples**: Ethereum (post-merge), BNB

#### Fixed Supply Models
- **Pros**: Predictable monetary policy
- **Cons**: May not adapt to changing network needs
- **Examples**: Bitcoin, Litecoin

## Successful Design Patterns

### 1. The Ethereum Model

Ethereum's transition to Proof-of-Stake introduced a sophisticated tokenomics model:

\`\`\`
Base Fee Burn + Staking Rewards = Net Deflationary Pressure
\`\`\`

**Key Features:**
- EIP-1559 burns base fees
- Staking rewards for validators
- Net deflationary during high network usage

### 2. The Curve Model

Curve's vote-escrowed tokenomics (veCRV) creates long-term alignment:

- **Lock Periods**: Longer locks = more voting power
- **Reward Boosts**: veCRV holders get higher LP rewards
- **Fee Sharing**: Protocol fees distributed to veCRV holders

### 3. The Olympus Model

OlympusDAO pioneered the (3,3) game theory mechanism:

- **Bonding**: Sell assets to protocol for discounted tokens
- **Staking**: Earn high APY through token inflation
- **Protocol-Owned Liquidity**: Reduces reliance on mercenary capital

## Design Considerations

### Stakeholder Alignment

Effective tokenomics align incentives across all stakeholders:

#### Users
- Lower transaction costs
- Rewards for participation
- Governance representation

#### Validators/Miners
- Fair compensation for security
- Predictable reward schedules
- Slashing mechanisms for bad behavior

#### Developers
- Funding for development
- Long-term sustainability
- Innovation incentives

### Economic Security

Token economics must ensure network security:

\`\`\`
Cost of Attack > Potential Reward from Attack
\`\`\`

This requires careful balance of:
- Staking rewards vs. inflation
- Slashing penalties
- Token distribution

## Common Pitfalls

### 1. Ponzi-like Mechanics

Unsustainable reward rates that rely solely on new participants:

**Warning Signs:**
- Extremely high APYs (>100% annually)
- No real value creation
- Rewards funded only by new deposits

### 2. Poor Distribution

Concentrated token ownership can lead to:
- Governance centralization
- Market manipulation
- Reduced network effects

### 3. Misaligned Incentives

When token incentives don't align with network health:
- Short-term speculation over long-term value
- Gaming of reward mechanisms
- Reduced actual usage

## Emerging Trends

### 1. Real Yield

Focus on sustainable returns from actual revenue:
- Fee sharing with token holders
- Revenue from real economic activity
- Reduced reliance on token inflation

### 2. Governance Minimization

Reducing governance attack surface:
- Immutable core protocols
- Limited governance scope
- Time delays for changes

### 3. Cross-Chain Tokenomics

Multi-chain token models:
- Unified governance across chains
- Cross-chain fee sharing
- Interoperable staking mechanisms

## Implementation Framework

### Phase 1: Design
1. Define value proposition
2. Identify stakeholders
3. Model economic flows
4. Simulate various scenarios

### Phase 2: Testing
1. Deploy on testnet
2. Run economic simulations
3. Gather community feedback
4. Iterate on design

### Phase 3: Launch
1. Fair token distribution
2. Gradual decentralization
3. Monitor key metrics
4. Adjust parameters as needed

## Key Metrics to Track

### Health Indicators
- **Token Velocity**: How quickly tokens change hands
- **Staking Ratio**: Percentage of tokens staked
- **Governance Participation**: Voting turnout rates
- **Revenue/Token**: Protocol revenue per token

### Risk Indicators
- **Concentration Ratio**: Token distribution concentration
- **Sell Pressure**: Unlock schedules and vesting
- **Correlation**: Price correlation with broader market

## Conclusion

Successful tokenomics design requires deep understanding of economic principles, game theory, and human behavior. The most sustainable models create genuine value, align stakeholder incentives, and adapt to changing market conditions.

As the crypto ecosystem matures, we're seeing a shift toward more sophisticated and sustainable tokenomics models that prioritize long-term value creation over short-term speculation.`,
    author: { name: "David Kim" },
    publishedAt: "2024-01-13",
    readTime: 10,
    views: 2800,
    category: "tokenomics",
    tags: ["Tokenomics", "Economics", "Governance", "DeFi"],
    featured: false,
    status: "research",
  },
  {
    id: "zk-proof-vulnerability-layer2",
    title: "Critical Zero-Knowledge Proof Vulnerability Discovered in Layer 2 Solutions",
    excerpt:
      "Security researchers have identified a systematic vulnerability in ZK-proof implementations across multiple Layer 2 scaling solutions, potentially affecting millions of users.",
    content: `# Critical Zero-Knowledge Proof Vulnerability Discovered in Layer 2 Solutions

A team of security researchers has uncovered a critical vulnerability in zero-knowledge proof implementations used by several major Layer 2 scaling solutions, potentially compromising the security of millions of users and billions of dollars in assets.

## Vulnerability Overview

The vulnerability, dubbed "ZK-Forge," affects the proof verification process in multiple zk-rollup implementations. The flaw allows malicious actors to generate valid-looking proofs for invalid state transitions, potentially enabling:

- Unauthorized token minting
- Double-spending attacks  
- State manipulation
- Fund drainage from bridges

## Technical Details

### The Flaw

The vulnerability exists in the constraint system used to verify state transitions:

\`\`\`rust
// VULNERABLE: Insufficient constraint on state transition
fn verify_state_transition(
    old_state: StateRoot,
    new_state: StateRoot,
    proof: ZKProof
) -> bool {
    // Missing validation allows crafted proofs to pass
    verify_proof(proof, old_state, new_state)
}
\`\`\`

### Attack Vector

1. **Proof Crafting**: Attacker generates malicious proof
2. **Constraint Bypass**: Exploits missing validation logic
3. **State Manipulation**: Creates invalid but "verified" state
4. **Asset Extraction**: Withdraws funds based on false state

## Affected Protocols

While specific names are being withheld pending patches, the vulnerability affects:

- 3 major zk-rollup networks
- 2 validium implementations  
- 1 hybrid rollup solution
- Combined TVL of over $8 billion

## Discovery Timeline

- **December 2023**: Initial vulnerability research begins
- **January 5, 2024**: First proof-of-concept developed
- **January 8, 2024**: Coordinated disclosure to affected parties
- **January 12, 2024**: Public disclosure after patch deployment

## Industry Response

### Immediate Actions

**Protocol Teams:**
- Emergency patches deployed
- Withdrawal delays implemented
- Enhanced monitoring activated

**Security Firms:**
- Comprehensive audits initiated
- New testing frameworks developed
- Bug bounty programs expanded

### Long-term Improvements

**Formal Verification:**
Enhanced mathematical proofs of circuit correctness

**Circuit Auditing:**
Specialized auditing processes for ZK circuits

**Testing Infrastructure:**
Improved fuzzing and property-based testing

## Prevention Strategies

### 1. Comprehensive Constraint Systems

\`\`\`rust
fn verify_state_transition(
    old_state: StateRoot,
    new_state: StateRoot,
    proof: ZKProof
) -> bool {
    // Validate all state transition rules
    validate_balance_conservation(&old_state, &new_state) &&
    validate_nonce_progression(&old_state, &new_state) &&
    validate_merkle_updates(&old_state, &new_state) &&
    verify_proof(proof, old_state, new_state)
}
\`\`\`

### 2. Multi-Layer Verification

- **Circuit-level**: Constraint system validation
- **Protocol-level**: Business logic verification  
- **Application-level**: User interface checks

### 3. Formal Methods

Mathematical proofs that circuits correctly implement intended logic:

- **Soundness**: Invalid statements cannot be proven
- **Completeness**: Valid statements can always be proven
- **Zero-knowledge**: Proofs reveal no additional information

## Impact Assessment

### Financial Impact
- No funds were lost due to responsible disclosure
- Estimated potential losses: $2-5 billion
- Market confidence temporarily affected

### Technical Impact
- Delayed rollout of several L2 solutions
- Increased scrutiny of ZK implementations
- Enhanced security standards adoption

## Lessons Learned

### For Developers
1. **Formal Verification**: Essential for critical cryptographic components
2. **Comprehensive Testing**: Traditional testing insufficient for ZK circuits
3. **Expert Review**: Specialized auditors required for ZK systems

### For Users
1. **Due Diligence**: Research security practices of L2 solutions
2. **Risk Management**: Diversify across multiple scaling solutions
3. **Stay Informed**: Monitor security advisories and updates

### For the Industry
1. **Standards Development**: Need for ZK security standards
2. **Tool Development**: Better development and auditing tools
3. **Education**: Training for ZK security best practices

## Future Outlook

This vulnerability discovery, while concerning, demonstrates the maturation of the ZK ecosystem:

- **Improved Security**: Enhanced focus on formal verification
- **Better Tools**: Development of specialized auditing frameworks
- **Industry Standards**: Emergence of ZK security best practices

The incident has accelerated the development of more robust ZK implementations and highlighted the importance of rigorous security practices in this rapidly evolving field.

## Recommendations

### For Protocol Developers
- Implement formal verification for all ZK circuits
- Conduct specialized ZK security audits
- Establish bug bounty programs with ZK expertise

### For Users
- Monitor protocol security updates
- Understand the risks of early-stage technology
- Use multiple L2 solutions to diversify risk

The ZK-rollup ecosystem continues to evolve rapidly, and this incident serves as a valuable learning experience that will ultimately strengthen the security and reliability of Layer 2 scaling solutions.`,
    author: { name: "Maria Santos" },
    publishedAt: "2024-01-12",
    readTime: 7,
    views: 4200,
    category: "security",
    tags: ["ZK-Proofs", "Layer2", "Security", "Vulnerability"],
    featured: false,
    status: "security-alert",
  },
  {
    id: "cross-chain-bridge-exploit-15m",
    title: "Cross-Chain Bridge Suffers $15M Attack Due to Signature Verification Flaw",
    excerpt:
      "A popular cross-chain bridge protocol has been exploited for $15 million due to a critical flaw in its multi-signature verification system, highlighting ongoing security challenges.",
    content: `# Cross-Chain Bridge Suffers $15M Attack Due to Signature Verification Flaw

A prominent cross-chain bridge protocol fell victim to a $15 million exploit yesterday, marking another significant security incident in the cross-chain infrastructure space. The attack exploited a critical vulnerability in the bridge's multi-signature verification system.

## Attack Summary

The exploit occurred on January 11, 2024, when an attacker successfully manipulated the bridge's signature verification process to authorize fraudulent cross-chain transfers. The attack drained funds from multiple supported chains within a 2-hour window.

### Key Details
- **Total Loss**: $15.2 million across 4 chains
- **Attack Duration**: 2 hours 15 minutes
- **Transactions**: 47 malicious cross-chain transfers
- **Response Time**: 35 minutes to pause protocol

## Technical Analysis

### The Vulnerability

The flaw existed in the bridge's multi-signature validation logic:

\`\`\`solidity
function validateSignatures(
    bytes32 messageHash,
    bytes[] memory signatures
) internal view returns (bool) {
    uint256 validSignatures = 0;
    
    for (uint i = 0; i < signatures.length; i++) {
        address signer = recoverSigner(messageHash, signatures[i]);
        if (isValidator[signer]) {
            validSignatures++;
        }
    }
    
    // VULNERABLE: No duplicate signature check
    return validSignatures >= requiredSignatures;
}
\`\`\`

### Attack Methodology

1. **Signature Reuse**: Attacker collected valid signatures from previous transactions
2. **Duplicate Submission**: Submitted the same signature multiple times
3. **Threshold Bypass**: Reached required signature count with duplicates
4. **Fund Extraction**: Authorized withdrawals on destination chains

## Cross-Chain Security Challenges

### Trust Assumptions

Cross-chain bridges face unique security challenges:

- **Validator Set Security**: Compromise of validator keys
- **Consensus Mechanisms**: Different security models across chains
- **Message Passing**: Secure communication between chains
- **State Synchronization**: Maintaining consistent state

### Common Attack Vectors

1. **Validator Compromise**: Malicious or compromised validators
2. **Signature Manipulation**: Exploiting signature verification flaws
3. **Replay Attacks**: Reusing valid transactions
4. **Eclipse Attacks**: Isolating validators from network

## Industry Impact

### Immediate Consequences

- **User Funds**: $15.2M in user assets lost
- **Protocol Reputation**: Significant damage to bridge ecosystem
- **Market Reaction**: Cross-chain tokens declined 5-15%
- **Regulatory Attention**: Increased scrutiny of bridge protocols

### Broader Implications

This incident highlights systemic issues in cross-chain infrastructure:

- **Security Standards**: Need for standardized security practices
- **Audit Requirements**: Specialized cross-chain security audits
- **Insurance Coverage**: Limited coverage for bridge exploits

## Prevention Measures

### Enhanced Signature Verification

\`\`\`solidity
function validateSignatures(
    bytes32 messageHash,
    bytes[] memory signatures
) internal view returns (bool) {
    require(signatures.length >= requiredSignatures, "Insufficient signatures");
    
    uint256 validSignatures = 0;
    mapping(address => bool) usedSigners;
    
    for (uint i = 0; i < signatures.length; i++) {
        address signer = recoverSigner(messageHash, signatures[i]);
        
        // Prevent signature reuse
        require(!usedSigners[signer], "Duplicate signer");
        require(isValidator[signer], "Invalid signer");
        
        usedSigners[signer] = true;
        validSignatures++;
        
        if (validSignatures >= requiredSignatures) {
            return true;
        }
    }
    
    return false;
}
\`\`\`

### Additional Security Measures

1. **Time Delays**: Implement withdrawal delays for large amounts
2. **Rate Limiting**: Limit transfer volumes per time period
3. **Monitoring Systems**: Real-time anomaly detection
4. **Emergency Pauses**: Quick response mechanisms

## Recovery Efforts

### Immediate Response

The protocol team has initiated several recovery measures:

1. **Protocol Pause**: All bridge operations suspended
2. **Forensic Analysis**: Detailed investigation of attack vectors
3. **Patch Development**: Fix for signature verification flaw
4. **Community Communication**: Regular updates to affected users

### Long-term Recovery Plan

- **Security Audit**: Comprehensive third-party security review
- **Insurance Claims**: Working with DeFi insurance providers
- **Compensation Program**: Partial reimbursement for affected users
- **Protocol Upgrade**: Enhanced security features implementation

## Lessons for the Industry

### For Bridge Developers

1. **Rigorous Testing**: Comprehensive testing of signature verification
2. **Formal Verification**: Mathematical proofs of security properties
3. **Redundant Checks**: Multiple layers of validation
4. **Regular Audits**: Ongoing security assessments

### For Users

1. **Risk Assessment**: Understand bridge security models
2. **Diversification**: Use multiple bridges to spread risk
3. **Due Diligence**: Research bridge security practices
4. **Insurance**: Consider DeFi insurance for large positions

### For the Ecosystem

1. **Standards Development**: Industry-wide security standards
2. **Shared Security**: Collaborative security initiatives
3. **Research Funding**: Investment in cross-chain security research
4. **Regulatory Clarity**: Clear guidelines for cross-chain protocols

## Future of Cross-Chain Security

Despite this setback, the cross-chain ecosystem continues to evolve:

### Emerging Solutions

- **Zero-Knowledge Bridges**: Enhanced privacy and security
- **Optimistic Verification**: Fraud-proof based systems
- **Shared Security Models**: Leveraging established validator sets
- **Formal Verification**: Mathematical security guarantees

### Industry Maturation

The bridge exploit serves as another learning experience for the industry, driving improvements in:

- Security practices and standards
- Auditing methodologies
- Risk management frameworks
- User education and awareness

As cross-chain infrastructure matures, we expect to see more robust security measures and better risk management practices across the ecosystem.`,
    author: { name: "James Wilson" },
    publishedAt: "2024-01-11",
    readTime: 5,
    views: 3600,
    category: "security",
    tags: ["Cross-Chain", "Bridge", "Exploit", "Multi-Sig"],
    featured: false,
    status: "exploit",
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === categoryId)
}

export function getCategoryById(id: string): BlogCategory | undefined {
  return categories.find((category) => category.id === id)
}
