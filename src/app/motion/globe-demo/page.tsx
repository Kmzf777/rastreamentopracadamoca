'use client';

import Globe from '@/components/Globe';

export default function GlobeDemoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#422620] overflow-hidden">
      <h1 className="text-white text-2xl mb-12 font-bold tracking-widest">3D GLOBE DEMO</h1>
      
      {/* Globe Instance */}
      <Globe size={400} color="rgba(200, 155, 92, 0.6)" />
      
      <p className="text-white/50 mt-12 text-sm">CSS-only Wireframe Implementation</p>
    </div>
  );
}
