"use client";

import { useEffect } from "react";
import { CtaButton } from "./cta-button";

interface UpsellModalProps {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const premiumDifferentials = [
  "Treino detalhado dia a dia (casa e academia)",
  "2 cardápios completos (emagrecimento e ganho de massa)",
  "6 receitas fáceis + planner de 21 dias",
  "Guia de manutenção pós-desafio",
];

export function UpsellModal({ open, onAccept, onDecline }: UpsellModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upsell-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md animate-in zoom-in-95 fade-in duration-300">
        <div className="rounded-3xl border-2 border-lime bg-navy-deep p-7 shadow-2xl shadow-black/50 sm:p-8">
          {/* Emoji decoration */}
          <p className="text-center text-3xl" aria-hidden="true">
            ⚡
          </p>

          {/* Title */}
          <h2
            id="upsell-title"
            className="mt-3 text-center font-display text-2xl text-navy-foreground sm:text-3xl"
          >
            Espera! Antes de continuar...
          </h2>

          {/* Body text */}
          <p className="mt-4 text-center text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
            Por apenas um pouco mais, leve a versão <strong className="text-lime">PREMIUM</strong> do
            Desafio 21 Dias com <strong className="text-lime">50% de desconto</strong> — só agora,
            só nesta oferta.
          </p>

          {/* Price comparison */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="text-lg text-navy-foreground/50 line-through sm:text-xl">
              R$ 29,90
            </span>
            <span className="font-display text-4xl text-lime sm:text-5xl">R$ 14,90</span>
          </div>

          {/* Differentials list */}
          <ul className="mt-6 space-y-2">
            {premiumDifferentials.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-navy-foreground/90">
                <span className="mt-0.5 shrink-0 text-lime" aria-hidden="true">
                  ✅
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="mt-7 flex flex-col gap-3">
            <CtaButton
              onClick={onAccept}
              className="w-full"
              aria-label="Aceitar oferta do Premium com 50% de desconto"
            >
              Sim, quero o Premium com desconto
            </CtaButton>

            <button
              onClick={onDecline}
              className="w-full rounded-full px-6 py-3 text-sm font-semibold text-navy-foreground/50 transition-colors hover:text-navy-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-foreground/30"
              aria-label="Recusar oferta e continuar com o plano básico"
            >
              Não, quero continuar só com o básico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
