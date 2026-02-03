import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-[var(--space-12)] px-[var(--space-6)] text-center">
      <div className="container mx-auto max-w-[1400px] flex flex-col items-center gap-[var(--space-8)]">
        
        {/* Créditos de Desenvolvimento */}
        <div className="text-[var(--text-primary)] font-medium text-lg">
          Carinhosamente desenvolvido por <a href="https://cafecanastra.com" target="_blank" rel="noopener noreferrer" className="text-[var(--action-primary)] font-bold underline">Café Canastra</a> 🤎
        </div>

        {/* Informações Legais */}
        <div className="text-[var(--text-secondary)] text-sm space-y-[var(--space-2)] max-w-2xl">
          <p className="font-semibold text-[var(--text-primary)] mb-[var(--space-2)]">
            Produção rural, torrefação e rastreabilidade sob responsabilidade de:
          </p>
          <p>Razão Social: Boaventura Cafés Especiais Ltda.</p>
          <p>CNPJ 24.252.228/0001-37</p>
          <p>Rua Nivaldo Guerreiro Nunes, 701 - Distrito Industrial - Uberlândia/MG - Brasil - CEP 38.702-330</p>
          
          <div className="pt-[var(--space-4)]">
            <a 
              href="https://wa.me/553432262600" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--action-primary)] transition-colors"
            >
              Fale Conosco pelo whatsapp: <span className="font-bold">+55 34 3226-2600</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
