'use client';

import React from 'react';
import { getBezierPath } from '@xyflow/react';

interface SkillEdgeProps {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    sourcePosition?: any;
    targetPosition?: any;
    style?: React.CSSProperties;
    markerEnd?: string;
}

export function SkillEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
}: SkillEdgeProps) {
    // Get bezier path
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    return (
        <>
            <defs>
                {/* Marker for edge direction */}
                <marker id={`arrow-${id}`} markerWidth="20" markerHeight="20" refX="16" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="rgba(255, 125, 0, 0.2)" />
                </marker>
            </defs>

            {/* Subtle edge line - no animation, just clean connection */}
            <path
                d={edgePath}
                stroke="rgba(255, 125, 0, 0.15)"
                strokeWidth={1}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    ...style,
                    pointerEvents: 'none',
                }}
                markerEnd={markerEnd || `url(#arrow-${id})`}
            />
        </>
    );
}
