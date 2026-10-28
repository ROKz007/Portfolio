"use client";

import React, { useEffect } from "react";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  tags?: string[];
  websiteUrl?: string;
  repoUrl?: string;
  children: React.ReactNode;
}

export default function DetailModal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  tags,
  websiteUrl,
  repoUrl,
  children,
}: DetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c090c] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(200,122,62,0.15)] p-6 sm:p-8 flex flex-col justify-between space-y-6 text-gray-200"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5">
            {badge && (
              <span className="px-3 py-1 rounded-full bg-[#1b0a11] border border-[#d4a373]/40 text-[#d4a373] text-xs font-mono uppercase tracking-wider font-semibold">
                {badge}
              </span>
            )}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white pt-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-gray-400 font-sans">
                {subtitle}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="text-sm sm:text-base text-gray-300 space-y-4 font-sans leading-relaxed">
          {children}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="pt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-mono text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer Actions (Right-aligned links to Website & Repo) */}
        {(websiteUrl || repoUrl) && (
          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-end gap-3 font-sans">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.08] text-gray-200 text-sm font-medium transition-all flex items-center gap-2"
              >
                <FiGithub size={16} />
                <span>View Repository</span>
              </a>
            )}

            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e2b48d] via-[#d4a373] to-[#c87a3e] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Launch Live Website</span>
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
