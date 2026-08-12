"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EDUCATION_LIST } from "@/data/education";

export default function EducationSection() {
  const primaryEdu = EDUCATION_LIST.find((item) => item.isPrimary);
  const secondaryEdu = EDUCATION_LIST.filter((item) => !item.isPrimary);

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 font-sans"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-blue-500/10 border-blue-500/30 text-blue-400 rounded-full inline-flex items-center gap-2"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Journey
        </Badge>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
          Education
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
          My academic journey and educational background.
        </p>
      </motion.div>

      {/* Primary Education Card (Bachelor of Engineering) */}
      {primaryEdu && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 backdrop-blur-xl bg-zinc-900/80 border border-white/10 border-l-4 border-l-blue-500 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-xs font-mono bg-blue-500/10 border-blue-500/30 text-blue-400 rounded-full"
                >
                  {primaryEdu.degree}
                </Badge>
              </div>

              {primaryEdu.field && (
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                  {primaryEdu.field}
                </h3>
              )}

              <div className="flex items-center gap-2 text-zinc-200 font-medium text-base sm:text-lg">
                <Building2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>{primaryEdu.institution}</span>
              </div>
            </div>

            <div className="shrink-0 p-6 rounded-2xl bg-zinc-800/60 border border-white/10 flex flex-col items-center justify-center text-center space-y-3 lg:w-64">
              <div className="flex items-center gap-1.5 text-xs font-mono text-blue-300 bg-blue-500/20 border border-blue-500/30 px-3.5 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                <span>{primaryEdu.duration}</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                {primaryEdu.result}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Secondary Education Grid (HSC & SSLC) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {secondaryEdu.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-zinc-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-xs font-mono bg-purple-500/10 border-purple-500/30 text-purple-300 rounded-full"
                >
                  Schooling
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-800/80 border border-white/10 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight group-hover:text-purple-300 transition-colors">
                {item.degree}
              </h4>

              <div className="flex items-start gap-2 text-zinc-200 font-medium text-sm sm:text-base">
                <Building2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                <span>{item.institution}</span>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Score / Grade</span>
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                {item.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
