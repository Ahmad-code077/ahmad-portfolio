'use client';

import React from 'react';
import { CardProps } from '@/lib/types';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ children, className = '', hover = true }, ref) => {
        return (
            <div
                ref={ref}
                className={`
          bg-surface border border-border rounded-lg
          p-6 transition-colors duration-300
          ${hover ? 'hover:border-primary' : ''}
          ${className}
        `}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
