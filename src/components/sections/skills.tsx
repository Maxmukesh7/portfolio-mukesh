"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Lucide Icons
import {
  Code2,
  Paintbrush,
  Server,
  Database,
  Wrench,
  Brain,
  Network,
  ShieldCheck,
  Layout,
  Boxes,
  GitBranch,
} from "lucide-react";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa6";

import {
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostman,
  SiVscodium,
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
};

type Category = {
  id: string;
  title: string;
  badge: string;
  icon: React.ReactNode;
  iconBg: string;
  skills: SkillItem[];
};

const CATEGORIES: Category[] = [
  {
    id: "programming",
    title: "Programming Languages",
    badge: "💻 Programming",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    skills: [
      {
        name: "Python",
        icon: <SiPython className="w-7 h-7" color="#3776ab" />,
        color: "#3776ab",
        glow: "rgba(55, 118, 171, 0.4)",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-7 h-7" color="#f0db4f" />,
        color: "#f0db4f",
        glow: "rgba(240, 219, 79, 0.4)",
      },
      {
        name: "SQL",
        icon: <SiPostgresql className="w-7 h-7" color="#336791" />,
        color: "#336791",
        glow: "rgba(51, 103, 145, 0.4)",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    badge: "🎨 Frontend",
    icon: <Paintbrush className="w-5 h-5 text-pink-400" />,
    iconBg: "bg-pink-500/10 border-pink-500/20",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="w-7 h-7" color="#e34c26" />,
        color: "#e34c26",
        glow: "rgba(227, 76, 38, 0.4)",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="w-7 h-7" color="#1572b6" />,
        color: "#1572b6",
        glow: "rgba(21, 114, 182, 0.4)",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-7 h-7" color="#06b6d4" />,
        color: "#06b6d4",
        glow: "rgba(6, 182, 212, 0.4)",
      },
      {
        name: "React.js",
        icon: <FaReact className="w-7 h-7" color="#61dafb" />,
        color: "#61dafb",
        glow: "rgba(97, 218, 251, 0.4)",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    badge: "⚙️ Backend",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-7 h-7" color="#6cc24a" />,
        color: "#6cc24a",
        glow: "rgba(108, 194, 74, 0.4)",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-7 h-7 text-zinc-800 dark:text-white" />,
        color: "#ffffff",
        glow: "rgba(255, 255, 255, 0.3)",
      },
      {
        name: "Django",
        icon: <SiDjango className="w-7 h-7" color="#092e20" />,
        color: "#092e20",
        glow: "rgba(9, 46, 32, 0.5)",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    badge: "🗄️ Database",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-7 h-7" color="#4db33d" />,
        color: "#4db33d",
        glow: "rgba(77, 179, 61, 0.4)",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-7 h-7" color="#00758f" />,
        color: "#00758f",
        glow: "rgba(0, 117, 143, 0.4)",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-7 h-7" color="#336791" />,
        color: "#336791",
        glow: "rgba(51, 103, 145, 0.4)",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    badge: "🛠 Tools",
    icon: <Wrench className="w-5 h-5 text-purple-400" />,
    iconBg: "bg-purple-500/10 border-purple-500/20",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="w-7 h-7" color="#f05032" />,
        color: "#f05032",
        glow: "rgba(240, 80, 50, 0.4)",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="w-7 h-7 text-zinc-800 dark:text-white" />,
        color: "#ffffff",
        glow: "rgba(255, 255, 255, 0.3)",
      },
      {
        name: "VS Code",
        icon: <SiVscodium className="w-7 h-7" color="#007acc" />,
        color: "#007acc",
        glow: "rgba(0, 122, 204, 0.4)",
      },
      {
        name: "Postman",
        icon: <SiPostman className="w-7 h-7" color="#ff6c37" />,
        color: "#ff6c37",
        glow: "rgba(255, 108, 55, 0.4)",
      },
      {
        name: "Docker",
        icon: <FaDocker className="w-7 h-7" color="#2496ed" />,
        color: "#2496ed",
        glow: "rgba(36, 150, 237, 0.4)",
      },
    ],
  },
  {
    id: "concepts",
    title: "Concepts",
    badge: "🧠 Concepts",
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      {
        name: "REST APIs",
        icon: <Network className="w-7 h-7 text-sky-400" />,
        color: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.4)",
      },
      {
        name: "Authentication",
        icon: <ShieldCheck className="w-7 h-7 text-purple-400" />,
        color: "#c084fc",
        glow: "rgba(192, 132, 252, 0.4)",
      },
      {
        name: "Responsive Design",
        icon: <Layout className="w-7 h-7 text-pink-400" />,
        color: "#f472b6",
        glow: "rgba(244, 114, 182, 0.4)",
      },
      {
        name: "Object-Oriented Programming",
        icon: <Boxes className="w-7 h-7 text-amber-400" />,
        color: "#fbbf24",
        glow: "rgba(251, 191, 36, 0.4)",
      },
      {
        name: "Data Structures & Algorithms",
        icon: <GitBranch className="w-7 h-7 text-emerald-400" />,
        color: "#34d399",
        glow: "rgba(52, 211, 153, 0.4)",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <TooltipProvider delayDuration={150}>
      <section
        id="skills"
        className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 font-sans"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-blue-400 rounded-full inline-flex items-center gap-2"
          >
            My Tech Stack
          </Badge>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white font-display">
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
              Technologies
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I enjoy building modern, scalable, and high-performance applications
            using the following technologies.
          </p>
        </motion.div>

        {/* Category Cards Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/40 hover:bg-white/55 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg dark:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Card Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 border-b border-zinc-200/60 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-2xl border ${category.iconBg} shrink-0`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-display tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            duration: 3 + (skillIndex % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: skillIndex * 0.3,
                          }}
                          whileHover={{ scale: 1.1, y: -6 }}
                          className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/45 hover:bg-white/75 dark:bg-zinc-800/50 border border-white/70 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-all cursor-pointer group/skill relative shadow-sm dark:shadow-none backdrop-blur-sm"
                          style={{
                            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                          }}
                        >
                          {/* Individual Skill Icon */}
                          <div
                            className="transition-transform duration-300 group-hover/skill:drop-shadow-[0_0_12px_var(--glow)]"
                            style={
                              {
                                "--glow": skill.glow,
                              } as React.CSSProperties
                            }
                          >
                            {skill.icon}
                          </div>

                          <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 mt-2 text-center truncate w-full group-hover/skill:text-zinc-900 dark:group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      </TooltipTrigger>

                      <TooltipContent
                        side="top"
                        className="bg-zinc-900 border-zinc-700 text-white font-medium text-xs px-3 py-1.5 rounded-xl shadow-xl"
                      >
                        {skill.name}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
}
