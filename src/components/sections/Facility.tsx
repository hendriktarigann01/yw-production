import {
  Users,
  Award,
  SquareParking,
  Wifi,
  Utensils,
  KeyRound,
  HelpCircle,
  Shield,
  Sun,
  Zap,
  Building2,
} from "lucide-react";
import { FACILITY_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";
import type { FacilityIcon } from "@/types";

const iconMap: Record<FacilityIcon, React.ElementType> = {
  users: Users,
  award: Award,
  parking: SquareParking,
  wifi: Wifi,
  utensils: Utensils,
  key: KeyRound,
  // Custom maps for Karindo
  shield: Shield,
  sun: Sun,
  activity: Zap,
  building: Building2,
  // Fallbacks for safety
  waves: HelpCircle,
  trees: HelpCircle,
  bus: HelpCircle,
  recycle: HelpCircle,
  droplets: HelpCircle,
  moon: HelpCircle,
};

/**
 * FACILITY SECTION
 */
export function Facility() {
  const { eyebrow, headline, subheadline, items } = FACILITY_CONTENT;

  return (
    <section id="facility" className="section-padding bg-[#00344B] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            theme="dark"
          />
        </AnimateInView>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? HelpCircle;
            return (
              <AnimateInView
                key={item.id}
                delay={0.05 * i}
                className="bg-white/[0.03] backdrop-blur-sm rounded-[var(--radius-card)] p-5 border border-white/10 group hover:border-brand-secondary/30 hover:bg-white/[0.06] hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4 group-hover:bg-brand-secondary/25 transition-colors duration-300 text-brand-secondary border border-brand-secondary/10">
                  <Icon size={20} aria-hidden="true" />
                </div>

                {/* Text */}
                <h3 className="text-sm font-bold text-white mb-1 leading-snug">
                  {item.label}
                </h3>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
