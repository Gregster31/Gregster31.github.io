import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'julien.halde@example.com', // Replace with your actual email
    
    emailSubject: "Let's collaborate on a blockchain project",
    emailBody: 'Hi Julien, I am reaching out to you because...',
    
    oldPortfolio: 'https://www.legacy.julienhalde.dev', // Update when you have one
    upworkProfile: 'https://www.upwork.com/freelancers/julienhalde', // Update if you have one
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/YourGithubUsername' }, // Replace with your GitHub
    { name: 'linkedin', url: 'https://www.linkedin.com/in/julien-halde' }, // Replace with your LinkedIn
    { name: 'twitter', url: 'https://twitter.com/YourTwitter' }, // Replace with your Twitter if you have one
];

export const MY_STACK = {
    'blockchain & web3': [
        {
            name: 'Solidity',
            icon: '/logo/solidity.png', // You'll need to add this logo
        },
        {
            name: 'Ethereum',
            icon: '/logo/ethereum.png', // You'll need to add this logo
        },
        {
            name: 'Hardhat',
            icon: '/logo/hardhat.png', // You'll need to add this logo
        },
        {
            name: 'Ethers.js',
            icon: '/logo/ethers.png', // You'll need to add this logo
        },
        {
            name: 'Wagmi',
            icon: '/logo/wagmi.png', // You'll need to add this logo
        },
        {
            name: 'Viem',
            icon: '/logo/viem.png', // You'll need to add this logo
        },
        {
            name: 'RainbowKit',
            icon: '/logo/rainbowkit.png', // You'll need to add this logo
        },
        {
            name: 'MetaMask',
            icon: '/logo/metamask.png', // You'll need to add this logo
        },
    ],
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    'mobile & backend': [
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.png', // You'll need to add this logo
        },
        {
            name: 'Swift',
            icon: '/logo/swift.png', // You'll need to add this logo
        },
        {
            name: 'Java',
            icon: '/logo/java.png', // You'll need to add this logo
        },
        {
            name: 'Python',
            icon: '/logo/python.png', // You'll need to add this logo
        },
        {
            name: 'C#',
            icon: '/logo/csharp.png', // You'll need to add this logo
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png', // You'll need to add this logo
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQLite',
            icon: '/logo/sqlite.png', // You'll need to add this logo
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Azure DevOps',
            icon: '/logo/azure.png', // You'll need to add this logo
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'GeniePay',
        slug: 'geniepay',
        year: 2025,
        description: `
      A revolutionary crypto payroll platform designed to transform how companies handle employee payments. Built on Ethereum, GeniePay enables instant, tax-conscious payouts to 1,000+ employees in a single transaction using smart contracts. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💰 Multi-Currency Support: USDC, DAI, ETH, and fiat integration</li>
        <li>📊 Team Management Dashboard: Comprehensive web interface for HR teams</li>
        <li>🧾 Automatic Invoice Generation: Simplified accounting and reporting</li>
        <li>⚡ Bulk Transactions: Process thousands of payments in one transaction</li>
        <li>🔒 Smart Contract Security: Immutable and transparent payment logic</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed custom smart contracts for efficient batch payments</li>
        <li>Implemented Wagmi and Viem for seamless Web3 integration</li>
        <li>Built responsive React dashboard with TypeScript</li>
        <li>Integrated RainbowKit for enhanced wallet connectivity</li>
      </ul>
      `,
        role: `
      Full-Stack Blockchain Developer <br/>
      Leading the entire development process:
      <ul>
        <li>🔗 Smart Contracts: Designed and deployed Solidity contracts on Ethereum</li>
        <li>⚛️ Frontend: Built React dashboard with TypeScript and Tailwind CSS</li>
        <li>🌐 Web3 Integration: Implemented wallet connections and blockchain interactions</li>
        <li>💾 Backend: Set up Firebase for user management and data storage</li>
        <li>📱 UX/UI: Created intuitive interfaces for complex financial operations</li>
      </ul>
      `,
        techStack: [
            'React',
            'TypeScript',
            'Wagmi',
            'Viem',
            'RainbowKit',
            'Solidity',
            'Ethereum',
            'Firebase',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/geniepay.webp', // You'll need to add project images
        longThumbnail: '/projects/long/geniepay.webp',
        images: [
            '/projects/images/geniepay-1.webp',
            '/projects/images/geniepay-2.webp',
            '/projects/images/geniepay-3.webp',
        ],
    },
    {
        title: 'BlockVote',
        slug: 'blockvote',
        year: 2025,
        description: `
      A decentralized voting application built for the Easy-A Hackathon at Consensus 2025 in Toronto. BlockVote ensures transparent, tamper-proof elections using blockchain technology. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🗳️ Tamper-Proof Voting: Immutable vote storage on Ethereum</li>
        <li>🔐 MetaMask Authentication: Secure wallet-based user verification</li>
        <li>📊 Live Vote Tracking: Real-time vote counts and results</li>
        <li>👥 On-Chain Candidate Management: Decentralized candidate listings</li>
        <li>📱 Responsive Design: Mobile-friendly voting interface</li>
      </ul><br/>
      
      Technical Implementation:
      <ul>
        <li>Smart contracts handle all voting logic and data storage</li>
        <li>Hardhat development environment for testing and deployment</li>
        <li>Ethers.js for blockchain interaction and event listening</li>
        <li>React frontend with Vite for optimal performance</li>
      </ul>
      `,
        role: `
      Blockchain Developer <br/>
      Built the complete DApp during the hackathon:
      <ul>
        <li>📜 Smart Contracts: Developed voting logic in Solidity</li>
        <li>🔧 Development Setup: Configured Hardhat for local testing</li>
        <li>⚛️ Frontend: Created React interface with TypeScript</li>
        <li>🔗 Web3 Integration: Connected frontend to smart contracts</li>
        <li>🚀 Deployment: Deployed to Ethereum Sepolia testnet</li>
      </ul>
      `,
        techStack: [
            'React',
            'Vite',
            'TypeScript',
            'Solidity',
            'Hardhat',
            'Ethers.js',
            'MetaMask',
            'Ethereum',
        ],
        thumbnail: '/projects/thumbnail/blockvote.webp', // You'll need to add project images
        longThumbnail: '/projects/long/blockvote.webp',
        images: [
            '/projects/images/blockvote-1.webp',
            '/projects/images/blockvote-2.webp',
            '/projects/images/blockvote-3.webp',
        ],
        sourceCode: 'https://github.com/YourGithubUsername/blockvote', // Replace with actual repo
    },
    {
        title: 'ChargeHub Mobile',
        slug: 'chargehub-mobile',
        year: 2025,
        description: `
      Enhanced mobile application features for ChargeHub, a leading electric vehicle charging network platform. Contributed to both Android and iOS development while improving user experience and security. <br/> <br/>
      
      Key Contributions:<br/>
      <ul>
        <li>📱 Cross-Platform Development: Built features for both Android (Kotlin) and iOS (Swift)</li>
        <li>🔒 Security Research: Reverse-engineered Android SDKs to identify vulnerabilities</li>
        <li>🐛 Bug Reporting: Eliminated empty user submissions through improved systems</li>
        <li>📦 Release Management: Handled app versioning and Play Store releases</li>
        <li>🎨 Modern UI: Implemented Jetpack Compose and SwiftUI interfaces</li>
      </ul><br/>
      
      Technical Focus:
      <ul>
        <li>Native Android development with Kotlin and Jetpack Compose</li>
        <li>iOS development using Swift with both UIKit and SwiftUI</li>
        <li>Security analysis and vulnerability documentation</li>
        <li>Play Store release cycle management</li>
      </ul>
      `,
        role: `
      Software Developer (Mobile) <br/>
      Professional role at ChargeHub:
      <ul>
        <li>📱 Mobile Development: Built Android features with Kotlin (Jetpack Compose)</li>
        <li>🍎 iOS Development: Created iOS features with Swift (UIKit & SwiftUI)</li>
        <li>🔍 Security Research: Reverse-engineered SDKs for vulnerability assessment</li>
        <li>🛠️ System Improvement: Enhanced bug-reporting to reduce empty submissions</li>
        <li>🚀 Release Management: Managed Google Play Store releases and versioning</li>
      </ul>
      `,
        techStack: [
            'Kotlin',
            'Swift',
            'Jetpack Compose',
            'SwiftUI',
            'UIKit',
            'Android SDK',
            'iOS SDK',
            'Google Play Console',
        ],
        thumbnail: '/projects/thumbnail/chargehub.webp', // You'll need to add project images
        longThumbnail: '/projects/long/chargehub.webp',
        images: [
            '/projects/images/chargehub-1.webp',
            '/projects/images/chargehub-2.webp',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Developer',
        company: 'ChargeHub',
        duration: 'Winter 2025 - Summer 2025',
    },
    {
        title: 'Translator',
        company: 'Ethereum Foundation',
        duration: 'Summer 2025',
    },
    {
        title: 'Head Coach',
        company: 'CAVIP Swimming Club',
        duration: 'Summer 2023',
    },
];