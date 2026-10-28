"use client";

import React from "react";
import { FiHome, FiBriefcase, FiCode, FiCpu, FiBookOpen, FiTerminal } from "react-icons/fi";

interface GlassDockProps {
  onToggleTerminal?: () => void;
}

export default function GlassDock({ onToggleTerminal }: GlassDockProps) {
  const navItems = [
    { label: "Overview", href: "#hero", icon: <FiHome size={18} /> },
    { label: "Experience", href: "#experience", icon: <FiBriefcase size={18} /> },
    { label: "Projects", href: "#projects", icon: <FiCode size={18} /> },
    { label: "Tech Stack", href: "#skills", icon: <FiCpu size={18} /> },
    { label: "Education", href: "#education", icon: <FiBookOpen size={18} /> },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-[#0e0a0d]/80 backdrop-blur-xl border border-[rgba(200,122,62,0.35)] shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(200,122,62,0.15)] flex items-center gap-2 md:gap-3 transition-all duration-300">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="relative p-2.5 rounded-full text-gray-400 hover:text-[#f3d078] hover:bg-[#2b080f]/60 hover:border hover:border-[#c87a3e]/40 transition-all duration-200 group flex items-center justify-center"
          aria-label={item.label}
        >
          {item.icon}
          {/* Tooltip */}
          <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded bg-[#180509] border border-[#c87a3e]/40 text-[11px] font-mono text-[#f3d078] whitespace-nowrap shadow-lg pointer-events-none">
            {item.label}
          </span>
        </a>
      ))}

      <div className="h-4 w-[1px] bg-gray-700/60 mx-1" />

      {/* Terminal Launcher */}
      <button
        onClick={onToggleTerminal}
        className="relative p-2.5 rounded-full text-[#f89bb4] hover:text-white hover:bg-[#4a0e17]/70 hover:border hover:border-[#f89bb4]/50 transition-all duration-200 group flex items-center justify-center cursor-pointer"
        aria-label="Open Cyber Terminal"
      >
        <FiTerminal size={18} />
        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 px-2.5 py-1 rounded bg-[#180509] border border-[#f89bb4]/40 text-[11px] font-mono text-[#f89bb4] whitespace-nowrap shadow-lg pointer-events-none">
          Cyber CLI [~]
        </span>
      </button>
    </nav>
  );
}
