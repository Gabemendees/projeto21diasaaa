import { createFileRoute } from "@tanstack/react-router";

import { Bonuses } from "@/components/landing/bonuses";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pains } from "@/components/landing/pains";
import { Plans } from "@/components/landing/plans";
import { PriceAnchor } from "@/components/landing/price-anchor";

const TITLE = "Desafio 21 Dias — Treino de 25 min e Dieta Sem Restrição";
const DESCRIPTION =
  "Guia de treino + alimentação de 21 dias para emagrecer ou ganhar massa: 25 min, 3x por semana, sem contar calorias. A partir de R$ 9,90, pagamento único.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Pains />
      <Plans />
      <Bonuses />
      <PriceAnchor />
      <FinalCta />
    </main>
  );
}
