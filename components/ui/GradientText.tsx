'use client';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  animate = false,
}) => {
  return (
    <span
      className={`
        bg-gradient-to-r from-primary via-primary to-primary/60
        bg-clip-text text-transparent
        ${animate ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
