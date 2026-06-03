import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nickname: "",
    experience: "",
    message: "",
    interests: {
      hacking: false,
      networking: false,
      linux: false,
      cybersecurity: false,
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleInterest = (key) => {
    setForm({
      ...form,
      interests: {
        ...form.interests,
        [key]: !form.interests[key],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Signal transmitted...");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-3 sm:px-6 py-8">
      <form
        onSubmit={handleSubmit}
        className="
          w-full

          /* 👇 reduced width so it doesn't look fat */
          max-w-sm sm:max-w-md md:max-w-lg

          min-h-[600px] sm:min-h-[650px]

          bg-black/70
          border border-[#ff0033]

          rounded-xl

          p-4 sm:p-6 md:p-8

          shadow-[0_0_30px_rgba(255,0,51,0.25)]
          backdrop-blur-md

          flex flex-col
          gap-4
        "
      >
        {/* TITLE */}
        <h2 className="text-[#ff0033] font-bold tracking-widest text-center text-lg sm:text-xl md:text-2xl">
          NETCAT SIGNAL FORM
        </h2>

        {/* Nickname */}
        <input
          name="nickname"
          value={form.nickname}
          onChange={handleChange}
          placeholder="Alias..."
          className="
            w-full p-2 sm:p-3
            bg-black
            border border-[#ff0033]/50
            text-white
            focus:border-[#ff0033]
            outline-none
            text-sm sm:text-base
          "
        />

        {/* Experience */}
        <input
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Experience level..."
          className="
            w-full p-2 sm:p-3
            bg-black
            border border-[#ff0033]/50
            text-white
            focus:border-[#ff0033]
            outline-none
            text-sm sm:text-base
          "
        />

        {/* INTERESTS */}
        <div>
          <p className="text-xs sm:text-sm text-gray-300 mb-2">
            Interests
          </p>

          <div className="flex flex-wrap gap-2">
            {Object.keys(form.interests).map((key) => {
              const active = form.interests[key];

              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => toggleInterest(key)}
                  className={`
                    px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest
                    border transition-all duration-200

                    ${
                      active
                        ? "bg-[#ff0033] text-black border-[#ff0033] shadow-[0_0_12px_rgba(255,0,51,0.5)]"
                        : "bg-black text-[#ff0033] border-[#ff0033]/40"
                    }
                  `}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Encrypted message..."
          className="
            w-full flex-1
            min-h-[120px]

            p-2 sm:p-3

            bg-black
            border border-[#ff0033]/50
            text-white
            focus:border-[#ff0033]
            outline-none

            resize-none

            text-sm sm:text-base
          "
        />

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            w-full py-2 sm:py-3

            border border-[#ff0033]
            text-[#ff0033]
            font-bold tracking-widest

            text-sm sm:text-base

            hover:bg-[#ff0033]
            hover:text-black

            transition-all
            shadow-[0_0_25px_rgba(255,0,51,0.3)]
          "
        >
          TRANSMIT
        </button>
      </form>
    </div>
  );
};

export default Form;