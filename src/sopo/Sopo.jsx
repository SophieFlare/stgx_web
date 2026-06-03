import React from "react";
import { motion } from "framer-motion";

import WCl from './WCl';


export default function Sopo() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">
<WCl/>
      {/* ATMOSPHERE */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/25 blur-[180px] rounded-full" />

        <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[500px] h-[200px] bg-red-500/25 blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,51,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,51,.25) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

      </div>
{/* TECH LINES OVERLAY */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

  {/* LEFT SIDE (3 lines) */}
  <div className="absolute left-[18%] flex flex-col gap-10 items-end">

    <div className="w-[90px] h-[2px] bg-red-500/70 rotate-[25deg] blur-[0.5px]" />
    <div className="w-[120px] h-[2px] bg-red-500/60 rotate-[0deg]" />
    <div className="w-[90px] h-[2px] bg-red-500/70 -rotate-[25deg]" />

  </div>

  {/* RIGHT SIDE (3 lines) */}
  <div className="absolute right-[18%] flex flex-col gap-10 items-start">

    <div className="w-[90px] h-[2px] bg-red-500/70 -rotate-[25deg] blur-[0.5px]" />
    <div className="w-[120px] h-[2px] bg-red-500/60 rotate-[0deg]" />
    <div className="w-[90px] h-[2px] bg-red-500/70 rotate-[25deg]" />

  </div>

</div>
      {/* CENTER */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">

        {/* glow core */}
        <div className="absolute w-[420px] h-[420px] bg-red-500/30 blur-[120px] rounded-full" />

        {/* FLOAT (ONLY Y MOVEMENT) */}
        <motion.img
          src="/sopo/s.png"
          alt="sopo"
          animate={{
            y: [0, -18, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="
            relative z-10
            h-[82vh]
            object-contain

            drop-shadow-[0_0_70px_rgba(255,0,51,0.55)]
            drop-shadow-[0_0_140px_rgba(255,0,0,0.25)]

            will-change-transform
            transform-gpu
          "
        />

      </div>

    </section>
  );
}