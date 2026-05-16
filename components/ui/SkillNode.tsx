'use client';

import React from 'react';
import { Handle, Position } from '@xyflow/react';

interface SkillNodeData {
    label: string;
    icon?: string;
    proficiency?: string;
    yearsOfExperience?: number;
    level?: 'root' | 'category' | 'skill';
}

interface SkillNodeProps {
    data: SkillNodeData;
}

export function SkillNode({ data }: SkillNodeProps) {
    const level = data.level || 'skill';

    // Minimal styling based on level
    const styles = {
        root: {
            size: 'w-24 h-24',
            fontSize: 'text-xs font-bold',
            bg: 'bg-primary/15',
            border: 'border-primary/40',
        },
        category: {
            size: 'w-20 h-20',
            fontSize: 'text-xs font-semibold',
            bg: 'bg-primary/10',
            border: 'border-primary/30',
        },
        skill: {
            size: 'w-16 h-16',
            fontSize: 'text-[10px] font-medium',
            bg: 'bg-primary/5',
            border: 'border-primary/20',
        },
    };

    const style = styles[level as keyof typeof styles] || styles.skill;

    return (
        <div className="relative">
            {/* Minimal card node - no glow, no animation */}
            <div
                className={`
                    ${style.size}
                    ${style.bg}
                    ${style.border}
                    flex flex-col items-center justify-center gap-1 rounded-lg border
                    transition-colors duration-200
                `}
            >
                {/* Icon */}
                {data.icon && (
                    <span className="text-lg leading-none">
                        {data.icon}
                    </span>
                )}

                {/* Label */}
                <p className={`${style.fontSize} text-center text-foreground leading-tight line-clamp-2 px-1`}>
                    {data.label}
                </p>

                {/* Years badge - only for root */}
                {data.yearsOfExperience && level === 'root' && (
                    <div className="absolute -top-1 -right-1 bg-primary text-background text-[7px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {data.yearsOfExperience}
                    </div>
                )}
            </div>

            {/* React Flow handles */}
            <Handle position={Position.Top} type="target" />
            <Handle position={Position.Bottom} type="source" />
        </div>
    );
}
