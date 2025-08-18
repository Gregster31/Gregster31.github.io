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
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade leading-tight">
                    I don&apos;t just write code—I architect the future. 
                    Every smart contract I deploy, every DApp I build, and 
                    every protocol I design brings us closer to a 
                    <span className="text-primary font-medium"> truly decentralized world</span>.
                </h2>

                <p className="pb-3 border-b border-primary/20 text-muted-foreground slide-up-and-fade">
                    The blockchain revolution starts here.
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade gradient-text">
                            Building Tomorrow&apos;s
                            <br />Financial Systems.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px] space-y-4">
                            <p className="slide-up-and-fade leading-relaxed">
                                I&apos;m <span className="text-primary font-semibold">Julien Halde</span>, 
                                a blockchain architect pushing the boundaries of what&apos;s possible 
                                in Web3. From managing multi-million dollar DeFi protocols to 
                                winning hackathons at international conferences, I transform 
                                complex financial concepts into elegant, secure smart contracts.
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                Currently pursuing Computer Science at 
                                <span className="text-primary font-medium"> Concordia University</span> 
                                while simultaneously building production-ready protocols that handle 
                                millions in transaction volume. My expertise spans from Layer 1 
                                consensus mechanisms to Layer 2 scaling solutions, from DeFi yield 
                                optimization to NFT marketplace infrastructure.
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                <span className="text-primary font-medium">The future is decentralized</span>, 
                                and I&apos;m here to build it—one block at a time.
                            </p>
                        </div>
                        
                        {/* Achievement highlights */}
                        <div className="mt-8 slide-up-and-fade">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-primary/10 bg-background-light p-4 rounded-lg">
                                    <div className="text-2xl font-anton text-primary">$2M+</div>
                                    <div className="text-sm text-muted-foreground">Total Value Locked</div>
                                </div>
                                <div className="border border-primary/10 bg-background-light p-4 rounded-lg">
                                    <div className="text-2xl font-anton text-primary">Zero</div>
                                    <div className="text-sm text-muted-foreground">Security Incidents</div>
                                </div>
                                <div className="border border-primary/10 bg-background-light p-4 rounded-lg">
                                    <div className="text-2xl font-anton text-primary">15+</div>
                                    <div className="text-sm text-muted-foreground">Smart Contracts</div>
                                </div>
                                <div className="border border-primary/10 bg-background-light p-4 rounded-lg">
                                    <div className="text-2xl font-anton text-primary">3</div>
                                    <div className="text-sm text-muted-foreground">Chain Deployments</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;