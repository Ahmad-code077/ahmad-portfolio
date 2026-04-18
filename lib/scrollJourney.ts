/**
 * Scroll Journey Animation Utilities
 * Creates a cinematic scroll experience with GSAP MotionPath
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface AnchorPoint {
    id: string;
    element: HTMLElement;
    delay?: number;
}

interface MotionConfig {
    element: HTMLElement;
    anchors: AnchorPoint[];
    tension?: number;
    curviness?: number;
}

/**
 * Calculate a smooth bezier path through multiple points
 * Uses quadratic interpolation for natural curves
 */
export const calculateMotionPath = (points: { x: number; y: number }[]): string => {
    if (points.length < 2) return '';

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const next = i < points.length - 1 ? points[i + 1] : null;

        // Calculate control point for smooth curve
        let cp1x = prev.x;
        let cp1y = prev.y;
        let cp2x = curr.x;
        let cp2y = curr.y;

        if (next) {
            // Use center points as control points for smooth curves
            cp1x = prev.x + (curr.x - prev.x) * 0.5;
            cp1y = prev.y + (curr.y - prev.y) * 0.5;
            cp2x = curr.x + (next.x - curr.x) * 0.5;
            cp2y = curr.y + (next.y - curr.y) * 0.5;
        }

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    return path;
};

/**
 * Get positions of all anchor points relative to viewport
 */
export const getAnchorPositions = (
    anchors: AnchorPoint[],
    containerRect: DOMRect
): { x: number; y: number }[] => {
    return anchors.map((anchor) => {
        const rect = anchor.element.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        return { x, y };
    });
};

/**
 * Setup scroll-driven motion path animation
 * Element follows a path through anchor points as user scrolls
 */
export const setupScrollJourneyAnimation = (config: MotionConfig): (() => void) => {
    const { element, anchors } = config;

    if (!element || anchors.length < 2) return () => { };

    // Get SVG container for path
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 1400 3000');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'rgba(255, 125, 0, 0.1)');
    path.setAttribute('stroke-width', '2');
    svg.appendChild(path);

    element.parentElement?.appendChild(svg);

    // Animation function to recalculate path
    const updateMotionPath = () => {
        const containerRect = element.parentElement?.getBoundingClientRect() || new DOMRect();
        const positions = getAnchorPositions(anchors, containerRect);

        // Adjust positions for SVG viewBox
        const viewBoxWidth = 1400;
        const viewBoxHeight = 3000;
        const windowWidth = window.innerWidth;
        const totalHeight = document.documentElement.scrollHeight;

        const scaledPositions = positions.map((pos) => ({
            x: (pos.x / windowWidth) * viewBoxWidth,
            y: (pos.y / totalHeight) * viewBoxHeight,
        }));

        const pathData = calculateMotionPath(scaledPositions);
        path.setAttribute('d', pathData);

        // Create GSAP animation following the path
        const totalDistance = calculatePathLength(pathData);

        // Kill existing animation
        gsap.killTweensOf(element);

        // Create motion animation tied to scroll
        gsap.to(element, {
            motionPath: {
                path: pathData,
                autoRotate: false,
                start: 0,
                end: 1,
            },
            duration: anchors.length,
            ease: 'linear',
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.2, // Smooth scrubbing
                markers: false,
                onUpdate: (self) => {
                    // Update element along path based on scroll
                },
            },
        });
    };

    // Initial setup
    updateMotionPath();

    // Recalculate on window resize
    const handleResize = () => {
        ScrollTrigger.refresh();
        updateMotionPath();
    };

    window.addEventListener('resize', handleResize);

    // Return cleanup function
    return () => {
        window.removeEventListener('resize', handleResize);
        gsap.killTweensOf(element);
        svg.remove();
    };
};

/**
 * Approximate path length calculation
 */
export const calculatePathLength = (pathData: string): number => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0;

    const path = new Path2D(pathData);
    // Rough approximation: use SVG path length estimation
    return 1000; // Placeholder - should measure actual path
};

/**
 * Create invisible anchor point element
 */
export const createAnchorPoint = (id: string, position: 'center' | 'top' | 'bottom' = 'center'): HTMLElement => {
    const anchor = document.createElement('div');
    anchor.id = id;
    anchor.setAttribute('data-anchor', id);
    anchor.style.cssText = `
        position: relative;
        height: 1px;
        width: 1px;
        visibility: hidden;
        pointer-events: none;
    `;

    return anchor;
};
