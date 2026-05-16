/**
 * Skill Tree Data Structure
 * Hierarchical representation of skills with automatic React Flow conversion
 */

import { Node, Edge } from '@xyflow/react';

export interface SkillTreeNode {
    id: string;
    label: string;
    icon?: string;
    level: 'root' | 'category' | 'skill';
    proficiency?: 'Expert' | 'Advanced' | 'Intermediate';
    yearsOfExperience?: number;
    children: SkillTreeNode[];
}

/**
 * Hierarchical Skill Tree
 * This is the single source of truth for the skill tree structure
 */
export const skillTreeData: SkillTreeNode = {
    id: 'root-skills',
    label: 'Technical Skills',
    icon: '🎯',
    level: 'root',
    children: [
        // Frontend Category
        {
            id: 'category-frontend',
            label: 'Frontend',
            icon: '⚛️',
            level: 'category',
            children: [
                {
                    id: 'skill-react',
                    label: 'React.js',
                    icon: '⚛️',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 2,
                    children: [
                        {
                            id: 'skill-nextjs',
                            label: 'Next.js 15',
                            icon: '▲',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                        {
                            id: 'skill-jsx',
                            label: 'JSX/TSX',
                            icon: '{•}',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-typescript',
                    label: 'TypeScript',
                    icon: 'TS',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 1,
                    children: [],
                },
                {
                    id: 'skill-tailwindcss',
                    label: 'Tailwind CSS',
                    icon: '🎨',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 2,
                    children: [],
                },
                {
                    id: 'skill-state',
                    label: 'State Management',
                    icon: '🔄',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 2,
                    children: [
                        {
                            id: 'skill-redux',
                            label: 'Redux Toolkit',
                            icon: '⚙️',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 2,
                            children: [],
                        },
                        {
                            id: 'skill-rtkquery',
                            label: 'RTK Query',
                            icon: '🔌',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 2,
                            children: [],
                        },
                    ],
                },
            ],
        },

        // Backend Category
        {
            id: 'category-backend',
            label: 'Backend',
            icon: '🧠',
            level: 'category',
            children: [
                {
                    id: 'skill-nodejs',
                    label: 'Node.js',
                    icon: '⬢',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 2,
                    children: [
                        {
                            id: 'skill-express',
                            label: 'Express.js',
                            icon: '📦',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                        {
                            id: 'skill-fastapi',
                            label: 'FastAPI',
                            icon: '⚡',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-databases',
                    label: 'Databases',
                    icon: '🗄️',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 2,
                    children: [
                        {
                            id: 'skill-postgresql',
                            label: 'PostgreSQL',
                            icon: '🐘',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                        {
                            id: 'skill-mongodb',
                            label: 'MongoDB',
                            icon: '🍃',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-prisma',
                            label: 'Prisma ORM',
                            icon: '⏩',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 2,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-realtime',
                    label: 'Real-time Systems',
                    icon: '📡',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-websocket',
                            label: 'WebSocket',
                            icon: '🔌',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-pusher',
                            label: 'Pusher',
                            icon: '📤',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-messaging',
                    label: 'Messaging',
                    icon: '📨',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-rabbitmq',
                            label: 'RabbitMQ',
                            icon: '🐰',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-sqs',
                            label: 'AWS SQS',
                            icon: '☁️',
                            level: 'skill',
                            proficiency: 'Intermediate',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-auth',
                    label: 'Authentication',
                    icon: '🔐',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-nextauth',
                            label: 'NextAuth.js',
                            icon: '🔑',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-oauth',
                            label: 'OAuth 2.0',
                            icon: '🔑',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
            ],
        },

        // AI/Systems Category
        {
            id: 'category-ai',
            label: 'AI/Systems',
            icon: '🤖',
            level: 'category',
            children: [
                {
                    id: 'skill-llm',
                    label: 'LLM Integration',
                    icon: '🧠',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-rag',
                            label: 'RAG Pipelines',
                            icon: '📚',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-vector-search',
                            label: 'Vector Search',
                            icon: '🔍',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-automation',
                    label: 'Automation',
                    icon: '⚙️',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-n8n',
                            label: 'n8n',
                            icon: '🔗',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-zapier',
                            label: 'Zapier',
                            icon: '⚡',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
            ],
        },

        // DevOps Category
        {
            id: 'category-devops',
            label: 'DevOps',
            icon: '🚀',
            level: 'category',
            children: [
                {
                    id: 'skill-deployment',
                    label: 'Deployment',
                    icon: '📦',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-vercel',
                            label: 'Vercel',
                            icon: '▲',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-docker',
                            label: 'Docker',
                            icon: '🐳',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-cloud',
                    label: 'Cloud Platforms',
                    icon: '☁️',
                    level: 'skill',
                    proficiency: 'Advanced',
                    yearsOfExperience: 1,
                    children: [
                        {
                            id: 'skill-aws',
                            label: 'AWS',
                            icon: '☁️',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                        {
                            id: 'skill-hetzner',
                            label: 'Hetzner Cloud',
                            icon: '🌐',
                            level: 'skill',
                            proficiency: 'Advanced',
                            yearsOfExperience: 1,
                            children: [],
                        },
                    ],
                },
                {
                    id: 'skill-vcs',
                    label: 'Version Control',
                    icon: '📚',
                    level: 'skill',
                    proficiency: 'Expert',
                    yearsOfExperience: 2,
                    children: [
                        {
                            id: 'skill-git',
                            label: 'Git',
                            icon: '🔀',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                        {
                            id: 'skill-github',
                            label: 'GitHub',
                            icon: '🐙',
                            level: 'skill',
                            proficiency: 'Expert',
                            yearsOfExperience: 2,
                            children: [],
                        },
                    ],
                },
            ],
        },
    ],
};

/**
 * Proper hierarchical tree layout algorithm
 * Creates a real tree structure with parent-child alignment
 */
interface NodeWithPosition extends SkillTreeNode {
    x: number;
    y: number;
}

/**
 * Calculate the width needed for a subtree
 */
function getSubtreeWidth(node: SkillTreeNode, horizontalSpacing: number): number {
    if (node.children.length === 0) {
        return horizontalSpacing;
    }

    const childWidth = node.children.reduce((sum, child) => {
        return sum + getSubtreeWidth(child, horizontalSpacing);
    }, 0);

    return Math.max(childWidth, horizontalSpacing);
}

/**
 * Layout a tree using proper hierarchical positioning
 * Children are centered under their parent with depth-based vertical spacing
 */
function layoutTree(
    node: SkillTreeNode,
    x: number,
    y: number,
    horizontalSpacing: number,
    verticalSpacing: number
): NodeWithPosition {
    const positionedNode = node as NodeWithPosition;
    positionedNode.x = x;
    positionedNode.y = y;

    if (node.children.length === 0) {
        return positionedNode;
    }

    // Calculate total width needed for all children
    const childrenWidth = node.children.reduce((sum, child) => {
        return sum + getSubtreeWidth(child, horizontalSpacing);
    }, 0);

    // Position children horizontally centered under parent
    let childX = x - childrenWidth / 2;
    const childY = y + verticalSpacing;

    node.children.forEach((child) => {
        const childSubtreeWidth = getSubtreeWidth(child, horizontalSpacing);
        const childCenterX = childX + childSubtreeWidth / 2;

        layoutTree(child, childCenterX, childY, horizontalSpacing, verticalSpacing);

        childX += childSubtreeWidth;
    });

    return positionedNode;
}

/**
 * Main positioning function - creates hierarchical tree layout
 */
function calculateNodePositions(treeNode: SkillTreeNode, canvasWidth: number = 2000): NodeWithPosition {
    // Spacing parameters - adjust for readability
    const horizontalSpacing = 160; // Space between sibling nodes
    const verticalSpacing = 180;   // Space between depth levels

    // Start root at top-center
    const rootX = canvasWidth / 2;
    const rootY = 40;

    // Layout entire tree from root
    layoutTree(treeNode, rootX, rootY, horizontalSpacing, verticalSpacing);

    return treeNode as NodeWithPosition;
}

/**
 * Convert hierarchical skill tree to React Flow nodes
 * Using proper hierarchical tree layout
 */
export function skillTreeToNodes(treeNode: SkillTreeNode): Node[] {
    const nodes: Node[] = [];

    // Calculate positions with hierarchical tree layout
    // Width is large enough to accommodate all sibling nodes without overlap
    const canvasWidth = 3000;
    const positioned = calculateNodePositions(treeNode, canvasWidth);

    function traverse(node: NodeWithPosition) {
        nodes.push({
            id: node.id,
            data: {
                label: node.label,
                icon: node.icon,
                proficiency: node.proficiency,
                yearsOfExperience: node.yearsOfExperience,
                level: node.level,
            },
            position: { x: node.x, y: node.y },
            type: 'skillNode',
        });

        // Recursively add all children
        if (node.children && node.children.length > 0) {
            node.children.forEach((child) => {
                traverse(child as NodeWithPosition);
            });
        }
    }

    traverse(positioned as NodeWithPosition);
    return nodes;
}

/**
 * Convert hierarchical skill tree to React Flow edges
 */
export function skillTreeToEdges(treeNode: SkillTreeNode): Edge[] {
    const edges: Edge[] = [];

    function traverse(node: SkillTreeNode) {
        node.children.forEach((child) => {
            edges.push({
                id: `edge-${node.id}-${child.id}`,
                source: node.id,
                target: child.id,
                type: 'skillEdge',
                animated: true,
            });
            traverse(child);
        });
    }

    traverse(treeNode);
    return edges;
}


