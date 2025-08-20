'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { Flag, Brain, Globe, Users, BookOpen } from "lucide-react";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const resumeButtonRef = React.useRef<HTMLAnchorElement>(null);

    // Mouse attraction effect for resume button
    useGSAP((context, contextSafe) => {
        if (!resumeButtonRef.current || window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            const button = resumeButtonRef.current;
            if (!button) return;

            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
            );
            
            if (distance < 200) {
                const attraction = Math.max(0, 200 - distance) / 200;
                const moveX = (e.clientX - centerX) * attraction * 0.5;
                const moveY = (e.clientY - centerY) * attraction * 0.5;
                
                gsap.to(button, {
                    x: moveX,
                    y: moveY,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
                <div className="w-full relative flex flex-col h-full justify-between">
                    {/* Left side - Title and Description (at the top) */}
                        <div className="flex flex-col justify-start pt-32 md:pt-48">
                        <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl sm:text-6xl md:text-7xl mb-6">
                            <span className="text-primary">BLOCKCHAIN</span>
                            <br />
                            <span className="text-white">DEVELOPER</span>
                        </h1>
                        <p className="banner-description slide-up-and-fade text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-md shimmer-text">
                        Hi! I'm Julien, a Blockchain Developer with experience building smart contracts, 
                        DeFi platforms, and Web3 apps across Ethereum, Polkadot, and Layer 2 networks.
                        </p>

                        <style jsx>{`
                        .shimmer-text {
                            position: relative;
                            color: #9ca3af; /* gray text */
                            background: linear-gradient(
                            90deg,
                            #9ca3af 0%,
                            #d1d5db 40%, /* lighter gray shimmer */
                            #9ca3af 80%
                            );
                            background-size: 200% 100%;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: shimmer 6s ease-in-out infinite; /* slower, gentle */
                            animation-delay: 1s; /* small initial delay */
                        }

                        @keyframes shimmer {
                            0% {
                            background-position: 200% 0;
                            }
                            100% {
                            background-position: -200% 0;
                            }
                        }
                        `}</style>

                        <div className="slide-up-and-fade">
                        <a
                            href={GENERAL_INFO.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="banner-button button-glow inline-flex items-center justify-center h-12 px-8 bg-primary text-black font-medium uppercase tracking-widest rounded-2xl transition-all hover:bg-primary/90"
                            ref={resumeButtonRef}
                        >
                            RESUME
                        </a>
                        </div>
                    </div>

                {/* Right side - Smart Contract Code Section */}
                <div className="flex flex-col justify-end pb-8 md:pb-16 md:items-end">
                <div className="slide-up-and-fade max-w-md md:max-w-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[
                    { skill: "English", icon: <Flag className="w-8 h-8 text-amber-500" /> },
                    { skill: "French", icon: <Flag className="w-8 h-8 text-amber-500" /> },
                    { skill: "Problem-Solving", icon: <Brain className="w-8 h-8 text-amber-500" /> },
                    { skill: "Adaptability", icon: <Globe className="w-8 h-8 text-amber-500" /> },
                    { skill: "Collaboration", icon: <Users className="w-8 h-8 text-amber-500" /> },
                    { skill: "Self-Learning", icon: <BookOpen className="w-8 h-8 text-amber-500" /> },
                ].map(({ skill, icon }) => (
                    <div
                    key={skill}
                    className="flex flex-col items-center bg-black/90 border border-[#d44a2b] rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform"
                    >
                    <div>{icon}</div>
                    <div className="mt-2 text-white font-semibold">{skill}</div>
                    </div>
                ))}
                </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;