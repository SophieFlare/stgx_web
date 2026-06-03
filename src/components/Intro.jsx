import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ open, onClose }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  useEffect(() => {
    if (!open) return;

    setText1("");
    setText2("");
    setText3("");
    setText4("");

    const lines = [
      {
        text: "Welcome to SopoTech Network",
        setter: setText1,
        speed: 30,
      },
      {
        text: "> secure tunnel: ACTIVE",
        setter: setText2,
        speed: 25,
      },
      {
        text: "> nodes: SYNCED",
        setter: setText3,
        speed: 25,
      },
      {
        text: '$SOPO = "Born_For_Deep_Tech_Exploration"',
        setter: setText4,
        speed: 20,
      },
    ];

    let i = 0;

    const typeLine = (
      line,
      setter,
      speed,
      callback
    ) => {
      let index = 0;

      const interval = setInterval(() => {
        setter(
          line.slice(0, index)
        );

        index++;

        if (index > line.length) {
          clearInterval(interval);
          callback?.();
        }
      }, speed);
    };

    const run = () => {
      if (i >= lines.length)
        return;

      typeLine(
        lines[i].text,
        lines[i].setter,
        lines[i].speed,
        () => {
          i++;
          run();
        }
      );
    };

    run();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="
          fixed inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-black/90
          backdrop-blur-md
        "
        >
          {/* LEFT CHARACTER */}

          <div
            className="
            fixed
            opacity-50
            left-[15%]
            z-[9998]
            pointer-events-none
          "
          >
            <div className="relative w-[410px] h-[570px]">
              <img
                src="/sopo_pixel.png"
                alt="character"
                className="
                w-full
                h-full
                object-cover
                drop-shadow-[0_0_35px_#ff0033]
              "
              />
            </div>
          </div>

          {/* CENTER WINDOW */}

          <motion.div
            initial={{
              scale: .85,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: .85,
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: .3,
              ease: "easeOut",
            }}
            className="
            w-[480px]
            bg-[#050505]
            border
            border-[#ff0033]
            shadow-[0_0_35px_rgba(255,0,51,.55)]
            font-mono
            text-[#ff3355]
            overflow-hidden
            relative
            z-10
          "
          >

            {/* HEADER */}

            <div
              className="
              flex
              justify-between
              items-center
              px-4
              py-2
              border-b
              border-[#ff003344]
              text-xs
              tracking-widest
            "
            >
              <span className="text-white">
                NETWORK // SESSION ACTIVE
              </span>

              <button
                onClick={onClose}
                className="
                text-white
                hover:text-[#ff0033]
                transition
              "
              >
                ✕
              </button>
            </div>

            {/* BODY */}

            <div className="p-5 space-y-3 text-sm">

              <div
                className="
                text-[#ff0033]
                uppercase
                font-bold
                drop-shadow-[0_0_8px_#ff0033]
              "
              >
                ● CONNECTION ESTABLISHED
              </div>

              <div className="text-white">
                {text1}
              </div>

              <div className="text-[#ff6b81] space-y-1">
                <div>{text2}</div>
                <div>{text3}</div>
              </div>

              <div
                className="
                border
                border-[#ff003344]
                p-3
                text-center
                text-white/80
                bg-[#120006]
                shadow-[inset_0_0_20px_rgba(255,0,51,.15)]
              "
              >
                {text4}
              </div>

            </div>

            {/* FOOTER */}

            <div
              className="
              text-[10px]
              text-[#ff3355aa]
              px-4
              py-2
              border-t
              border-[#ff003322]
              overflow-hidden
              whitespace-nowrap
            "
            >
              <motion.div
                animate={{
                  x:["0%","-50%"]
                }}
                transition={{
                  repeat:Infinity,
                  duration:10,
                  ease:"linear",
                }}
              >
                01010110
                01000001
                01000011
                01001111
                01010010
                00100000
                01101110
                01100101
                01110100
                01110111
                01101111
                01110010
                01101011
                00100000
                01000011
                01001111
                01001110
                01001110
                01000101
                01000011
                01010100
                01000101
                01000100
              </motion.div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}