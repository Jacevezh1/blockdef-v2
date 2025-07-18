# Contributing to BlockDef

Thank you for your interest in contributing to BlockDef! This document provides guidelines for contributing content and code.

## 🎯 Types of Contributions

### 1. Security Content
- **CVE Reports**: Add new Common Vulnerabilities and Exposures
- **Smart Contract Vulnerabilities**: Document vulnerability patterns
- **Protocol Exploits**: Analyze real-world attacks
- **Research Papers**: Submit security research and analysis
- **Tools Documentation**: Add new security tools

### 2. Code Contributions
- Bug fixes and improvements
- New features
- UI/UX enhancements
- Performance optimizations

## 📝 Content Contribution Process

### Adding a New CVE

1. Create a new file in `content/vulnerabilities/cves/`
2. Use the CVE template:

\`\`\`yaml
---
id: "CVE-2024-XXXX"
title: "Vulnerability Title"
severity: "Critical" # Critical, High, Medium, Low
cvss_score: 9.8
published_date: "2024-01-15"
affected_systems:
  - "Ethereum"
  - "Smart Contracts"
description: "Detailed description of the vulnerability"
impact: "Description of potential impact"
mitigation: "Steps to mitigate the vulnerability"
references:
  - "https://nvd.nist.gov/vuln/detail/CVE-2024-XXXX"
  - "https://github.com/project/security-advisory"
tags:
  - "reentrancy"
  - "defi"
  - "ethereum"
---

## Technical Details

Detailed technical analysis of the vulnerability...

## Proof of Concept

```solidity
// Example vulnerable code
contract VulnerableContract {
    // ...
}
