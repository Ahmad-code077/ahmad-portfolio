'use client';

import dynamic from 'next/dynamic';

// Dynamically import ScrollJourney with SSR disabled
// This prevents hydration mismatch since the component does client-only DOM manipulation
const ScrollJourneyDynamic = dynamic(() => import('./ScrollJourney').then((mod) => mod.ScrollJourney), {
    ssr: false,
    loading: () => <div className="fixed inset-0 pointer-events-none z-40" />,
});

export const ScrollJourneyWrapper: React.FC = () => {
    return <ScrollJourneyDynamic />;
};
