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
        const getNavbarHeight = () =>
            window.innerWidth >= 768 ? 81 : 64;

        const createTween = () => {
            const galleryElement = galleryRef.current;
            if (!galleryElement) return;

            const parentElement = galleryElement.parentNode as HTMLElement;
            const galleryItems =
                galleryElement.querySelectorAll('.gallery__item');

            flipCtxRef.current?.revert();
            galleryElement.classList.remove('gallery--final');

            flipCtxRef.current = gsap.context(() => {
                // Capture final layout
                galleryElement.classList.add('gallery--final');
                const state = Flip.getState(galleryItems);
                galleryElement.classList.remove('gallery--final');

                const flip = Flip.to(state, {
                    simple: true,
                    ease: 'expoScale(1, 5)'
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: galleryElement,
                        start: () => `top top+=${getNavbarHeight()}`,
                        end: '+=100%',
                        scrub: true,
                        pin: parentElement,
                        invalidateOnRefresh: true
                    }
                });

                tl.add(flip);

                return () => {
                    gsap.set(galleryItems, { clearProps: 'all' });
                };
            });
        };

        createTween();

        window.addEventListener('resize', createTween);

        return () => {
            window.removeEventListener('resize', createTween);
            flipCtxRef.current?.revert();
        };
    }, []);

    return (
        <div className="gallery-wrap w-full flex items-center justify-center overflow-hidden">
            <div
                ref={galleryRef}
                className="gallery gallery--bento relative w-full h-full"
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
                            sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};