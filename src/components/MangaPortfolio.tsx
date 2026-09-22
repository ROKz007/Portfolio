"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiLink, FiCode, FiDatabase, FiLayout, FiTerminal } from 'react-icons/fi';

export default function MangaPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Anime.js timeline for staggered entry
      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: '.anime-hero',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
      })
      .add({
        targets: '.anime-panel',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(150),
      }, '-=400');
    }
  }, []);

  return (
    <div ref={containerRef} className="space-y-12 pb-20">
      {/* HEADER / HERO */}
      <header className="anime-hero flex flex-col md:flex-row gap-8 items-center justify-between manga-panel sharp-cut p-8 md:p-12">
        <div className="space-y-4 flex-1">
          <h1 className="font-manga text-6xl md:text-8xl uppercase tracking-wider leading-none">
            Ashmit <span className="brush-stroke">Kar</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold bg-foreground text-background inline-block px-4 py-1 sharp-cut-reverse">
            FULL STACK DEVELOPER
          </h2>
          <p className="max-w-xl text-sm md:text-base font-bold leading-relaxed">
            I engineer resilient microfrontends, scalable RESTful APIs, and responsive full-stack solutions. Crafting code with discipline, object-oriented design patterns, and an eye for futuristic aesthetics.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 font-bold text-sm bg-gray-100 p-6 manga-panel sharp-cut w-full md:w-auto">
          <a href="tel:+918200705559" className="flex items-center gap-3 hover:text-accent transition-colors">
            <FiPhone size={18} /> +91-8200705559
          </a>
          <a href="mailto:ashmitkarrok@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
            <FiMail size={18} /> ashmitkarrok@gmail.com
          </a>
          <a href="https://linkedin.com/in/Ashmit-Kar" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
            <FaLinkedin size={18} /> linkedin.com/in/Ashmit-Kar
          </a>
          <a href="https://github.com/ROKz007" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
            <FaGithub size={18} /> github.com/ROKz007
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Experience & Education */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* EXPERIENCE */}
          <section className="space-y-6">
            <h3 className="font-manga text-4xl uppercase border-b-4 border-foreground inline-block pr-8">Experience</h3>
            
            <div className="anime-panel manga-panel p-6 space-y-4 sharp-cut">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 border-b-2 border-dashed border-gray-300 pb-2">
                <div>
                  <h4 className="font-bold text-xl text-accent">Jio Platforms Limited</h4>
                  <p className="font-bold">Software Development Intern</p>
                </div>
                <div className="text-right md:text-right text-sm font-bold bg-foreground text-background px-3 py-1">
                  Jun 2026 – Aug 2026<br />Navi Mumbai
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed font-semibold">
                <li>Engineered a full-stack microfrontend page end-to-end for JioCX Portal using <span className="bg-gray-200 px-1">React and TypeScript</span>, backed by a RESTful API route built in <span className="bg-gray-200 px-1">Go</span>.</li>
                <li>Applied object-oriented design patterns and integrated seamlessly into the Angular host application.</li>
                <li>Extended and debugged production Go REST API routes against evolving business requirements.</li>
                <li>Rigorously validated changes with Postman and PostgreSQL, shipping defect-free through Git/Azure DevOps.</li>
              </ul>
            </div>

            <div className="anime-panel manga-panel p-6 space-y-4 sharp-cut-reverse">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 border-b-2 border-dashed border-gray-300 pb-2">
                <div>
                  <h4 className="font-bold text-xl text-accent">Reliance Industries Limited</h4>
                  <p className="font-bold">Software Developer Intern (Vocational)</p>
                </div>
                <div className="text-right md:text-right text-sm font-bold bg-foreground text-background px-3 py-1">
                  May 2026 – Jun 2026<br />Jamnagar
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed font-semibold">
                <li>Architected a full-stack movie ticket booking platform (Angular, Node.js/Express, MS SQL Server) with JWT auth, RBAC, and secure JioPay integration.</li>
                <li>Refactored a React/TypeScript enterprise dashboard into 12+ statically-served HTML5/CSS3/JS pages maintaining UI/UX consistency.</li>
                <li>Independently designed & built a Next.js digital noticeboard platform with search/filter/sort and full approval workflow.</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="space-y-6">
            <h3 className="font-manga text-4xl uppercase border-b-4 border-foreground inline-block pr-8">Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="anime-panel manga-panel p-6 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg brush-stroke">Arc-Sentinel</h4>
                    <a href="#" className="hover:text-accent"><FiLink size={18}/></a>
                  </div>
                  <p className="text-xs font-bold text-gray-500 mt-1 mb-3">Python, Supabase, Isolation Forest, RAG, Streamlit</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm font-semibold">
                    <li>AI-based structural health monitoring platform with real-time telemetry dashboard.</li>
                    <li>Isolation Forest model to flag anomalous sensor readings.</li>
                    <li>Built Argus AI, a RAG-based chatbot over Supabase vector store.</li>
                  </ul>
                </div>
              </div>

              <div className="anime-panel manga-panel p-6 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg brush-stroke">S.P.A.W.N. Survival</h4>
                    <a href="#" className="hover:text-accent"><FiLink size={18}/></a>
                  </div>
                  <p className="text-xs font-bold text-gray-500 mt-1 mb-3">Node.js, Express, Supabase, Socket.IO, Leaflet.js, JWT</p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm font-semibold">
                    <li>Full-stack coordination platform with a live map showing threat zones.</li>
                    <li>REST API secured with JWT sessions & bcrypt; RBAC separation.</li>
                    <li>Real-time messaging and SOS alerts via Socket.IO.</li>
                  </ul>
                </div>
              </div>

              <div className="anime-panel manga-panel p-6 space-y-3 md:col-span-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg brush-stroke">Beaverr</h4>
                  <a href="#" className="hover:text-accent"><FaGithub size={18}/></a>
                </div>
                <p className="text-xs font-bold text-gray-500 mt-1 mb-3">Next.js, Express, Prisma, PostgreSQL, Redis, Turborepo</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm font-semibold">
                  <li>Full-stack multi-tenant platform for residential-society management.</li>
                  <li>JWT-based auth with RBAC in a Turborepo/pnpm monorepo.</li>
                  <li>Implemented booking workflow with BullMQ-backed SLA tracking and Razorpay integration.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: Skills & Education */}
        <div className="space-y-8">
          
          {/* TECHNICAL SKILLS */}
          <section className="space-y-6">
            <h3 className="font-manga text-4xl uppercase border-b-4 border-foreground inline-block pr-8">Skills</h3>
            
            <div className="anime-panel manga-panel p-6 space-y-6 bg-gray-50 sharp-cut">
              
              <div>
                <h4 className="flex items-center gap-2 font-bold mb-3 bg-foreground text-background inline-flex px-2 py-1"><FiTerminal size={16}/> Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript (ES6+)', 'TypeScript', 'Go', 'HTML5', 'CSS3', 'SQL'].map(skill => (
                    <span key={skill} className="border-2 border-foreground px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-bold mb-3 bg-foreground text-background inline-flex px-2 py-1"><FiLayout size={16}/> Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Angular', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS', 'Figma', 'Git', 'Azure DevOps', 'Postman'].map(skill => (
                    <span key={skill} className="border-2 border-foreground px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-bold mb-3 bg-foreground text-background inline-flex px-2 py-1"><FiDatabase size={16}/> Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'MS SQL Server', 'PostgreSQL', 'Supabase'].map(skill => (
                    <span key={skill} className="border-2 border-foreground px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-bold mb-3 bg-foreground text-background inline-flex px-2 py-1"><FiCode size={16}/> Concepts</h4>
                <div className="flex flex-wrap gap-2">
                  {['OOP & Patterns', 'RESTful APIs', 'Microfrontends', 'WebSockets', 'JWT & RBAC', 'RAG Pipelines', 'Isolation Forest', 'UI/UX Design'].map(skill => (
                    <span key={skill} className="border-2 border-foreground px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-accent text-white">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* EDUCATION */}
          <section className="space-y-6">
            <h3 className="font-manga text-4xl uppercase border-b-4 border-foreground inline-block pr-8">Education</h3>
            
            <div className="anime-panel manga-panel p-6 space-y-3 sharp-cut-reverse bg-foreground text-background">
              <h4 className="font-bold text-xl text-accent">Kalinga Institute of Industrial Technology</h4>
              <p className="font-bold text-sm">B.Tech in Computer Science Engineering</p>
              <div className="flex items-center gap-2 text-xs font-bold opacity-80">
                <FiMapPin size={14}/> Bhubaneswar, Odisha | 2023 - 2027
              </div>
              <p className="text-xs leading-relaxed mt-4 opacity-90 border-t border-gray-600 pt-3">
                <span className="font-bold text-accent">Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Computer Networks, Software Engineering, Discrete Mathematics.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
