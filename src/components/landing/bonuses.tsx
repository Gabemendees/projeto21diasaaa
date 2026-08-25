const bonuses = [
  {
    icon: "🍽️",
    title: "Cardápios que funcionam pra emagrecer E pra ganhar massa",
    text: "Prontos para seguir, sem precisar pensar no que vai comer.",
  },
  {
    icon: "👩\u200d\u200d🍳",
    title: "Receitas que você realmente vai querer fazer",
    text: "Ingredientes simples, preparo rápido, sabor de verdade.",
  },
  {
    icon: "🗓️",
    title: "Marque cada dia como feito e veja sua sequência",
    text: "Planner visual que mantém seu ritmo sem precisar pensar.",
  },
  {
    icon: "💧",
    title: "Hidratação e sono que aceleram seu resultado",
    text: "Dois fatores que você controla hoje e que multiplicam seus esforços.",
  },
  {
    icon: "🏁",
    title: "Não pare depois do dia 21",
    text: "Guia prático de manutenção para o que veio para ficar.",
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
