import { ImageOff } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

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

const AUTOPLAY_DELAY_MS = 5000;
const MANUAL_PAUSE_MS = 8000;

export function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY_MS, stopOnInteraction: false, stopOnMouseEnter: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [autoplay.current],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  /** Sincroniza a bolinha ativa sempre que o Embla muda de slide. */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  /** Pausa o autoplay por 8s após interação manual e depois retoma. */
  const pauseAutoplay = useCallback(() => {
    autoplay.current.stop();
    window.setTimeout(() => autoplay.current.play(), MANUAL_PAUSE_MS);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", pauseAutoplay);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", pauseAutoplay);
    };
  }, [emblaApi, onSelect, pauseAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      pauseAutoplay();
    },
    [emblaApi, pauseAutoplay],
  );

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

        <div ref={emblaRef} className="mt-12 cursor-grab overflow-hidden active:cursor-grabbing">
          <ul className="flex touch-pan-y select-none">
            {testimonials.map((item) => (
              <li key={item.name} className="flex min-w-0 flex-[0_0_100%] justify-center px-2">
                <div className="w-full max-w-md rounded-3xl border border-navy-foreground/15 bg-navy/60 p-4 shadow-xl">
                  <span className="inline-flex rounded-full bg-lime px-3 py-1 text-[11px] font-semibold tracking-wide text-lime-foreground uppercase">
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
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ver depoimento de ${item.name}`}
              aria-current={index === activeIndex}
              className={cn(
                "rounded-full transition-all duration-300",
                index === activeIndex
                  ? "h-3 w-6 bg-action"
                  : "h-2.5 w-2.5 bg-navy-foreground/25 hover:bg-navy-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
