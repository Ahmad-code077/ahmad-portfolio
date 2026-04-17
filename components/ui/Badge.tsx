'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary/20 text-primary border border-primary/50',
    secondary: 'bg-surface text-foreground border border-border',
    neutral: 'bg-muted/30 text-text-secondary border border-muted',
  };

  return (
    <span
      className={`
        inline-block px-3 py-1 rounded-full text-sm font-medium
        transition-colors duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
