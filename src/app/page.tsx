"use client";

import { Hero } from "@/components/ui/hero";
import ProducerInfo from "@/components/ProducerInfo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero
        content={{
          title: "A ORIGEM DO",
          titleHighlight: "NOSSO CAFÉ",
          description:
            "Fique por dentro da origem do Café Praça da Moça, responsável pela qualidade de nossas bebidas.",
        }}
      />
      <ProducerInfo />
    </main>
  );
}
