"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: 1, title: "RESIDENTIAL", subtitle: "Casa del Maré - Ibiza", image: "/new4.jpeg" },
  { id: 2, title: "DEVELOPMENT", subtitle: "Casa del Maré - Ibiza", image: "/resnew.jpeg" },
  { id: 3, title: "COMMERCIAL", subtitle: "Casa del Maré - Ibiza", image: "/commnew.jpeg" }
];

export default function ProjectSection() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray('.project-slide');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${slides.length * 250}%`,
        pin: true,
        scrub: true,
      }
    });

    // Header reveal animation
    gsap.from(headerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    slides.forEach((slide, i) => {
      const letters = slide.querySelectorAll('.letter-inner');
      const image = slide.querySelector('.project-image');
      const details = slide.querySelector('.project-details');
      const imageInner = slide.querySelector('.image-inner');

      // 0. INITIAL STATE (Immediate Visibility + 3-Row Pattern from Screenshot)
      gsap.set(letters, {
        y: (index) => {
          const isMobile = window.innerWidth < 768;
          if (isMobile) {
            if (index % 3 === 0) return "0vh";      // Row 1 (Top)
            if (index % 3 === 1) return "10vh";     // Row 3 (Bottom)
            return "5vh";                           // Row 2 (Middle)
          }
          // Desktop pattern (more scattered as before)
          if (index % 3 === 0) return "0vh";
          if (index % 3 === 1) return "70vh";
          return "35vh";
        },
        opacity: 1,
        scale: 1
      });

      // 1. CLIP PATH REVEAL
      if (i !== 0) {
        tl.fromTo(slide,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 2, ease: "none" },
          `slide-${i}`
        );
        // Removed scale animation to keep image at actual size
      }

      // 2. MERGE ANIMATION (To top row precisely)
      tl.to(letters, {
        y: "0%",
        scale: 1,
        duration: 2,
        ease: "power2.inOut",
        stagger: { each: 0.05, from: "start" }
      }, i === 0 ? "0" : ">");

      // 3. DETAILS REVEAL
      tl.fromTo(details,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // 4. SLIDE OUT (Moving letters up and away)
      if (i < slides.length - 1) {
        tl.to(letters, {
          y: "-150%",
          opacity: 0,
          stagger: 0.02,
          duration: 1,
          ease: "power2.in"
        }, "+=0.5");
      }
    });

  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="w-full bg-[#f8f7f3]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: 'BigCaslonFB';
          src: url('/fonts/BigCaslonFB-BlackItalic.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}} />
      {/* SECTION HEADER */}
      <section className="w-full flex flex-col items-end pt-30 pb-16 md:pb-12 text-black bg-[#f8f7f3] px-6 md:px-12">
        <h2
          ref={headerRef}
          className="uppercase leading-[0.8] text-right w-full pr-0 md:pr-10"
          style={{
            fontFamily: "'SageNav', sans-serif",
            fontWeight: 400,
            color: "rgb(0, 0, 0)",
            fontSize: "2.5rem",
            letterSpacing: "-0.02em"
          }}
        >
          <div className="block">OUR</div>
          <div className="block max-md:-mt-3" style={{ fontStyle: "italic" }}>
            PROJECTS
          </div>
        </h2>

        <p
          className="max-w-fit text-right font-normal mt-2 pr-0 md:pr-10"
          style={{
            color: 'rgb(0,0,0)',
            fontSize: '14px',
            lineHeight: '14px',
            fontFamily: "'__antiqueLegacy_623eb9', '__antiqueLegacy_Fallback_623eb9', sans-serif"
          }}
        >
          Designing commercial and residential  <br />
          environments.
        </p>

        <Link href="/projects"
          className="group relative mt-10 flex flex-col items-end px-0"
          style={{
            color: 'rgb(0,0,0)',

            fontFamily: "'Elicyon-Regular.Woff2', sans-serif"
          }}
        >
          <span className="uppercase tracking-[0.4em] text-[10px] font-medium mb-1 hover:opacity-50 transition-opacity pr-0 md:pr-10">
            <span className="border-b border-black pb-0.5">Discover our work</span>
          </span>
        </Link>
      </section>

      {/* PINNED AREA */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-slide absolute inset-0 w-full h-screen flex flex-col items-center"
            style={{ zIndex: index + 10 }}
          >
            {/* FULL BACKGROUND IMAGE */}
            <div className="project-image absolute inset-0 w-full h-full overflow-hidden">
              <div className="image-inner w-full h-full">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* TYPOGRAPHY - Strictly Defined Pattern */}
            <div className="relative z-20 w-full pt-[8vh] md:pt-[6vh] px-[4vw] md:px-[6vw]">
              <h2 className="flex justify-between w-full text-white mix-blend-exclusion leading-none">
                {project.title.split("").map((char, i) => (
                  <span key={i} className="flex-1 flex justify-center">
                    <span
                      className="letter-inner inline-block will-change-transform"
                      style={{
                        fontFamily: "'SageNav', sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(48px, 40vw, 8vw)" // Responsive font sizing: 22vw max for desktop
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </h2>
            </div>

            {/* PROJECT INFO */}
            <div className="project-details absolute bottom-8 right-6 md:bottom-12 md:right-12 text-right text-white z-30">
              <h4 className="mb-2 md:mb-4 uppercase flex flex-col items-end" style={{ fontFamily: "'SageNav', sans-serif", fontWeight: 400, fontSize: '35px', lineHeight: '1.1' }}>
                <span className="block md:inline">{project.subtitle.split(" - ")[0]}</span>
                <span className="block md:hidden h-0.5 w-full"></span>
                <span className="block md:inline">{project.subtitle.split(" - ")[1]}</span>
              </h4>
              <Link href="/projects" className="uppercase tracking-widest text-[11px] md:text-sm hover:opacity-50 transition-opacity" style={{ fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", sans-serif', fontWeight: 400 }}>
                <span className="border-b border-white pb-0.5">View Project</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}