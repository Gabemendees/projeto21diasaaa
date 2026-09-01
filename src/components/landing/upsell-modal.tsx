"use client";

import { useEffect } from "react";
import { CtaButton } from "./cta-button";

interface UpsellModalProps {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

const premiumDifferentials = [
  "Treino detalhado dia a dia (casa e academia)",
  "2 cardápios completos (emagrecimento e ganho de massa)",
  "6 receitas fáceis",
  "Planner de acompanhamento de 21 dias",
  "Guia de hidratação e sono",
  "Guia de manutenção pós-desafio",
  "FAQ exclusivo e mais aprofundado",
];

export function UpsellModal({ open, onAccept, onDecline, onClose }: UpsellModalProps) {
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
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md animate-in zoom-in-95 fade-in duration-300">
        <div className="rounded-3xl border-2 border-lime bg-navy-deep p-7 shadow-2xl shadow-black/60 sm:p-8">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-navy-foreground/40 transition-colors hover:bg-white/10 hover:text-navy-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-foreground/30"
            aria-label="Fechar oferta"
          >
            ✕
          </button>

          <p className="text-center text-3xl" aria-hidden="true">
            ⚡
          </p>

          <h2
            id="upsell-title"
            className="mt-3 text-center font-display text-2xl text-navy-foreground sm:text-3xl"
          >
            Espera! Antes de continuar...
          </h2>

          <p className="mt-4 text-center text-sm leading-relaxed text-navy-foreground/80 sm:text-base">
            Por apenas um pouco mais, leve a versão{" "}
            <strong className="text-lime">PREMIUM</strong>{" "}
            do Desafio 21 Dias com{" "}
            <strong className="text-lime">50% de desconto</strong>. Só agora, só nesta oferta.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-lg text-navy-foreground/50 line-through sm:text-xl">
              R$ 29,90
            </span>
            <span className="font-display text-4xl text-lime sm:text-5xl">R$ 14,90</span>
            <span className="rounded-full bg-lime/20 px-2 py-0.5 text-xs font-semibold text-lime">
              à vista
            </span>
          </div>

          <ul className="mt-6 space-y-2">
            {premiumDifferentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-navy-foreground/90"
              >
                <span className="mt-0.5 shrink-0 text-lime" aria-hidden="true">
                  ✅
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3">
            <CtaButton
              onClick={onAccept}
              className="w-full"
              aria-label="Aceitar oferta do Premium com 50% de desconto"
            >
              Quero o Premium com Desconto
            </CtaButton>

            <button
              onClick={onDecline}
              className="w-full py-2 text-sm font-medium text-navy-foreground/50 underline-offset-4 transition-colors hover:text-navy-foreground/70 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-foreground/30"
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
