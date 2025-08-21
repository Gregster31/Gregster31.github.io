'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!dotRef.current || !circleRef.current) return;

            const { clientX, clientY } = e;

            // Small black dot - follows cursor immediately
            gsap.to(dotRef.current, {
                x: clientX - 3,
                y: clientY - 3,
                duration: 0.1,
                ease: 'none',
                opacity: 1,
            });

            // White circle - follows with slight delay for trailing effect
            gsap.to(circleRef.current, {
                x: clientX - 15,
                y: clientY - 15,
                duration: 0.2,
                ease: 'power2.out',
                opacity: 1,
            });
        }) as any;

        const handleElementHover = contextSafe?.((e: MouseEvent) => {
            const target = e.target;
            if (!target || target.nodeType !== 1) return; // Only Element nodes
            
            const element = target as HTMLElement;
            const tagName = element.tagName.toLowerCase();
            const hasRole = element.getAttribute('role') === 'button';
            const hasTabIndex = element.hasAttribute('tabindex');
            const hasCursorHover = element.classList && element.classList.contains('cursor-hover');
            
            const isInteractive = ['button', 'a', 'input', 'textarea'].includes(tagName) || 
                                 hasRole || hasTabIndex || hasCursorHover ||
                                 element.closest('button') || element.closest('a') || 
                                 element.closest('input') || element.closest('textarea');
            
            if (isInteractive) {
                setIsHovering(true);
                
                // Dot becomes slightly larger and more vibrant
                gsap.to(dotRef.current, {
                    scale: 1.5,
                    backgroundColor: '#1f2937',
                    duration: 0.3,
                    ease: 'back.out(1.7)',
                });
                
                // Circle expands significantly
                gsap.to(circleRef.current, {
                    scale: 2.5,
                    borderWidth: '1px',
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                });
            }
        }) as any;

        const handleMouseLeave = contextSafe?.(() => {
            setIsHovering(false);
            
            // Return dot to normal
            gsap.to(dotRef.current, {
                scale: 1,
                backgroundColor: '#000000',
                duration: 0.3,
                ease: 'back.out(1.7)',
            });
            
            // Return circle to normal
            gsap.to(circleRef.current, {
                scale: 1,
                borderWidth: '2px',
                duration: 0.3,
                ease: 'back.out(1.7)',
            });
        }) as any;

        const handleMouseDown = contextSafe?.(() => {
            setIsClicking(true);
            
            // Dot shrinks and darkens
            gsap.to(dotRef.current, {
                scale: isHovering ? 1.2 : 0.8,
                backgroundColor: '#374151',
                duration: 0.1,
                ease: 'power2.out',
            });
            
            // Circle contracts
            gsap.to(circleRef.current, {
                scale: isHovering ? 2 : 0.8,
                borderColor: '#e5e7eb',
                duration: 0.1,
                ease: 'power2.out',
            });
        }) as any;

        const handleMouseUp = contextSafe?.(() => {
            setIsClicking(false);
            
            // Return to hover or normal state
            gsap.to(dotRef.current, {
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? '#1f2937' : '#000000',
                duration: 0.2,
                ease: 'back.out(1.7)',
            });
            
            gsap.to(circleRef.current, {
                scale: isHovering ? 2.5 : 1,
                borderColor: '#ffffff',
                duration: 0.2,
                ease: 'back.out(1.7)',
            });
        }) as any;

        // Hide cursor when leaving window
        const handleWindowLeave = contextSafe?.(() => {
            gsap.to([dotRef.current, circleRef.current], {
                opacity: 0,
                duration: 0.2,
            });
        }) as any;

        const handleWindowEnter = contextSafe?.(() => {
            gsap.to([dotRef.current, circleRef.current], {
                opacity: 1,
                duration: 0.2,
            });
        }) as any;

        // Text selection effects
        const handleTextSelect = contextSafe?.(() => {
            gsap.to(circleRef.current, {
                borderColor: '#3b82f6',
                scale: isHovering ? 2.8 : 1.2,
                duration: 0.2,
            });
        }) as any;

        const handleTextDeselect = contextSafe?.(() => {
            gsap.to(circleRef.current, {
                borderColor: '#ffffff',
                scale: isHovering ? 2.5 : 1,
                duration: 0.2,
            });
        }) as any;

        // Event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleElementHover, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleWindowLeave);
        document.addEventListener('mouseenter', handleWindowEnter);
        document.addEventListener('selectstart', handleTextSelect);
        document.addEventListener('selectionchange', handleTextDeselect);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleElementHover, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleWindowLeave);
            document.removeEventListener('mouseenter', handleWindowEnter);
            document.removeEventListener('selectstart', handleTextSelect);
            document.removeEventListener('selectionchange', handleTextDeselect);
        };
    });

    return (
        <>
            {/* Small black dot - the actual cursor */}
            <div
                ref={dotRef}
                className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full opacity-0 z-[51] pointer-events-none"
                style={{
                    mixBlendMode: 'difference',
                }}
            />
            
            {/* White circle - the trailing element */}
            <div
                ref={circleRef}
                className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full opacity-0 z-[50] pointer-events-none"
                style={{
                    mixBlendMode: 'difference',
                }}
            />

            {/* CSS for hiding default cursor and smooth transitions */}
            <style jsx global>{`
                @media (min-width: 768px) {
                    * {
                        cursor: none !important;
                    }
                    
                    body {
                        cursor: none !important;
                    }
                }
                
                ::selection {
                    background-color: rgba(59, 130, 246, 0.3);
                }
            `}</style>
        </>
    );
};

export default CustomCursor;