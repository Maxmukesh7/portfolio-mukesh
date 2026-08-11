"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  Sparkles,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
} from "lucide-react";
import { SiPython, SiMicrosoft } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CERTIFICATES, Certificate } from "@/data/certificates";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const openCertModal = (cert: Certificate) => {
    setZoomScale(1);
    setSelectedCert(cert);
  };

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomScale(1);

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
              <Button
                variant="outline"
                size="sm"
                onClick={() => openCertModal(cert)}
                className="w-full justify-between rounded-xl text-xs font-medium border-white/15 bg-zinc-800/80 hover:bg-blue-600/20 hover:border-blue-500/40 text-zinc-200 hover:text-white transition-all group/btn"
              >
                <span>View Certificate</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Original Certificate Lightbox Modal */}
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent className="max-w-5xl w-full max-h-[90vh] bg-zinc-950/95 border-zinc-800 text-white rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden">
          {selectedCert && (
            <div className="space-y-5 flex flex-col h-full overflow-hidden animate-in zoom-in-95 duration-300">
              <DialogHeader className="text-left space-y-2 shrink-0">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <Badge
                    variant="outline"
                    className={`text-xs font-mono rounded-full ${selectedCert.badgeColor}`}
                  >
                    {selectedCert.category}
                  </Badge>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {selectedCert.completion}
                  </span>
                </div>

                <DialogTitle className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedCert.title}
                </DialogTitle>

                <DialogDescription className="text-zinc-300 font-medium flex items-center gap-2 text-xs sm:text-sm">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>Issued by {selectedCert.provider}</span>
                </DialogDescription>
              </DialogHeader>

              {/* Original Document Display Container */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[420px] max-h-[60vh] rounded-2xl overflow-auto border-2 border-white/10 bg-zinc-900 shadow-2xl flex items-center justify-center p-4">
                <div
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
                  style={{ transform: `scale(${zoomScale})` }}
                >
                  {selectedCert.fileSrc.endsWith(".pdf") ? (
                    <iframe
                      src={selectedCert.fileSrc}
                      title={selectedCert.title}
                      className="w-full h-full min-h-[400px] rounded-xl border-0"
                    />
                  ) : (
                    <img
                      src={selectedCert.fileSrc}
                      alt={selectedCert.title}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    />
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 shrink-0">
                <div className="flex items-center gap-1.5 bg-zinc-900 border border-white/10 p-1.5 rounded-2xl">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleZoomOut}
                    title="Zoom Out"
                    className="h-8 w-8 p-0 text-zinc-300 hover:text-white"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-xs font-mono text-zinc-400 px-2">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleZoomIn}
                    title="Zoom In"
                    className="h-8 w-8 p-0 text-zinc-300 hover:text-white"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  {zoomScale !== 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleResetZoom}
                      title="Reset Zoom"
                      className="h-8 w-8 p-0 text-zinc-300 hover:text-white"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.fileSrc}
                    download={`${selectedCert.id}-certificate`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-white/15 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 gap-1.5 text-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </Button>
                  </a>

                  <a
                    href={selectedCert.fileSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white gap-1.5 text-xs shadow-md shadow-blue-500/20"
                    >
                      <span>Open in New Tab</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
