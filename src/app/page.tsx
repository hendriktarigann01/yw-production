import { SITE_CONFIG } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Menu,
  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
  Branches,
  Projects,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      <HeroFrameBackground />
      <Navbar />
      <Hero />
      <Promo />
      <Menu />
      <Projects />
      <Facility />
      <Advantage />
      <Location />
      <Branches />
      <AboutUs />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data Organization ────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_CONFIG.name,
            image: SITE_CONFIG.url + "/YW Production - Hitam.png",
            url: SITE_CONFIG.url,
            telephone: "+6281234567890",
            logo: SITE_CONFIG.url + "/YW Production - Hitam.png",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Grand Wisata, Tambun Selatan, Kab. Bekasi, Jawa Barat 17510",
              addressLocality: "Bekasi",
              addressRegion: "Jawa Barat",
              postalCode: "17510",
              addressCountry: "ID",
            },
            sameAs: [
              "https://www.instagram.com/ywproduction.id/",
              "https://www.facebook.com/YW-Production-Event-Nusantara",
            ],
          }),
        }}
      />
    </main>
  );
}
