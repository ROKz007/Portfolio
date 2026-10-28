"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shinyColor?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
  shinyColor = "rgba(243, 208, 120, 0.9)", // Gold luxury shine default
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`bg-clip-text inline-block ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.3) 30%, ${shinyColor} 50%, rgba(255, 255, 255, 0.3) 70%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
}
