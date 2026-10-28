"use client";

import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTerminal,
  FiCpu,
  FiLayers,
  FiShield,
  FiDatabase,
} from "react-icons/fi";
import HeroVisual from "./ui/HeroVisual";
import ProjectCard from "./ui/ProjectCard";
import DetailModal from "./ui/DetailModal";
import CyberTerminal from "./ui/CyberTerminal";

const TECH_ROLL = [
  "PYTHON",
  "GO",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "ANGULAR",
  "NODE.JS",
  "EXPRESS",
  "POSTGRESQL",
  "SUPABASE",
  "REDIS",
  "DOCKER",
  "AZURE DEVOPS",
  "MICROFRONTENDS",
  "TAILWIND CSS",
  "BULLMQ",
  "PRISMA",
];

export default function CyberLuxuryPortfolio() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen luxury-bg text-gray-200 selection:bg-[#c87a3e] selection:text-black overflow-x-hidden">
      
      {/* ================= ANCHORED FIXED NAV HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.08] bg-[#070709]/85 backdrop-blur-xl">
        <div className="w-full px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between font-mono">
          
          {/* Brand Left: ASHMIT */}
          <a
            href="#hero"
            className="font-display font-bold text-xl sm:text-2xl tracking-[0.25em] text-white hover:text-[#d4a373] transition-colors"
          >
            ASHMIT
          </a>

          {/* Centered Minimal Navigation */}
          <nav className="hidden md:flex items-center gap-10 font-sans text-base text-gray-400 font-medium">
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
          </nav>

          {/* Actions Right */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-3 text-gray-400 hover:text-[#f4a5b8] hover:bg-white/5 rounded-full transition-colors cursor-pointer"
              title="Open Terminal CLI"
              aria-label="Open Terminal"
            >
              <FiTerminal size={19} />
            </button>
            <a
              href="mailto:ashmitkarrok@gmail.com"
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-[#e2b48d] via-[#d4a373] to-[#c87a3e] text-black font-sans font-semibold text-sm sm:text-base hover:brightness-110 hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center w-full px-6 md:px-12 lg:px-16 pt-28 sm:pt-36 pb-20 md:pb-28"
      >
        {/* Enlarge & Tilted 3D Avatar Shifted Left & Down with Idle Slow Sway */}
        <HeroVisual />

        {/* Content Layer */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl space-y-8">
          
          {/* Subtle Minimal Kicker */}
          <div className="inline-flex items-center gap-2.5 font-mono text-sm uppercase tracking-[0.2em] text-[#d4a373]">
            <span className="w-2 h-2 rounded-full bg-[#d4a373] animate-pulse" />
            <span>Full Stack & Platform Engineering</span>
          </div>

          {/* Main Headline (Anti-clipping leading and padding) */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.14] py-2 overflow-visible">
            A New Depth in{" "}
            <span className="text-gradient-sakura font-extrabold italic inline-block pr-4 pb-1">
              Scalable Systems
            </span>
          </h1>

          {/* Description with Elevated Typography */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Hi, I&apos;m <span className="text-white font-medium">Ashmit Kar</span>. I engineer resilient microfrontends, high-concurrency Go RESTful APIs, and distributed event-driven platforms. Proven in production environments at Jio Platforms and Reliance Industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e2b48d] via-[#d4a373] to-[#c87a3e] text-black font-sans font-semibold text-base hover:scale-[1.02] transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Explore Projects</span>
              <FiArrowUpRight size={18} />
            </a>

            <a
              href="mailto:ashmitkarrok@gmail.com"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:border-[#d4a373]/60 hover:bg-white/[0.08] text-gray-200 font-sans font-medium text-base transition-all"
            >
              Initiate Contact
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/ROKz007"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/Ashmit-Kar"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Minimal Key Indicators (Inspired by Headphone Spec Bar) */}
          <div className="pt-8 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl text-sm font-mono">
            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-wider block text-xs">Architecture</span>
              <span className="text-white font-medium block text-base">Microfrontends & Go</span>
              <span className="text-gray-400 text-xs">JioCX Enterprise Portal</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-wider block text-xs">Scale</span>
              <span className="text-white font-medium block text-base">4-Tier Monorepo</span>
              <span className="text-gray-400 text-xs">RBAC, JWT & BullMQ</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-wider block text-xs">Discipline</span>
              <span className="text-white font-medium block text-base">Defect-Free PRs</span>
              <span className="text-gray-400 text-xs">Azure DevOps & Postman</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MINIMAL TECH ROLL RIBBON ================= */}
      <section className="border-y border-white/[0.08] bg-[#0a0709] py-4 overflow-hidden font-mono text-xs sm:text-sm text-gray-400 select-none">
        <div className="animate-luxury-marquee whitespace-nowrap flex items-center gap-12">
          {TECH_ROLL.concat(TECH_ROLL).map((tech, i) => (
            <span key={i} className="flex items-center gap-4 tracking-widest text-xs sm:text-sm text-gray-400 hover:text-[#d4a373] transition-colors">
              <span>{tech}</span>
              <span className="text-[#c87a3e] opacity-60 text-[10px]">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* ================= WORK EXPERIENCE ================= */}
      <section id="experience" className="w-full px-6 md:px-12 lg:px-16 py-28 space-y-12">
        <div className="space-y-2">
          <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#d4a373]">
            Production Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white py-2 leading-tight overflow-visible">
            Where Engineering{" "}
            <span className="text-gradient-sakura italic font-extrabold inline-block pr-4 pb-1">
              Meets Ownership
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light max-w-xl">
            Click on any company tile below to inspect the complete operational dossier and engineering highlights.
          </p>
        </div>

        {/* Minimal Experience Tiles: Only Company Name & Role with Frosted Glass Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Jio Platforms Tile */}
          <div
            onClick={() => setActiveModal("jio")}
            className="luxury-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 cursor-pointer group transition-all select-none"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono text-[#d4a373] uppercase tracking-wider block">
                  Software Development Intern
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                  Jio Platforms Limited
                </h3>
              </div>
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <FiArrowUpRight size={20} />
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono text-gray-400">
              <span>Navi Mumbai, Maharashtra</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">Click to inspect dossier ↗</span>
            </div>
          </div>

          {/* Reliance Industries Tile */}
          <div
            onClick={() => setActiveModal("reliance")}
            className="luxury-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 cursor-pointer group transition-all select-none"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono text-[#f4a5b8] uppercase tracking-wider block">
                  Software Developer Intern (Vocational)
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                  Reliance Industries Limited
                </h3>
              </div>
              <div className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <FiArrowUpRight size={20} />
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono text-gray-400">
              <span>Jamnagar, Gujarat</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">Click to inspect dossier ↗</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section id="projects" className="w-full px-6 md:px-12 lg:px-16 py-28 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#d4a373]">
              Portfolio Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white py-2 leading-tight overflow-visible">
              Featured <span className="text-gradient-sakura italic font-extrabold inline-block pr-4 pb-1">Platforms</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-sm">
            Hover tiles to inspect screenshot overlays. Click tile for README summary; click bottom-right ↗ for direct launch.
          </p>
        </div>

        {/* Minimal Project Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Arc-Sentinel: Redirects to Website on parent tile, repo in modal */}
          <ProjectCard
            index="01"
            title="Arc-Sentinel"
            category="AI Telemetry & RAG Chatbot"
            redirectUrl="https://arc-sentinel-web.vercel.app/"
            redirectLabel="Launch Arc-Sentinel Live"
            img1="/projects/arc-sentinel-1.png"
            img2="/projects/arc-sentinel-2.png"
            onOpenModal={() => setActiveModal("arc-sentinel")}
          />

          {/* S.P.A.W.N.: Redirects to Website on parent tile, repo in modal */}
          <ProjectCard
            index="02"
            title="S.P.A.W.N. Survival"
            category="Real-Time Coordination Portal"
            redirectUrl="https://s-p-a-w-n.onrender.com/"
            redirectLabel="Launch S.P.A.W.N. Live"
            img1="/projects/spawn-1.png"
            img2="/projects/spawn-2.png"
            onOpenModal={() => setActiveModal("spawn")}
          />

          {/* Beaverr: Not deployed -> Redirects to Repository only */}
          <ProjectCard
            index="03"
            title="Beaverr"
            category="Multi-Tenant Monorepo Platform"
            redirectUrl="https://github.com/ROKz007/Beaverr-ERP"
            redirectLabel="View Beaverr Repository"
            img1="/projects/beaverr-1.png"
            img2="/projects/beaverr-2.png"
            onOpenModal={() => setActiveModal("beaverr")}
          />

        </div>
      </section>

      {/* ================= CAPABILITIES & EDUCATION ================= */}
      <section id="skills" className="w-full px-6 md:px-12 lg:px-16 py-28 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tech Stack Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#d4a373]">
                Core Competencies
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white py-2 leading-tight overflow-visible">
                Technical <span className="text-gradient-copper inline-block pr-4 pb-1">Arsenal</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base font-sans">
              
              <div className="luxury-card p-7 rounded-3xl space-y-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#d4a373] flex items-center gap-2">
                  <FiCpu size={16} /> Languages
                </span>
                <p className="text-gray-300 font-light leading-relaxed text-base">
                  Python, JavaScript (ES6+), TypeScript, Go, HTML5, CSS3, SQL.
                </p>
              </div>

              <div className="luxury-card p-7 rounded-3xl space-y-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#f4a5b8] flex items-center gap-2">
                  <FiLayers size={16} /> Frameworks & Tools
                </span>
                <p className="text-gray-300 font-light leading-relaxed text-base">
                  React, Angular, Node.js, Express, Next.js, Tailwind CSS, Figma, Git, Azure DevOps, Postman.
                </p>
              </div>

              <div className="luxury-card p-7 rounded-3xl space-y-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#d4a373] flex items-center gap-2">
                  <FiDatabase size={16} /> Databases
                </span>
                <p className="text-gray-300 font-light leading-relaxed text-base">
                  MySQL, MS SQL Server, PostgreSQL, Supabase.
                </p>
              </div>

              <div className="luxury-card p-7 rounded-3xl space-y-3">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#f4a5b8] flex items-center gap-2">
                  <FiShield size={16} /> Engineering Concepts
                </span>
                <p className="text-gray-300 font-light leading-relaxed text-base">
                  OOP & Design Patterns, RESTful APIs, DBMS, Microfrontends, WebSockets, JWT & RBAC, RAG Pipelines, Isolation Forest.
                </p>
              </div>

            </div>
          </div>

          {/* Education & Academic Credentials (5 cols) */}
          <div id="education" className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-sm font-mono uppercase tracking-[0.2em] text-[#d4a373]">
                Academic Foundation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white py-2 leading-tight overflow-visible">
                Education
              </h2>
            </div>

            <div className="luxury-card p-8 sm:p-10 rounded-3xl space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-mono text-[#d4a373] uppercase tracking-wider block">
                  B.Tech in Computer Science Engineering
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Kalinga Institute of Industrial Technology
                </h3>
                <p className="text-sm text-gray-400 font-mono mt-1">
                  Bhubaneswar, Odisha • 2023 – 2027
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] space-y-2">
                <span className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wider block">
                  Relevant Coursework
                </span>
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Computer Networks, Software Engineering, Discrete Mathematics.
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between text-sm font-mono text-gray-400">
                <a href="tel:+918200705559" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FiPhone size={14} className="text-[#d4a373]" />
                  <span>+91-8200705559</span>
                </a>
                <a href="mailto:ashmitkarrok@gmail.com" className="text-[#d4a373] hover:underline">
                  ashmitkarrok@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= EDITORIAL FOOTER ================= */}
      <footer className="w-full px-6 md:px-12 lg:px-16 py-14 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-sm text-gray-400">
        <div>
          © 2026 Ashmit Kar. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/ROKz007" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/Ashmit-Kar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <button
            onClick={() => setTerminalOpen(true)}
            className="hover:text-[#f4a5b8] transition-colors cursor-pointer"
          >
            Terminal CLI
          </button>
        </div>
      </footer>

      {/* ================= DETAIL MODALS (POP-OUT WINDOWS) ================= */}
      
      {/* Jio Platforms Modal */}
      <DetailModal
        isOpen={activeModal === "jio"}
        onClose={() => setActiveModal(null)}
        title="Jio Platforms Limited"
        subtitle="Software Development Intern • Navi Mumbai, Maharashtra • Jun 2026 – Aug 2026"
        badge="Enterprise Internship"
        tags={["React", "TypeScript", "Go", "Angular", "Microfrontend", "PostgreSQL", "Postman", "Azure DevOps"]}
      >
        <div className="space-y-4">
          <p>
            Engineered a full-stack microfrontend page end-to-end for the <strong>JioCX Portal</strong> using React and TypeScript, backed by a RESTful API route built in Go, applying object-oriented design patterns and integrating seamlessly into the Angular host application.
          </p>
          <p>
            Extended and debugged production Go REST API routes against evolving business requirements, rigorously validating changes with Postman and PostgreSQL, and shipped defect-free through peer-reviewed pull requests on Git/Azure DevOps – reinforcing strong version-control and code-review discipline.
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 text-sm font-mono text-[#d4a373]">
            <p>✓ Microfrontend host-child lifecycle integration</p>
            <p>✓ High-throughput Go REST API endpoints</p>
            <p>✓ 100% defect-free peer-reviewed pull requests</p>
          </div>
        </div>
      </DetailModal>

      {/* Reliance Industries Modal */}
      <DetailModal
        isOpen={activeModal === "reliance"}
        onClose={() => setActiveModal(null)}
        title="Reliance Industries Limited"
        subtitle="Software Developer Intern (Vocational Training) • Jamnagar, Gujarat • May 2026 – Jun 2026"
        badge="Platform Engineering"
        tags={["Angular", "Node.js", "Express", "MS SQL Server", "Next.js", "JioPay", "JWT", "RBAC", "HTML5/CSS3"]}
      >
        <div className="space-y-4">
          <p>
            Architected and built a full-stack movie ticket booking platform (Angular, four-tier Node.js/Express, MS SQL Server) end-to-end, implementing JWT authentication, role-based access control (RBAC), and secure <strong>JioPay</strong> payment gateway integration – demonstrating full ownership of a production-grade platform-engineering effort.
          </p>
          <p>
            Refactored a React/TypeScript enterprise dashboard into 12+ statically-served HTML5/CSS3/JS pages with careful attention to UI/UX consistency, and independently designed and built a Next.js digital noticeboard platform with search/filter/sort and a full role-based approval workflow.
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 text-sm font-mono text-[#f4a5b8]">
            <p>✓ End-to-end payment gateway transaction settlement</p>
            <p>✓ Multi-role authentication & authorization matrix</p>
            <p>✓ 12+ enterprise dashboard pages migrated</p>
          </div>
        </div>
      </DetailModal>

      {/* Arc-Sentinel Modal */}
      <DetailModal
        isOpen={activeModal === "arc-sentinel"}
        onClose={() => setActiveModal(null)}
        title="Arc-Sentinel"
        subtitle="AI-Based Structural Health Monitoring & RAG Pipeline Incident Chatbot"
        badge="AI & Telemetry Platform"
        websiteUrl="https://arc-sentinel-web.vercel.app/"
        repoUrl="https://github.com/ROKz007/Arc-Sentinel"
        tags={["Python", "Supabase", "Isolation Forest", "RAG Pipeline", "Streamlit", "PostgreSQL Vector Store"]}
      >
        <div className="space-y-4">
          <p className="font-semibold text-white">
            Architecture & README Summary:
          </p>
          <p>
            Arc-Sentinel is an artificial intelligence-driven structural health monitoring platform designed to ingest and analyze continuous sensor telemetry in real time. It detects subtle structural anomalies before they manifest as critical faults.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-300">
            <li><strong>Anomaly Detection Engine:</strong> Employs an unsupervised Isolation Forest machine learning model to continuously evaluate multivariate sensor readings and flag micro-fault anomalies.</li>
            <li><strong>Argus AI Chatbot:</strong> Integrated a Retrieval-Augmented Generation (RAG) conversational agent powered by Supabase PostgreSQL vector store embeddings for natural-language queries against historical incidents and inspection logs.</li>
            <li><strong>Real-Time Telemetry Dashboard:</strong> Interactive Streamlit telemetry visualization displaying live sensor trends, risk heatmaps, and automated diagnostic summaries.</li>
          </ul>
        </div>
      </DetailModal>

      {/* S.P.A.W.N. Modal */}
      <DetailModal
        isOpen={activeModal === "spawn"}
        onClose={() => setActiveModal(null)}
        title="S.P.A.W.N. Survival Portal"
        subtitle="Real-Time Full-Stack Disaster & Threat Sector Coordination System"
        badge="Real-Time Systems"
        websiteUrl="https://s-p-a-w-n.onrender.com/"
        repoUrl="https://github.com/ROKz007/S.P.A.W.N."
        tags={["Node.js", "Express", "Supabase", "Socket.IO", "Leaflet.js", "JWT", "Bcrypt"]}
      >
        <div className="space-y-4">
          <p className="font-semibold text-white">
            Architecture & README Summary:
          </p>
          <p>
            S.P.A.W.N. is an emergency coordination platform engineered for real-time situational awareness during catastrophic events. It enables rapid communication, threat tracking, and resource allocation between survivors and response teams.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-300">
            <li><strong>Interactive Geospatial Threat Grid:</strong> Full-stack map powered by Leaflet.js mapping dynamic hazard zones, safe shelters, and hazard statuses across 25+ monitored sectors.</li>
            <li><strong>WebSocket Event Engine:</strong> Real-time bi-directional messaging and emergency broadcast SOS alerts handled with Socket.IO; persistent state stored in Supabase PostgreSQL.</li>
            <li><strong>Cryptographic Security & RBAC:</strong> REST API secured with stateless JWT sessions, bcrypt password hashing, and role-based access control isolating survivor distress logs from administrative command operations.</li>
          </ul>
        </div>
      </DetailModal>

      {/* Beaverr Modal */}
      <DetailModal
        isOpen={activeModal === "beaverr"}
        onClose={() => setActiveModal(null)}
        title="Beaverr ERP"
        subtitle="Multi-Tenant Residential-Society Operations Platform"
        badge="Enterprise Monorepo"
        repoUrl="https://github.com/ROKz007/Beaverr-ERP"
        tags={["Next.js", "Express", "Prisma", "PostgreSQL", "Redis", "Turborepo", "BullMQ", "Razorpay"]}
      >
        <div className="space-y-4">
          <p className="font-semibold text-white">
            Architecture & README Summary:
          </p>
          <p>
            Beaverr is a high-performance multi-tenant residential-society management platform architected in a Turborepo/pnpm monorepo. It manages resident service bookings, visitor security approvals, maintenance dues, and grievance workflows.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-300">
            <li><strong>Multi-Tenancy & Auth:</strong> Custom tenancy middleware with JWT and OTP authentication enforcing granular RBAC across society administrators, guards, and residents over a Prisma/PostgreSQL schema.</li>
            <li><strong>Asynchronous Job Queue:</strong> Built an event-driven booking workflow backed by Redis and BullMQ for strict SLA tracking and automated rule-based worker assignment.</li>
            <li><strong>Payment Integration:</strong> Integrated Razorpay payment gateway with webhook verification for automatic society dues invoicing and automated receipt generation.</li>
          </ul>
          <p className="text-xs text-gray-400 italic">
            * Note: Beaverr is maintained as an enterprise monorepo repository and is accessed directly via GitHub.
          </p>
        </div>
      </DetailModal>

      {/* Interactive Cyber Terminal Modal */}
      <CyberTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

    </div>
  );
}
