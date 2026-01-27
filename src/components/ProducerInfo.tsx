import React from 'react';
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

export default function ProducerInfo() {
  return (
    <section className="pt-6 pb-[var(--space-20)] px-[var(--space-6)] bg-[var(--surface-section)]">
      <div className="max-w-5xl mx-auto space-y-[var(--space-20)]">
        
        {/* Sobre o Produtor */}
        <ScrollAnimation className="space-y-[var(--space-8)]">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Sobre o Produtor
          </h2>
          
          <div className="text-left space-y-[var(--space-4)] max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-[var(--action-primary)] tracking-wide">
              Silvio Boa Ventura
            </h3>
            <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
              Produtor de café nos Altos da Pratinha em Minas Gerais, produz café a 1200 metros de altitude, onde a maturação é lenta e tardia, agregando bebida ao fruto. Tem o filho como grande impulsador na produção de café com qualidade.
            </p>
          </div>
        </ScrollAnimation>

        {/* Sobre a Fazenda */}
        <ScrollAnimation className="space-y-[var(--space-8)]" delay={0.2}>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Sobre a Fazenda
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] max-w-3xl mx-auto text-left">
            <InfoItem label="Município" value="Pratinha" />
            <InfoItem label="Altitude Média" value="1300.00 metros" />
            <InfoItem label="Temperatura Média" value="26ºC" />
            <InfoItem label="Latitude" value="-19.812222" />
            <InfoItem label="Longitude" value="-46.334166" />
            <InfoItem label="Entidades" value="EXPOOCACER, COOPA" />
            <div className="md:col-span-2">
              <InfoItem label="Variedades" value="Catuaí vermelho IAC - 144, Catuaí amarelo IAC - 99" />
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
