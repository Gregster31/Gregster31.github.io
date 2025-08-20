'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pt-2 pb-16" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade leading-tight">
                I'm <span className="line-through">passionate</span> obsessed about blockchain and building the next generation of 
                <span className="text-primary font-medium"> decentralized systems</span>, 
                staying at the forefront of innovation as technology reshapes finance and trust.
                </h2>

                <p className="pb-3 border-b border-primary/20 text-muted-foreground slide-up-and-fade">
                    About me
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                {/* Julien Name */}
                <div className="md:col-span-5">
                    <p className="text-5xl slide-up-and-fade gradient-text">
                    I&apos;m Julien
                    </p>
                </div>

                {/* First two paragraphs */}
                <div className="md:col-span-7">
                    <div className="text-lg text-muted-foreground max-w-[500px] space-y-4">
                    <p className="slide-up-and-fade leading-relaxed shimmer-text">
                        Blockchain developer obsessed with designing innovative DeFi solutions and 
                        building smart contract architectures that scale. Currently pursuing Computer Science 
                        at Concordia University while shipping production-ready Web3 applications.
                    </p>

                    <p className="mt-4 slide-up-and-fade leading-relaxed shimmer-text">
                        Based in Montreal, I’m a 20-year-old developer specialized in Ethereum, React frontends, 
                        and mobile apps. Hackathon winner and creator of <span className="font-semibold">GeniePay</span>, 
                        I bridge the gap between complex blockchain technology and intuitive user experiences.
                    </p>
                    </div>
                </div>

                {/* Last paragraph spanning both columns and centered */}
                <div className="md:col-span-12 mt-8 text-center">
                <p className="slide-up-and-fade leading-relaxed text-2xl md:text-4xl font-semibold tracking-wide">
                    <span className="text-primary block">
                    Building the Web3 revolution, one block at a time
                    </span>
                </p>
                </div>

                <style jsx>{`
                    .shimmer-text {
                    position: relative;
                    color: #9ca3af; /* gray text */
                    background: linear-gradient(
                        90deg,
                        #9ca3af 0%,
                        #d1d5db 40%, /* light gray shimmer */
                        #9ca3af 80%
                    );
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 6s ease-in-out infinite;
                    animation-delay: 1s;
                    }

                    @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                    }
                `}</style>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;