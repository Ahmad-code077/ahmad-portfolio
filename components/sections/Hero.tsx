'use client';

import React, { useEffect } from 'react';
import { fadeInUp, smoothScrollTo } from '@/lib/animations';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { Section } from '@/components/ui/Section';

export const Hero: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current, 0);
    }
    if (buttonsRef.current) {
      fadeInUp(buttonsRef.current, 0.2);
    }
  }, []);

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8" ref={contentRef}>
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-foreground">Senior</span>{' '}
          <GradientText>Full Stack + AI Engineer</GradientText>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Building event-driven systems, distributed architectures, and intelligent
          AI pipelines. Specializing in backend scale, vector search, and LLM
          integrations.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => smoothScrollTo('projects')}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => smoothScrollTo('contact')}
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
};
