/**
 * Content + logic for the interactive hero terminal.
 * Pure functions/data — no DOM, no React.
 */

import { projects, contactLinks } from './data';

export interface HistoryEntry {
    cmd: string;
    out: string[];
}

const COMMAND_LIST = ['help', 'whoami', 'stack', 'skills', 'experience', 'status', 'ls', 'cat', 'clear', 'date'];

const FACTS: Record<string, string[]> = {
    whoami: ['Muhammad Ahmad — backend + AI engineer'],
    stack: ['Node.js · PostgreSQL · RabbitMQ · Next.js · RAG pipelines'],
    skills: ['frontend · backend · ai/systems · devops'],
    experience: ['2+ years · 10+ shipped projects'],
    status: ['● available — building at Algotix.ai'],
};

/** Seeded scrollback shown before the user types anything — also what no-JS/SSR renders. */
export const BOOT_HISTORY: HistoryEntry[] = [
    { cmd: 'help', out: [`available commands: ${COMMAND_LIST.join(', ')}`] },
    { cmd: 'whoami', out: FACTS.whoami },
    { cmd: 'stack --core', out: FACTS.stack },
    { cmd: 'skills --areas', out: FACTS.skills },
    { cmd: 'experience', out: FACTS.experience },
    { cmd: 'status', out: FACTS.status },
];

const FILES: Record<string, string[]> = {
    'about.md': [
        "Muhammad Ahmad — full-stack engineer, 2+ years building production systems.",
        'Currently building AI pipelines and RAG systems at Algotix.ai.',
    ],
    'experience.log': FACTS.experience,
    'skills.json': [
        '{',
        '  "frontend": true,',
        '  "backend": true,',
        '  "ai/systems": true,',
        '  "devops": true',
        '}',
    ],
    'projects.md': projects.map((p) => `- ${p.title}`),
    'contact.sh': contactLinks.map((c) => `${c.platform}: ${c.url}`),
};

const LS_OUTPUT = Object.keys(FILES).join('  ');

export const runCommand = (raw: string): string[] | 'CLEAR' => {
    const trimmed = raw.trim();
    if (!trimmed) return [];

    const [cmd, ...args] = trimmed.split(/\s+/);
    const lower = cmd.toLowerCase();

    switch (lower) {
        case 'help':
            return [`available commands: ${COMMAND_LIST.join(', ')}`];
        case 'whoami':
        case 'stack':
        case 'skills':
        case 'experience':
        case 'status':
            return FACTS[lower];
        case 'ls':
            return [LS_OUTPUT];
        case 'cat': {
            const file = args[0];
            if (!file) return ['usage: cat <file>'];
            const content = FILES[file];
            return content ?? [`cat: ${file}: No such file or directory`];
        }
        case 'clear':
            return 'CLEAR';
        case 'date':
            return [new Date().toString()];
        case 'sudo':
            return ['Permission denied. Nice try.'];
        default:
            return [`zsh: command not found: ${cmd}`];
    }
};
