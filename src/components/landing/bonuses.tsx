const bonuses = [
  {
    icon: "🍽️",
    title: "2 Cardápios Completos",
    text: "Emagrecimento e ganho de massa, cada um com 3 dias de exemplo prontos para seguir.",
  },
  {
    icon: "🏋️",
    title: "Treino Casa e Academia",
    text: "Cada exercício com versão para fazer em casa ou na academia, lado a lado.",
  },
  {
    icon: "👩\u200d\u200d🍳",
    title: "6 Receitas Fáceis",
    text: "Receitas rápidas para cada momento do dia, do café da manhã ao pós-treino.",
  },
  {
    icon: "🗓️",
    title: "Planner de 21 Dias",
    text: "Acompanhe visualmente seu progresso dia a dia.",
  },
  {
    icon: "💧",
    title: "Guia de Hidratação e Sono",
    text: "Os dois fatores mais esquecidos, e mais importantes, para o resultado aparecer.",
  },
  {
    icon: "🏁",
    title: "Guia Pós-Desafio",
    text: "O que fazer depois do dia 21 para manter o resultado.",
  },
];

export function Bonuses() {
  return (
    <section className="bg-plum px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-lime/40 bg-lime/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-lime uppercase">
            Materiais Extras Premium
          </span>
          <h2 className="font-display mt-5 text-3xl text-navy-foreground sm:text-5xl">
            Só na Versão Premium
          </h2>
          <p className="mt-4 text-base text-navy-foreground/75 sm:text-lg">
            Seis materiais extras que transformam o desafio em um plano guiado do início ao fim.
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
