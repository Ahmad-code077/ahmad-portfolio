'use client';

import React, { useEffect } from 'react';
import { fadeInUp } from '@/lib/animations';
import { contactLinks } from '@/lib/data';
import { Section } from '@/components/ui/Section';

export const Contact: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current);
    }
  }, []);

  return (
    <Section id="contact" className="bg-surface/30 min-h-screen flex items-center justify-center">
      <div
        ref={contentRef}
        className="text-center space-y-12 w-full max-w-2xl"
      >
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-lg">
            Whether you have a project in mind or just want to chat about
            distributed systems and AI, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform !== 'Email' && link.platform !== 'Resume' ? '_blank' : undefined}
              rel={link.platform !== 'Email' && link.platform !== 'Resume' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center gap-3 group p-4 rounded-lg border border-border hover:bg-surface/50 transition-colors"
            >
              <span className="text-primary font-semibold">
                {link.platform}
              </span>
              <span className="text-text-secondary group-hover:text-foreground transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border">
          <p className="text-text-tertiary text-sm">
            Built with Next.js, TypeScript, and GSAP.
            <br />
            Designed for performance and elegance.
          </p>
        </div>
      </div>
    </Section>
  );
};
