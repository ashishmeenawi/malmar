"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "./Navbar";

const HeroSection = ({ isLoading }) => {
  const container = useRef(null);
  const heroImage = useRef(null);
  const heroText = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Keep only if NOT using Lenis
    ScrollTrigger.normalizeScroll(true);

    if (heroImage.current) {
      heroImage.current.play().catch(() => {});
    }
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 📱 Mobile
      mm.add("(max-width: 767px)", () => {
        gsap.to(heroText.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });
      });

      // 💻 Desktop
      mm.add("(min-width: 768px)", () => {
        gsap.to(heroText.current, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });
      });

      // 🎥 Video zoom
      gsap.fromTo(
        heroImage.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        }
      );

      // ✨ Text animation
      if (!isLoading) {
        gsap.fromTo(
          ".hero-line",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }
    },
    { scope: container, dependencies: [isLoading] }
  );

  return (
    <div ref={container} className="relative bg-[#f4f1ea] selection:bg-stone-200">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* 🎥 Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroImage}
            src="/MMM.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/30" />

        {/* ✨ Text */}
        <div
          ref={heroText}
          className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 select-none will-change-transform"
        >
          <h1
            className="w-full font-serif font-normal uppercase"
            style={{ color: "rgb(244, 242, 238)" }}
          >

            {/* 📱 MOBILE → 4 LINES */}
            <div className="md:hidden text-center mt-16">
              <div className="hero-line font-[SageNav] text-[26px] leading-[0.95]">
                WE DESIGN
              </div>
              <div className="hero-line font-[SageNav] text-[26px] leading-[0.95]">
                Timeless
              </div>
              <div className="hero-line font-[SageNav] text-[26px] leading-[0.95] italic">
                Tailored
              </div>
              <div className="hero-line font-[SageNav] text-[26px] leading-[0.95] italic">
                Spaces
              </div>
            </div>

            {/* 💻 DESKTOP → UNCHANGED */}
            <div className="hidden md:block">

              <div
                className="hero-line text-center w-full mt-16 md:mt-24 
                font-[SageNav] font-normal 
                text-[55px] leading-[0.9]"
              >
                WE DESIGN Timeless
              </div>

              <div
                className="hero-line w-full flex justify-center items-center 
                font-[SageNav] font-normal 
                text-[55px] leading-[0.9]"
              >
                <span className="text-center italic">
                  Tailored Spaces
                </span>
              </div>

            </div>

          </h1>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;