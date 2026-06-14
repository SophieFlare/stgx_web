import React, { useState } from "react";
import { motion } from "framer-motion";
import NetMap from "./NetMap";
import Intro from "./Intro";
import GlitchText from "./atoms/GlitchText";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-[10vh] sm:pt-[12vh] md:pt-[15vh] flex flex-col items-center overflow-hidden">

      {/* NETWORK BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <NetMap />
      </div>

      {/* TITLE */}
      <div className="absolute z-10 w-full flex justify-center bottom-4 px-3 sm:px-4">
        <motion.h1
          animate={{
            y: [0, -6, 0],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            font-['Orbitron']
            text-[#ff0033]

            text-[3.5rem]
            sm:text-[6rem]
            md:text-[8rem]
            lg:text-[9rem]

            tracking-[0.15em] sm:tracking-[0.2em]
            font-semibold
            select-none
            text-center
          "
        >
          {/* glow */}
          <span className="absolute inset-0 text-[#ff0033] blur-[18px] opacity-40">
            NetCat
          </span>

          <span className="absolute inset-0 text-[#ff0033] blur-[6px] opacity-70">
            NetCat
          </span>

          {/* glitch */}
          <span className="relative text-[#ff0033] drop-shadow-[0_0_25px_rgba(255,0,51,0.6)]">
            <GlitchText>NetCat</GlitchText>
          </span>
        </motion.h1>
      </div>

      {/* INTRO */}
      <Intro open={open} onClose={() => setOpen(false)} />
    </section>
  );
}