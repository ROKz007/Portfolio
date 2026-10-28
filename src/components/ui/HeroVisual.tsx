"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";

const MEME_TAKES = [
  "bro is cooking full-stack microfrontends",
  "pushed directly to main, 0 regrets",
  "100% bug-free (compiled once on local)",
  "JioCX production survivor",
  "450mg caffeine in my bloodstream",
  "clean architecture, no cap",
];

export default function HeroVisual() {
  const [memeIndex, setMemeIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      mousePos.current = { x: normX * 16, y: normY * 14 };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 60 FPS Loop combining Smooth Mouse Parallax + Idle Slow Floating Sway
    let animationId: number;
    const animate = (timestamp: number) => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.08;

      // Gentle continuous idle sway (floating sine wave)
      const swayY = Math.sin(timestamp * 0.0012) * 9; // float up & down ±9px
      const swayX = Math.cos(timestamp * 0.0008) * 5; // float side to side ±5px
      const swayAngle = Math.sin(timestamp * 0.001) * 2.5; // gentle tilt sway ±2.5deg

      const totalX = currentPos.current.x + swayX;
      const totalY = currentPos.current.y + swayY;
      const totalRot = -10 + swayAngle;

      if (visualRef.current) {
        visualRef.current.style.transform = `translate3d(${totalX}px, ${totalY}px, 0) rotate(${totalRot}deg) scale(1.12)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleClick = () => {
    setMemeIndex((prev) => (prev + 1) % MEME_TAKES.length);
    setShowBubble(true);

    if (visualRef.current) {
      anime.remove(visualRef.current);
      anime({
        targets: visualRef.current,
        scale: [1.02, 1.22, 1.12],
        rotate: [-10, -15, -10],
        duration: 700,
        easing: "spring(1, 80, 10, 0)",
      });
    }

    setTimeout(() => {
      setShowBubble(false);
    }, 4000);
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-28 sm:top-36 md:top-40 lg:top-44 right-6 sm:right-12 md:right-20 lg:right-28 xl:right-36 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] pointer-events-auto select-none z-0 overflow-visible flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500"
    >
      {/* Ambient Radial Vignette & Ruby Glow for Background Blending */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c87a3e]/15 via-[#64111e]/25 to-transparent blur-3xl pointer-events-none" />

      {/* Floating 3D Character with Idle Slow Sway & Mouse Tracking */}
      <div
        ref={visualRef}
        onClick={handleClick}
        className="relative w-full h-full cursor-pointer transition-transform duration-100"
        style={{
          transform: "rotate(-10deg) scale(1.12)",
          maskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
        }}
      >
        <Image
          src="/avatar.png"
          alt="Ashmit Cybernetic Avatar"
          fill
          sizes="(max-width: 1024px) 440px, 540px"
          className="object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)]"
          priority
        />
      </div>

      {/* Minimal Floating Status Badge on Click */}
      {showBubble && (
        <div className="absolute top-8 left-0 sm:-left-12 px-4 py-2 rounded-xl bg-[#14080e]/95 backdrop-blur-md border border-[#f4a5b8]/30 shadow-2xl text-xs font-mono text-[#f4a5b8] animate-in fade-in zoom-in-95 duration-200 pointer-events-none z-20">
          <span className="text-[10px] text-[#d4a373] block uppercase tracking-wider font-semibold">
            ROKz AI CORE
          </span>
          {MEME_TAKES[memeIndex]}
        </div>
      )}
    </div>
  );
}
