'use client';

import { useState, useEffect } from 'react';
import IntroAnimation from './IntroAnimation';
import { cn } from '@/lib/utils';

interface PageWithTransitionProps {
  children: React.ReactNode;
}

export default function PageWithTransition({ children }: PageWithTransitionProps) {
  const [startedExit, setStartedExit] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  // Force scroll to top on mount and prevent automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    return () => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
        }
    };
  }, []);

  // Force scroll to top when content starts entering
  useEffect(() => {
    if (startedExit) {
        window.scrollTo(0, 0);
    }
  }, [startedExit]);

  // Optional: Unmount animation after it finishes to clean up DOM
  useEffect(() => {
    if (startedExit) {
      const timer = setTimeout(() => {
        setShowAnimation(false);
        // Ensure we are still at top when animation overlay is removed
        window.scrollTo(0, 0);
      }, 1500); // 1000ms duration + buffer
      return () => clearTimeout(timer);
    }
  }, [startedExit]);

  return (
    <div className={cn("relative min-h-screen", showAnimation ? "overflow-hidden h-screen" : "")}>
      {showAnimation && (
        <IntroAnimation onExitStart={() => setStartedExit(true)} />
      )}
      
      <div 
        className={cn(
            "w-full min-h-screen transition-transform duration-1000 ease-in-out will-change-transform",
            !startedExit ? "translate-y-[100vh]" : "translate-y-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}
