export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-[var(--space-6)] pt-[var(--space-20)] bg-[var(--surface-page)] overflow-hidden">
      {/* Background Image Placeholder or Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--surface-page)] z-10"></div>
      
      {/* If we had an image, it would go here. For now, a subtle pattern or color */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-60 z-0"></div>

      <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h3 className="font-script text-5xl md:text-6xl text-[var(--action-primary)] mb-[var(--space-4)] font-normal transform -rotate-2">
          Viva a
        </h3>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em] leading-none mb-[var(--space-6)] shadow-black drop-shadow-lg">
          Experiência
        </h1>
        
        <div className="h-1 w-24 bg-[var(--action-primary)] mb-[var(--space-6)]"></div>

        <p className="font-sans text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-[var(--space-12)] leading-relaxed font-light tracking-wide">
          Compartilhando momentos inesquecíveis através dos bancos das nossas praças e do aroma do nosso café.
        </p>
        
        <div className="flex flex-col md:flex-row gap-[var(--space-4)]">
          <button className="bg-[var(--action-primary)] border-2 border-[var(--action-primary)] text-[var(--text-on-brand)] px-[var(--space-8)] py-[var(--space-4)] rounded-[var(--radius-sm)] text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[var(--action-primary-hover)] hover:border-[var(--action-primary-hover)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[var(--shadow-button-primary)]">
            Ver Cardápio
          </button>
          
          <button className="bg-transparent border-2 border-[var(--border-light)] text-[var(--text-on-dark)] px-[var(--space-8)] py-[var(--space-4)] rounded-[var(--radius-sm)] text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[var(--surface-subtle)] hover:border-[var(--surface-subtle)] hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm">
            Nossa História
          </button>
        </div>
      </div>
    </section>
  );
}
