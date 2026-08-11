import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full min-h-dvh flex items-center")}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full min-h-dvh items-center">
        <div
          className={cn(
            "min-h-dvh z-[2]",
            "col-span-1",
            "flex flex-col justify-center items-start",
            "px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col w-full">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "font-thin text-slate-500 dark:text-zinc-400 mb-2 md:mb-3",
                      "cursor-default font-display text-lg sm:text-xl md:text-2xl whitespace-nowrap"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[4px] font-thin text-transparent text-slate-800 text-left",
                          "text-[clamp(3rem,12vw,4.5rem)] sm:text-[clamp(4rem,8vw,6rem)] md:text-[clamp(5rem,9vw,8rem)]",
                          "leading-[0.95] cursor-default text-edge-outline font-display tracking-tight"
                        )}
                      >
                        <span className="block whitespace-nowrap">Mukesh</span>
                        <span className="block whitespace-nowrap">Kumar R</span>
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Software Developer | Full Stack Developer
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "mt-4 md:mt-6 font-thin text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display text-base sm:text-xl md:text-2xl tracking-wide"
                    )}
                  >
                    Software Developer | Full Stack Developer
                  </p>
                </BlurIn>

                <BlurIn delay={1.4}>
                  <p className="mt-4 md:mt-5 text-slate-600 dark:text-zinc-400 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed cursor-default font-sans">
                    I build modern, scalable, and user-friendly web applications with a strong focus on performance and clean design. I enjoy turning ideas into real-world software solutions using modern technologies.
                  </p>
                </BlurIn>
              </div>

              <div className="mt-8 md:mt-10 flex flex-col gap-4 w-full sm:w-fit">
                <a
                  href="/resume/resume.pdf"
                  download="Mukesh_Kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center justify-center gap-2 w-full px-6 py-3 text-base">
                      <File size={20} />
                      <p>Download Resume</p>
                    </Button>
                  </BoxReveal>
                </a>
                <div className="flex flex-wrap items-center gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="px-6 py-3 text-base"
                        >
                          Contact Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Get in touch ✉️</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} size="icon" className="w-10 h-10">
                        <SiGithub size={20} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} size="icon" className="w-10 h-10">
                        <SiLinkedin size={20} />
                      </Button>
                    </Link>
                    <Link
                      href={`mailto:${config.email}`}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"} size="icon" className="w-10 h-10">
                        <Mail size={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:block col-span-1"></div>
      </div>
      <div className="absolute bottom-6 left-[50%] -translate-x-[50%] z-10">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;


