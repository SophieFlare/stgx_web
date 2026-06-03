import React, { useState } from "react";
import { motion } from "framer-motion";
import NetMap from "./NetMap";
import Intro from "./Intro";
import GlitchText from "./atoms/GlitchText";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-[15vh] flex flex-col items-center overflow-hidden">

      {/* 🌐 NETWORK BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <NetMap />
      </div>

      {/* TITLE (FIXED POSITION + KEEP EFFECTS) */}
 <div className="absolute z-10 w-full flex justify-center bottom-2 px-4">
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
      text-[6rem] sm:text-[8rem] md:text-[9rem]
      tracking-[0.2em]
      font-semibold
      select-none
    "
  >
    {/* glow layers */}
    <span className="absolute inset-0 text-[#ff0033] blur-[18px] opacity-40">
      NetCat
    </span>

    <span className="absolute inset-0 text-[#ff0033] blur-[6px] opacity-70">
      NetCat
    </span>

    {/* glitch layer */}
    <span className="relative text-[#ff0033] drop-shadow-[0_0_25px_rgba(255,0,51,0.6)]">
      <GlitchText>NetCat</GlitchText>
    </span>
  </motion.h1>
</div>

      {/* START BUTTON (COMMENTED OUT AS REQUESTED)
      <div className="z-20 mt-auto mb-10 flex justify-center w-full">
        <button
          onClick={() => setOpen(true)}
          className="
            relative px-12 py-3

            text-white font-semibold uppercase tracking-[0.25em] text-sm

            bg-white/5 backdrop-blur-md

            border border-sky-400/40

            shadow-[0_0_20px_rgba(56,189,248,0.25)]

            hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]
            hover:border-sky-300/70
            hover:scale-[1.03]

            active:scale-95

            transition-all duration-300

            overflow-hidden
            group
          "
        >
          <span className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-white/5 to-sky-500/10 opacity-60" />

          <span className="
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            group-hover:translate-x-full
            transition-transform duration-700
          " />

          <span className="
            absolute inset-0 border border-sky-400/30
            shadow-[inset_0_0_12px_rgba(56,189,248,0.2)]
          " />

          <span className="relative z-10">
            START
          </span>

          <span className="absolute top-1 left-2 w-2 h-2 bg-sky-400/70 rotate-45" />
          <span className="absolute bottom-1 right-2 w-2 h-2 bg-sky-400/70 rotate-45" />
        </button>
      </div>
      */}

      {/* MODAL */}
      <Intro open={open} onClose={() => setOpen(false)} />

    </section>
  );
}