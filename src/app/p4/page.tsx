"use client";

import PageWithTransition from '@/components/PageWithTransition';
import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import ProducerInfo from "@/components/ProducerInfo";

export default function Home() {
  return (
    <PageWithTransition>
      <main className="min-h-screen bg-background text-foreground">
        <Hero
          content={{
            title: "A ORIGEM DO",
            titleHighlight: "NOSSO CAFÉ",
            description:
              "Fique por dentro da origem do Café Praça da Moça, responsável pela qualidade de nossas bebidas.",
          }}
        />
        <div className="w-full flex justify-center pb-8 pt-0 -mt-20 md:py-8 md:mt-0 relative z-10">
          <Image
            src="/3.png"
            alt="Café Praça da Moça"
            width={500}
            height={500}
            className="object-contain max-w-[90%] md:max-w-md h-auto"
          />
        </div>

        {/* Informações do Café */}
        <section className="py-12 px-6 bg-[var(--surface-card)]">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Praça da Moça – Café Especial Arara
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto bg-[var(--surface-section)] p-8 rounded-lg shadow-lg border border-[var(--border-color)]">
              <div className="space-y-4">
                <InfoItem label="Origem" value="Serra da Canastra – Minas Gerais – Brasil" />
                <InfoItem label="Produtor" value="Sílvio Alves Boaventura" />
                <InfoItem label="Fazenda" value="Divinéia" />
              </div>
              <div className="space-y-4">
                <InfoItem label="Variedade" value="Arara" />
                <InfoItem label="Tamanho do Grão" value="Peneira 17/18" />
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Perfil Sensorial
                  </span>
                  <span className="text-lg font-medium text-[var(--text-primary)]">
                    Notas de mel, chocolate e caramelo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProducerInfo variety="Arara" />
      </main>
    </PageWithTransition>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
        {label}
      </span>
      <span className="text-lg font-medium text-[var(--text-primary)]">
        {value}
      </span>
    </div>
  );
}
