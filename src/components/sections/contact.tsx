"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode,
  SiGmail,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/data/socialLinks";

export default function ContactSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "email":
        return <Mail className="w-5 h-5 text-blue-400" />;
      case "phone":
        return <Phone className="w-5 h-5 text-emerald-400" />;
      case "location":
        return <MapPin className="w-5 h-5 text-pink-400" />;
      default:
        return <Mail className="w-5 h-5 text-blue-400" />;
    }
  };

  const getPlatformIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <SiGithub className="w-6 h-6 text-white group-hover:text-[#2ea44f] transition-colors" />;
      case "linkedin":
        return <SiLinkedin className="w-6 h-6 text-[#0a66c2]" />;
      case "leetcode":
        return <SiLeetcode className="w-6 h-6 text-[#ffa116]" />;
      case "gmail":
        return <SiGmail className="w-6 h-6 text-[#ea4335]" />;
      default:
        return <Mail className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 font-sans"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
          <Sparkles className="w-3.5 h-3.5" />
          Let&apos;s Connect
        </Badge>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            Touch
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
          I&apos;m always open to discussing software engineering opportunities,
          internships, collaborations, or exciting projects.
        </p>
      </motion.div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Availability Status & Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Availability Status Card */}
          <div className="backdrop-blur-xl bg-zinc-900/60 border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Current Status
              </span>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  Available
                </span>
              </div>
            </div>

            <p className="text-base font-bold text-white font-display">
              Open to Internship &amp; Full-Time Opportunities
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              Ready to contribute to innovative software &amp; web projects.
            </p>
          </div>

          {/* Direct Contact Detail Cards */}
          <div className="space-y-4">
            {CONTACT_DETAILS.map((item, index) => {
              const ContentWrapper = item.href ? "a" : "div";
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <ContentWrapper
                    href={item.href}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="backdrop-blur-xl bg-zinc-900/60 border border-white/10 hover:border-blue-500/30 rounded-3xl p-5 flex items-center gap-4 transition-all duration-300 group block shadow-lg"
                  >
                    <div className="p-3 rounded-2xl bg-zinc-800/80 border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                      {getIcon(item.iconType)}
                    </div>

                    <div className="space-y-0.5 overflow-hidden">
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </ContentWrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Premium Recruiter Contact Hub Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="backdrop-blur-xl bg-zinc-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group space-y-8">
            {/* Top Right Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Hub Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Direct access to my professional profiles &amp; contact points.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-To-Action Banner Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/30 shadow-lg relative overflow-hidden flex items-start gap-3.5"
            >
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white font-sans leading-snug">
                  Currently Open to Internships and Full-Time Software Development Opportunities.
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Looking forward to discussing tech roles, coding projects, and team engineering!
                </p>
              </div>
            </motion.div>

            {/* Interactive Platform Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((link, idx) => {
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-4 rounded-2xl backdrop-blur-xl bg-zinc-950/70 border border-white/10 hover:border-blue-500/40 hover:bg-zinc-800/80 transition-all duration-300 group flex items-center justify-between shadow-md"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                        {getPlatformIcon(link.name)}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors font-display">
                          {link.name}
                        </h4>
                        {link.username && (
                          <p className="text-xs font-mono text-zinc-400 truncate">
                            {link.username}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
