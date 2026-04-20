'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Flip from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

interface GalleryImage {
    src: string;
    alt: string;
}

interface BentoGalleryProps {
    images: GalleryImage[];
}

export const BentoGallery: React.FC<BentoGalleryProps> = ({ images }) => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const flipCtxRef = useRef<gsap.Context | null>(null);

    useEffect(() => {
        // Wait for grid layout to fully stabilize before GSAP captures state
        const frameId = requestAnimationFrame(() => {
            const timeoutId = setTimeout(() => {
                const createTween = () => {
                    const galleryElement = galleryRef.current;
                    if (!galleryElement) return;

                    const parentElement = galleryElement.parentNode as HTMLElement;
                    const galleryItems = galleryElement.querySelectorAll('.gallery__item');

                    // Clean up previous context
                    flipCtxRef.current?.revert();
                    galleryElement.classList.remove('gallery--final');

                    flipCtxRef.current = gsap.context(() => {
                        // Capture final state
                        galleryElement.classList.add('gallery--final');
                        const flipState = Flip.getState(galleryItems);
                        galleryElement.classList.remove('gallery--final');

                        // Animate from bento to fullscreen
                        const flip = Flip.to(flipState, {
                            simple: true,
                            ease: 'expoScale(1, 5)'
                        });

                        // Create scroll timeline
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: galleryElement,
                                start: 'center center',
                                end: '+=100%',
                                scrub: true,
                                pin: parentElement
                            }
                        });

                        tl.add(flip);

                        return () => gsap.set(galleryItems, { clearProps: 'all' });
                    });
                };

                createTween();

                // Handle window resize
                const handleResize = () => createTween();
                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    flipCtxRef.current?.revert();
                };
            }, 500);

            return () => clearTimeout(timeoutId);
        });

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="gallery-wrap w-full h-screen flex items-center justify-center overflow-hidden" suppressHydrationWarning>
            <div
                id="gallery-bento"
                ref={galleryRef}
                className="gallery gallery--bento relative w-full h-full"
                suppressHydrationWarning
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery__item relative overflow-hidden rounded-lg border border-border"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index < 2}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
