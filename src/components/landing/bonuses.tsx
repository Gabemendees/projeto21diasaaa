const bonuses = [
  {
    icon: "🍽️",
    title: "2 Cardápios Completos",
    text: "Um para emagrecimento e um para ganho de massa, prontos para seguir.",
  },
  {
    icon: "👩‍🍳",
    title: "6 Receitas Fáceis",
    text: "Refeições rápidas, com ingredientes simples e sabor de comida de verdade.",
  },
  {
    icon: "🗓️",
    title: "Planner de 21 Dias",
    text: "Marque cada treino e cada dia concluído para não perder o ritmo.",
  },
  {
    icon: "💧",
    title: "Guia de Hidratação e Sono",
    text: "Os dois fatores que mais aceleram (ou travam) o seu resultado.",
  },
  {
    icon: "🏁",
    title: "Guia de Manutenção Pós-Desafio",
    text: "O que fazer no dia 22 para manter o que você conquistou.",
  },
];

export function Bonuses() {
  return (
    <section className="bg-plum px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-lime uppercase">
            Bônus Exclusivos
          </span>
          <h2 className="font-display mt-5 text-3xl text-navy-foreground sm:text-5xl">
            Só na Versão Premium
          </h2>
          <p className="mt-4 text-base text-navy-foreground/75 sm:text-lg">
            Cinco materiais extras que transformam o desafio em um plano guiado do início ao fim.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <li
              key={bonus.title}
              className="rounded-3xl border border-navy-foreground/15 bg-navy-deep/50 p-6 backdrop-blur-sm"
            >
              <span aria-hidden="true" className="text-3xl">
                {bonus.icon}
              </span>
              <h3 className="mt-3 text-lg font-bold text-navy-foreground">{bonus.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{bonus.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
