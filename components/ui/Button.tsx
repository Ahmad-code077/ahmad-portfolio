import React from 'react';
import { ButtonProps } from '@/lib/types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
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
                ref={ref}
                className={`font-medium transition-[color,background-color,transform] duration-200 hover:scale-[1.03] active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
