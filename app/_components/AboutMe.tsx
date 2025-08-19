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
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade gradient-text">
                            I&apos;m Julien
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px] space-y-4">
                            <p className="slide-up-and-fade leading-relaxed">
                                Blockchain developer with a passion for creating
                                innovative DeFi solutions and smart contract architectures.
                                Currently pursuing Computer Science at Concordia University
                                while building production-ready Web3 applications.
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                A 20-year-old developer from Montreal, specialized in Ethereum development,
                                React frontends, and mobile applications. Hackathon Winner
                                and creator of GeniePay, I bridge the gap 
                                between complex blockchain technology and user-friendly experiences.
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                
                            </p>
                            <p className="mt-4 slide-up-and-fade leading-relaxed">
                                <span className="text-primary font-medium">BUILDING the WEB3 REVOLUTION, ONE BLOCK AT A TIME</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;