"use client";

import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MENU_CONTENT } from "@/constants/content";
import { SITE_CONFIG, getWhatsAppUrl } from "@/constants/site";
import { SectionHeader, Button } from "@/components/ui";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Menu() {
  const { eyebrow, headline, subheadline, categories } = MENU_CONTENT;

  const allItems = categories.flatMap((c) => c.items);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: true })],
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      id="menu"
      className="section-padding bg-brand-bg relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </AnimateInView>

        {/* Carousel Container */}
        <div className="relative mt-12 group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-6 cursor-grab active:cursor-grabbing">
              {allItems.map((item) => {
                const itemWaUrl = getWhatsAppUrl(
                  `Halo ${SITE_CONFIG.name}, saya tertarik dengan "${item.name}".`,
                );
                return (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0"
                  >
                    <div className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm h-full">
                      {/* Image Area */}
                      <div className="relative aspect-[4/3] w-full bg-transparent overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                        {item.tag && (
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-bold uppercase bg-brand-primary text-white">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Content Area */}
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2 text-brand-text">
                          {item.name}
                        </h3>
                        <p className="text-xs text-brand-muted mb-6 line-clamp-2">
                          {item.description}
                        </p>
                        <Button
                          as="a"
                          href={itemWaUrl}
                          variant="outline"
                          size="sm"
                          className="w-full gap-2"
                        >
                          <MessageCircle size={14} /> Pesan Sekarang
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-brand-border hover:bg-brand-primary hover:text-white transition-all hidden md:block"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-brand-border hover:bg-brand-primary hover:text-white transition-all hidden md:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
