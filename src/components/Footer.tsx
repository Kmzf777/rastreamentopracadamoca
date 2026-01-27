import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-section)] border-t border-[var(--border-subtle)] py-[var(--space-20)] px-[var(--space-6)]">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--space-12)] mb-[var(--space-12)]">
          <div className="md:col-span-1">
            <Link href="/" className="text-[var(--action-primary)] font-bold text-2xl font-heading uppercase tracking-widest mb-[var(--space-6)] block">
              Praça da Moça
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-[var(--space-6)]">
              Uma experiência sensorial única que celebra a cultura do café e o prazer de compartilhar momentos.
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--text-primary)] font-bold uppercase tracking-widest mb-[var(--space-6)] text-sm">Navegação</h4>
            <ul className="space-y-[var(--space-3)]">
              {['Início', 'Sobre', 'Cardápio', 'Espaço', 'Contato'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-[var(--text-secondary)] hover:text-[var(--action-primary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--text-primary)] font-bold uppercase tracking-widest mb-[var(--space-6)] text-sm">Contato</h4>
            <ul className="space-y-[var(--space-3)] text-[var(--text-secondary)] text-sm">
              <li>Rua das Flores, 123</li>
              <li>Centro, Cidade - UF</li>
              <li className="pt-[var(--space-2)]">(11) 99999-9999</li>
              <li>contato@pracadamoaca.com.br</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--text-primary)] font-bold uppercase tracking-widest mb-[var(--space-6)] text-sm">Horário</h4>
            <ul className="space-y-[var(--space-3)] text-[var(--text-secondary)] text-sm">
              <li>Segunda a Sexta: 08h - 20h</li>
              <li>Sábado: 09h - 22h</li>
              <li>Domingo: 09h - 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--border-subtle)] pt-[var(--space-8)] flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Praça da Moça Café. Todos os direitos reservados.</p>
          <div className="flex gap-[var(--space-6)] mt-[var(--space-4)] md:mt-0">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
