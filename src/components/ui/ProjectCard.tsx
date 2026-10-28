"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  category: string;
  img1: string;
  img2: string;
  index: string;
  redirectUrl: string;
  redirectLabel?: string;
  onOpenModal: () => void;
}

export default function ProjectCard({
  title,
  category,
  img1,
  img2,
  index,
  redirectUrl,
  redirectLabel = "Open Platform",
  onOpenModal,
}: ProjectCardProps) {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  const handleRedirectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onOpenModal}
      className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden luxury-card border border-white/10 transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 cursor-pointer select-none"
    >
      {/* Background Fallback Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0910] via-[#0e090c] to-[#070709] z-0" />

      {/* Layer 1: Base Screenshot */}
      {!img1Error && (
        <img
          src={img1}
          alt={title}
          onError={() => setImg1Error(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-0 transition-opacity duration-700 ease-in-out z-0"
        />
      )}

      {/* Layer 2: Hover Screenshot */}
      {!img2Error && (
        <img
          src={img2}
          alt={`${title} Preview`}
          onError={() => setImg2Error(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-in-out z-0"
        />
      )}

      {/* Dark Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/55 to-transparent z-10 pointer-events-none" />

      {/* Top Meta: Index & Category */}
      <div className="relative z-20 flex items-center justify-between text-xs sm:text-sm font-mono text-gray-400">
        <span className="text-[#d4a373] tracking-widest font-semibold">{index}</span>
        <span className="uppercase tracking-wider text-gray-300 font-medium">
          {category}
        </span>
      </div>

      {/* Middle: Clean Centered Project Title */}
      <div className="relative z-20 text-center my-auto px-4 space-y-2">
        <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-[#f4a5b8] transition-colors duration-300 py-1 leading-snug">
          {title}
        </h3>
        <span className="inline-block text-xs font-mono text-gray-400 group-hover:text-[#d4a373] transition-colors">
          Click to inspect overview & README
        </span>
      </div>

      {/* Bottom Right: Direct Redirect Button to Website (or Repo for Beaverr) */}
      <div className="relative z-20 flex items-center justify-between pt-4">
        <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
          Explore Details ↗
        </span>
        <a
          href={redirectUrl}
          target="_blank"
          rel="noreferrer"
          onClick={handleRedirectClick}
          title={redirectLabel}
          className="p-3.5 rounded-full bg-white/10 hover:bg-[#d4a373] text-gray-200 hover:text-black border border-white/15 hover:border-[#d4a373] hover:scale-110 transition-all duration-300 shadow-xl ml-auto"
        >
          <FiArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
}
