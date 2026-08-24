const pains = [
  "Você já começou uma dieta cheia de vontade e desistiu na primeira semana.",
  "Treino de 1 hora simplesmente não cabe na sua rotina.",
  "Dieta restritiva funciona por alguns dias — e depois vem o efeito sanfona.",
  "Você não sabe se deveria focar em emagrecer primeiro ou ganhar massa.",
  "Já tentou de tudo e não viu resultado rápido o suficiente para continuar.",
];

export function Pains() {
  return (
    <section className="bg-secondary px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">
            Se você já passou por isso, esse desafio é pra você
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            O problema nunca foi falta de força de vontade. Foi o método errado.
          </p>
        </header>

        <ul className="mt-10 space-y-3">
          {pains.map((pain) => (
            <li
              key={pain}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-action/15 text-xs font-bold text-action"
              >
                ✕
              </span>
              <p className="text-sm leading-relaxed text-foreground sm:text-base">{pain}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-2xl bg-navy px-6 py-5 text-center text-base font-semibold text-navy-foreground sm:text-lg">
          ✅ O Desafio 21 Dias foi feito exatamente para quem tem pouco tempo e já cansou de plano
          impossível de seguir.
        </p>
      </div>
    </section>
  );
}
