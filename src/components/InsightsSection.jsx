"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    category: "RESIDENTIAL",
    title: "IDENTITY MAGAZINE",
    description: "In Balance - This home by Elicyon creates a sense of sanctuary at every turn.",
    image: "/insite1.jpeg",
    overlayText: ""
  },
  {
    category: "INSIGHT",
    title: "A DUBAI VILLA OF QUIET GRANDEUR AND CRAFTED DETAIL",
    description: "",
    image: "/insite22.jpeg",
    overlayText: ""
  },
  {
    category: "COMMERCIAL",
    title: "DESIGN ANTHOLOGY UK",
    description: "Commercial Design Reimagined",
    image: "/insite3.jpg",
    overlayText: ""
  },
  {
    category: "EDITORIAL",
    title: "ARCHITECTURAL DIGEST",
    description: "Refined Luxury in the heart of the city.",
    image: "/insite4.jpeg",
    overlayText: ""
  }
];

export default function InsightsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal animation for the cards as they enter viewport
    gsap.from(".insight-card", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#f5f3f0] pt-4 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pt-16">
        <div className="max-w-2xl">
          <h2
            className="text-[32px] md:text-[48px] leading-tight md:leading-tight"
            style={{
              fontFamily: "'SageNav', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              color: "rgb(0, 0, 0)",
            }}
          >
            <span className="block">The WORLD</span>
            <span className="block ml-14 md:ml-36 -mt-4 md:-mt-3">
              of
              <span className="inline md:hidden ml-2">MALMAR</span>
              <span className="hidden md:inline md:ml-3">MALMAR</span>
            </span>
          </h2>
          <p
            className="mt-8 md:uppercase tracking-widest md:tracking-widest max-w-lg text-[16px] md:text-[14px] leading-[22px] md:leading-[17px]"
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontWeight: 400,
              fontStyle: "normal",
              color: "rgb(0, 0, 0)",
            }}
          >
            Go beyond the finished space. Explore the insights, inspiration, collaborations, and ideas that quietly shape our world.
          </p>
        </div>
        <button
          className="relative group pb-[6px] uppercase tracking-[0.3em]"
          style={{
            fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
            fontSize: "14px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "14px",
            color: "rgb(0, 0, 0)",
            marginTop: "32px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          EXPLORE INSIGHTS
          <span className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
            <span className="absolute inset-0 bg-black transition-transform duration-500 ease-in-out translate-x-0 group-hover:translate-x-[101%]"></span>
          </span>
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className={`insight-card group cursor-pointer ${idx === 3 ? 'flex md:hidden' : 'flex'} flex-col`}
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Text (if any) */}
              {item.overlayText && (
                <div className="absolute inset-0 flex items-start justify-center pt-20">
                  <span
                    style={{ fontFamily: "var(--font-elicyon), serif" }}
                    className="text-white text-4xl md:text-5xl lowercase opacity-90"
                  >
                    {item.overlayText}
                  </span>
                </div>
              )}
            </div>

            {/* Meta Data */}
            <div className="flex flex-col flex-grow text-left">
              <span
                className="mb-4"
                style={{
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                  fontSize: "10px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "12px",
                  color: "rgb(0, 0, 0)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }}
              >
                {item.category}
              </span>
              <h3
                className="uppercase mb-3 tracking-wider line-clamp-2 md:line-clamp-none"
                style={{
                  fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
                  fontSize: "16px",
                  mdFontSize: "22px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "1.2",
                  color: "rgb(0, 0, 0)",
                }}
              >
                {item.title}
              </h3>
              {item.description && (
                <p
                  className="mb-6 opacity-80 line-clamp-3 md:line-clamp-none"
                  style={{
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                    fontSize: "13px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "1.4",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  {item.description}
                </p>
              )}

              <div className="mt-4">
                <button
                  className="group relative inline-flex items-center pb-1 uppercase tracking-widest"
                  style={{
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)",
                    fontSize: "14px",
                    lineHeight: "14px"
                  }}
                >
                  READ MORE
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-100 transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
