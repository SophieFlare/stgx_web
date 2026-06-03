import React from "react";

export default function WordCarousel() {
  const words = [
    "PROGRAMMER",
    "IT SUPPORT",
    "NETWORKING",
    "CYBER SECURITY",
    "REACT JS",
    "LINUX",
    "SYSTEMS",
    "DEBUGGING",
    "FRONTEND ENGINEER",
    "OS ARCHITECTURE",
    "TROUBLESHOOTING",
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">

      {/* SCROLL WRAPPER */}
      <div className="flex w-max animate-scroll">

        {/* DUPLICATED CONTENT FOR LOOP */}
        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            className="
              px-6 py-3
              text-[#ff0033]
              font-mono
              text-m
              tracking-widest
              whitespace-nowrap
              border-r border-[#ff0033]/30
              bg-black/40
              backdrop-blur-md
            "
          >
            {word}
          </div>
        ))}

      </div>

      {/* GLOW LINE */}
      <div className="h-[2px] w-full bg-[#ff0033]/40 shadow-[0_0_25px_rgba(255,0,51,0.7)]" />

      {/* ANIMATION STYLE */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>

    </div>
  );
}