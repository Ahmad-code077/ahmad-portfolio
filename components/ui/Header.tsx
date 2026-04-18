'use client';

import { useState } from 'react';
import { smoothScrollTo } from '@/lib/animations';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (id: string) => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            smoothScrollTo(id, 80);
        }
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
            <div className="container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('hero')}
                        className="font-bold text-lg md:text-xl text-primary hover:text-primary/80 transition-colors"
                    >
                        Ahmad
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.slice(0, -1).map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="text-text-secondary hover:text-foreground transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className="block w-full text-left px-4 py-2 text-text-secondary hover:text-foreground hover:bg-surface rounded-lg transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};
