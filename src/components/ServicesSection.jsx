"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  return (
    <>
      <section className="w-full flex flex-col items-start pt-30 pb-16 text-black bg-[#f8f7f3] px-6 md:px-12 overflow-hidden">
        <div className="w-full">

          <div className="mb-12 md:mb-16 flex flex-col items-start">
            <h2
              className="uppercase leading-[0.8] text-left w-full"
              style={{
                fontFamily: "'SageNav', sans-serif",
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                fontSize: "3rem",
                letterSpacing: "-0.02em"
              }}
            >
              <div className="block">OUR</div>
              <div className="block pl-10 md:pl-20 max-md:-mt-3" style={{ fontStyle: "italic" }}>
                SERVICES
              </div>
            </h2>
            <p
              className="text-[14px] leading-[1.4] mt-6 md:mt-5 max-w-[320px] text-left"
              style={{
                fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
              }}
            >
              We craft only the most thoughtful and visionary interiors, spanning
              residential, commercial, and landmark developments across the globe.
              Each space is defined not by trend, but by intent, shaped with
              precision, narrative and considered vision.
            </p>
          </div>

          {/* Staggered Image Cards */}
          <div className="relative flex flex-col md:flex-row items-start md:items-start md:justify-center gap-8 md:gap-4">
            {/* Card 1: INTERIOR DESIGN */}
            <div
              className="relative w-[48%] md:w-[280px] h-[300px] md:h-[400px] self-start md:self-auto cursor-pointer overflow-hidden"
              style={{ marginTop: "0px" }}>
              <img
                src="/service1.jpg"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                  style={{
                    color: "rgb(244, 242, 238)",
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  INTERIOR<br />DESIGN
                </span>
              </div>
            </div>

            {/* Card 2: ARCHITECTURE (Center-Low on Desktop, Bottom-Left on Mobile) */}
            <div
              className="relative w-[48%] md:w-[280px] h-[300px] md:h-[480px] self-end md:self-auto -mt-32 md:mt-24 cursor-pointer overflow-hidden"
            >
              <img
                src="/service2.jpg"
                alt="Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                  style={{
                    color: "rgb(244, 242, 238)",
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  ARCHITECTURE
                </span>
              </div>
            </div>

            {/* Card 3: PROJECT MANAGEMENT (Right-High on Desktop, Middle-Right on Mobile) */}
            <div
              className="relative w-[48%] md:w-[280px] h-[300px] md:h-[400px] self-start md:self-auto -mt-32 md:mt-0 cursor-pointer overflow-hidden"
            >
              <img
                src="/service3.png"
                alt="Project Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                  style={{
                    color: "rgb(244, 242, 238)",
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  PROJECT<br />MANAGEMENT
                </span>
              </div>
            </div>
          </div>

          {/* Bottom right: text block + explore link */}
          <div className="flex justify-start md:justify-end mt-12 md:mt-24">
            <div className="max-w-full md:max-w-[400px] text-left md:text-right">
              <p
                className="text-[14px] leading-[1.6] mb-8"
                style={{
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                  fontWeight: 400,
                  color: "rgb(0, 0, 0)",
                }}
              >
                At Elicyon, we take pride in offering a comprehensive suite of
                services that infuse every space with curated luxury, thoughtful
                consideration, and a deeply personal touch.
              </p>

              <Link
                href="/services"
                className="group relative mt-10 flex flex-col items-start md:items-end px-0"
                style={{
                  fontFamily: "'Elicyon-Regular.Woff2', sans-serif",
                  fontWeight: 400,
                  color: "rgb(0, 0, 0)",
                }}
              >
                <span className="uppercase tracking-[0.4em] text-[10px] font-medium mb-1 hover:opacity-50 transition-opacity">
                  <span className="border-b border-black pb-0.5">Explore Our Services</span>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
      <ArcMarquee />
    </>
  );
}

const IMAGES = [
  "arc1.jpg",
  "arc2.jpg",
  "arc3.jpg",
  "arc4.jpeg",
  "arc5.jpeg",
  "arc6.jpg",
  "arc7.jpg",
  "arc8.jpeg",
  "arc9.jpg",
  "arc10.jpeg",
];

const CARD_W = 350;
const CARD_H = 460;
const CARD_GAP = 36;
const STEP = CARD_W + CARD_GAP;
const TOTAL = IMAGES.length;
const CLONE_COUNT = 3;
const ALL = Array.from({ length: TOTAL * CLONE_COUNT }, (_, i) => IMAGES[i % TOTAL]);

const ARC_RADIUS = 1800;
const BASE_SPEED = 0.8;
const SCROLL_BOOST_MAX = 10;
const DECAY = 0.93;
const REVERT_DELAY = 800;

function getArcTransform(worldX, centerX) {
  const x = worldX - centerX;
  const angle = x / ARC_RADIUS;
  const y = ARC_RADIUS - Math.sqrt(Math.max(0, ARC_RADIUS * ARC_RADIUS - x * x));
  return { y, rotateDeg: (angle * 180) / Math.PI };
}

