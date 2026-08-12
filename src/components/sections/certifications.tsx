"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Building2,
  Award,
  ExternalLink,
} from "lucide-react";
import { SiPython, SiMicrosoft } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificationsSection() {
  const getProviderIcon = (iconType: string) => {
    switch (iconType) {
      case "python":
        return <SiPython className="w-5 h-5 text-blue-400" />;
      case "aws":
        return <FaAws className="w-5 h-5 text-amber-400" />;
      case "security":
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case "devops":
        return <SiMicrosoft className="w-5 h-5 text-sky-400" />;
      case "secops":
        return <SiMicrosoft className="w-5 h-5 text-emerald-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 font-sans"
    >
      {/* Ambient background lighting */}
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

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
          className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-purple-500/10 border-purple-500/30 text-purple-400 rounded-full inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Professional Certifications
        </Badge>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
          Certifications
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
          Professional certifications demonstrating continuous technical learning and mastery.
        </p>
      </motion.div>

      {/* Certifications Grid: 1 col Mobile, 2 cols Tablet, 3 cols Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="backdrop-blur-xl bg-zinc-900/60 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Corner Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

            <div className="space-y-4">
              {/* Provider Logo Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-2xl border ${cert.iconBg} shrink-0`}
                  >
                    {getProviderIcon(cert.iconType)}
                  </div>
                  <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
                    {cert.provider}
                  </span>
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold text-white font-display tracking-tight group-hover:text-blue-300 transition-colors leading-snug line-clamp-3">
                {cert.title}
              </h3>

              {/* Certificate Meta Info */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <Building2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{cert.provider}</span>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className={`text-[11px] font-mono rounded-full px-3 py-1 ${cert.badgeColor}`}
                  >
                    {cert.category}
                  </Badge>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{cert.completion}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Certificate Button */}
            <div className="pt-4 mt-6 border-t border-white/10">
              <a
                href={cert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between rounded-xl text-xs font-medium border-white/15 bg-zinc-800/80 hover:bg-blue-600/20 hover:border-blue-500/40 text-zinc-200 hover:text-white transition-all group/btn"
                >
                  <span>View Certificate →</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
