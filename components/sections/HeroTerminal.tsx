'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BOOT_HISTORY, runCommand, type HistoryEntry } from '@/lib/terminalCommands';

/**
 * The hero's interactive terminal. Seeded with BOOT_HISTORY (identical to
 * what SSR/no-JS renders), then lets the visitor actually type commands.
 * A visually-hidden <input> captures keystrokes (mobile keyboards, IME,
 * paste, and screen readers all work correctly) while a styled span mirrors
 * its value next to a blinking cursor.
 */
export const HeroTerminal = forwardRef<HTMLDivElement>((_props, ref) => {
    const [history, setHistory] = useState<HistoryEntry[]>(BOOT_HISTORY);
    const [input, setInput] = useState('');
    const [focused, setFocused] = useState(false);
    const commandLogRef = useRef<string[]>([]);
    const historyIndexRef = useRef<number>(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement>(null);

    // Merge the local containerRef (needed to auto-scroll) with the ref
    // Hero.tsx forwards in (needed as the scroll-zoom fade-out target) —
    // both point at the same outer, scrollable div.
    const setContainerRef = (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
    };

    // One-time entrance: the seeded boot lines stagger in on mount.
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const lines = linesRef.current?.querySelectorAll('.hero-term-line');
            if (!lines || lines.length === 0) return;
            gsap.set(lines, { opacity: 0, y: 8 });
            gsap.to(lines, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.12,
                ease: 'power2.out',
                delay: 0.3,
            });
        });
        return () => mm.revert();
    }, []);

    // Re-run on every keystroke too, not just on submit — otherwise the
    // live prompt line (not part of `history`) can grow past the bottom
    // edge while typing and scroll out of view before Enter is pressed.
    useEffect(() => {
        containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
    }, [history, input]);

    const focusInput = () => inputRef.current?.focus({ preventScroll: true });

    const submit = () => {
        const raw = input;
        const result = runCommand(raw);

        if (result === 'CLEAR') {
            setHistory([]);
        } else {
            setHistory((prev) => [...prev, { cmd: raw, out: result }]);
        }

        if (raw.trim()) {
            commandLogRef.current.push(raw);
        }
        historyIndexRef.current = -1;
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submit();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const log = commandLogRef.current;
            if (log.length === 0) return;
            const nextIndex = historyIndexRef.current < 0 ? log.length - 1 : Math.max(0, historyIndexRef.current - 1);
            historyIndexRef.current = nextIndex;
            setInput(log[nextIndex]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const log = commandLogRef.current;
            if (historyIndexRef.current < 0) return;
            const nextIndex = historyIndexRef.current + 1;
            if (nextIndex >= log.length) {
                historyIndexRef.current = -1;
                setInput('');
            } else {
                historyIndexRef.current = nextIndex;
                setInput(log[nextIndex]);
            }
        }
    };

    return (
        <div
            ref={setContainerRef}
            onClick={focusInput}
            className="hero-term-scroll relative px-6 py-8 sm:px-10 sm:py-10 h-[60vh] overflow-y-auto overscroll-contain cursor-text [overflow-anchor:none]"
        >
            <div ref={linesRef} className="space-y-5" aria-live="polite">
                {history.map((entry, i) => (
                    <div key={i} className="hero-term-line font-mono text-sm sm:text-base">
                        <p className="text-primary">
                            <span className="text-text-tertiary">$ </span>
                            {entry.cmd}
                        </p>
                        {entry.out.map((line, j) => (
                            <p key={j} className="text-foreground/90 mt-1 pl-3 whitespace-pre-wrap break-words">
                                {line}
                            </p>
                        ))}
                    </div>
                ))}

                <div className="hero-term-line font-mono text-sm sm:text-base text-primary flex items-center flex-wrap mt-5">
                    <span className="text-text-tertiary">$&nbsp;</span>
                    <span className="text-primary">{input}</span>
                    <span className="hero-term-cursor" aria-hidden="true" />
                    {!focused && (
                        <span className="ml-3 font-sans text-xs text-text-tertiary normal-case">
                            click to type a command
                        </span>
                    )}
                </div>
            </div>

            <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                aria-label="Terminal command input"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                className="sr-only"
            />
        </div>
    );
});

HeroTerminal.displayName = 'HeroTerminal';
