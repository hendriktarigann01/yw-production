/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / perusahaan */
  name: "YW Production Event Nusantara",

  /** Tagline singkat */
  tagline: "Partnership Your Event",

  /** Description untuk SEO */
  description:
    "YW Production — PT YWProduction Event Nusantara. Partner penyedia perlengkapan produksi event berkualitas untuk berbagai kebutuhan event berskala nasional.",

  /** URL canonical */
  url: "https://ywproduction.id",

  /** Path logo */
  logo: "/YW Production - Hitam.png",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "6283872779903",
    message:
      "Halo YW Production, saya tertarik dengan layanan perlengkapan produksi event.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/ywproduction.id/",
    facebook: "https://www.facebook.com/YW-Production-Event-Nusantara",
    youtube:
      "https://www.youtube.com/results?search_query=YW+Production+Event+Nusantara",
    tiktok: "https://www.tiktok.com/@ywproduction.id",
  },

  /** Google Maps Embed URL (Grand Wisata Bekasi) */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.8890681331443!2d107.03992320843471!3d-6.292862923893156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991b340d35af3%3A0x6daf2cbb2915df76!2sYW%20Production!5e0!3m2!1sid!2sid!4v1783669956137!5m2!1sid!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};
