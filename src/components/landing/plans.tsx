import { useState, useCallback, memo } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import { CtaButton } from "./cta-button";
import { UpsellModal } from "./upsell-modal";

const basicItems = [
  "Treino completo de 21 dias, explicado passo a passo",
  "Método do Prato para alimentação sem dieta restritiva",
  "3 semanas progressivas (base, progressão e intensificação)",
  "Guia direto ao ponto, fácil de seguir do início ao fim",
];

const premiumItems = [
  "Tudo do Básico, mais:",
  "Treino detalhado dia a dia, versão casa E academia lado a lado",
  "2 cardápios completos (emagrecimento e ganho de massa), cada um com 3 dias de exemplo prontos",
  "6 receitas fáceis passo a passo",
  "Planner de acompanhamento dos 21 dias",
  "Guia de hidratação e sono",
  "Guia de manutenção pós-desafio",
  "FAQ exclusivo e mais aprofundado",
];

const basicNotIncludedItems = [
  "Treino detalhado dia a dia, versão casa E academia lado a lado",
  "2 cardápios completos (emagrecimento e ganho de massa)",
  "6 receitas fáceis passo a passo",
  "Planner de acompanhamento dos 21 dias",
  "Guia de hidratação e sono",
  "Guia de manutenção pós-desafio",
  "FAQ exclusivo e mais aprofundado",
];

const PREMIUM_DIRECT_URL = "https://pay.sunize.com.br/iQQmWWuk";
const PREMIUM_DISCOUNT_URL = "https://pay.sunize.com.br/bTViWRRk";
const BASIC_URL = "https://pay.sunize.com.br/ytcEyjZz";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  items: string[];
  notIncludedItems?: string[];
  featured?: boolean;
  valueNote?: string;
  priceBadge?: string;
  onBasicClick?: () => void;
}

const PlanCard = memo(function PlanCard({
  name,
  price,
  description,
  items,
  notIncludedItems,
  featured = false,
  valueNote,
  priceBadge,
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

      {valueNote && (
        <div className="mt-5 flex items-center gap-2">
          <span
            className={cn(
              "text-base font-bold tracking-widest uppercase",
              featured ? "text-navy-foreground" : "text-action",
            )}
          >
            De
          </span>

          <span className="text-base font-bold text-action">
            {valueNote}
          </span>

          <span
            className={cn(
              "text-[11px] font-bold tracking-widest uppercase",
              featured ? "text-navy-foreground/80" : "text-foreground/70",
            )}
          >
            por
          </span>
        </div>
      )}

      {priceBadge && (
        <span className="mt-5 inline-flex w-fit rounded-full bg-offer/15 px-3 py-1 text-[11px] font-bold tracking-wide text-offer uppercase">
          {priceBadge}
        </span>
      )}

      <div className={cn("flex flex-wrap items-end gap-3", valueNote ? "mt-2" : "mt-3")}>
        <p className="flex items-baseline gap-1">
          <span className="text-sm font-semibold">R$</span>
          <span className="font-display text-6xl leading-none text-action">{price}</span>
        </p>
        {valueNote && (
          <span className="mb-1 inline-flex items-center rounded-lg bg-action px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-lg shadow-action/40">
            50% off hoje
          </span>
        )}
      </div>
      <p
        className={cn(
          "mt-1 text-xs",
          featured ? "text-navy-foreground/60" : "text-muted-foreground",
        )}
      >
        pagamento único, sem mensalidade
      </p>


      <div className="mt-6 flex-1 space-y-5">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
              <span aria-hidden="true" className={featured ? "text-lime" : "text-action"}>
                {item.startsWith("Tudo") ? "" : "✅"}
              </span>
              {item}
            </li>
          ))}
        </ul>

        {notIncludedItems && notIncludedItems.length > 0 && (
          <ul className="space-y-3 border-t border-border/50 pt-5">
            {notIncludedItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground/60"
              >
                <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

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
      <section id="escolha-versao" className="bg-background px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-5xl">O Que Você Recebe</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Básico e Premium entregam o mesmo desafio. A Premium vai além.
            </p>
          </header>

          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-offer px-5 py-2 text-sm font-bold tracking-wide text-offer-foreground uppercase shadow-lg shadow-offer/30">
              🔥 Oferta por tempo limitado
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <PlanCard
              name="Básico"
              price="9,90"
              description="O essencial para começar hoje."
              items={basicItems}
              notIncludedItems={basicNotIncludedItems}
              priceBadge="Preço de lançamento"
              onBasicClick={handleBasicClick}
            />
            <PlanCard
              name="Premium"
              price="29,90"
              description="A experiência completa, dia por dia."
              valueNote="R$ 59,90"
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
