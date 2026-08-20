"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  MapPin,
  Code2,
  Languages,
  FileText,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Layers,
  Cpu,
} from "lucide-react";
import {
  RiReactjsFill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PERSONAL_INFO = [
  {
    icon: <User className="w-5 h-5 text-blue-400" />,
    label: "Name",
    value: "Mukesh Kumar R",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
    label: "Degree",
    value: "B.E Computer Science Engineering(Cyber Security)",
  },
  {
    icon: <MapPin className="w-5 h-5 text-pink-400" />,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
  },
  {
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    label: "Focus",
    value: "Software Development",
  },
  {
    icon: <Languages className="w-5 h-5 text-emerald-400" />,
    label: "Languages",
    value: " Python, JavaScript",
  },
];

const STAT_CARDS = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    value: "3+",
    label: "Major Projects",
    desc: "Production-ready web & full-stack software applications",
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    value: "Full Stack",
    label: "Developer",
    desc: "Frontend React & Backend Node/Express architectures",
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    value: "REST API",
    label: "Development",
    desc: "Scalable API design with SQL & NoSQL integration",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    value: "Problem",
    label: "Solver",
    desc: "Passionate about algorithms, clean code & engineering logic",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-black/90 text-zinc-900 dark:text-zinc-100 font-sans pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glassmorphism Background Card */}
              <div className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl shadow-blue-950/10 dark:shadow-blue-950/20 group">
                {/* Glowing Outer Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-md pointer-events-none" />

                {/* Profile Image Wrapper */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-white/10 shadow-inner bg-zinc-100 dark:bg-zinc-800/80">
                  <Image
                    src="/assets/me.jpg"
                    alt="Mukesh Kumar R"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xl font-bold text-white font-display">
                      Mukesh Kumar R
                    </p>
                    <p className="text-xs text-blue-300 font-mono">
                      Cyber Security & Software Dev
                    </p>
                  </div>
                </div>

                {/* Floating Animated Tech Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 backdrop-blur-md bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/15 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg dark:shadow-xl"
                >
                  <RiReactjsFill className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">React & Web Dev</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 backdrop-blur-md bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/15 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg dark:shadow-xl"
                >
                  <RiNodejsFill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Node & REST APIs</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-6 -translate-y-1/2 hidden sm:flex backdrop-blur-md bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/15 p-2.5 rounded-2xl items-center gap-2 shadow-lg dark:shadow-xl"
                >
                  <FaJava className="w-5 h-5 text-amber-500" />
                  <SiPython className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Header Badge & Title */}
            <div>
              <Badge
                variant="outline"
                className="px-3.5 py-1 text-xs font-mono tracking-widest uppercase bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-full mb-3"
              >
                Who I Am
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white font-display">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">Me</span>
              </h1>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m <strong className="text-zinc-900 dark:text-white font-semibold">Mukesh Kumar</strong>, a Computer Science Engineering student specializing in Cyber Security with a strong passion for Software Development. I enjoy building modern, scalable, and user-friendly web applications that solve real-world problems.
              </p>
              <p>
                I continuously improve my skills by building full-stack applications using React, Node.js, Express.js, MongoDB, Java, Python, and REST APIs. My focus is on writing clean, maintainable code while creating fast and responsive user experiences.
              </p>
              <p>
                Beyond academics, I enjoy learning new technologies, solving coding challenges, and developing projects that strengthen my software engineering skills.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PERSONAL_INFO.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/10 rounded-2xl p-4 flex items-start gap-3.5 hover:border-blue-500/40 transition-colors shadow-sm dark:shadow-none"
                >
                  <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1lvNzzlnWA-O7Pytxobaphpew4Tncxh59/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-2xl text-base px-7 py-6 font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 border border-white/20 transition-all gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>View Resume</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-80" />
                </Button>
              </a>

              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl text-base px-7 py-6 font-medium border-zinc-300 dark:border-white/15 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-all"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistic / Highlight Cards */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAT_CARDS.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-xl bg-white/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-500/40 transition-all shadow-md dark:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10">
                    {card.icon}
                  </div>
                  <span className="text-2xl font-bold font-mono text-zinc-900 dark:text-white tracking-tight">
                    {card.value}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-display">
                  {card.label}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
