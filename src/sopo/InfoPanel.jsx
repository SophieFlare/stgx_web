import React, { useState } from "react";

export default function CvRP() {
  const [active, setActive] = useState("profile");

  const tabs = [
    ["profile", "PROFILE"],
    ["skills", "SKILLS"],
    ["systems", "SYSTEMS"],
    ["tools", "TOOLS"],
    ["goals", "GOALS"]
  ];

  const data = {
    skills: [
      "React",
      "Python",
      "Networking",
      "Linux",
      "Cybersecurity"
    ],

    systems: [
      "Windows",
      "Kali Linux",
      "Kernel Rings",
      "OS Architecture"
    ],

    tools: [
      "Nmap",
      "Wireshark",
      "VS Code",
      "Git",
      "Figma"
    ],

    goals: [
      "Penetration Testing",
      "Security Research",
      "OS Design"
    ]
  };

  const current = tabs.findIndex(([k]) => k === active);

  const nextTab = () => {
    const next = (current + 1) % tabs.length;
    setActive(tabs[next][0]);
  };

  return (
    <div className="
      fixed right-0 top-0
      h-screen
      w-[350px]
      bg-black
      border-l border-sky-500/20
      p-4
      z-50
    ">

      <div className="
        h-full
        rounded-[24px]
        border border-white/10
        bg-[#060606]
        overflow-hidden
        flex flex-col
      ">

        {/* HEADER */}

        <div className="
        h-10
        px-4
        flex items-center gap-2
        border-b border-sky-500/10
        ">

          <div className="w-2 h-2 rounded-full bg-red-500"/>
          <div className="w-2 h-2 rounded-full bg-yellow-500"/>
          <div className="w-2 h-2 rounded-full bg-green-500"/>

          <div className="
          text-[10px]
          tracking-[4px]
          text-sky-400
          ml-3
          ">
            root@sopo.panel
          </div>

        </div>


        {/* TOP TABS */}

        <div className="
        px-5
        h-14
        border-b border-white/5
        flex items-center gap-6
        overflow-x-auto
        ">

          {tabs.map(([key,label])=>{

            const on=active===key;

            return(

              <button
                key={key}
                onClick={()=>setActive(key)}
                className="relative group flex-shrink-0"
              >

                <span className={`
                text-[11px]
                tracking-[3px]
                transition-colors duration-150

                ${
                  on
                  ? "text-white"
                  : "text-white/30 hover:text-sky-300"
                }
                `}>
                  {label}
                </span>

                <div className={`
                absolute
                left-0
                -bottom-[14px]
                h-px
                w-full

                ${
                  on
                  ? "bg-sky-400"
                  : "opacity-0 group-hover:opacity-100 bg-white"
                }
                `}/>

              </button>

            )

          })}

        </div>


        {/* SCREEN */}

        <div className="
        flex-1
        p-5
        overflow-hidden
        ">

          <div className="
          h-full
          rounded-xl
          border border-sky-500/10
          bg-black
          p-6
          ">

            {active==="profile" ? (

              <div className="
              h-full
              flex
              flex-col
              items-center
              justify-center
              ">

                <div className="
                w-32 h-32
                rounded-xl
                overflow-hidden
                border border-sky-500/20
                ">

                  <img
                  src="/cv/ss.jpg"
                  className="w-full h-full object-cover"
                  />

                </div>

                <h1 className="
                text-white
                text-2xl
                mt-5
                tracking-[5px]
                ">
                  SOPØ
                </h1>

                <div className="
                text-sky-400
                text-xs
                mt-2
                ">
                  SYSTEM USER // ONLINE
                </div>

              </div>

            ) : (

              <div className="
              h-full
              flex
              flex-col
              justify-center
              gap-7
              ">

                {data[active].map((item)=>(

                  <div
                  key={item}
                  className="
                  group
                  flex items-center gap-4
                  "
                  >

                    <div className="
                    w-10 h-px
                    bg-sky-500/40
                    group-hover:bg-white
                    transition-colors duration-150
                    "/>

                    <div className="
                    text-lg
                    text-white/50
                    group-hover:text-white
                    group-hover:translate-x-1
                    transition-all duration-150
                    ">

                      {item}

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>


        {/* BOTTOM BUTTON */}

        <div className="
        h-16
        border-t border-white/5
        flex items-center
        justify-end
        px-5
        ">

          <button
          onClick={nextTab}
          className="
          px-4 py-2
          border border-sky-500/20
          text-white/70
          text-xs
          tracking-[3px]

          hover:text-white
          hover:border-sky-500/50

          transition-colors duration-150
          "
          >
            NEXT →
          </button>

        </div>

      </div>

    </div>
  );
}