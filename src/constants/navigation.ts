/**
 * NAVIGATION CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Daftar menu navbar. `href` menggunakan anchor (#section-id).
 * Tidak semua section perlu masuk navbar — sesuaikan sesuai kebutuhan.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Produk", href: "#menu" },
  { label: "Layanan", href: "#promo" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Media", href: "#media" },
  { label: "Cabang", href: "#branches" },
  { label: "Lokasi", href: "#location" },
  { label: "FAQ", href: "#faq" },
];
