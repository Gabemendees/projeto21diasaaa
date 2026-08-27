interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "O desafio funciona pra emagrecer ou pra ganhar massa?",
    answer:
      "Os dois! O treino é o mesmo nos dois casos, o que muda é só a quantidade de comida no prato, explicada no método do prato dentro do guia.",
  },
  {
    question: "Preciso de equipamento ou academia?",
    answer:
      "Não. Todos os exercícios têm versão para fazer em casa, usando só o peso do corpo (ou itens simples como galão d'água). Quem tem acesso à academia também encontra a versão com peso extra.",
  },
  {
    question: "Quanto tempo por dia eu preciso separar?",
    answer:
      "Os treinos duram cerca de 25 minutos, 3 vezes por semana. Não é preciso passar horas na academia.",
  },
  {
    question: "Vou precisar contar calorias ou pesar comida?",
    answer:
      "Não. O guia usa o Método do Prato, uma forma visual e simples de montar as refeições sem precisar contar nada.",
  },
  {
    question: "Qual a diferença entre o plano Básico e o Premium?",
    answer:
      "O Básico traz o treino completo de 21 dias e o método de alimentação. O Premium inclui tudo isso, mais treino detalhado dia a dia (casa e academia), 2 cardápios completos, receitas, planner de acompanhamento e guias extras.",
  },
  {
    question: "E se eu não gostar ou não me adaptar?",
    answer:
      "Você tem garantia de 7 dias: se não gostar, devolvemos seu dinheiro, sem burocracia.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">
            Perguntas <span className="text-action">Frequentes</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tire suas dúvidas antes de começar
          </p>
        </header>

        <dl className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {faqs.map((faq) => (
            <div key={faq.question} className="px-6 py-6">
              <dt className="text-base font-bold text-foreground sm:text-lg">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
