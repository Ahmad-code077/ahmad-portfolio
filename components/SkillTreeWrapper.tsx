'use client';

import React, { useRef } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { SkillTree } from '@/components/SkillTree';

export function SkillTreeWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="w-full rounded-lg overflow-hidden bg-background border border-border/10"
            style={{ height: '1400px' }}
        >
            <ReactFlowProvider>
                <SkillTree containerRef={containerRef} />
            </ReactFlowProvider>
        </div>
    );
}
