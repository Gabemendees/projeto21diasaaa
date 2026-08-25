import { CtaButton } from "./cta-button";

const comparisons = [
  { icon: "🍔", label: "1 delivery de comida", price: "R$ 45,00" },
  { icon: "☕", label: "2 cafés na padaria", price: "R$ 32,00" },
  { icon: "🏋️", label: "1 mês de academia", price: "R$ 99,00" },
];

export function PriceAnchor() {
  return (
    <section className="bg-secondary px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">
            Um Investimento Menor Que Um Lanche
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            O Premium custa <strong className="text-foreground">R$ 29,90</strong> — menos que um
            delivery de comida no fim de semana. E não acaba em 30 minutos.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {comparisons.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <span aria-hidden="true" className="text-xl">
                  {item.icon}
                </span>
                {item.label}
              </span>
              <span className="text-sm font-bold text-foreground">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 text-center">
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Básico
            </p>
            <p className="font-display mt-2 text-4xl text-foreground">R$ 9,90</p>
            <p className="mt-2 text-sm text-muted-foreground">Treino + método do prato</p>
          </div>

          <div className="rounded-3xl border-2 border-lime bg-navy p-7 text-center text-navy-foreground shadow-xl">
            <p className="text-sm font-semibold tracking-wide text-lime uppercase">
              Premium 🔥 mais completo
            </p>
            <p className="font-display mt-2 text-5xl text-action">R$ 29,90</p>
            <p className="mt-2 text-sm text-navy-foreground/75">
              Tudo + 5 bônus exclusivos, dia por dia
            </p>
          </div>
        </div>

        <div className="mt-9 text-center">
          <p className="text-sm font-semibold text-foreground sm:text-base">
            ✅ Pagamento único. Sem mensalidade. Sem renovação automática.
          </p>
          <CtaButton href="#escolha-versao" className="mt-6 w-full sm:w-auto">Quero Garantir Meu Acesso</CtaButton>
        </div>
      </div>
    </section>
  );
}
