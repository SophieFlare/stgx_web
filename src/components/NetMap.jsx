import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaWifi, FaNetworkWired } from "react-icons/fa";
import { MdLan } from "react-icons/md";

const nodes = [
  { id: "CORE", type: "core", x: 50, y: 15 },
  { id: "ROUTER-1", type: "router", x: 30, y: 40 },
  { id: "ROUTER-2", type: "router", x: 70, y: 40 },
  { id: "LAN-A", type: "lan", x: 20, y: 70 },
  { id: "LAN-B", type: "lan", x: 40, y: 70 },
  { id: "LAN-C", type: "lan", x: 60, y: 70 },
  { id: "LAN-D", type: "lan", x: 80, y: 70 },
  { id: "WIFI-1", type: "wifi", x: 10, y: 90 },
  { id: "WIFI-2", type: "wifi", x: 90, y: 90 },
];

const connections = [
  ["CORE", "ROUTER-1"],
  ["CORE", "ROUTER-2"],
  ["ROUTER-1", "LAN-A"],
  ["ROUTER-1", "LAN-B"],
  ["ROUTER-2", "LAN-C"],
  ["ROUTER-2", "LAN-D"],
  ["LAN-A", "WIFI-1"],
  ["LAN-D", "WIFI-2"],
];

const iconMap = {
  core: FaServer,
  router: FaNetworkWired,
  lan: MdLan,
  wifi: FaWifi,
};

const NetMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rand =
        nodes[Math.floor(Math.random() * nodes.length)];

      setActiveNode(rand.id);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const [from, to] =
        connections[
          Math.floor(
            Math.random() * connections.length
          )
        ];

      setPackets((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          from,
          to,
          type:
            Math.random() > 0.5
              ? "TCP"
              : "UDP",
          progress: 0,
        },
      ]);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((prev) =>
        prev
          .map((p) => ({
            ...p,
            progress: p.progress + 0.04,
          }))
          .filter(
            (p) => p.progress < 1
          )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getNode = (id) =>
    nodes.find((n) => n.id === id);

  return (
    <motion.div
      className="
      absolute inset-0
      overflow-hidden
      bg-black
      pointer-events-none
    "
      initial={{
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.4,
      }}
    >

      {/* red ambient background */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,0,51,.18),transparent_60%)]
      "
      />

      {/* giant background symbol */}
      <motion.div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        z-0
        select-none
      "
        initial={{
          opacity:0,
          scale:.7
        }}
        animate={{
          opacity:.10,
          scale:1
        }}
      >
        <div
          className="
          text-[#ff0033]
          font-black
          leading-none
        "
          style={{
            fontSize:"20rem"
           
          }}
        >
          𑄝
        </div>
      </motion.div>

      {/* network connections */}
      <svg
        className="
        absolute
        inset-0
        w-full
        h-full
        z-10
      "
      >
        {connections.map(([a,b],i)=>{

          const n1=getNode(a)
          const n2=getNode(b)

          return(
            <line
              key={i}
              x1={`${n1.x}%`}
              y1={`${n1.y}%`}
              x2={`${n2.x}%`}
              y2={`${n2.y}%`}
              stroke="#ff0033"
              strokeWidth="2"
              opacity=".9"
              filter="
              drop-shadow(
              0 0 10px #ff0033
              )
            "
            />
          )

        })}

        {packets.map((p)=>{

          const n1=getNode(p.from)
          const n2=getNode(p.to)

          const x =
            n1.x +
            (n2.x-n1.x)
            * p.progress

          const y =
            n1.y +
            (n2.y-n1.y)
            * p.progress

          return(
            <circle
              key={p.id}
              cx={`${x}%`}
              cy={`${y}%`}
              r="4"
              fill={
                p.type==="TCP"
                ? "#ff0033"
                : "#ff4d6d"
              }
              style={{
                filter:
                "drop-shadow(0 0 12px #ff0033)"
              }}
            />
          )

        })}
      </svg>

      {/* nodes */}
      {nodes.map((node)=>{

        const Icon =
          iconMap[node.type]

        return(

          <motion.div
            key={node.id}
            className="
            absolute
            z-30
            flex
            items-center
            justify-center
          "
            style={{
              top:`calc(${node.y}% - 4%)`,
              left:`calc(${node.x}% - 2%)`,
              transform:
              "translate(-50%,-50%)"
            }}
            initial={{
              opacity:0,
              scale:.3
            }}
            animate={{
              opacity:1,
              scale:1
            }}
          >

            <div
              className={`
              w-16 h-16
              rounded-full
              border
              flex
              flex-col
              items-center
              justify-center
              bg-[#120006]
              border-[#ff0033]
              text-[#ff3355]
              backdrop-blur-md
              transition-all
              duration-300
              shadow-[0_0_20px_#ff0033]

              ${
                activeNode===node.id
                ?`
                scale-110
                text-white
                border-white
                shadow-[0_0_45px_#ff0033]
                `
                :""
              }
            `}
            >

              <Icon size={18}/>

              <span
                className="
                text-[8px]
                mt-1
                tracking-widest
              "
              >
                {node.id}
              </span>

            </div>

          </motion.div>

        )

      })}

    </motion.div>
  );
};

export default NetMap;