function ArcMarquee() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const posRef = useRef(-(TOTAL * STEP));
  const dirRef = useRef(1);
  const boostRef = useRef(0);
  const rafRef = useRef(0);
  const lastScrollY = useRef(0);
  const revertTimer = useRef(null);
  const isVisibleRef = useRef(false);

  const [tick, setTick] = useState(0);
  const [containerW, setContainerW] = useState(1200);

  // For ScrollingText effect
  const scrollContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into words for a smoother reveal
    const text = textElement.innerText;
    const words = text.split(" ");
    textElement.innerHTML = words
      .map((word) => `<span style="display: inline-block; white-space: pre;">${word} </span>`)
      .join("");

    const spans = textElement.querySelectorAll("span");

    const tl = gsap.to(spans, {
      color: "rgb(255, 255, 255)",
      stagger: 0.1,
      ease: "power2.out", // Add a subtle ease for smoother transition
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top 85%",
        end: "center 50%",
        scrub: 4, // Smoothing: animation takes 1s to catch up to the scroll position
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Resize observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerW(el.offsetWidth));
    ro.observe(el);
    setContainerW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  // RAF — only moves when section is visible
  useEffect(() => {
    const setW = TOTAL * STEP;
    const loop = () => {
      if (isVisibleRef.current) {
        const speed = BASE_SPEED * (1 + boostRef.current * 0.12);
        posRef.current -= speed * dirRef.current;

        if (posRef.current < -(setW * 2)) posRef.current += setW;
        if (posRef.current > -setW) posRef.current -= setW;

        boostRef.current = boostRef.current > 0.05 ? boostRef.current * DECAY : 0;
        setTick((t) => t + 1);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // IntersectionObserver — pause when out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll — direction only when visible
  useEffect(() => {
    const onScroll = () => {
      if (!isVisibleRef.current) return;

      const cur = window.scrollY;
      const delta = cur - lastScrollY.current;
      lastScrollY.current = cur;

      if (delta > 0) dirRef.current = 1;
      else if (delta < 0) dirRef.current = -1;

      boostRef.current = Math.min(
        boostRef.current + Math.abs(delta) * 0.5,
        SCROLL_BOOST_MAX
      );

      if (revertTimer.current) clearTimeout(revertTimer.current);
      revertTimer.current = setTimeout(() => {
        dirRef.current = 1;
      }, REVERT_DELAY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const centerX = containerW / 2;

  return (
    <>

      {/* Gallery section — animation only when visible */}
      <div className="arc-section" ref={sectionRef} id="arc-section" style={{ background: '#734128' }}>
        <div className="arc-hero">
          <h2 style={{ fontFamily: "'SageNav', sans-serif", fontWeight: 400 }}>Our Gallery</h2>

        </div>

        <div className="arc-stage" ref={containerRef}>
          {ALL.map((src, i) => {
            const worldX = posRef.current + i * STEP + CARD_W / 2;
            if (worldX < -CARD_W * 2 || worldX > containerW + CARD_W * 2) return null;

            const { y: arcY, rotateDeg } = getArcTransform(worldX, centerX);
            const distFromCenter = Math.abs(worldX - centerX);
            const proximity = Math.max(0, 1 - distFromCenter / (containerW * 0.6));
            const scale = 0.82 + proximity * 0.18;
            const opacity = 1; // Keep labels fully visible at all times

            return (
              <div
                key={i}
                className="arc-card"
                style={{
                  left: `${worldX - CARD_W / 2}px`,
                  top: `${arcY}px`,
                  transform: `rotate(${rotateDeg}deg) scale(${scale})`,
                  opacity,
                  zIndex: Math.round(proximity * 10),
                }}
              >
                <img src={src} alt="" draggable={false} />
              </div>
            );
          })}
        </div>

        <div className="arc-hint">
          <div className="arc-dot" />
          <div className="arc-dot" />
          <div className="arc-dot" />
        </div>

        {/* Seamlessly integrated scrolling text effect */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-24 px-6 md:px-10 py-16 md:py-20 pb-24 md:pb-48 pt-12 md:pt-24"
        >
          <div className="flex items-center gap-3 self-start md:mt-6 relative md:-left-8">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: "#e8e6e7" }} />
            <span
              className="text-xs tracking-widest uppercase whitespace-nowrap"
              style={{
                color: "#e8e6e7",
                fontFamily: "'SageNav', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              With whom
            </span>
          </div>

          <div className="max-w-4xl text-start">
            <p
              ref={textRef}
              className="text-[#603522] text-[24px] md:text-[48px] leading-[1.2] md:leading-[53px]"
              style={{
                fontFamily: "'Elicyon', serif",
                fontWeight: 400,
              }}
            >
              Our clients range from commercial brands to private residences and project developers, all seeking refined, high-quality spaces with a strong design identity.
            </p>

            <Link href="/projects">
              <button
                className="mt-8 md:mt-12 px-8 py-3 border border-white/20 rounded-full text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                style={{
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                }}
              >
                gallery →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
