"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Wrench, ChevronDown, ChevronUp, Quote } from "lucide-react";
import { PROJECTS_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";

export function Projects() {
  const { eyebrow, headline, subheadline, projects, gallery, quote } = PROJECTS_CONTENT;
  const [showAll, setShowAll] = useState(false);

  // Default number of visible projects before expanding
  const VISIBLE_COUNT = 6;
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <section
      id="portfolio"
      className="section-padding bg-brand-bg relative overflow-hidden"
    >
      {/* Decorative gradient background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </AnimateInView>

        {/* Detailed Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: showAll ? 0 : index * 0.05 }}
                className="bg-white rounded-2xl border border-brand-border p-6 shadow-xs hover:shadow-md hover:border-brand-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Date & Location Badges */}
                  <div className="flex flex-wrap gap-2 items-center text-[11px] font-medium text-brand-muted mb-4">
                    <span className="flex items-center gap-1 bg-brand-primary/5 text-brand-primary px-2.5 py-1 rounded-md">
                      <Calendar size={12} />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1 bg-brand-accent/5 text-brand-accent px-2.5 py-1 rounded-md">
                      <MapPin size={12} />
                      {project.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-medium text-lg md:text-xl text-brand-text mb-3 group-hover:text-brand-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Equipment List Box */}
                <div className="mt-auto pt-4 border-t border-brand-border/60">
                  <p className="text-[11px] font-bold text-brand-accent uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench size={12} className="text-brand-secondary" />
                    Equipment yang Digunakan
                  </p>
                  <p className="text-xs text-brand-text/80 leading-relaxed font-medium">
                    {project.equipment}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {projects.length > VISIBLE_COUNT && (
          <AnimateInView className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-medium text-sm text-white bg-brand-primary rounded-full hover:bg-brand-primary/95 shadow-md shadow-brand-primary/10 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Tampilkan Semua Event (+{projects.length - VISIBLE_COUNT} Event)
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </AnimateInView>
        )}

        {/* Additional Gallery list */}
        <div className="mt-20 pt-12 border-t border-brand-border">
          <AnimateInView>
            <h3 className="text-center font-display font-medium text-xl md:text-2xl text-brand-text mb-2">
              Klien & Acara Tambahan
            </h3>
            <p className="text-center text-sm text-brand-muted max-w-2xl mx-auto mb-10">
              Beberapa dokumentasi panggung, instalasi pameran, dan agenda bisnis terkemuka lainnya yang didukung oleh tim teknis kami.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {gallery.map((item, index) => (
              <AnimateInView
                key={item.name}
                delay={index * 0.04}
                className="bg-white/50 border border-brand-border rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white transition-colors duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-brand-text/90 leading-tight">
                  {item.name}
                </span>
              </AnimateInView>
            ))}
          </div>
        </div>

        {/* Closing Testimonial Quote Banner */}
        <AnimateInView delay={0.15} className="mt-24 max-w-4xl mx-auto">
          <div className="relative bg-brand-accent text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-brand-primary/10 rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <Quote size={48} className="text-brand-secondary flex-shrink-0 opacity-80" />
              <div className="space-y-4">
                <p className="font-display font-medium text-lg md:text-xl leading-relaxed text-white/95 italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    YW Production Event Nusantara
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
