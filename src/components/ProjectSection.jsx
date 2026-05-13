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
    if (!slides.length || !containerRef.current) return;

    // Header reveal animation (preserved)
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

    // 1. Set initial states - panels below (except first)
    slides.forEach((slide, i) => {
      if (i > 0) {
        gsap.set(slide, { yPercent: 100 });
      }
    });

    // 2. Build master timeline
    const master = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${(projects.length - 1) * window.innerHeight}`,
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    for (let i = 0; i < slides.length - 1; i++) {
      const current = slides[i];
      const next = slides[i + 1];

      // Current panel scales down (recedes behind)
      master.to(current, {
        scale: 0.9,
        duration: 1,
        ease: "none"
      }, i);

      // Next panel slides up from bottom and overlaps
      master.to(next, {
        yPercent: 0,
        duration: 1,
        ease: "none"
      }, i);
    }

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
  className="uppercase text-right w-full pr-0 md:pr-10 leading-none"
  style={{
    fontFamily: "'SageNav', sans-serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "2.5rem",
    letterSpacing: "0px",
  }}
>
  <div className="block leading-1.5px">OUR</div>

  <div
    className="block leading-none -mt-2 md:-mt-3"
    style={{ fontStyle: "italic" }}
  >
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
            className="project-slide absolute inset-0 w-full h-screen flex flex-col items-center overflow-hidden"
            style={{ 
              zIndex: index + 10,
              willChange: "transform",
              borderRadius: index > 0 ? "30px 30px 0 0" : "0",
              boxShadow: index > 0 ? "0 -20px 50px rgba(0,0,0,0.4)" : "none",
              backgroundColor: "#000" // Ensure background is solid for stacking
            }}
          >
            {/* FULL BACKGROUND IMAGE */}
            <div className="project-image absolute inset-0 w-full h-full overflow-hidden">
              <div className="image-inner w-full h-full">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
                {/* Subtle overlay for contrast without darkening the left side */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* SIMPLE TITLE - LEFT ALIGNED */}
            <div className="project-title-simple relative z-20 w-full pt-[15vh] md:pt-[25vh] px-[6vw] md:px-[8vw]">
              <h2
                className="text-white leading-none text-left uppercase"
                style={{
                  fontFamily: "'SageNav', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(30px, 6vw, 64px)",
                  letterSpacing: "0.05em",
                  textShadow: "0 4px 20px rgba(0,0,0,0.6)"
                }}
              >
                {project.title}
              </h2>
            </div>

            {/* PROJECT INFO */}
            <div className="project-details absolute bottom-8 right-6 md:bottom-12 md:right-12 text-right text-white z-30">
              <h4 className="mb-1 md:mb-2 uppercase flex flex-col items-end" style={{ fontFamily: "'SageNav', sans-serif", fontWeight: 400, fontSize: '24px', lineHeight: '1.2', textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                <span className="block md:inline">{project.subtitle.split(" - ")[0]}</span>
                <span className="block md:hidden h-0.5 w-full"></span>
                <span className="block md:inline">{project.subtitle.split(" - ")[1]}</span>
              </h4>
              <Link href="/projects" className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] hover:opacity-50 transition-opacity" style={{ fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", sans-serif', fontWeight: 400 }}>
                <span className="border-b border-white pb-0.5">View Project</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}