"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Code2,
  GraduationCap,
  Award,
  Briefcase,
  Mail,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const MENU_ITEMS = [
  { title: "Home", href: "/", icon: Home },
  { title: "Skills", href: "/#skills", icon: Code2 },
  { title: "Projects", href: "/#projects", icon: Briefcase },
  { title: "Education", href: "/#education", icon: GraduationCap },
  { title: "Certifications", href: "/#certifications", icon: Award },
  { title: "Contact", href: "/#contact", icon: Mail },
];

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
      const handleHashChange = () => setCurrentHash(window.location.hash);
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed right-4 sm:right-8 top-20 w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm sm:w-72 max-h-[calc(100vh-6rem)] overflow-y-auto overflow-x-hidden backdrop-blur-2xl bg-zinc-950/90 border border-white/15 rounded-2xl p-3 shadow-2xl shadow-black/80 z-[9999] font-sans"
    >
      <div className="flex items-center justify-between px-3 py-2 mb-1 border-b border-white/10">
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
          Navigation
        </span>
        <FunnyThemeToggle className="w-5 h-5 flex md:hidden" />
      </div>

      <div className="space-y-1">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isHashLink = item.href.includes("#");
          const targetHash = isHashLink ? item.href.substring(item.href.indexOf("#")) : "";

          let isActive = false;
          if (isHashLink) {
            isActive = pathname === "/" && currentHash === targetHash;
          } else {
            isActive = pathname === item.href && !currentHash;
          }

          const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            setIsActive(false);

            if (isHashLink) {
              const targetId = targetHash.replace("#", "");
              if (pathname === "/") {
                e.preventDefault();
                setCurrentHash(targetHash);
                window.history.pushState(null, "", targetHash);
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            } else if (item.href === "/" && pathname === "/") {
              e.preventDefault();
              setCurrentHash("");
              window.history.pushState(null, "", "/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          };

          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={handleItemClick}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                isActive
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-1.5 rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-zinc-800/80 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700/80"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{item.title}</span>
              </div>

              <ChevronRight
                className={cn(
                  "w-4 h-4 transition-transform group-hover:translate-x-0.5",
                  isActive ? "text-blue-400" : "text-zinc-500 group-hover:text-zinc-300"
                )}
              />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Index;
