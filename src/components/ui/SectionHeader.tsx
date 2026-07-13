import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?:    string;
  headline:    string;
  subheadline?: string;
  align?:      "left" | "center" | "right";
  className?:  string;
  /** Warna eyebrow — override brand-secondary jika perlu */
  eyebrowColor?: string;
  theme?:      "light" | "dark";
}

/**
 * Komponen header section yang konsisten.
 * Digunakan di hampir semua section sebagai judul utama.
 */
export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align       = "center",
  className,
  eyebrowColor,
  theme       = "light",
}: SectionHeaderProps) {
  const alignClass = {
    left:   "text-left",
    center: "text-center mx-auto",
    right:  "text-right ml-auto",
  }[align];

  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-2xl mb-12 md:mb-16", alignClass, className)}>
      {eyebrow && (
        <p
          className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
          style={{ color: eyebrowColor ?? "var(--color-brand-secondary)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "font-display font-medium text-2xl md:text-4xl lg:text-5xl leading-tight mb-4",
        isDark ? "text-white" : "text-brand-text"
      )}>
        {headline}
      </h2>
      {subheadline && (
        <p
          className="text-sm md:text-base leading-relaxed"
          style={{ color: isDark ? "rgba(255, 255, 255, 0.75)" : "var(--color-brand-muted)" }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
