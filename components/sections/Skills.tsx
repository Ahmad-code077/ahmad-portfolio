'use client';

import React, { useEffect } from 'react';
import { staggerChildren } from '@/lib/animations';
import { skillsByCategory } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Section } from '@/components/ui/Section';

export const Skills: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      staggerChildren(containerRef.current, '.skill-category', 0.1);
    }
  }, []);

  const categories = skillsByCategory();

  return (
    <Section id="skills" title="Skills & Expertise" className="bg-background">
      <div className="space-y-12" ref={containerRef}>
        {categories.map((category) => (
          <div key={category.category} className="skill-category">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-primary mb-6">
              {category.category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group cursor-default"
                >
                  <Badge variant="primary" className="w-full">
                    {skill.name}
                  </Badge>
                  <p className="text-xs text-text-tertiary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.yearsOfExperience}y • {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
