import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm h-[var(--space-20)] flex items-center px-[var(--space-6)] border-b border-[var(--border-subtle)] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center max-w-[1600px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-[var(--action-primary)] font-bold text-xl md:text-2xl font-heading uppercase tracking-widest hover:opacity-90 transition-opacity">
            Praça da Moça
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-[var(--space-8)]">
          {['Início', 'Sobre', 'Cardápio', 'Espaço', 'Contato'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-[var(--text-on-dark)] text-sm font-semibold hover:text-[var(--action-primary)] transition-colors duration-300 uppercase tracking-wide"
            >
              {item}
            </Link>
          ))}
          <button className="px-[var(--space-6)] py-[var(--space-3)] border border-[var(--border-light)] rounded-[var(--radius-sm)] text-[var(--text-on-dark)] text-sm font-semibold uppercase tracking-widest hover:bg-[var(--action-primary)] hover:border-[var(--action-primary)] transition-all duration-300 cursor-pointer">
            Reservar
          </button>
        </nav>
        
        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
