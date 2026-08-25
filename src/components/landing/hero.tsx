import { CtaButton } from "./cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-action/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-lime/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-lime sm:text-sm">
          🔥 + de 1.200 pessoas já começaram
        </span>

        <h1 className="font-display mt-6 text-4xl leading-[0.95] text-navy-foreground sm:text-6xl">
          Desafio 21 Dias:{" "}
          <span className="text-action">Transforme Seu Corpo Sem Academia Lotada e Sem Cortar Sua Comida Favorita</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
          Funciona tanto para{" "}
          <strong className="text-navy-foreground">emagrecer</strong> quanto{" "}
          para{" "}
          <strong className="text-navy-foreground">ganhar massa</strong>.{" "}
          25 minutos de treino, 3x por semana, sem contar calorias, sem pesar comida e sem
          cortar tudo o que você gosta.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <CtaButton href="#escolha-versao" className="w-full sm:w-auto">
            Quero Começar Agora
          </CtaButton>
          <p className="text-xs text-navy-foreground/60 sm:text-sm">
            Acesso imediato • Pagamento único • Garantia de 7 dias
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {[
            { icon: "💪", label: "Treinos de 25 min" },
            { icon: "✅", label: "Sem contar calorias" },
            { icon: "🔥", label: "3 semanas progressivas" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-navy-foreground/10 bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground/90"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
