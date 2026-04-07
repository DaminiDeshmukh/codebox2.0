"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-game relative overflow-hidden">

      {/* 🌌 animated glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffffff15,transparent_60%)] animate-pulse" />

      {/* 🧊 back card (depth layer) */}
      <div className="absolute w-[420px] h-[520px] bg-white/5 rounded-3xl blur-xl translate-x-4 translate-y-4" />

      {/* 🎯 main card */}
      <div className="relative w-[400px] rounded-2xl border border-white/10 bg-[#0e0e0e]/80 backdrop-blur-xl p-8 shadow-[0_0_60px_#ffffff10]">

        {/* 🧠 top subtle label */}
        <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-2">
          AUTH SYSTEM
        </p>

        {/* 🎮 heading */}
        <h1 className="text-white text-2xl mb-6 tracking-wide">
          Welcome Back
        </h1>

        {/* ⚡ Clerk */}
        <SignIn
          appearance={{
            elements: {
              card: "bg-transparent shadow-none border-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",

              formButtonPrimary:
                "bg-white text-black font-semibold rounded-lg hover:scale-[1.03] transition-all",

              formFieldInput:
                "bg-[#111] border border-white/10 text-white focus:border-white rounded-md",

              socialButtonsBlockButton:
                "bg-[#111] border border-white/10 text-white hover:bg-[#1a1a1a] rounded-md",

              footerActionLink:
                "text-gray-400 hover:text-white transition",
            },
          }}
        />

        {/* ✨ bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}