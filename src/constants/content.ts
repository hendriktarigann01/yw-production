import type {
  HeroContent,
  PromoContent,
  MenuContent,
  BranchContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

export const HERO_CONTENT: HeroContent = {
  eyebrow: "Premium Event Production Services",
  headline: "Partnership Your Event dengan Perlengkapan Berkualitas",
  subheadline:
    "Partner penyedia perlengkapan produksi event berskala nasional, didukung tim berpengalaman sejak 2003 dan teknologi peralatan terupdate.",
  description:
    "YW Production menyediakan solusi teknis panggung terintegrasi yang efisien, aman, dan berkinerja tinggi untuk kesuksesan event-event terbaik di Indonesia.",
  badge: "Founder Pengalaman Sejak 2003",
  cta: {
    primary: "Konsultasikan Event Anda",
    secondary: "Lihat Produk & Peralatan",
  },
  totalFrames: 97,
  frameDir: "/frame-yw-parallax",
  frameName: "frame_",
  slides: [
    {
      id: "slide-planning",
      headline: "Collaborative Event Planning",
      description:
        "Kami berkolaborasi sejak awal pemetaan teknis, konsultasi anggaran produksi, pembuatan layout visual, hingga eksekusi matang di lapangan.",
    },
    {
      id: "slide-equipment",
      headline: "Up-to-Date Supporting Equipment",
      description:
        "Setiap rigging, stage, audio system, lighting, dan visual LED display terkelola dengan standar kelayakan tinggi dan siap mendukung event Anda.",
    },
    {
      id: "slide-execution",
      headline: "Eksekusi Profesional & Aman",
      description:
        "Didukung tim profesional responsif yang terlatih bekerja di bawah tekanan untuk memberikan performa event yang optimal tanpa kompromi.",
    },
  ],
};

// ── PROMO (WHAT WE DO) ───────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "What We Do",
  headline: "Layanan Produksi Event YW Production",
  subheadline:
    "Kami menawarkan ekosistem layanan lengkap untuk memenuhi seluruh kebutuhan teknis dan estetika panggung event Anda.",
  note: "*Seluruh pengerjaan rigging dan kelistrikan dihitung beban (load calculation) demi keamanan total kru dan pengunjung event.",
  groups: [
    {
      id: "production-services",
      title: "Production Services",
      items: [
        "Solusi produksi teknis lengkap untuk event korporat, konser, festival, dan pameran",
        "Penyediaan rigging truss kokoh dan panggung (stage level) modular berbagai ukuran",
        "Sistem tata pencahayaan panggung (lighting) dramatis dan presisi berteknologi tinggi",
        "Sistem tata suara (sound system) jernih berdefinisi tinggi untuk performa audio optimal",
      ],
    },
    {
      id: "supporting-equipment",
      title: "Supporting Equipment",
      items: [
        "Sewa LED Display Curved fleksibel serta panel LED Indoor/Outdoor resolusi tinggi",
        "Sewa LCD Display, Digital Kiosk Box, Standing Signage, dan Smart TV berbagai ukuran",
        "Perlengkapan rapat modern: screen projector, projector, interpreter, dan mic delegate",
        "Dekorasi event lengkap: backdrop pameran, curtain hitam, sofa VIP, dan dekorasi bunga",
      ],
    },
    {
      id: "collaborative-planning",
      title: "Collaborative Event Planning",
      items: [
        "Keterlibatan proaktif dalam tahap pemetaan kebutuhan teknis event Anda",
        "Konsultasi perhitungan anggaran produksi agar efisien tanpa mengorbankan kualitas",
        "Pembuatan rancangan layout panggung (tata letak) untuk visualisasi pengerjaan",
        "Koordinasi langsung di lapangan guna mengawal jalannya event dari awal hingga akhir",
      ],
    },
  ],
};

