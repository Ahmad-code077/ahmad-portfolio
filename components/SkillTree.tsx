'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
    ReactFlow,
    applyEdgeChanges,
    applyNodeChanges,
    type NodeChange,
    type EdgeChange,
    type Node,
    type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillTreeData, skillTreeToNodes, skillTreeToEdges } from '@/lib/skillTree';
import { SkillNode } from '@/components/ui/SkillNode';
import { SkillEdge } from '@/components/ui/SkillEdge';

gsap.registerPlugin(ScrollTrigger);

const nodeTypes = {
    skillNode: SkillNode,
};

const edgeTypes = {
    skillEdge: SkillEdge,
};

interface SkillTreeProps {
    containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function SkillTree({ containerRef }: SkillTreeProps) {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize nodes and edges from skill tree data
    useEffect(() => {
        const newNodes = skillTreeToNodes(skillTreeData);
        const newEdges = skillTreeToEdges(skillTreeData);
        setNodes(newNodes);
        setEdges(newEdges);
        setIsInitialized(true);
    }, []);

    // Handle node changes
    const onNodesChange = useCallback((changes: NodeChange[]) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    }, []);

    // Handle edge changes
    const onEdgesChange = useCallback((changes: EdgeChange[]) => {
        setEdges((eds) => applyEdgeChanges(changes, eds));
    }, []);

    // Scroll-triggered fade-in animation for the tree
    useEffect(() => {
        if (!containerRef?.current || !isInitialized) return;

        // Animate nodes on scroll into view
        gsap.from('.react-flow__nodes', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                once: true,
            },
        });

        // Animate edges
        gsap.from('.react-flow__edges', {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                once: true,
            },
        });
    }, [containerRef, isInitialized]);

    return (
        <div className="relative w-full h-full bg-background">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}

                // Pure view-only mode: completely disabled interactions
                elementsSelectable={false}
                nodesConnectable={false}
                nodesDraggable={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnDrag={false}
                panOnScroll={false}

                fitView
                attributionPosition="bottom-right"
            >
                {/* No Background, Controls, MiniMap, or Panel - clean view */}
            </ReactFlow>
        </div>
    );
}
