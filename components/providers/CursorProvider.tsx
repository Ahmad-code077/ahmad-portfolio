'use client';

import { useEffect } from 'react';
import { initializeFlairElement, setupCursorTracking } from '@/lib/cursor';

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Initialize flair element
        initializeFlairElement();

        // Setup cursor tracking
        const cleanup = setupCursorTracking({ selector: '.flair' });

        return cleanup;
    }, []);

    return <>{children}</>;
};
