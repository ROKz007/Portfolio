"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiTerminal, FiX } from "react-icons/fi";

interface CyberTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CyberTerminal({ isOpen, onClose }: CyberTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "⚡ ROKz-OS v4.20.0 (Cyber-Luxury Kernel)" },
    { type: "output", text: "Type 'help' for available commands or 'sudo hire' to seal the deal." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs = [...logs, { type: "input" as const, text: `$ ${cmd}` }];

    switch (trimmed) {
      case "help":
        newLogs.push({
          type: "output",
          text: `Available commands:
  • skills       - Technical capabilities breakdown
  • projects     - Showcase of production platforms
  • experience   - Jio Platforms & Reliance internships
  • contact      - Reach out directly to Ashmit
  • vibe         - Gen-Z dev truth bomb
  • sudo hire    - Proceed with contract offer
  • clear        - Wipe screen buffer`,
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: `[LANGUAGES]    Python, JavaScript (ES6+), TypeScript, Go, HTML5, CSS3, SQL
[FRAMEWORKS]   React, Angular, Node.js, Express, Next.js, Tailwind CSS, Turborepo
[DATABASES]    MySQL, MS SQL Server, PostgreSQL, Supabase
[CONCEPTS]     Microfrontends, REST APIs, WebSockets, RBAC, RAG, Isolation Forest`,
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: `1. Arc-Sentinel  - AI structural health monitoring & RAG incident chatbot
2. S.P.A.W.N.     - Real-time disaster coordination with Leaflet & Socket.IO
3. Beaverr        - Multi-tenant society management monorepo with BullMQ`,
        });
        break;

      case "experience":
        newLogs.push({
          type: "output",
          text: `• Jio Platforms Limited (Jun 2026 - Aug 2026):
  Engineered full-stack microfrontend page (React/TS + Go REST API) into Angular host.
• Reliance Industries Limited (May 2026 - Jun 2026):
  Full-stack ticketing (Angular/Node/Express/SQL) + Next.js digital noticeboard.`,
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: `Email:    ashmitkarrok@gmail.com
Phone:    +91-8200705559
LinkedIn: https://linkedin.com/in/Ashmit-Kar
GitHub:   https://github.com/ROKz007`,
        });
        break;

      case "vibe": {
        const vibes = [
          "Vibe check: 100% verified. Bro doesn't write bugs, he writes undocumented easter eggs.",
          "Caffeine level: Dangerous. Production readiness: Absolute.",
          "TypeScript strict mode: Enabled. Lint warnings: Zero. No cap.",
          "Status: Cooking microfrontends at 3 AM while listening to Phonk.",
        ];
        newLogs.push({
          type: "output",
          text: vibes[Math.floor(Math.random() * vibes.length)],
        });
        break;
      }

      case "sudo hire":
      case "hire":
        newLogs.push({
          type: "output",
          text: `🚀 ACCESS GRANTED! Opening communication channel to ashmitkarrok@gmail.com... Welcome to the team!`,
        });
        setTimeout(() => {
          window.location.href = "mailto:ashmitkarrok@gmail.com?subject=Offer%20from%20Your%20Portfolio";
        }, 1200);
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          type: "output",
          text: `Command not recognized: '${cmd}'. Type 'help' for valid protocols.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl h-[480px] rounded-2xl bg-[#0a0709] border border-[#c87a3e]/50 shadow-[0_20px_60px_rgba(200,122,62,0.25)] flex flex-col overflow-hidden font-mono text-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#140b10] border-b border-[#c87a3e]/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e61f43]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#f3d078]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block" />
            <span className="ml-2 text-xs font-semibold text-[#f3d078] flex items-center gap-1.5 font-display">
              <FiTerminal size={13} /> ROKz-OS Terminal [bash]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Terminal Output */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-2 text-xs md:text-sm">
          {logs.map((log, index) => (
            <div
              key={index}
              className={
                log.type === "input"
                  ? "text-[#f3d078] font-bold"
                  : "text-gray-300 whitespace-pre-wrap leading-relaxed"
              }
            >
              {log.text}
            </div>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-[#11080d] border-t border-[#c87a3e]/30 flex items-center gap-2">
          <span className="text-[#f89bb4] font-bold text-xs md:text-sm">ashmit@rokz:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help'..."
            className="flex-1 bg-transparent text-white outline-none font-mono text-xs md:text-sm placeholder:text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
