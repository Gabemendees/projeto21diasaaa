const steps = [
  {
    number: "01",
    icon: "🎯",
    title: "Escolha seu objetivo",
    text: "Emagrecer ou ganhar massa. O desafio se adapta ao que você quer, sem precisar mudar de plano no meio do caminho.",
  },
  {
    number: "02",
    icon: "💪",
    title: "Treine 25 min, 3x por semana",
    text: "Treinos curtos e progressivos que cabem na rotina real. Pode fazer em casa ou na academia.",
  },
  {
    number: "03",
    icon: "🍽️",
    title: "Use o método do prato",
    text: "Monte seu prato de forma simples, sem contar calorias, sem pesar comida e sem cortar tudo o que você gosta.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">
            Como o Desafio Funciona
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Três passos simples. Nada de planilha complicada nem rotina impossível de manter.
          </p>
        </header>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-display absolute -top-4 right-6 text-4xl text-action/25 sm:text-5xl">
                {step.number}
              </span>
              <span aria-hidden="true" className="text-3xl">
                {step.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-3xl border border-lime/30 bg-lime/10 px-6 py-6 text-center">
          <p className="mt-1 text-sm font-semibold text-navy sm:text-base">
            Guia estruturado com índice, passo a passo de execução dos exercícios e perguntas frequentes, nada de instrução solta ou genérica.
          </p>
        </div>
      </div>
    </section>
  );
}
