'use client';

import React from 'react';
import { SectionProps } from '@/lib/types';

interface SectionComponentProps extends SectionProps {
    title?: string;
    subtitle?: string;
    id?: string;
    bgColor?: 'background' | 'surface';
}

export const Section = React.forwardRef<HTMLElement, SectionComponentProps>(
    ({ title, subtitle, id, className = '', bgColor = 'background', children }, ref) => {
        const bgClass = bgColor === 'surface' ? 'bg-surface/30' : 'bg-background';

        return (
            <section
                ref={ref}
                id={id}
                className={`
          w-full py-20 md:py-28 px-6 md:px-8
          ${bgClass}
          ${className}
        `}
            >
                <div className="container max-w-5xl">
                    {title && (
                        <div className="mb-16 md:mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                {title}
                            </h2>
                            {subtitle && (
                                <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    )}
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';
