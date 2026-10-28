"use client";

import React, { useState, useEffect, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export default function DecryptedText({
  text,
  speed = 45,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~<>{}[]",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-[#c87a3e]",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>) => {
      const textLen = text.length;
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLen - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLen / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1;
          if (nextIndex >= 0 && nextIndex < textLen && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }
          for (let i = 0; i < textLen; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const shuffleText = () => {
      if (sequential) {
        if (revealedIndices.size < text.length) {
          const nextIndex = getNextIndex(revealedIndices);
          setRevealedIndices((prev) => new Set([...prev, nextIndex]));
          setDisplayText((prevText) =>
            prevText
              .split("")
              .map((char, i) => {
                if (char === " ") return " ";
                if (revealedIndices.has(i) || i === nextIndex) {
                  return text[i];
                }
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join("")
          );
        } else {
          setIsScrambling(false);
          clearInterval(interval);
        }
      } else {
        setDisplayText(
          text
            .split("")
            .map((char) => {
              if (char === " ") return " ";
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );
        currentIteration++;
        if (currentIteration >= maxIterations) {
          setDisplayText(text);
          setIsScrambling(false);
          clearInterval(interval);
        }
      }
    };

    if (isScrambling) {
      interval = setInterval(shuffleText, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isScrambling, text, speed, maxIterations, sequential, revealDirection, characters, revealedIndices]);

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isScrambling) {
              setRevealedIndices(new Set());
              setIsScrambling(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" && !isScrambling) {
      setIsHovering(true);
      setRevealedIndices(new Set());
      setIsScrambling(true);
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      setIsHovering(false);
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${parentClassName}`}
    >
      {displayText.split("").map((char, index) => {
        const isRevealed = revealedIndices.has(index) || !isScrambling;
        return (
          <span
            key={index}
            className={isRevealed ? className : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
