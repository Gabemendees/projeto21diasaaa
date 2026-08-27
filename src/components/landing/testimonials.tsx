import { useCallback, useRef } from "react";

import marceloAsset from "@/assets/depoimento-marcelo.jpeg.asset.json";
import pedroAsset from "@/assets/depoimento-pedro.jpeg.asset.json";
import rebecaAsset from "@/assets/depoimento-rebeca.jpeg.asset.json";

interface Testimonial {
  /** Nome exibido abaixo do print (extraído do topo da conversa). */
  name: string;
  /** URL do print real, exibido sem edições. */
  image: string;
}

const testimonials: Testimonial[] = [
  { name: "Rebeca", image: rebecaAsset.url },
  { name: "Marcelo", image: marceloAsset.url },
  { name: "Pedro", image: pedroAsset.url },
];

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const dragState = useRef({ active: false, startX: 0, startScroll: 0 });

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.active) return;
    track.scrollLeft = dragState.current.startScroll - (event.clientX - dragState.current.startX);
  }, []);

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLUListElement>) => {
    const track = trackRef.current;
    dragState.current.active = false;
    if (track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  }, []);

  return (
    <section id="depoimentos" className="bg-navy-deep px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-navy-foreground sm:text-5xl">
            O Que Nossos <span className="text-action">Alunos Dizem</span>
          </h2>
          <p className="mt-4 text-base text-navy-foreground/75 sm:text-lg">
            Depoimentos reais de quem já passou pelo Desafio 21 Dias
          </p>
        </header>

        <ul
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="mt-12 -mx-5 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="w-[82%] shrink-0 snap-center rounded-3xl border border-navy-foreground/15 bg-navy/60 p-4 shadow-xl sm:w-[46%] lg:w-[31%]"
            >
              <span className="inline-flex rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-lime uppercase">
                Aluno Real
              </span>
              <img
                src={item.image}
                alt={`Print da conversa de ${item.name} sobre o Desafio 21 Dias`}
                loading="lazy"
                draggable={false}
                className="mt-3 w-full rounded-2xl border border-navy-foreground/10"
              />
              <p className="mt-4 text-center text-base font-bold text-navy-foreground">
                {item.name}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-center text-xs text-navy-foreground/60">
          Arraste para o lado para ver mais depoimentos
        </p>
      </div>
    </section>
  );
}
