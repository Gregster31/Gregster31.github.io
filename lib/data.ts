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
        title: 'GeniePay',
        slug: 'geniepay',
        year: 2025,
        description: `
        <strong>Revolutionary Crypto Payroll Platform</strong><br/><br/>

        GeniePay is a decentralized payroll solution that transforms traditional HR operations by enabling instant, fully compliant crypto payments to employees and contractors worldwide. Unlike traditional payroll systems, GeniePay is free to use, requires no account setup, and supports multiple cryptocurrencies for seamless global payouts.<br/><br/>

        🚀 <strong>Core Innovations:</strong><br/>
        <ul>
        <li><strong>Mass Payroll with Smart Contracts:</strong> Send 1000+ employee payouts in a single transaction, removing friction and delays</li>
        <li><strong>Multi-Currency Support:</strong> Pay in stablecoins or fiat, with automatic conversion rates</li>
        <li><strong>Employer Dashboard:</strong> Manage teams, CSV imports, and payroll workflows with real-time tracking</li>
        <li><strong>Compliance Layer:</strong> Automated tax, KYC, and AML handling for global payroll</li>
        <li><strong>Post-Payment Documents:</strong> Generate receipts, batch summaries, reconciliation reports, and audit-ready exports</li>
        <li><strong>Wallet Flexibility:</strong> Custodial or non-custodial wallet support for employees</li>
        </ul>
        `,
        role: `
        <strong>Lead Protocol Developer & Full-Stack Engineer</strong><br/><br/>
        
        🔧 <strong>Technical Leadership:</strong><br/>
        <ul>
        <li>Designed smart contracts for mass crypto payroll, including batch payments and compliance logic</li>
        <li>Ensured regulatory and tax compliance in automated payroll workflows</li>
        <li>Implemented custodian and non-custodian wallet support with secure on-chain transactions</li>
        <li>Built a full-stack platform: React dashboard (Wagmi, Viem), Node.js backend, and smart contract integration</li>
        </ul><br/>
        
        🌐 <strong>Web3 & DevOps:</strong><br/>
        <ul>
        <li>Integrated Sepolia testnet, MetaMask, USDC/DAI payments, and multi-currency support</li>
        <li>Automated deployment pipelines with CI/CD and testing environments</li>
        <li>Created analytics and reporting dashboards for employers</li>
        </ul><br/>
        
        💼 <strong>Business Impact:</strong><br/>
        <ul>
        <li>Enabled global crypto payroll with zero setup cost for users</li>
        <li>Streamlined multi-currency and regulatory compliance for businesses</li>
        <li>Prepared system for investor demos, pilot deployments, and public launch</li>
        </ul>
        `,
        techStack: [
            'Solidity',
            'Hardhat',
            'React',
            'TypeScript',
            'Wagmi',
            'Viem',
            'RainbowKit',
            'Tailwind CSS',
            'Node.js',
            'PostgreSQL',
            'MetaMask',
            'Sepolia Testnet'
        ],
        thumbnail: '/projects/thumbnail/geniepay.webp',
        longThumbnail: '/projects/long/geniepay.webp',
        images: [
            '/projects/images/geniepay-1.webp',
            '/projects/images/geniepay-2.webp',
            '/projects/images/geniepay-3.webp'
        ],
        liveUrl: 'https://geniepay-protocol.vercel.app',
        sourceCode: 'https://github.com/Gregster31/GeniePay',
    },
    {
        title: 'BlockVote',
        slug: 'BlockVote',
        year: 2025,
        description: `
        <strong>Blockchain Voting DApp</strong><br/><br/>

        BlockVote is a secure, on-chain voting platform built to ensure tamper-proof elections for DAOs, hackathons, and small-scale governance projects. Developed during the Easy-A Hackathon and recognized at Consensus 2025 (Toronto), the DApp demonstrates how blockchain can enforce one-person-one-vote elections with complete transparency.<br/><br/>

        🏆 <strong>Core Features:</strong><br/>
        <ul>
        <li><strong>One-Person-One-Vote:</strong> Each Ethereum address can vote only once, enforced on-chain</li>
        <li><strong>Live Vote Counts:</strong> Real-time updates fetched directly from the smart contract</li>
        <li><strong>Candidate Management:</strong> Add and list candidates on-chain</li>
        <li><strong>Wallet Authentication:</strong> MetaMask integration for secure voting</li>
        <li><strong>Immutable Records:</strong> Votes stored on Ethereum (Sepolia testnet) for full auditability</li>
        <li><strong>Beautiful UI:</strong> Responsive design with Tailwind CSS and smooth animations</li>
        </ul>
        `,
        role: `
        <strong>Solo Developer & Smart Contract Architect</strong><br/><br/>

        🔧 <strong>Development Highlights:</strong><br/>
        <ul>
        <li>Designed and deployed Solidity smart contracts to handle voting logic and candidate listings</li>
        <li>Built a responsive React frontend using Vite, TypeScript, Tailwind CSS, and Lucide React Icons</li>
        <li>Integrated MetaMask for authentication and secure transaction signing</li>
        <li>Created real-time dashboards displaying votes and election statistics</li>
        <li>Implemented rigorous testing and deployment via Hardhat and Sepolia testnet</li>
        </ul><br/>

        🎯 <strong>Impact & Recognition:</strong><br/>
        <ul>
        <li>Winner of "Most Innovative DApp" award at Consensus 2025 Toronto Hackathon</li>
        <li>Demonstrates tamper-proof, transparent voting mechanisms suitable for DAOs or community governance</li>
        <li>Serves as a template for future blockchain voting projects and hackathon submissions</li>
        </ul>
        `,
        techStack: [
            'Solidity',
            'Hardhat',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Lucide React',
            'Ethers.js',
            'MetaMask',
            'Ethereum (Sepolia)',
        ],
        thumbnail: '/projects/thumbnail/decentralvote.webp',
        longThumbnail: '/projects/long/decentralvote.webp',
        images: [
            '/projects/images/decentralvote-1.webp',
            '/projects/images/decentralvote-2.webp',
            '/projects/images/decentralvote-3.webp',
        ],
        sourceCode: 'https://github.com/Gregster31/BlockVote',
        liveUrl: 'https://decentralvote.vercel.app',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Developer',
        company: 'ChargeHub',
        duration: 'Winter 2025 - Present',
        description: [
            "Participated in mobile integration for one of North America's largest EV charging networks with 300K+ users",
            "Built Android features using Kotlin (Jetpack Compose) and iOS features with Swift (UIKit & SwiftUI)",
            "Reverse-engineered Android SDKs to identify and document critical security vulnerabilities",
            "Improved the bug-reporting system, completely eliminating empty user submissions",
            "Managed app releases on Google Play Store including versioning and release cycles",
        ]
    },
    {
        title: 'Blockchain Translator & Developer',
        company: 'Ethereum Foundation',
        duration: 'Summer 2025',
        description: [
            'Translated 1,500+ words of Ethereum documentation into French',
            'Contributed to developer tooling improvements and documentation standards',
            'Participated in Ethereum Community Conference as technical content reviewer',
        ]
    },
    {
        title: 'Lead Swimming Coach & Operations Manager',
        company: 'CAVIP Swimming Club',
        duration: 'Summer 2023',
        description: [
            'Managed team of 15 coaches and 120+ competitive swimmers with $30K seasonal budget',
            'Organized regional-level competitions with 500+ participants',
            'Led facility expansion project resulting in 20% increase in membership',
        ]
    },
];