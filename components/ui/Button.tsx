'use client';

import React from 'react';
import { ButtonProps } from '@/lib/types';
import gsap from 'gsap';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
        const buttonRef = React.useRef<HTMLButtonElement>(null);

        React.useEffect(() => {
            const button = buttonRef.current;
            if (!button) return;

            const handleMouseEnter = () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            };

            const handleMouseLeave = () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                });
            };

            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            };
        }, []);

        const variantClasses = {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
            secondary: 'bg-surface text-foreground hover:bg-surface/80 border border-border',
            ghost: 'text-foreground hover:bg-surface/50 border border-border',
        };

        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm rounded-md',
            md: 'px-4 py-2 text-base rounded-lg',
            lg: 'px-6 py-3 text-lg rounded-xl',
        };

        return (
            <button
                ref={buttonRef || ref}
                className={`font-medium transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
