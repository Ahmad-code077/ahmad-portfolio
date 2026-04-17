'use client';

import React from 'react';
import { SectionProps } from '@/lib/types';

interface SectionComponentProps extends SectionProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionComponentProps>(
  ({ title, subtitle, id, className = '', children }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`
          py-20 px-6 md:px-12 lg:px-20 w-full
          ${className}
        `}
      >
        <div className="max-w-4xl mx-auto">
          {title && (
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-text-secondary text-lg">
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
