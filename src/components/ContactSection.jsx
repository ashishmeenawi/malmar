"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(
    () => {
      // 1. Background Parallax - Moves up as the user scrolls down
      gsap.to(bgRef.current, {
        yPercent: -15, // Moves the background image up
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-[#F3F0E9]"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-[130%] z-0"
        style={{
          backgroundImage: 'url("/contact.jpg")', // Fallback to an existing image
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* The Expanding White Card */}
      <div className="relative z-10 w-full flex flex-col items-center px-6">
        <div
          ref={cardRef}
          className="group relative bg-white p-12 md:p-20 text-center transition-all duration-700 ease-in-out hover:scale-[1.03] hover:px-24 max-w-2xl cursor-pointer shadow-2xl"
        >
          {/* Internal Border that "expands" */}
          <div className="absolute inset-4 border border-black/10 pointer-events-none transition-all duration-700 group-hover:inset-2" />

          <h2
            className="mb-12"
            style={{
              fontFamily: "'SageNav', sans-serif",
              fontSize: "26px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "31px",
              color: "rgb(0, 0, 0)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Get in touch to start <br />
            <span
              style={{
                fontFamily: "'Elicyon', serif",
                fontStyle: "italic",
                letterSpacing: "0.05em",
                textTransform: "none",
                display: "block",
                marginTop: "8px"
              }}
            >
              your creative adventure
            </span>
          </h2>

          <button
            style={{
              fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
              fontSize: "10px",
              letterSpacing: "0.4em",
              fontWeight: 400,
              textTransform: "uppercase",
              borderBottom: "1px solid #1a1a1a",
              paddingBottom: "6px",
              background: "none",
              border: "none",
              borderBottom: "1px solid #1a1a1a",
              cursor: "pointer",
              color: "#1a1a1a",
              transition: "opacity 300ms",
            }}
            className="hover:opacity-50"
          >
            Let's Begin
          </button>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 text-center">
          <p
            style={{
              fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
              fontSize: "26px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "31px",
              color: "rgb(0, 0, 0)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              textShadow: "0px 4px 12px rgba(0,0,0,0.6)",
            }}
          >

          </p>
        </div>
      </div>
    </section>
  );
}
