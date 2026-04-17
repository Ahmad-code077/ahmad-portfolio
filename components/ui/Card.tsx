'use client';

import React from 'react';
import { CardProps } from '@/lib/types';
import { setupCardHoverAnimation } from '@/lib/animations';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const effectiveRef = ref || cardRef;

    React.useEffect(() => {
      if (hover && 'current' in effectiveRef && effectiveRef.current) {
        setupCardHoverAnimation(effectiveRef.current);
      }
    }, [hover, effectiveRef]);

    return (
      <div
        ref={effectiveRef}
        className={`
          bg-surface border border-border rounded-lg
          p-6 transition-all duration-300
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
