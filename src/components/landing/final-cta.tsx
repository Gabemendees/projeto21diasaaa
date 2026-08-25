import { CtaButton } from "./cta-button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-5 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-action/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-navy-foreground sm:text-5xl">
          Seus Próximos 21 Dias Começam Agora
        </h2>

        <p className="mt-5 text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
          Daqui a 21 dias você pode estar exatamente no mesmo lugar — ou pode estar diferente. A
          única coisa que muda entre os dois cenários é a decisão que você toma hoje. 🔥
        </p>

        <div className="mt-9">
          <CtaButton href="#escolha-versao" className="w-full sm:w-auto">Quero Meu Desafio Agora</CtaButton>
        </div>

        <div className="mt-10 rounded-3xl border border-lime/30 bg-lime/10 px-6 py-6">
          <p className="text-2xl" aria-hidden="true">
            🛡️
          </p>
          <p className="mt-2 text-base font-bold text-lime sm:text-lg">Garantia de 7 dias</p>
          <p className="mt-1 text-sm text-navy-foreground/75">
            Se não gostar, devolvemos seu dinheiro. Sem burocracia e sem perguntas.
          </p>
        </div>

        <p className="mt-10 text-xs text-navy-foreground/50">
          © 2026 Desafio 21 Dias. Este material é informativo e não substitui acompanhamento médico
          ou nutricional.
        </p>
      </div>
    </section>
  );
}
