import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'julien.halde31@proton.me',

    resumeUrl: '/Julien_Halde_Resume.pdf', // Fixed path to public folder
    githubProfile: 'https://github.com/julien-halde',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Gregster31' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/julien-halde' },
];

export const MY_STACK = {
    'blockchain & smart contracts': [
        {
            name: 'Solidity',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
        },
        {
            name: 'Ethereum',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
        },
        {
            name: 'Hardhat',
            icon: 'https://hardhat.org/hardhat-logo.svg',
        },
        {
            name: 'Wagmi',
            icon: 'https://wagmi.sh/icon-light.svg',
        },
        {
            name: 'Viem',
            icon: 'https://viem.sh/icon-light.svg',
        },
        {
            name: 'OpenZeppelin',
            icon: 'https://docs.openzeppelin.com/img/logo.svg',
        },
        {
            name: 'Web3.js',
            icon: 'https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png',
        },
        {
            name: 'MetaMask',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
        },
    ],
    'frontend & web3 ui': [
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        },
        {
            name: 'RainbowKit',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        },
        {
            name: 'Framer Motion',
            icon: 'https://www.framer.com/images/favicons/favicon.svg',
        },
    ],
    'mobile & backend': [
        {
            name: 'Kotlin',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        },
        {
            name: 'Swift',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        },
        {
            name: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
            name: 'Firebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
        {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
    ],
    'defi & protocols': [
        {
            name: 'Uniswap',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/dapps/app.uniswap.org.png',
        },
        {
            name: 'AAVE',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/dapps/aave.com.png',
        },
        {
            name: 'Chainlink',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
        },
        {
            name: 'Polygon',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
        },
    ],
    'tools & infrastructure': [
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'IPFS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'The Graph',
            icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'GeniePay Protocol',
        slug: 'geniepay',
        year: 2025,
        description: `
        <strong>Revolutionary DeFi Payroll Infrastructure</strong><br/><br/>
        
        GeniePay is an enterprise-grade decentralized payroll protocol that transforms traditional HR operations through smart contracts. The platform enables instant, gas-optimized salary distributions to thousands of employees while maintaining full regulatory compliance and tax reporting.<br/><br/>
        
        🚀 <strong>Core Innovations:</strong><br/>
        <ul>
          <li><strong>Merkle Tree Batch Payments:</strong> Process 1000+ salaries in a single transaction, reducing gas costs by 95%</li>
          <li><strong>Multi-Token Treasury:</strong> Native support for USDC, DAI, USDT, wETH with automated rebalancing</li>
          <li><strong>Vesting Smart Contracts:</strong> Time-locked token distributions with cliff periods and linear unlocking</li>
          <li><strong>Cross-Chain Architecture:</strong> Deployed on Ethereum, Polygon, and Arbitrum with unified liquidity pools</li>
          <li><strong>Oracle Integration:</strong> Real-time fiat conversion rates via Chainlink Price Feeds</li>
          <li><strong>Governance Token:</strong> $GENIE token for protocol governance and fee sharing</li>
        </ul><br/>
        
        💰 <strong>DeFi Integrations:</strong><br/>
        <ul>
          <li>Compound Finance for treasury yield optimization</li>
          <li>Uniswap V3 for automated market making and liquidity provision</li>
          <li>AAVE lending pools for collateralized borrowing against future payroll</li>
        </ul><br/>
        
        📊 <strong>Advanced Features:</strong><br/>
        <ul>
          <li>Real-time analytics dashboard with TVL, transaction volume, and user metrics</li>
          <li>Automated tax document generation (1099, W-2 equivalents) for crypto payroll</li>
          <li>Employee self-service portal for payment history and tax optimization</li>
          <li>Integration with traditional payroll systems (ADP, Workday) via API</li>
        </ul>
        `,
        role: `
        <strong>Lead Protocol Developer & Smart Contract Architect</strong><br/><br/>
        
        🔧 <strong>Technical Leadership:</strong><br/>
        <ul>
          <li><strong>Smart Contract Architecture:</strong> Designed and implemented 12 interconnected contracts following Diamond Standard (EIP-2535)</li>
          <li><strong>Security Implementation:</strong> Multi-signature treasury, role-based access control, emergency pause mechanisms</li>
          <li><strong>Gas Optimization:</strong> Custom assembly code for critical functions, achieving 40% gas savings vs. standard implementations</li>
          <li><strong>Upgradability:</strong> Implemented proxy patterns for seamless protocol upgrades without user migration</li>
        </ul><br/>
        
        🌐 <strong>Full-Stack Development:</strong><br/>
        <ul>
          <li><strong>Web3 Frontend:</strong> Built React dashboard with real-time blockchain data using Wagmi and Viem</li>
          <li><strong>Subgraph Development:</strong> Created The Graph indexing for historical data and analytics</li>
          <li><strong>API Infrastructure:</strong> Node.js backend for off-chain computations and database management</li>
          <li><strong>Mobile SDK:</strong> React Native library for mobile wallet integration</li>
        </ul><br/>
        
        💼 <strong>Business Development:</strong><br/>
        <ul>
          <li>Secured $500K in seed funding from prominent Web3 VCs</li>
          <li>Partnerships with 15+ companies for pilot program deployment</li>
          <li>Smart contract audits by Trail of Bits and ConsenSys Diligence</li>
        </ul>
        `,
        techStack: [
            'Solidity',
            'OpenZeppelin',
            'Hardhat',
            'React',
            'TypeScript',
            'Wagmi',
            'Viem',
            'The Graph',
            'Chainlink',
            'IPFS',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/geniepay.webp',
        longThumbnail: '/projects/long/geniepay.webp',
        images: [
            '/projects/images/geniepay-1.webp',
            '/projects/images/geniepay-2.webp',
            '/projects/images/geniepay-3.webp',
        ],
        liveUrl: 'https://geniepay-protocol.vercel.app',
        sourceCode: 'https://github.com/julien-halde/geniepay-protocol',
    },
    {
        title: 'DecentralVote',
        slug: 'decentralvote',
        year: 2025,
        description: `
        <strong>Enterprise Blockchain Governance Platform</strong><br/><br/>
        
        DecentralVote is a sophisticated on-chain voting infrastructure built for DAOs, municipalities, and corporate governance. Winner of the "Most Innovative DApp" award at Consensus 2025 Toronto hackathon, beating 200+ competing projects.<br/><br/>
        
        🏆 <strong>Award-Winning Features:</strong><br/>
        <ul>
          <li><strong>Quadratic Voting:</strong> Prevents whale manipulation through square-root vote weighting</li>
          <li><strong>Zero-Knowledge Proofs:</strong> Anonymous voting while maintaining auditability using zk-SNARKs</li>
          <li><strong>Delegate Voting:</strong> Liquid democracy with weighted delegation and automatic revocation</li>
          <li><strong>Time-Locked Proposals:</strong> Automated execution via Chainlink Keepers after voting periods</li>
          <li><strong>Multi-Signature Integration:</strong> Gnosis Safe compatibility for treasury management</li>
        </ul><br/>
        
        🔒 <strong>Security & Compliance:</strong><br/>
        <ul>
          <li>Immutable audit trails with cryptographic proof of vote integrity</li>
          <li>GDPR-compliant data handling with right-to-deletion mechanisms</li>
          <li>Emergency pause functionality for critical vulnerabilities</li>
          <li>Role-based permissions for proposal creation and management</li>
        </ul><br/>
        
        📱 <strong>User Experience:</strong><br/>
        <ul>
          <li>Mobile-first design with progressive web app capabilities</li>
          <li>Real-time vote tracking with WebSocket connections</li>
          <li>Multi-language support (EN/FR/ES) with i18n implementation</li>
          <li>Integrated wallet support (MetaMask, WalletConnect, Coinbase Wallet)</li>
        </ul>
        `,
        role: `
        <strong>Solo Developer & Product Architect</strong><br/><br/>
        
        ⚡ <strong>48-Hour Hackathon Achievement:</strong><br/>
        <ul>
          <li><strong>Smart Contract Development:</strong> 8 interconnected Solidity contracts with full test coverage</li>
          <li><strong>Frontend Implementation:</strong> Complete React application with responsive design</li>
          <li><strong>Backend Services:</strong> Node.js API for off-chain data aggregation and caching</li>
          <li><strong>DevOps Setup:</strong> CI/CD pipeline with automated testing and deployment</li>
        </ul><br/>
        
        🎯 <strong>Technical Execution:</strong><br/>
        <ul>
          <li><strong>Gas Optimization:</strong> Reduced voting costs by 60% through bitmap storage patterns</li>
          <li><strong>Scalability Solutions:</strong> Layer 2 deployment on Polygon for sub-cent transaction fees</li>
          <li><strong>Data Analytics:</strong> Built real-time dashboard showing voter participation and proposal trends</li>
          <li><strong>Integration Testing:</strong> Comprehensive test suite with 95% code coverage</li>
        </ul><br/>
        
        🏅 <strong>Recognition & Impact:</strong><br/>
        <ul>
          <li>Featured in CoinDesk article about innovative governance solutions</li>
          <li>Invited to present at ETHGlobal conferences</li>
          <li>Currently in talks with 3 major DAOs for production deployment</li>
        </ul>
        `,
        techStack: [
            'Solidity',
            'Hardhat',
            'React',
            'TypeScript',
            'Ethers.js',
            'Polygon',
            'Chainlink',
            'zk-SNARKs',
            'IPFS',
            'Node.js',
        ],
        thumbnail: '/projects/thumbnail/decentralvote.webp',
        longThumbnail: '/projects/long/decentralvote.webp',
        images: [
            '/projects/images/decentralvote-1.webp',
            '/projects/images/decentralvote-2.webp',
            '/projects/images/decentralvote-3.webp',
        ],
        sourceCode: 'https://github.com/julien-halde/decentralvote',
        liveUrl: 'https://decentralvote.vercel.app',
    },
    {
        title: 'ChargeHub Web3 Integration',
        slug: 'chargehub-web3',
        year: 2025,
        description: `
        <strong>Blockchain-Powered EV Charging Network</strong><br/><br/>
        
        Led the integration of Web3 technologies into ChargeHub's existing mobile platform, creating the first blockchain-native EV charging experience in North America. This project bridges traditional IoT infrastructure with decentralized payments and tokenized rewards.<br/><br/>
        
        ⚡ <strong>Web3 Integration Features:</strong><br/>
        <ul>
          <li><strong>Crypto Payments:</strong> Direct USDC/ETH payments to charging stations via smart contracts</li>
          <li><strong>NFT Charging Passes:</strong> Dynamic NFTs that unlock premium charging rates and locations</li>
          <li><strong>Carbon Credit Tokens:</strong> Automatic minting of verified carbon offset tokens for clean energy usage</li>
          <li><strong>Staking Rewards:</strong> $CHARGE token staking for reduced charging fees and governance rights</li>
          <li><strong>Cross-Chain Compatibility:</strong> Multi-chain deployment supporting Ethereum, Polygon, and BSC</li>
        </ul><br/>
        
        🔒 <strong>Security Enhancements:</strong><br/>
        <ul>
          <li>Reverse-engineered competitor SDKs to identify 12 critical security vulnerabilities</li>
          <li>Implemented zero-trust architecture for payment processing</li>
          <li>Multi-factor authentication with hardware security keys</li>
          <li>End-to-end encryption for all user transactions and location data</li>
        </ul><br/>
        
        📊 <strong>Performance Optimization:</strong><br/>
        <ul>
          <li>Reduced app crash rate from 2.3% to 0.1% through comprehensive error handling</li>
          <li>Implemented predictive caching reducing API calls by 70%</li>
          <li>Built real-time charging station availability using WebSocket connections</li>
        </ul>
        `,
        role: `
        <strong>Senior Mobile Developer & Web3 Integration Lead</strong><br/><br/>
        
        📱 <strong>Mobile Development Excellence:</strong><br/>
        <ul>
          <li><strong>Cross-Platform Architecture:</strong> Unified codebase supporting Android (Kotlin/Compose) and iOS (Swift/SwiftUI)</li>
          <li><strong>Wallet Integration:</strong> Native mobile wallet connectivity with 15+ supported wallets</li>
          <li><strong>Offline-First Design:</strong> Smart caching allowing app functionality without internet connectivity</li>
          <li><strong>Performance Optimization:</strong> 40% improvement in app launch time and 60% reduction in memory usage</li>
        </ul><br/>
        
        🔐 <strong>Security Research & Implementation:</strong><br/>
        <ul>
          <li><strong>Vulnerability Assessment:</strong> Discovered and responsibly disclosed security flaws in major competitor apps</li>
          <li><strong>Penetration Testing:</strong> Led internal security audits resulting in 99.9% uptime improvement</li>
          <li><strong>Bug Bounty Program:</strong> Established responsible disclosure program with $50K+ in rewards distributed</li>
        </ul><br/>
        
        🚀 <strong>DevOps & Release Management:</strong><br/>
        <ul>
          <li><strong>CI/CD Pipeline:</strong> Automated testing and deployment reducing release cycle from 2 weeks to 2 days</li>
          <li><strong>A/B Testing Framework:</strong> Data-driven feature rollouts with real-time performance monitoring</li>
          <li><strong>Play Store Optimization:</strong> Improved app store ranking from #47 to #8 in Transportation category</li>
        </ul>
        `,
        techStack: [
            'Kotlin',
            'Jetpack Compose',
            'Swift',
            'SwiftUI',
            'Solidity',
            'Web3.js',
            'Firebase',
            'GraphQL',
            'Docker',
        ],
        thumbnail: '/projects/thumbnail/chargehub-web3.webp',
        longThumbnail: '/projects/long/chargehub-web3.webp',
        images: [
            '/projects/images/chargehub-1.webp',
            '/projects/images/chargehub-2.webp',
        ],
    },
    {
        title: 'DeFi Yield Aggregator',
        slug: 'defi-yield-aggregator',
        year: 2024,
        description: `
        <strong>Automated Yield Optimization Protocol</strong><br/><br/>
        
        A sophisticated DeFi yield farming aggregator that automatically optimizes returns across 20+ protocols including Compound, AAVE, Yearn, and Convex. The platform uses advanced algorithms to maximize APY while minimizing impermanent loss and gas costs.<br/><br/>
        
        💰 <strong>Advanced Yield Strategies:</strong><br/>
        <ul>
          <li><strong>Dynamic Rebalancing:</strong> AI-powered portfolio optimization executing every 6 hours</li>
          <li><strong>Leverage Mining:</strong> Automated leveraged positions with liquidation protection</li>
          <li><strong>Arbitrage Detection:</strong> Cross-DEX arbitrage opportunities with MEV protection</li>
          <li><strong>Risk Assessment:</strong> Smart contract risk scoring using machine learning models</li>
          <li><strong>Gas Optimization:</strong> Batch transactions and meta-transactions reducing fees by 80%</li>
        </ul><br/>
        
        🤖 <strong>Automation Features:</strong><br/>
        <ul>
          <li>Chainlink Keeper integration for autonomous strategy execution</li>
          <li>Emergency exit mechanisms with slippage protection</li>
          <li>Compound interest reinvestment with optimal timing algorithms</li>
          <li>Multi-asset rebalancing with correlation analysis</li>
        </ul>
        `,
        role: `
        <strong>Protocol Developer & Quantitative Analyst</strong><br/><br/>
        
        Built the complete protocol infrastructure including smart contracts, automation systems, and analytics dashboard. Managed $2M+ TVL with zero security incidents.
        `,
        techStack: [
            'Solidity',
            'Python',
            'React',
            'Web3.py',
            'Chainlink',
            'Compound',
            'AAVE',
            'Uniswap V3',
        ],
        thumbnail: '/projects/thumbnail/defi-yield.webp',
        longThumbnail: '/projects/long/defi-yield.webp',
        images: ['/projects/images/defi-yield-1.webp'],
        sourceCode: 'https://github.com/julien-halde/defi-yield-aggregator',
    },
    {
        title: 'NFT Marketplace & Launchpad',
        slug: 'nft-marketplace',
        year: 2024,
        description: `
        <strong>Full-Stack NFT Trading Platform</strong><br/><br/>
        
        Complete NFT marketplace supporting multi-chain trading, royalty management, and creator launchpad functionality. Features include Dutch auctions, bundle trading, and fractional ownership of high-value NFTs.<br/><br/>
        
        🎨 <strong>Creator Tools:</strong><br/>
        <ul>
          <li><strong>No-Code Minting:</strong> Drag-and-drop NFT creation with metadata management</li>
          <li><strong>Royalty Splitting:</strong> Automated revenue distribution to multiple collaborators</li>
          <li><strong>Whitelist Management:</strong> Merkle tree-based allowlists with tiered pricing</li>
          <li><strong>Reveal Mechanisms:</strong> Support for delayed reveals and randomized metadata</li>
        </ul>
        `,
        role: `
        <strong>Full-Stack Developer</strong><br/>
        Designed and implemented the complete platform including smart contracts, frontend, IPFS integration, and payment processing.
        `,
        techStack: [
            'Solidity',
            'React',
            'Next.js',
            'IPFS',
            'OpenSea API',
            'Stripe',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/nft-marketplace.webp',
        longThumbnail: '/projects/long/nft-marketplace.webp',
        images: ['/projects/images/nft-marketplace-1.webp'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Blockchain Developer',
        company: 'ChargeHub Inc.',
        duration: 'Winter 2025 - Present',
        description: [
            'Led Web3 integration for North America\'s largest EV charging network with 300K+ users',
            'Architected crypto payment infrastructure processing $50K+ monthly volume',
            'Implemented NFT-based charging passes increasing user retention by 35%',
            'Discovered 12 critical security vulnerabilities in competitor mobile SDKs',
            'Reduced app crashes by 95% through comprehensive error handling and monitoring',
            'Built automated CI/CD pipeline reducing deployment time from 2 weeks to 2 days',
        ]
    },
    {
        title: 'Blockchain Translator & Developer',
        company: 'Ethereum Foundation',
        duration: 'Summer 2025',
        description: [
            'Translated 5,000+ words of critical Ethereum documentation into French',
            'Collaborated with core developers on EIP (Ethereum Improvement Proposal) documentation',
            'Contributed to developer tooling improvements and documentation standards',
            'Participated in Ethereum Community Conference as technical content reviewer',
            'Mentored 20+ developers in the French-speaking Ethereum community',
        ]
    },
    {
        title: 'Lead Swimming Coach & Operations Manager',
        company: 'CAVIP Swimming Club',
        duration: 'Summer 2023',
        description: [
            'Managed team of 15 coaches and 120+ competitive swimmers with $200K annual budget',
            'Implemented digital performance tracking system increasing athlete performance by 12%',
            'Organized provincial-level competitions with 500+ participants',
            'Developed training protocols adopted by 3 other regional swimming clubs',
            'Led facility expansion project resulting in 30% increase in membership',
        ]
    },
    {
        title: 'Blockchain Research Intern',
        company: 'Concordia University - Blockchain Lab',
        duration: 'Fall 2024',
        description: [
            'Researched Layer 2 scaling solutions and published paper on rollup economics',
            'Developed experimental smart contracts for academic research projects',
            'Contributed to open-source blockchain tools used by 500+ developers',
            'Presented research findings at 3 international blockchain conferences',
        ]
    },
];