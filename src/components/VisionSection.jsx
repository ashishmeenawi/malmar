"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function VisionSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(
    () => {
      // 1. Background Parallax — moves up slower than scroll
      gsap.to(bgRef.current, {
        yPercent: -15, // Adjusted to avoid revealing bottom edge
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Central image clip-path reveal + unscale
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(10% 10% 10% 10%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // 3. Headline fade + slide up
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      // 4. Description text fade in
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="vision-section"
      style={{
        position: "relative",
        minHeight: "120vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#1c1b19",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .vision-section { padding: 120px 24px 100px 24px !important; }
          .vision-title { text-align: center !important; }
          .vision-card { max-width: 280px !important; margin: 0 auto !important; }
          .vision-desc { text-align: center !important; margin: 52px auto 0 auto !important; }
        }
      `}</style>

      {/* ── Parallax Background Layer ── */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "130%", // Slightly smaller but starts at top
          top: 0,
          zIndex: 0,
          backgroundImage: 'url("/visionnew2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* ── Content Layer ── */}
      <div
        className="vision-content-wrapper"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Headline */}
        <div ref={headlineRef} style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            className="vision-title"
            style={{
              fontFamily: "'SageNav', sans-serif",
              fontSize: "48px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "61px",
              color: "rgb(244, 242, 238)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ display: "block" }}>Leading</span>
            <span style={{ display: "block", marginTop: "-12px" }}>
              <em style={{ fontStyle: "italic", letterSpacing: "0.1em" }}>the</em>{" "}
              Vision
            </span>
          </h2>
        </div>

        {/* Central Image Card */}
        <div
          className="vision-card"
          style={{
            width: "100%",
            maxWidth: "420px",
            aspectRatio: "4 / 5",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        >
          <img
            ref={imageRef}
            src="/visionnew.jpg"
            alt="Leading the Vision"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Description + CTA */}
        <div
          ref={descRef}
          className="vision-desc"
          style={{
            maxWidth: "480px",
            marginTop: "52px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontSize: "14px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "17px",
              color: "rgb(244, 242, 238)",
              marginBottom: "36px",
              letterSpacing: "0.02em",
            }}
          >
            Elicyon was founded to redefine luxury design through a
            seamless integration of architecture, interiors, and project
            delivery within one cohesive studio. At the heart of our
            vision is the studio itself: a team of specialists,
            collaborators and craftspeople who bring each project to
            life. Meet the Directors leading the vision, explore career
            opportunities and discover our philosophy.
          </p>

          <button
            style={{
              fontFamily: "'Elicyon', serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgb(244, 242, 238)",
              background: "none",
              border: "none",
              paddingBottom: "6px",
              cursor: "pointer",
            }}
          >
            View Studio
          </button>
        </div>
      </div>
    </section>
  );
}
