import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ScrollAnimation from '@/components/ui/scroll-animation';

const FarmMap = dynamic(() => import('./FarmMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-[var(--surface-card)] animate-pulse rounded-lg flex items-center justify-center text-[var(--text-muted)] border-4 border-white shadow-xl">
      Carregando mapa...
    </div>
  ),
});

export default function ProducerInfo({ variety }: { variety?: string }) {
  return (
    <section className="pt-6 pb-[var(--space-20)] px-[var(--space-6)] bg-[var(--surface-section)]">
      <div className="max-w-5xl mx-auto space-y-[var(--space-20)]">
        
        {/* Sobre o Produtor */}
        <ScrollAnimation className="space-y-[var(--space-8)]">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Sobre o Produtor
          </h2>
          
          <div className="relative w-full max-w-md mx-auto h-96 rounded-lg overflow-hidden shadow-lg">
             <Image 
               src="/imagemsilvio.jpeg" 
               alt="Silvio Boaventura" 
               fill 
               className="object-cover"
             />
          </div>

          <div className="text-left space-y-[var(--space-4)] max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-[var(--action-primary)] tracking-wide">
              Silvio Boaventura
            </h3>
            <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
              Produtor de café especiais nos altos de Pratinha e Medeiros em Minas Gerais, produz café entre 1150 e 1300metros de altitude, uma das mais elevadas do Brasil. Nessas regiões a maturação é lenta e tardia, agregando qualidade na bebida do fruto.
            </p>
          </div>
        </ScrollAnimation>

        {/* Sobre a Fazenda */}
        <ScrollAnimation className="space-y-[var(--space-8)]" delay={0.2}>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Sobre a Fazenda
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-4xl mx-auto">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
               <Image 
                 src="/IMG_1896.jpg" 
                 alt="Fazenda Imagem 1" 
                 fill 
                 className="object-cover"
               />
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
               <Image 
                 src="/IMG_2477.jpg" 
                 alt="Fazenda Imagem 2" 
                 fill 
                 className="object-cover"
               />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] max-w-3xl mx-auto text-left">
            <InfoItem label="Origem" value="Serra da Canastra" />
            <InfoItem label="Município" value="Medeiros-MG" />
            <InfoItem label="Espécie" value="100% Arábica" />
            <InfoItem label="Altitude" value="1250m" />
            <InfoItem label="Temperatura Média" value="26ºC" />
            <InfoItem label="Latitude" value="-19.890280" />
            <InfoItem label="Longitude" value="-46.334943" />
            <InfoItem label="Entidades" value="EXPOOCACER, COOXUPÉ" />
            <div className="md:col-span-2">
              <InfoItem label="Variedades" value={variety || "Catuaí vermelho IAC - 144, Catuaí amarelo IAC - 99"} />
            </div>
          </div>
        </ScrollAnimation>

      </div>

      {/* Mapa da Fazenda */}
      <ScrollAnimation className="w-[95%] md:w-[80%] mx-auto mt-[var(--space-20)]" delay={0.4}>
        <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em] mb-[var(--space-8)]">
          Localização
        </h2>
        <FarmMap />
      </ScrollAnimation>

      <div className="max-w-5xl mx-auto space-y-[var(--space-20)] mt-[var(--space-20)]">
        
        {/* Responsabilidade Social */}
        <ScrollAnimation className="space-y-[var(--space-8)]" delay={0.2}>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Responsabilidade Social
          </h2>
          
          <div className="text-left space-y-[var(--space-4)] max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-[var(--action-primary)] tracking-wide">
              "Fair trade real: nas propriedades rurais parceiras o capital humano é levado a sério"
            </h3>
            <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
              Acreditamos que o café de excelência nasce do respeito e da valorização de quem o cultiva. Mantemos relações éticas e transparentes com nossos colaboradores e parceiros, garantindo condições de trabalho justas e seguras. Investimos no desenvolvimento da comunidade local e fomentamos a agricultura familiar, criando um ciclo virtuoso onde a qualidade do produto reflete a qualidade de vida de quem o produz.
            </p>
          </div>
        </ScrollAnimation>

        {/* Meio Ambiente */}
        <ScrollAnimation className="space-y-[var(--space-8)]" delay={0.4}>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Meio Ambiente
          </h2>
          
          <div className="text-left space-y-[var(--space-4)] max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-[var(--action-primary)] tracking-wide">
              Preservação que gera vida e qualidade
            </h3>
            <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
              A Fazenda Divinéia é um santuário de biodiversidade, mantendo preservados 152 hectares de mata nativa do Cerrado. Em seu território, protegem-se três nascentes de água cristalina, sendo que duas delas contribuem diretamente para a formação das nascentes do histórico Rio São Francisco (Velho Chico). Esse cuidado rigoroso com as águas e a flora local não apenas protege o ecossistema da Serra da Canastra, mas também cria o microclima perfeito para a produção de cafés únicos e sustentáveis.
            </p>
          </div>
        </ScrollAnimation>

      </div>

    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-[var(--space-1)]">
      <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
        {label}
      </span>
      <span className="text-lg font-medium text-[var(--text-primary)]">
        {value}
      </span>
    </div>
  );
}
