'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Professional Experience" />

                <div className="grid gap-16">
                    {MY_EXPERIENCE.map((item) => (
                        <div key={item.title} className="experience-item">
                            <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                                <div>
                                    <p className="text-xl text-primary font-medium">
                                        {item.company}
                                    </p>
                                    <p className="text-4xl md:text-5xl font-anton leading-none mt-2 mb-2">
                                        {item.title}
                                    </p>
                                    <p className="text-lg text-muted-foreground">
                                        {item.duration}
                                    </p>
                                </div>
                            </div>
                            
                            {item.description && (
                                <div className="mt-6">
                                    <ul className="space-y-3">
                                        {item.description.map((desc, index) => (
                                            <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="leading-relaxed">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;