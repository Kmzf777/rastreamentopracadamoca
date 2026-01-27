interface SectionProps {
  id?: string;
  decorative: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean; // alternate background
}

export default function Section({ id, decorative, title, children, className = "", alt = false }: SectionProps) {
  return (
    <section id={id} className={`py-[var(--space-20)] md:py-[var(--space-30)] px-[var(--space-6)] ${alt ? 'bg-[var(--surface-section)]' : 'bg-[var(--surface-page)]'} ${className}`}>
      <div className="container mx-auto max-w-[1400px] text-center flex flex-col items-center">
        <h3 className="font-script text-4xl md:text-5xl text-[var(--action-primary)] mb-[var(--space-2)] font-normal">
          {decorative}
        </h3>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em] mb-[var(--space-6)]">
          {title}
        </h2>
        
        <div className="h-0.5 w-16 bg-[var(--border-default)] mb-[var(--space-8)]"></div>
        
        <div className="font-sans text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
