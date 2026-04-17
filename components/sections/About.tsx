'use client';

import React, { useEffect } from 'react';
import { fadeInUp } from '@/lib/animations';
import { Section } from '@/components/ui/Section';

export const About: React.FC = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      fadeInUp(contentRef.current);
    }
  }, []);

  return (
    <Section id="about" title="About" className="bg-surface/30">
      <div className="grid md:grid-cols-2 gap-12 items-center" ref={contentRef}>
        {/* Avatar Placeholder */}
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-2xl flex items-center justify-center">
            <span className="text-8xl">👨‍💻</span>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm a Full Stack Engineer with a passion for building scalable systems
            that handle millions of operations. My expertise spans distributed
            architectures, backend optimization, and cutting-edge AI integrations.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            Over the past 6+ years, I've architected and shipped production systems
            that power real businesses. From event-driven microservices processing
            500K+ daily events, to RAG-based search engines handling semantic queries,
            I focus on systems that scale with elegance and performance.
          </p>

          <p className="text-lg text-text-secondary leading-relaxed">
            My approach combines practical engineering discipline with architectural
            thinking. I believe in clean code, strong types, and building for the
            production environment from day one.
          </p>

          {/* Highlight Stats */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-background rounded-lg p-4 border border-border">
              <div className="text-2xl font-bold text-primary">6+</div>
              <p className="text-text-secondary text-sm">Years of Experience</p>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <div className="text-2xl font-bold text-primary">100+</div>
              <p className="text-text-secondary text-sm">Production Systems</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
