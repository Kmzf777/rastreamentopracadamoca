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
            src="/p5.png"
            alt="Café Praça da Moça"
            width={500}
            height={500}
            className="object-contain max-w-[90%] md:max-w-md h-auto"
          />
        </div>
        <ProducerInfo />
      </main>
    </PageWithTransition>
  );
}
