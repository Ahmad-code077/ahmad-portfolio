'use client';

import React, { useEffect, useState } from 'react';
import { laptopOpenAnimation, smoothScrollTo } from '@/lib/animations';
import { Button } from '@/components/ui/Button';

export const IntroAnimation: React.FC = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (!isAnimating) return;

        const runAnimation = async () => {
            await laptopOpenAnimation();
            setIsFinished(true);
        };

        runAnimation();
    }, [isAnimating]);

    const handleSkip = () => {
        setIsFinished(true);
        // Skip to hero section
        setTimeout(() => {
            smoothScrollTo('hero', 80);
        }, 100);
    };

    if (isFinished) {
        return null;
    }

    return (
        <div className="w-full h-screen bg-background flex items-center justify-center relative overflow-hidden">
            {/* Skip Button */}
            <button
                onClick={handleSkip}
                className="absolute top-6 right-6 text-text-secondary hover:text-foreground transition-colors text-sm z-10"
            >
                Skip
            </button>

            {/* Laptop Animation Container */}
            <div className="flex flex-col items-center justify-center space-y-8">
                {/* Laptop Mockup */}
                <div className="relative w-96 h-64">
                    {/* Key */}
                    <div
                        id="intro-key"
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg z-10"
                    >
                        ⌘
                    </div>

                    {/* Screen */}
                    <div
                        id="intro-screen"
                        className="absolute inset-0 top-16 bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-xl backdrop-blur-sm flex items-center justify-center"
                    >
                        {/* Content that appears */}
                        <div
                            id="intro-content"
                            className="text-center opacity-0 translate-y-4"
                        >
                            <div className="mb-4 text-4xl">👨‍💻</div>
                            <h1 className="text-2xl font-bold text-foreground mb-2">
                                Full Stack + AI Engineer
                            </h1>
                            <p className="text-text-secondary">
                                Building scalable systems and intelligent pipelines
                            </p>
                        </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-12 h-2 bg-border rounded-full" />
                </div>

                {/* CTA */}
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSkip}
                    className="mt-12"
                >
                    View My Work
                </Button>
            </div>
        </div>
    );
};
