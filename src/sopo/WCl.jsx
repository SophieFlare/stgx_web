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

      <div className="flex w-max animate-scroll">

        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            className="
              px-3 md:px-6
              py-2 md:py-3

              text-[#ff0033]
              font-mono

              text-[11px]
              sm:text-xs
              md:text-sm
              lg:text-base

              tracking-wider md:tracking-widest
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

      <div className="h-[2px] w-full bg-[#ff0033]/40 shadow-[0_0_25px_rgba(255,0,51,0.7)]" />

      <style jsx>{`
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
}