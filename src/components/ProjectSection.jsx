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
        end: `+=${slides.length * 120}%`, // Balanced speed
        pin: true,
        scrub: 0.5,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
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
      const image = slide.querySelector('.project-image');
      const details = slide.querySelector('.project-details');
      const title = slide.querySelector('.project-title-simple');

      // 1. CLIP PATH REVEAL + PARALLAX EXIT
      if (i !== 0) {
        // Move previous slide up slightly (subtle parallax)
        tl.to(slides[i - 1].querySelector('.project-image'), {
          yPercent: -10,
          duration: 1,
          ease: "none"
        }, `slide-${i}`);

        // Move previous slide title up
        tl.to(slides[i - 1].querySelector('.project-title-simple'), {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "none"
        }, `slide-${i}`);

        // Next slide overlaps from bottom
        tl.fromTo(slide,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: "none" },
          `slide-${i}`
        );
      }

      // 2. TITLE REVEAL
      tl.fromTo(title,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        i === 0 ? "0" : ">-0.5"
      );

      // 3. DETAILS REVEAL
      tl.fromTo(details,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
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

            {/* SIMPLE TITLE - LEFT ALIGNED */}
            <div className="project-title-simple relative z-20 w-full pt-[15vh] md:pt-[25vh] px-[6vw] md:px-[8vw]">
              <h2
                className="text-white mix-blend-exclusion leading-none text-left uppercase"
                style={{
                  fontFamily: "'SageNav', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(30px, 6vw, 64px)",
                  letterSpacing: "0.05em"
                }}
              >
                {project.title}
              </h2>
            </div>

            {/* PROJECT INFO */}
            <div className="project-details absolute bottom-8 right-6 md:bottom-12 md:right-12 text-right text-white z-30">
              <h4 className="mb-1 md:mb-2 uppercase flex flex-col items-end" style={{ fontFamily: "'SageNav', sans-serif", fontWeight: 400, fontSize: '24px', lineHeight: '1.2' }}>
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