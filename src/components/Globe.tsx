'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface GlobeProps {
  className?: string;
  size?: number; // Size in pixels
  color?: string;
}

export default function Globe({ 
  className, 
  size = 300,
  color = "rgba(255, 255, 255, 0.5)"
}: GlobeProps) {
  
  // Generate angles for meridians (vertical lines) and parallels (horizontal lines)
  const meridians = [0, 30, 60, 90, 120, 150];
  const parallels = [-60, -45, -30, -15, 0, 15, 30, 45, 60];

  // Simplified World Map SVG Path (Mercator-ish projection)
  const worldMapPath = "M155.6,85.9l2.2-1.6l-1.9-2.7l-3.3,1.3l-1.3,3.3L155.6,85.9z M137.5,77.7l-2.2,2.2l2.7,2.2l2.7-1.1L137.5,77.7z M125,72.2l-3.3,1.6l1.1,3.3l3.3-1.1L125,72.2z M108.3,153.3l-3.3-1.1l-1.6,2.7l3.3,2.7l2.7-1.6L108.3,153.3z M97.2,142.2l-3.3,1.1l1.1,3.3l3.3-1.1L97.2,142.2z M86.1,131.1l-3.3-1.1l-1.6,2.7l3.3,2.7l2.7-1.6L86.1,131.1z M341.7,72.2l-3.3,1.6l1.1,3.3l3.3-1.1L341.7,72.2z M325,153.3l-3.3-1.1l-1.6,2.7l3.3,2.7l2.7-1.6L325,153.3z M313.9,142.2l-3.3,1.1l1.1,3.3l3.3-1.1L313.9,142.2z M302.8,131.1l-3.3-1.1l-1.6,2.7l3.3,2.7l2.7-1.6L302.8,131.1z M148.2,36.5l-4.2,2.1l2.1,4.2l5.2-1L148.2,36.5z M136.1,31.2l-3.1,3.1l3.1,3.1l4.2-2.1L136.1,31.2z M125,25l-5.2,2.1l2.1,5.2l5.2-2.1L125,25z M75,55l-5.2,2.1l2.1,5.2l5.2-2.1L75,55z M63.9,43.9l-3.1,3.1l3.1,3.1l4.2-2.1L63.9,43.9z M52.8,32.8l-5.2,2.1l2.1,5.2l5.2-2.1L52.8,32.8z M291.7,36.5l-4.2,2.1l2.1,4.2l5.2-1L291.7,36.5z M280.6,31.2l-3.1,3.1l3.1,3.1l4.2-2.1L280.6,31.2z M269.4,25l-5.2,2.1l2.1,5.2l5.2-2.1L269.4,25z M219.4,55l-5.2,2.1l2.1,5.2l5.2-2.1L219.4,55z M208.3,43.9l-3.1,3.1l3.1,3.1l4.2-2.1L208.3,43.9z M197.2,32.8l-5.2,2.1l2.1,5.2l5.2-2.1L197.2,32.8z M60,110l10-10l10,5l-5,15L60,110z M180,110l10-10l10,5l-5,15L180,110z M90,60l20-10l10,20l-20,10L90,60z M210,60l20-10l10,20l-20,10L210,60z";
  
  // A slightly better abstract map path (generated for visual approximation)
  const mapPath = "M50,40 Q70,20 90,40 T130,40 T170,40 T210,40 T250,40 T290,40 M60,100 Q80,80 100,100 T140,100 T180,100 T220,100 T260,100 M40,70 Q60,50 80,70 T120,70 T160,70 T200,70 T240,70 T280,70 M70,130 Q90,110 110,130 T150,130 T190,130 T230,130 T270,130";
  
  // Actually using a more organic-looking path for continents (simplified)
  const continents = (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
       {/* North America approx */}
       <path d="M45,40 L55,30 L75,30 L85,45 L75,65 L60,75 L50,60 Z" />
       {/* South America approx */}
       <path d="M65,80 L85,80 L95,100 L85,130 L70,125 L65,100 Z" />
       {/* Europe/Asia/Africa blob */}
       <path d="M130,35 L160,30 L190,35 L210,50 L200,80 L180,90 L160,120 L130,100 L120,70 L110,50 Z" />
       {/* Australia */}
       <path d="M220,100 L240,100 L245,120 L225,125 Z" />
       
       {/* Repeated for seamless loop (offset by 250px assuming width 250) */}
       {/* North America approx */}
       <path d="M295,40 L305,30 L325,30 L335,45 L325,65 L310,75 L300,60 Z" />
       {/* South America approx */}
       <path d="M315,80 L335,80 L345,100 L335,130 L320,125 L315,100 Z" />
       {/* Europe/Asia/Africa blob */}
       <path d="M380,35 L410,30 L440,35 L460,50 L450,80 L430,90 L410,120 L380,100 L370,70 L360,50 Z" />
       {/* Australia */}
       <path d="M470,100 L490,100 L495,120 L475,125 Z" />
    </g>
  );

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={{ 
        width: size, 
        height: size,
        perspective: '1000px'
      }}
    >
      <style>{`
        @keyframes globe-spin {
          0% { transform: rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateY(360deg) rotateZ(0deg); }
        }
        @keyframes map-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-250px); } 
        }
        .animate-globe-spin {
          transform-style: preserve-3d;
          animation: globe-spin 20s linear infinite;
        }
        .animate-map-scroll {
          animation: map-scroll 20s linear infinite;
        }
      `}</style>

      {/* 
        Inner Sphere Surface with Map 
        This is a 2D masked element inside the 3D wireframe to simulate the planet surface.
        It sits "behind" the wireframe (z-index 0) or inside it.
      */}
      <div 
        className="absolute rounded-full overflow-hidden opacity-30"
        style={{
          width: size - 10, // Slightly smaller than wireframe
          height: size - 10,
          background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`
        }}
      >
         <div className="absolute inset-0 flex items-center animate-map-scroll" style={{ width: '500px' /* 2x map width */ }}>
            <svg 
              width="500" 
              height="250" 
              viewBox="0 0 500 250" 
              style={{ color: color }}
              className="w-full h-full"
            >
              {continents}
            </svg>
         </div>
      </div>

      {/* Rotating Wireframe Wrapper */}
      <div className="animate-globe-spin absolute inset-0 w-full h-full">
        
        {/* Meridians (Longitudes) */}
        {meridians.map((deg) => (
          <div
            key={`meridian-${deg}`}
            className="absolute inset-0 rounded-full border border-current box-border opacity-60"
            style={{
              borderColor: color,
              transform: `rotateY(${deg}deg)`,
            }}
          />
        ))}

        {/* Parallels (Latitudes) */}
        {parallels.map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const y = -sin * (size / 2);
          
          return (
            <div
              key={`parallel-${deg}`}
              className="absolute inset-0 rounded-full border border-current box-border opacity-60"
              style={{
                borderColor: color,
                transform: `translateY(${y}px) rotateX(90deg) scale(${cos})`, 
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
