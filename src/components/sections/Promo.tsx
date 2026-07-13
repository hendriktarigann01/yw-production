"use client";

import { CheckCircle2 } from "lucide-react";
import { PROMO_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * PROMO SECTION
 */
export function Promo() {
  const { eyebrow, headline, subheadline, groups, note } = PROMO_CONTENT;

  return (
    <section id="promo" className="section-padding bg-[#00344B] relative overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
            theme="dark"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {groups.map((group, i) => (
            <AnimateInView key={group.id} delay={0.1 * i} className="h-full">
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-[var(--radius-card)] p-6 border border-white/10 hover:border-brand-secondary/30 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col">
                {/* Group Title */}
                <div className="mb-4 flex-shrink-0">
                  <span className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
                    ✦ {group.title}
                  </span>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-3 flex-grow">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-secondary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-white/90 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Note */}
        <AnimateInView delay={0.3} className="mt-8 text-center">
          <p className="text-xs text-white/60">{note}</p>
        </AnimateInView>
      </div>
    </section>
  );
}
