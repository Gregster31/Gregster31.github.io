'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex items-center max-md:flex-col relative"
                ref={containerRef}
            >
                <div className="w-full relative">
                    {/* Left side - Title and Description (positioned higher) */}
                    <div className="max-w-[600px] mb-20">
                        <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                            <span className="text-primary">BLOCKCHAIN</span>
                            <br /> <span className="gradient-text">DEVELOPER</span>
                        </h1>
                        <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground leading-relaxed">
                            Hi! I&apos;m Julien Halde, a 20-year-old Blockchain Developer studying Computer Science at Concordia University. 
                            I specialize in building decentralized applications, smart contracts, and Web3 solutions that push the boundaries of what&apos;s possible.
                        </p>
                        <div className="flex gap-4 mt-9 slide-up-and-fade">
                            <Button
                                as="link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={GENERAL_INFO.resumeUrl}
                                variant="primary"
                                className="banner-button button-glow"
                            >
                                RESUME
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Smart Contract Code Section (positioned much lower) */}
                    <div className="absolute bottom-0 right-0 max-w-[500px] slide-up-and-fade max-md:relative max-md:bottom-auto max-md:right-auto max-md:mt-8">
                        <div className="text-sm text-muted-foreground font-mono">
                            <div className="text-primary">contract GeniePay &#123;</div>
                            <div className="ml-4 leading-relaxed text-base">
                                <div className="text-green-400">// Instant crypto payroll for 1000+ employees</div>
                                <div><span className="text-blue-400">mapping</span>(<span className="text-yellow-400">address</span><span className="text-yellow-400">uint256</span>) <span className="text-white">salaries</span>;</div>
                                <div><span className="text-purple-400">function</span> <span className="text-cyan-400">batchPayout</span>() <span className="text-red-400">external</span> &#123;</div>
                                <div className="ml-4 text-green-400">// Smart contract magic happens here ✨</div>
                                <div>&#125;</div>
                            </div>
                            <div className="text-primary">&#125;</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;