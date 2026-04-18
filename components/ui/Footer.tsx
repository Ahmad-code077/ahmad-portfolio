'use client';

import { contactLinks } from '@/lib/data';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-surface/30 border-t border-border mt-20">
            <div className="container py-16">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Muhammad Ahmad</h3>
                        <p className="text-text-secondary">
                            Full Stack + AI Engineer. Building scalable systems and intelligent pipelines.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {contactLinks.slice(0, 3).map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target={link.platform !== 'Email' ? '_blank' : undefined}
                                    rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
                                >
                                    <span>{link.platform}</span>
                                    <span>→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-tertiary text-sm">
                        © {currentYear} Muhammad Ahmad. All rights reserved.
                    </p>
                    <p className="text-text-tertiary text-sm">
                        Built with Next.js 15, TypeScript, and GSAP.
                    </p>
                </div>
            </div>
        </footer>
    );
};
