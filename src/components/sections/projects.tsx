"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects, { FeaturedProject } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 font-sans"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-20"
      >
        <Badge
          variant="outline"
          className="px-4 py-1.5 text-xs font-mono tracking-widest uppercase bg-purple-500/10 border-purple-500/30 text-purple-400 rounded-full inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Featured Work
        </Badge>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
            Projects
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed">
          These are some of the software applications I&apos;ve built to solve
          real-world problems using modern technologies.
        </p>
      </motion.div>

      {/* Projects Stack (Alternating Layout) */}
      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-zinc-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Radial Top Glow Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/0 rounded-full blur-3xl group-hover:from-blue-500/20 transition-all pointer-events-none" />

              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-stretch gap-8 lg:gap-12`}
              >
                {/* Large Project Image Container */}
                <div className="w-full lg:w-1/2 relative flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/80 shadow-inner group/img">
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-xs font-mono tracking-wider bg-blue-500/10 border-blue-500/30 text-blue-400 rounded-full"
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-500">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Key Features Grid */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-white/10 text-xs font-normal px-2.5 py-1 rounded-lg"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Links & Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/10">
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="rounded-xl px-5 py-2.5 text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 gap-2"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    )}

                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl px-5 py-2.5 text-xs font-medium border-white/15 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white gap-2"
                        >
                          <SiGithub className="w-4 h-4" />
                          <span>GitHub</span>
                        </Button>
                      </Link>
                    )}

                    {project.docs && (
                      <Link href={project.docs} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl px-5 py-2.5 text-xs font-medium border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 gap-2"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Documentation</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
