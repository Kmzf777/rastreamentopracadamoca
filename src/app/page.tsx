import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface-page)] text-[var(--text-primary)] font-sans">
      <Header />
      
      <Hero />
      
      <Section id="sobre" decorative="Conheça a" title="Nossa História" alt>
        <p className="mb-6">
          O Praça da Moça Café nasceu de um sonho de conectar pessoas através do sabor autêntico do café brasileiro.
          Em cada xícara, servimos mais do que uma bebida: servimos tradição, carinho e momentos que ficam na memória.
        </p>
        <p>
          Nossa arquitetura e ambiente foram pensados para acolher, como um abraço em dias frios ou uma brisa suave em dias de sol.
          Valorizamos o produtor local e a sustentabilidade em cada etapa do nosso processo.
        </p>
      </Section>
      
      <Section id="cardapio" decorative="Sabores" title="Destaques do Menu">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)] mt-[var(--space-8)] w-full max-w-6xl mx-auto">
          <ProductCard 
            image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
            title="Café Especial"
            description="Grãos selecionados das melhores regiões do Brasil, torrados artesanalmente para extrair notas únicas de caramelo e chocolate."
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1461023058943-48dbf1399192?q=80&w=2070&auto=format&fit=crop"
            title="Confeitaria Fina"
            description="Doces e salgados preparados diariamente com ingredientes frescos, trazendo o equilíbrio perfeito entre sabor e textura."
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop"
            title="Drinks Autorais"
            description="Coquetéis refrescantes e criativos que harmonizam café com destilados premium e xaropes artesanais."
          />
        </div>
        <div className="mt-[var(--space-12)]">
          <button className="bg-transparent border-2 border-[var(--action-primary)] text-[var(--action-primary)] px-[var(--space-8)] py-[var(--space-4)] rounded-[var(--radius-sm)] text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[var(--action-primary)] hover:text-white transition-all duration-300 cursor-pointer">
            Ver Cardápio Completo
          </button>
        </div>
      </Section>
      
      <Section id="espaco" decorative="Nosso" title="Espaço" alt>
        <p className="mb-[var(--space-8)]">
          Um refúgio urbano desenhado para inspirar. Venha trabalhar, ler um livro ou simplesmente ver o tempo passar devagar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)] w-full max-w-5xl mx-auto">
          <div className="aspect-video bg-[var(--surface-card)] rounded-[var(--radius-lg)] overflow-hidden relative shadow-lg group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
          </div>
          <div className="aspect-video bg-[var(--surface-card)] rounded-[var(--radius-lg)] overflow-hidden relative shadow-lg group">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
          </div>
        </div>
      </Section>

      <Section id="contato" decorative="Fale" title="Conosco">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-12)] w-full max-w-4xl mx-auto text-left">
            <div className="bg-[var(--surface-card)] p-[var(--space-8)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
              <h4 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-[var(--space-6)] uppercase">Envie uma mensagem</h4>
              <form className="flex flex-col gap-[var(--space-4)]">
                <input type="text" placeholder="Seu Nome" className="bg-[var(--surface-subtle)] border border-[var(--border-default)] p-[var(--space-4)] rounded-[var(--radius-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none transition-colors" />
                <input type="email" placeholder="Seu E-mail" className="bg-[var(--surface-subtle)] border border-[var(--border-default)] p-[var(--space-4)] rounded-[var(--radius-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none transition-colors" />
                <textarea placeholder="Sua Mensagem" rows={4} className="bg-[var(--surface-subtle)] border border-[var(--border-default)] p-[var(--space-4)] rounded-[var(--radius-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none transition-colors resize-none"></textarea>
                <button type="button" className="bg-[var(--action-strong)] text-[var(--text-on-brand)] py-[var(--space-4)] px-[var(--space-6)] rounded-[var(--radius-sm)] font-bold uppercase tracking-widest hover:bg-[var(--action-strong-hover)] transition-colors shadow-[var(--shadow-button-primary)] mt-[var(--space-2)]">
                  Enviar
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center space-y-[var(--space-8)]">
               <div>
                  <h4 className="font-heading text-lg font-bold text-[var(--action-primary)] mb-[var(--space-2)] uppercase">Localização</h4>
                  <p className="text-[var(--text-secondary)] text-lg">Rua das Flores, 123<br/>Centro, Cidade - UF</p>
               </div>
               <div>
                  <h4 className="font-heading text-lg font-bold text-[var(--action-primary)] mb-[var(--space-2)] uppercase">Contato</h4>
                  <p className="text-[var(--text-secondary)] text-lg">(11) 99999-9999<br/>contato@pracadamoaca.com.br</p>
               </div>
               <div>
                  <h4 className="font-heading text-lg font-bold text-[var(--action-primary)] mb-[var(--space-2)] uppercase">Horários</h4>
                  <p className="text-[var(--text-secondary)] text-lg">Seg-Sex: 08h - 20h<br/>Sáb: 09h - 22h<br/>Dom: 09h - 18h</p>
               </div>
            </div>
         </div>
      </Section>
      
      <Footer />
    </main>
  );
}
