import React, {useState} from "react";
import { motion } from "framer-motion";
import TermlLogs from "./TermLogs";
import WCl from './WCl';
import Intro from "../components/ui/Intro";
import StarsBgC from '../components/atoms/StarsBgC'

export default function SopoIT() {
   const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-black overflow-visible text-white">
<StarsBgC/>
      {/* TERMINAL */}
      <TermlLogs />
<WCl/>
      {/* ATMOSPHERE (BLUE CYBER FIELD) */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/20 blur-[180px] rounded-full" />

        <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[500px] h-[200px] bg-sky-400/20 blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,.25) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* TECH LINES (CYAN VERSION) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* LEFT */}
        <div className="absolute left-[18%] flex flex-col gap-10 items-end">

          <div className="w-[90px] h-[2px] bg-sky-400/70 rotate-[25deg] blur-[0.5px]" />
          <div className="w-[120px] h-[2px] bg-sky-400/60" />
          <div className="w-[90px] h-[2px] bg-sky-400/70 -rotate-[25deg]" />

        </div>

        {/* RIGHT */}
        <div className="absolute right-[18%] flex flex-col gap-10 items-start">

          <div className="w-[90px] h-[2px] bg-sky-400/70 -rotate-[25deg] blur-[0.5px]" />
          <div className="w-[120px] h-[2px] bg-sky-400/60" />
          <div className="w-[90px] h-[2px] bg-sky-400/70 rotate-[25deg]" />

        </div>

      </div>

      {/* CENTER CHARACTER */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">

        {/* BLUE GLOW CORE */}
        <div className="absolute w-[420px] h-[420px] bg-sky-400/25 blur-[120px] rounded-full" />

        {/* FLOATING CHARACTER */}
        <motion.img
          src="/sopo/sopo_pixel.png"
          alt="sopo"
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="
            relative z-10
            h-[82vh]
            object-contain

            drop-shadow-[0_0_70px_rgba(56,189,248,0.55)]
            drop-shadow-[0_0_140px_rgba(56,189,248,0.25)]

            will-change-transform
            transform-gpu
          "
        />
    {/* BUTTON */}
     <div className="absolute z-20 bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center">  <button
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
        {/* MODAL */}
      <Intro open={open} onClose={() => setOpen(false)} />

      </div>

    </section>
  );
}