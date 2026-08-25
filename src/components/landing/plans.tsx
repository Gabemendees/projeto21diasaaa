import { useState, useCallback, memo } from "react";
import { cn } from "@/lib/utils";

import { CtaButton } from "./cta-button";
import { UpsellModal } from "./upsell-modal";

const basicItems = [
  "Treino completo de 21 dias (3 semanas progressivas)",
  "Método do prato para a alimentação",
  "Guia de hábitos diários",
];

const premiumItems = [
  "Tudo que tem na versão Básica",
  "Treino detalhado dia a dia (casa e academia)",
  "2 cardápios completos (emagrecimento e ganho de massa)",
  "6 receitas fáceis",
  "Planner de acompanhamento de 21 dias",
  "Guia de hidratação e sono",
  "Guia de manutenção pós-desafio",
];

const PREMIUM_DIRECT_URL = "https://pay.sunize.com.br/iQQmWWuk";
const PREMIUM_DISCOUNT_URL = "https://pay.sunize.com.br/bTViWRRk";
const BASIC_URL = "https://pay.sunize.com.br/ytcEyjZz";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  items: string[];
  featured?: boolean;
  onBasicClick?: () => void;
}

// memoized — só re-renderiza se props mudarem
const PlanCard = memo(function PlanCard({
  name,
  price,
  description,
  items,
  featured = false,
  onBasicClick,
}: PlanCardProps) {
  const isBasic = name === "Básico";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl p-7 sm:p-8",
        featured
          ? "border-2 border-lime bg-navy text-navy-foreground shadow-xl"
          : "border border-border bg-card text-foreground",
      )}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-xs font-bold tracking-wide text-lime-foreground uppercase">
          Mais Escolhido
        </span>
      )}

      <h3 className="font-display text-2xl sm:text-3xl">{name}</h3>
      <p
        className={cn(
          "mt-1 text-sm",
          featured ? "text-navy-foreground/70" : "text-muted-foreground",
        )}
      >
        {description}
      </p>

      <p className="mt-5 flex items-baseline gap-1">
        <span className="text-sm font-semibold">R$</span>
        <span className="font-display text-5xl text-action">{price}</span>
      </p>
      <p className={cn("text-xs", featured ? "text-navy-foreground/60" : "text-muted-foreground")}>
        pagamento único, sem mensalidade
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
            <span aria-hidden="true" className={featured ? "text-lime" : "text-action"}>
              ✅
            </span>
            {item}
          </li>
        ))}
      </ul>

      {isBasic ? (
        <button
          type="button"
          onClick={onBasicClick}
          className={cn(
            "mt-8 w-full rounded-full border-2 border-action bg-transparent px-8 py-4 text-base font-bold tracking-wide text-action transition-all duration-200",
            "hover:bg-action hover:text-action-foreground",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-action/50 focus-visible:ring-offset-2",
            "active:scale-[0.98]",
          )}
        >
          Quero o Básico
        </button>
      ) : (
        <a
          href={PREMIUM_DIRECT_URL}
          className={cn(
            "mt-8 inline-flex items-center justify-center rounded-full bg-action px-8 py-4 text-base font-bold tracking-wide text-action-foreground shadow-lg shadow-action/25",
            "hover:-translate-y-0.5 hover:bg-action/90 hover:shadow-xl",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-action/50 focus-visible:ring-offset-2",
            "active:scale-[0.98] transition-all duration-200",
          )}
        >
          Quero Premium
        </a>
      )}
    </div>
  );
});

export function Plans() {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = useCallback(() => {
    setShowUpsell(true);
  }, []);

  const handleAcceptUpsell = useCallback(() => {
    window.location.href = PREMIUM_DISCOUNT_URL;
  }, []);

  const handleDeclineUpsell = useCallback(() => {
    window.location.href = BASIC_URL;
  }, []);

  const handleCloseUpsell = useCallback(() => {
    setShowUpsell(false);
  }, []);

  return (
    <>
      <section className="bg-background px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-5xl">Escolha Sua Versão</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              As duas versões entregam o desafio completo. A Premium leva você pela mão do primeiro ao
              último dia.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <PlanCard
              name="Básico"
              price="9,90"
              description="O essencial para começar hoje."
              items={basicItems}
              onBasicClick={handleBasicClick}
            />
            <PlanCard
              name="Premium"
              price="29,90"
              description="A experiência completa, dia por dia."
              items={premiumItems}
              featured
            />
          </div>
        </div>
      </section>

      <UpsellModal
        open={showUpsell}
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
        onClose={handleCloseUpsell}
      />
    </>
  );
}