// ── MENU (PRODUCT CATALOG) ───────────────────────────────────────
export const MENU_CONTENT: MenuContent = {
  eyebrow: "Katalog Perlengkapan",
  headline: "Peralatan Produksi & Pendukung Panggung",
  subheadline:
    "YW Production menyediakan perlengkapan produksi event berkualitas lengkap dari lighting, rigging, visual display, hingga control system.",
  categories: [
    {
      id: "lighting-equipment",
      name: "Lighting Equipment",
      items: [
        {
          id: "lighting-sys",
          name: "Professional Lighting System",
          price: "Hubungi Sales",
          description:
            "Beam Light, Par LED, Wall Washer, COB Par, Fresnel, Spot Light, Panel Light, Mini Brute, Strobe RGB, LED Moving Head, hingga Follow Spot untuk pencahayaan panggung dramatis.",
          image: "/products/product-1.webp",
        },
      ],
    },
    {
      id: "event-equipment",
      name: "Event Equipment",
      items: [
        {
          id: "event-stage",
          name: "Rigging, Truss & Stage Modular",
          price: "Hubungi Sales",
          description:
            "Konstruksi Rigging truss kokoh, Corner Rigging, Takel, Stage Level modular, tangga, L-Trolley, hingga Speed Bump Cable Protection.",
          image: "/products/product-2.webp",
        },
      ],
    },
    {
      id: "decor-furniture",
      name: "Decoration & Furniture",
      items: [
        {
          id: "decor-furn",
          name: "Backdrop, Sofa VIP & Furniture",
          price: "Hubungi Sales",
          description:
            "Pilihan sofa VIP eksklusif, Kursi Futura (dengan cover), Kursi VIP, Kursi Kayu, Meja Kayu, Podium, Black Curtain (tirai hitam), dan dekorasi bunga panggung.",
          image: "/products/product-3.webp",
        },
      ],
    },
    {
      id: "meeting-equipment",
      name: "Meeting Equipment",
      items: [
        {
          id: "meeting-sys",
          name: "Projector & Meeting System",
          price: "Hubungi Sales",
          description:
            "Screen Projector, Projector lumens tinggi, Wireless Mic, Mic Delegate, Interpreter nirkabel, Perfect Cue nirkabel, Quickshare, dan Camera Conference.",
          image: "/products/product-4.webp",
        },
      ],
    },
    {
      id: "led-display",
      name: "LED Display",
      items: [
        {
          id: "led-disp-sys",
          name: "LED Curved & Cabinet Display",
          price: "Hubungi Sales",
          description:
            "LED Curved (P2.6 / P2.9), Indoor LED Displays (P1.5 - P3.9), Outdoor LED, Transparent LED, Rubber LED, LED Table, LED Floor, LED Cube, LED Sphere, LED Poster, LED Stand, hingga LED Banner.",
          image: "/products/product-5.webp",
        },
      ],
    },
    {
      id: "lcd-display",
      name: "LCD Display",
      items: [
        {
          id: "lcd-disp-sys",
          name: "Digital Kiosk & Smart TV",
          price: "Hubungi Sales",
          description:
            'Digital Kiosk Box 43"/55", Digital Stand Floor 22"-55", Standing Brochure 22", Smart TV 32"-100", Interactive Whiteboard 55"-98", dan Videowall (LFD).',
          image: "/products/product-6.webp",
        },
      ],
    },
    {
      id: "system-processor",
      name: "System / Processor",
      items: [
        {
          id: "sys-proc-ctrl",
          name: "Video Processor & Control System",
          price: "Hubungi Sales",
          description:
            "Radar Lidar, TU20 Pro, MCTRL 660 Pro, RGB Link, Magnimage EC80, VDWALL A65, VDWALL LVP615, VDWALL D6000, VX16S, VX600, VX2000 Pro, dan Novastar H5.",
          image: "/products/product-7.webp",
        },
      ],
    },
  ],
};

// ── BRANCHES ─────────────────────────────────────────────────────
export const BRANCHES_CONTENT: BranchContent = {
  eyebrow: "Area Layanan",
  headline: "Jangkauan Operasional Produksi",
  subheadline:
    "YW Production melayani kebutuhan produksi teknis panggung dan penyewaan alat untuk event di seluruh regional Indonesia.",
  branches: [
    {
      id: "br-jabodetabek",
      name: "Operasional Jabodetabek (HQ)",
      address: "Grand Wisata, Tambun Selatan, Kab. Bekasi, Jawa Barat 17510",
      phone: "+62 812-3456-7890",
      hours:
        "Buka 24 Jam untuk dukungan operasional, instalasi panggung, dan gladi resik event.",
    },
    {
      id: "br-nasional",
      name: "Layanan Event Skala Nasional",
      address:
        "Menjangkau seluruh kota besar di Jawa, Bali, Sumatera, Kalimantan, dan Sulawesi untuk event pameran, rakornas, dan konser.",
      phone: "+62 812-3456-7890",
      hours:
        "09.00 – 17.00 (Senin - Sabtu untuk konsultasi perencanaan & anggaran produksi).",
    },
  ],
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow: "Kantor Pusat",
  headline: "Head Office YW Production",
  subheadline: "PT YWProduction Event Nusantara",
  description:
    "Berpusat di Grand Wisata Bekasi, kantor pusat kami mengoordinasikan seluruh distribusi perlengkapan event, manajemen tim perencana kolaboratif, perawatan berkala unit hardware, serta pemantauan keselamatan instalasi panggung di lapangan demi pelayanan event kelas satu.",
  address: "Grand Wisata, Tambun Selatan, Kab. Bekasi, Jawa Barat 17510",
  phone: "+62 812-3456-7890",
  hours: {
    "Senin - Jumat": "09.00 – 17.00",
    Sabtu: "09.00 – 15.00",
    "Support Event": "24 Jam / 7 Hari",
  },
};

