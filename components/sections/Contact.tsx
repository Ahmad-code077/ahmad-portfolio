'use client';

import React, { useEffect } from 'react';
import { setupFadeInUp } from '@/lib/animations';
import { contactLinks } from '@/lib/data';
import { Section } from '@/components/ui/Section';

export const Contact: React.FC = () => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupFadeInUp(contentRef.current);
        return cleanup;
    }, []);

    return (
        <Section id="contact" bgColor="surface" className="min-h-screen flex items-center justify-center py-20 md:py-32">
            <div ref={contentRef} className="text-center space-y-12 w-full max-w-2xl">
                {/* Heading */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl">
                        Have a project in mind? Want to discuss web development, backend systems, or AI-driven solutions?
                        I&apos;d love to connect.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="space-y-3 md:space-y-4">
                    {contactLinks.map((link) => (
                        <a
                            key={link.platform}
                            href={link.url}
                            target={link.platform !== 'Email' && link.platform !== 'Resume' ? '_blank' : undefined}
                            rel={link.platform !== 'Email' && link.platform !== 'Resume' ? 'noopener noreferrer' : undefined}
                            className="flex items-center justify-center gap-3 group p-4 md:p-5 rounded-lg border border-border hover:bg-surface/50 hover:border-primary transition-colors w-full"
                        >
                            <span className="text-primary font-semibold text-sm md:text-base">
                                {link.platform}
                            </span>
                            <span className="text-text-secondary group-hover:text-foreground transition-colors text-sm md:text-base">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="pt-8 border-t border-border">
                    <p className="text-text-tertiary text-xs md:text-sm">
                        Building with Next.js 15, TypeScript, Tailwind CSS, and GSAP.
                        <br />
                        Designed for performance, flexibility, and elegance.
                    </p>
                </div>
            </div>
        </Section>
    );
};
