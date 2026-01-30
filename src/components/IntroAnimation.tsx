'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Globe from './Globe';

const WORDS = [
  "PARABÉNS",
  "VOCÊ",
  "ACABOU",
  "DE",
  "COMPRAR",
  "O",
  "MELHOR",
  "CAFÉ",
  "DO",
  "MUNDO"
];

interface IntroAnimationProps {
  onExitStart?: () => void;
}

export default function IntroAnimation({ onExitStart }: IntroAnimationProps) {
  const [stage, setStage] = useState<'initial' | 'enter' | 'sequence' | 'exit'>('initial');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Start animation after a short delay
    const timer1 = setTimeout(() => {
      setStage('enter');
    }, 500);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (stage === 'enter') {
        // Wait for entry animation to finish, then start sequence
        const timer = setTimeout(() => {
            setStage('sequence');
        }, 1000); 
        return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 'sequence') {
        if (wordIndex < WORDS.length - 1) {
            const timer = setTimeout(() => {
                setWordIndex(prev => prev + 1);
            }, 300); // Speed of word changes
            return () => clearTimeout(timer);
        } else {
            // Reached "MUNDO"
            const timer = setTimeout(() => {
                setStage('exit');
                if (onExitStart) onExitStart();
            }, 1000); // Hold MUNDO for a bit
            return () => clearTimeout(timer);
        }
    }
  }, [stage, wordIndex, onExitStart]);

  // Globe visibility logic
  // Index 7 is "CAFÉ"
  const showGlobe = (stage === 'sequence' && wordIndex >= 7) || stage === 'exit';
  const globeExit = stage === 'exit';

  return (
    <div className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-transform duration-1000 ease-in-out",
        stage === 'exit' ? "-translate-y-full" : "translate-y-0"
    )}>
        {/* Globe Background */}
        <div 
            className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out pointer-events-none",
                // Initial state (before CAFÉ): Hidden/Below
                !showGlobe && "translate-y-[100vh] opacity-0",
                
                // Active state (CAFÉ to MUNDO): Slightly at bottom
                showGlobe && !globeExit && "translate-y-[20%] opacity-100",
                
                // Exit state (With MUNDO): Move up with the container, so we keep it relative to container or adjust?
                // If container moves up, this moves with it. 
                // But original code had: globeExit && "-translate-y-[100vh] opacity-0"
                // If we move the whole container up, the globe inside it will move up too.
                // However, the request says "assim que 'mundo' e o globo sobem".
                // If the container moves up, everything inside moves up.
                // Let's keep the inner animation logic relative to the container for now, but maybe adjust.
                
                // Original logic:
                globeExit && "-translate-y-[100vh] opacity-0"
            )}
        >
            <Globe size={800} color="rgba(200, 155, 92, 0.3)" />
        </div>

        {/* Text */}
        <div className="relative z-10 flex items-center justify-center w-full px-4">
            <h1 
                className={cn(
                    "text-5xl md:text-7xl font-bold text-white text-center transition-all will-change-transform",
                    // Stage: Initial (Below screen)
                    stage === 'initial' && "translate-y-[100vh] opacity-0 blur-xl scale-y-150",
                    
                    // Stage: Enter (Move to center)
                    stage === 'enter' && "translate-y-0 opacity-100 blur-0 scale-y-100 duration-700 ease-out",
                    
                    // Stage: Sequence (Stay in center, changing words)
                    stage === 'sequence' && "translate-y-0 opacity-100 blur-0 scale-y-100",
                    
                    // Stage: Exit (Move to top)
                    // If container moves, this moves.
                    // But original had specific exit animation.
                    stage === 'exit' && "-translate-y-[100vh] opacity-0 blur-xl scale-y-150 duration-700 ease-in"
                )}
            >
                {WORDS[wordIndex]}
            </h1>
        </div>
    </div>
  );
}
