import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TerminalLogs() {
  const [started, setStarted] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [locked, setLocked] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const bootSequence = [
    "boot:// SOPHO profile init...",
    "kernel:// dev environment loaded...",
    "memory:// skills mapped...",
    "support:// IT module active...",
    "network:// systems online...",
    "security:// layer enabled...",
    "system:// CV terminal ready...",
  ];

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);

      let i = 0;
      let p = 0;

      const interval = setInterval(() => {
        setLogs((prev) => [...prev, bootSequence[i]]);
        i++;

        p += 100 / bootSequence.length;
        setProgress(Math.min(p, 100));

        if (i >= bootSequence.length) {
          clearInterval(interval);
          setLocked(true);
          setLogs((prev) => [...prev, ">> SOPHO ONLINE"]);
        }
      }, 650);
    }
  }, [inView, started]);

  const runCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case "scan":
        response = "OK | Programmer + IT Support";
        break;
      case "profile":
        response = "SOPHO | Dev + IT Support | Systems + Networking";
        break;
      case "skills":
        response = "React | Python | Linux | Networking | Troubleshooting";
        break;
      case "support":
        response = "IT Support | Diagnostics | User Systems Fix";
        break;
      case "dev":
        response = "Frontend Dev | UI Systems | React Engineering";
        break;
      case "network":
        response = "TCP/IP | Routing | System Connectivity";
        break;
      case "status":
        response = locked ? "ONLINE | CV ACTIVE" : "BOOTING...";
        break;
      default:
        response = `INVALID CMD: ${cmd}`;
    }

    setHistory((prev) => [...prev, { cmd, response }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    runCommand(input);
    setInput("");
  };

  return (
    <div
      ref={ref}
      className="absolute bottom-[5%] left-0 z-30 max-w-full"
    >
      <AnimatePresence>
        {started && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              w-[min(520px,90vw)]
              h-[min(320px,60vh)]
              bg-black/70
              border border-sky-400/40
              backdrop-blur-2xl
              rounded-lg
              font-mono text-base
              overflow-hidden
              shadow-[0_0_70px_rgba(56,189,248,0.25)]
              flex flex-col
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-sky-400/20 text-[12px] text-sky-300/70 tracking-widest">
              <span>SOPHO CV TERMINAL</span>
              <span className="text-sky-400">{progress.toFixed(0)}%</span>
            </div>

            {/* PROGRESS BAR */}
            <div className="h-[3px] bg-sky-900/40">
              <motion.div
                className="h-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* BOOT LOGS */}
            <div className="p-3 flex-1 overflow-y-auto text-sky-200 space-y-1 text-base">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="text-white">💎:</span>{" "}
                  <span className="text-sky-300">{log}</span>
                </motion.div>
              ))}
            </div>

            {/* COMMAND OUTPUT */}
            <div className="px-3 flex-1 overflow-y-auto text-sky-200 space-y-1 border-t border-sky-400/10 text-base">
              {history.map((h, i) => (
                <div key={i}>
                  <span className="text-white">› {h.cmd}</span>
                  <div className="text-sky-300 ml-2 whitespace-pre-line">
                    {h.response}
                  </div>
                </div>
              ))}
            </div>

            {/* INPUT */}
            <form
              onSubmit={handleSubmit}
              className="flex border-t border-sky-400/20"
            >
              <span className="px-3 py-2 text-white">root@sopo:</span>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={!locked}
                placeholder={locked ? "enter command..." : "booting..."}
                className="
                  flex-1 bg-transparent outline-none text-sky-300 px-2
                  disabled:opacity-50 text-base
                "
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}