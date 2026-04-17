'use client';

import React, { useEffect } from 'react';
import { staggerChildren } from '@/lib/animations';
import { experience } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      staggerChildren(containerRef.current, '.experience-item', 0.15);
    }
  }, []);

  return (
    <Section id="experience" title="Experience" className="bg-surface/30">
      <div className="space-y-8" ref={containerRef}>
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className="experience-item relative pl-8 pb-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full" />

            {/* Timeline line (not on last item) */}
            {index < experience.length - 1 && (
              <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-border" />
            )}

            {/* Content */}
            <div className="bg-background border border-border rounded-lg p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary text-lg font-semibold">
                    {exp.company}
                  </p>
                </div>
                <p className="text-text-secondary text-sm whitespace-nowrap">
                  {exp.period.start} – {exp.period.end}
                </p>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">{exp.description}</p>

              {/* Impact */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Impact:
                </p>
                <ul className="space-y-1">
                  {exp.impact.map((item, idx) => (
                    <li key={idx} className="text-text-secondary text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
