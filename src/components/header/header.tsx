"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Escape key to close navigation drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsActive(false);
      }
    };
    if (isActive) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  // Lock background scroll when navigation drawer is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <>
      <motion.header
        className={cn(
          styles.header,
          "transition-colors delay-100 duration-500 ease-in z-[9999]"
        )}
        style={{
          background: isActive ? "hsl(var(--background) / .8)" : "transparent",
          backdropFilter: isActive ? "blur(12px)" : "none",
          WebkitBackdropFilter: isActive ? "blur(12px)" : "none",
        }}
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: loader ? 3.5 : 0,
          duration: 0.8,
        }}
      >
        <div className={cn(styles.bar, "flex items-center justify-between")}>
          <Link href="/" className="flex items-center justify-center">
            <Button variant={"link"} className="text-md">
              {config.author}
            </Button>
          </Link>

          <FunnyThemeToggle className="w-6 h-6 mr-4 hidden md:flex" />
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
            className={cn(
              styles.el,
              "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
            )}
          >
            <div className="relative hidden md:flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Button>
        </div>
      </motion.header>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isActive && (
              <>
                {/* Full viewport backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsActive(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
                />
                <Nav setIsActive={setIsActive} />
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Header;