// ── FACILITY (WHY CHOOSE US / VALUES) ────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow: "Mengapa Memilih Kami?",
  headline: "Kekuatan Karakter YW Production",
  subheadline:
    "Kekuatan kami bukan sekadar soal alat dan teknis, melainkan nilai-nilai komitmen yang kami bawa dalam setiap kolaborasi kerja sama.",
  items: [
    {
      id: "experience-counts",
      label: "Experience That Counts",
      description:
        "Berbekal pengalaman founder lebih dari 22 tahun di bidang event dan produksi sejak 2003, kami memahami detail kebutuhan teknis di berbagai sektor.",
      icon: "award",
    },
    {
      id: "professional-team",
      label: "Professional & Reliable Team",
      description:
        "Tenaga profesional responsif, terlatih, dan terbiasa bekerja di bawah deadline ketat untuk memastikan event berjalan lancar tanpa kendala.",
      icon: "users",
    },
    {
      id: "up-to-date-eq",
      label: "Up-to-Date Equipment",
      description:
        "Menggunakan perlengkapan produksi berkualitas tinggi yang disesuaikan dengan perkembangan teknologi terbaru dan standar keselamatan industri.",
      icon: "shield",
    },
    {
      id: "collaborative-efficiency",
      label: "Collaborative Efficiency",
      description:
        "Menjunjung tinggi efisiensi kerja dan kemitraan kolaboratif guna menjamin hasil produksi panggung optimal tanpa pemborosan waktu dan biaya.",
      icon: "activity",
    },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow: "Kredibilitas Kami",
  headline: "Mitra Produksi Suksesnya Event Anda",
  subheadline:
    "Kami dipercaya oleh kementerian Republik Indonesia, korporat swasta nasional, stasiun TV, dan komunitas besar untuk menghadirkan visual dan audio panggung terbaik.",
  items: [
    {
      id: "adv-exp",
      number: "01",
      title: "22+ Tahun Pengalaman",
      description:
        "Pendiri kami aktif mengelola teknis produksi event panggung sejak tahun 2003, memberikan pemahaman mendalam tentang logistik event.",
    },
    {
      id: "adv-safety",
      number: "02",
      title: "Keamanan Struktur Rigging",
      description:
        "Setiap panggung, rigging truss, dan penempatan lighting dipasang dengan standar keamanan ketat untuk menjamin keselamatan selama acara.",
    },
    {
      id: "adv-planning",
      number: "03",
      title: "Perencanaan Kolaboratif",
      description:
        "Kami siap berdiskusi menyusun estimasi anggaran alat, layout panggung 2D/3D, dan rundown teknis agar hasil produksi maksimal.",
    },
    {
      id: "adv-trust",
      number: "04",
      title: "Dipercaya Lintas Industri",
      description:
        "Mitra terpercaya yang sukses menyelenggarakan forum pemerintahan, pameran internasional, seminar bisnis, hingga siaran musik live televisi.",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Tentang Kami",
  headline: "YW Production",
  subheadline: "PT YWProduction Event Nusantara",
  description:
    "YW Production adalah partner penyedia perlengkapan produksi event berkualitas untuk berbagai kebutuhan event berskala nasional. Berdiri pada tahun 2024, dengan founder yang telah berpengalaman luas di bidang event dan produksi sejak tahun 2003. Kami menyediakan layanan lengkap meliputi rigging, stage, audio system, lighting, backdrop, furniture, decor, LED display, digital signage, hingga projector dan screen. Dengan dukungan tim berpengalaman dan teknologi up-to-date, kami berkomitmen memberikan solusi teknis terbaik yang efisien, aman, dan menghasilkan performa optimal di setiap event.",
  stats: [
    { id: "stat-exp", value: "22+", label: "Thn Pengalaman Founder" },
    { id: "stat-established", value: "2024", label: "Tahun Berdiri" },
    { id: "stat-projects", value: "20+", label: "Event Skala Besar Resmi" },
    { id: "stat-equipment", value: "8+", label: "Kategori Layanan Alat" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow: "FAQ",
  headline: "Pertanyaan Umum",
  items: [
    {
      id: "faq-experience",
      question: "Sejak kapan YW Production beroperasi di industri event?",
      answer:
        "PT YWProduction Event Nusantara resmi berdiri pada tahun 2024. Namun, founder dan tim inti kami telah berpengalaman menangani teknis produksi event panggung sejak tahun 2003 (lebih dari 22 tahun).",
    },
    {
      id: "faq-services",
      question: "Layanan apa saja yang ditawarkan oleh YW Production?",
      answer:
        "Kami menawarkan solusi produksi event komprehensif (rigging, stage level, sound system, lighting panggung, backdrop, dan dekorasi bunga) serta peralatan multimedia pendukung (LED Curved, LCD Display, Digital Kiosk, projector, screen, wireless interpreter, dan mic delegate).",
    },
    {
      id: "faq-planning",
      question:
        "Apakah YW Production bisa membantu perencanaan layout panggung?",
      answer:
        "Tentu. Kami menawarkan Collaborative Event Planning di mana kami ikut membantu memetakan kebutuhan peralatan, merancang layout tata letak panggung (2D/3D), dan mencocokkan spesifikasi alat dengan anggaran produksi Anda.",
    },
    {
      id: "faq-area",
      question: "Di mana saja jangkauan wilayah operasional YW Production?",
      answer:
        "Meskipun kantor pusat kami terletak di Grand Wisata Bekasi (Jabodetabek), kami melayani penyewaan alat dan tim operator produksi event untuk dikirim ke seluruh wilayah di Indonesia demi mendukung kesuksesan event berskala nasional.",
    },
    {
      id: "faq-crew",
      question: "Apakah penyewaan alat sudah termasuk operator standby?",
      answer:
        "Ya, seluruh penyewaan alat di YW Production sudah termasuk tim teknisi instalasi profesional yang merakit struktur dengan aman, serta operator standby untuk mengawal kelancaran teknis suara, lampu, dan visual selama acara berlangsung.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow: "Siap Berkolaborasi?",
  headline: "Partnership Your Event",
  subheadline:
    "Hubungi kami sekarang untuk berkonsultasi mengenai kebutuhan teknis, rancangan layout panggung, atau pengajuan penawaran anggaran produksi event Anda.",
  cta: {
    primary: "Hubungi WhatsApp Resmi",
    secondary: "Lihat Portofolio Event",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:
    "PT YWProduction Event Nusantara. Partner penyedia perlengkapan produksi event berkualitas untuk berbagai kebutuhan event berskala nasional.",
  copyright: `Copyright 2026 © PT YWProduction Event Nusantara. All rights reserved.`,
  links: [
    { label: "Produk", href: "#menu" },
    { label: "Layanan", href: "#promo" },
    { label: "Keunggulan", href: "#facility" },
    { label: "Liputan Media", href: "#media" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Lokasi HQ", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ],
};

// ── PROJECTS CONTENT (PORTFOLIO EVENTS) ──────────────────────────
export const PROJECTS_CONTENT = {
  eyebrow: "Portofolio Kami",
  headline: "Karya Produksi & Dukungan Event",
  subheadline:
    "Berikut adalah daftar event berskala nasional dan internasional yang sukses diselenggarakan dengan dukungan perlengkapan dan tim teknis YW Production.",
  projects: [
    {
      id: "proj-pemilu",
      title: "Rakornas Penyelenggara Pemilu 2023",
      description:
        "Forum koordinasi nasional antara penyelenggara pemilu di seluruh Indonesia dalam rangka mempersiapkan penyelenggaraan Pemilu 2024 yang transparan, adil, dan berintegritas.",
      equipment: "Sound System, Genset, Lighting, dan LED Display",
      location: "Hotel Grand Sahid Jaya, Jakarta",
      date: "7 - 9 November 2023",
    },
    {
      id: "proj-investasi",
      title: "Rakornas Investasi",
      description:
        "Forum koordinasi nasional yang mempertemukan pemangku kepentingan di bidang penanaman modal, guna memperkuat sinergi pusat dan daerah dalam menciptakan iklim investasi kondusif.",
      equipment: "Sound System, Lighting, dan LED Display",
      location: "Balai Kartini & Ritz Carlton Jakarta",
      date: "7 Desember 2023",
    },
    {
      id: "proj-rampai",
      title: "Rakernas II Festival Rampai Nusantara",
      description:
        "Agenda nasional pengurus Rampai Nusantara se-Indonesia. Acara ini dikonsep, dikelola, dan dieksekusi secara penuh oleh YW Production termasuk seluruh event equipment.",
      equipment:
        "Kebutuhan produksi & seluruh event equipment (full konsep, kelola, eksekusi)",
      location: "Ancol, Jakarta",
      date: "26 - 27 Agustus 2024",
    },
    {
      id: "proj-jipremium",
      title: "Jakarta International Premium Product Fair",
      description:
        "Ajang pameran produk premium berskala internasional yang mempertemukan brand-brand unggulan global. Didukung oleh YW Production selama dua tahun berturut-turut.",
      equipment: "LED, Sound System, dan Lighting",
      location: "JCC Hall A & B, Jakarta",
      date: "Tahun 2024 dan 2025",
    },
    {
      id: "proj-asset",
      title: "The Asset Manager",
      description:
        "Acara tahunan pengelola aset negara, swasta, dan startup. Menghadirkan diskusi panel, workshop, dan pameran teknologi pengelolaan aset yang transparan.",
      equipment: "Sound System, Lighting, Genset, dan LED Display",
      location: "Gedung A.A. Maramis, Jakarta",
      date: "8 Oktober 2024",
    },
    {
      id: "proj-antv",
      title: "Goyang Joget ANTV",
      description:
        "Event hiburan tur musik luar ruangan spektakuler di 4 kota. YW Production mendukung visual memukau dengan sebaran layar LED dan Smart TV di panggung utama.",
      equipment: "LED Display dan Smart TV",
      location: "Palembang, Yogya, Cirebon, Majalengka",
      date: "Tahun 2024",
    },
    {
      id: "proj-yunnan",
      title: "Yunnan Event",
      description:
        "Ajang promosi pariwisata, budaya, dan sesi bisnis Provinsi Yunnan (Tiongkok) di Indonesia. Menghadirkan pameran produk dan pertunjukan seni budaya.",
      equipment: "Sound System dan Lighting",
      location: "Ayana Mid Plaza Hotel, Jakarta",
      date: "15 Mei 2025",
    },
    {
      id: "proj-seaisi",
      title: "SEAISI 2025 Conference",
      description:
        "Konferensi industri besi dan baja terbesar di Asia Tenggara yang mempertemukan pakar, produsen, dan regulator global untuk inovasi material baja berkelanjutan.",
      equipment: "LED Display, Sound System, Lighting, serta Event Equipment",
      location: "JCC Cendrawasih Hall, Jakarta",
      date: "21–24 Mei 2025",
    },
    {
      id: "proj-upnvj",
      title: "PKKMB UPNVJ",
      description:
        "Acara pengenalan kehidupan kampus mahasiswa baru UPN Veteran Jakarta di gedung indoor berkapasitas ribuan orang, didukung visual screen tajam.",
      equipment: "LED Display",
      location: "Tennis Indoor Senayan, Jakarta",
      date: "11 - 12 Agustus 2025",
    },
    {
      id: "proj-ekraf",
      title: "Penandatangan MoU EKRAF X IVENDO",
      description:
        "Kolaborasi strategis antara Dewan Ekonomi Kreatif dan Asosiasi Event (IVENDO) untuk memperkuat iklim industri ekonomi kreatif dan pameran panggung nasional.",
      equipment: "Stage, Sound System, Lighting, dan LED Display",
      location: "Gedung Film Pesona Indonesia, Jakarta",
      date: "14 Agustus 2025",
    },
    {
      id: "proj-thailand",
      title: "Thailand Fair",
      description:
        "Pameran kuliner, pariwisata, dan pertunjukan khas Thailand. Menghadirkan area stand interaktif dengan tata suara jernih dan monitor visual premium.",
      equipment: "LED Display, Smart TV, dan Sound System",
      location: "JCC, Jakarta",
      date: "8 - 14 September 2025",
    },
    {
      id: "proj-hospital",
      title: "Hospital Expo",
      description:
        "Pameran industri alat kesehatan terbesar nasional. YW Production bertindak sebagai Official Partner Multimedia untuk kelancaran presentasi audio visual seminar.",
      equipment: "Sound System, Projector, Screen Projector, dan Smart TV",
      location: "ICE BSD, Tangerang",
      date: "25 - 28 September 2025",
    },
    {
      id: "proj-united",
      title: "Jakarta I Love United",
      description:
        "Festival nonton bareng dan temu komunitas pecinta Manchester United yang dihadiri ribuan fans, menggunakan rigging luar ruangan raksasa.",
      equipment: "Rigging dan LED Display",
      location: "Community Park PIK 2, Tangerang",
      date: "25 Oktober 2025",
    },
    {
      id: "proj-g2g",
      title: "G2G Festival",
      description:
        "Festival internal korporat Ciputra World untuk mempererat sinergi tim. Mengusung konsep panggung formal-energik dengan lighting terintegrasi.",
      equipment: "Rigging, Sound System, dan Lighting",
      location: "Hotel Raffles, Jakarta",
      date: "31 Oktober 2025",
    },
    {
      id: "proj-hsbc",
      title: "HSBC Business Dialogue",
      description:
        "Forum diskusi bisnis eksklusif untuk pelaku industri. YW Production memasang instalasi rigging panggung utama, rigging front lighting, dan sistem takel pengangkat beban.",
      equipment:
        "Rigging (main stage, front lighting, stage rigging, sistem takel)",
      location: "Tribatra Hotel, Jakarta",
      date: "5 Desember 2025",
    },
    {
      id: "proj-ekraf-report",
      title: "EKRAF Annual Report",
      description:
        "Pemaparan laporan kinerja tahunan Dewan Ekonomi Kreatif nasional. Kami mengamankan suplai daya genset, pencahayaan panggung, serta kestabilan audio visual.",
      equipment: "Sound System, Lighting, Rigging, Genset, LED Display",
      location: "Thamrin Nine, Jakarta",
      date: "22 Desember 2025",
    },
    {
      id: "proj-pertamina",
      title: "Pertamina Patra Niaga Event",
      description:
        "Rangkaian gathering internal dan hiburan musik panggung dengan bintang tamu Judika. Kami menyuplai rigging panggung, sound monitor, serta kelistrikan panggung.",
      equipment:
        "Rigging, Lighting, Sound System, Alat Band, Genset, Riders Sound",
      location: "Grand Mercure Kemayoran, Jakarta",
      date: "28 & 30 Januari 2026",
    },
    {
      id: "proj-mui",
      title: "Pengukuhan & Ta'aruf Pengurus MUI",
      description:
        "Acara resmi kenegaraan berskala besar dengan panggung terpisah indoor dan outdoor, membutuhkan sistem tata suara berdaya jangkau luas dan rigging handal.",
      equipment: "Rigging, Sound System, dan Lighting (Indoor & Outdoor)",
      location: "Masjid Istiqlal, Jakarta",
      date: "28 & 30 Januari 2026",
    },
    {
      id: "proj-iims",
      title: "IIMS 2026 (Indonesia International Motor Show)",
      description:
        "Ajang pameran otomotif akbar tahunan. YW Production dipercaya merakit konstruksi rigging panggung di beberapa booth pabrikan otomotif terkemuka.",
      equipment: "Rigging di beberapa booth (PLN, iCar, dan BAIC)",
      location: "JIExpo, Jakarta",
      date: "5 - 15 Februari 2026",
    },
    {
      id: "proj-era",
      title: "ERA National Business Conference",
      description:
        "Konferensi bisnis real estate nasional yang dihadiri ratusan broker berprestasi, dikemas dengan tata panggung mewah, backdrop presisi, dan visual dynamic.",
      equipment: "Sound System, Lighting, Stage, Backdrop, dan Rigging",
      location: "Swissôtel PIK Avenue, Jakarta",
      date: "11 Februari 2026",
    },
  ],
  gallery: [
    { name: "Launching Sukro Official Partner of MPL ID" },
    { name: "Bloomberg Technoz (Bloomberg Technology)" },
    { name: "MUNAS AMPUH II" },
    { name: "Annual Meeting CAPT Chapter I 2024 (Kemenhub RI)" },
    { name: "Dinner Corporate Event" },
    { name: "Masihol Tu Sarinah" },
    { name: "BNI Corporate University Event" },
    { name: "Booth Sany - IEE Exhibition" },
    { name: "Beyond Cooling Seminar By Daikin" },
  ],
  quote:
    "YW Production memahami bahwa setiap event memiliki karakter dan kebutuhan yang unik. Karena itu, kami menyediakan layanan yang fleksibel and scalable memastikan bahwa baik event kecil yang intim maupun produksi besar yang megah, semuanya ditangani dengan standar yang sama: profesional, detail, dan tepat waktu.",
};
