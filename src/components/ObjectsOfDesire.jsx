"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_NUMBER = "918989944488";

const objects = [
  {
    id: 1,
    img: "/mm1.jpeg",
    title: "VINTAGE ITALIAN CHAIR",
    desc: "A statement piece that combines Mid-Century Modern aesthetics with luxurious comfort, curated for the refined living space.",
  },
  {
    id: 2,
    img: "/mm2.jpeg",
    title: "RECLAIMED OAK SIDEBOARD",
    desc: "Hand-finished to highlight the natural grain, grounding the room with warmth and a deep sense of heritage.",
  },
  {
    id: 3,
    img: "/mm3.jpeg",
    title: "BESPOKE JOINERY BENCH",
    desc: "Designed to follow the curvature of the entrance wall, offering an initial moment of grounding upon arrival.",
  },
  {
    id: 4,
    img: "/mm4.jpeg",
    title: "VINTAGE 1930S CONSOLE",
    desc: "A sculptural moment upon arrival that speaks to the heritage and timeless elegance of the space.",
  },
  {
    id: 5,
    img: "/mm1.jpeg",
    title: "ALABASTER LAMP 2026",
    desc: "Sculpted from translucent alabaster, this lamp emits a soft and atmospheric glow, bringing warmth and quiet elegance to any interior.",
  },
  {
    id: 6,
    img: "/mm2.jpeg",
    title: "WHITWAY CHANDELIER",
    desc: "Adapted from an original 1940s design, casting a warm, enveloping glow throughout the room.",
  },
  {
    id: 7,
    img: "/mm3.jpeg",
    title: "MURANO GLASS VASE",
    desc: "Transparent layers of hand-blown glass capture the shifting light, adding a delicate touch of artisanal craft.",
  },
  {
    id: 8,
    img: "/mm4.jpeg",
    title: "GILDED BRONZE SCONCE",
    desc: "A subtle play of shadow and light, casting a sophisticated glow across the architectural details of the room.",
  },
];

export default function ObjectsOfDesire() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);

  const setLength = objects.length;

  const [activeIndex, setActiveIndex] = useState(setLength + 3);

  const activeId = objects[activeIndex % setLength].id;

  const [cursorType, setCursorType] = useState("right");

  // WhatsApp Redirect
  const handleQuote = (item) => {
    const message = `Hello, I’m interested in the following object:%0A%0A*${item.title}*%0A%0APlease share more details and pricing.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  // Initial scroll
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const timeout = setTimeout(() => {
      const items = container.querySelectorAll(".carousel-item");

      const targetItem = items[activeIndex];

      if (!targetItem) return;

      const containerCenter = container.offsetWidth / 2;

      const itemCenterOffset =
        targetItem.offsetLeft + targetItem.offsetWidth / 2;

      const scrollTarget = itemCenterOffset - containerCenter;

      container.scrollLeft = scrollTarget;
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  // Custom Cursor
  useEffect(() => {
    const section = document.getElementById("objects-section");

    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const isLeft = clientX < window.innerWidth / 2;

      setCursorType(isLeft ? "left" : "right");

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3,
      });
    };

    section.addEventListener("mousemove", handleMouseMove);

    section.addEventListener("mouseenter", handleMouseEnter);

    section.addEventListener("mouseleave", handleMouseLeave);

    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onLeave: () =>
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.3,
        }),
      onLeaveBack: () =>
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.3,
        }),
    });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);

      section.removeEventListener("mouseenter", handleMouseEnter);

      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Detect active slide
  const handleScroll = () => {
    const container = scrollRef.current;

    if (!container) return;

    const center = window.innerWidth / 2;

    const items = container.querySelectorAll(".carousel-item");

    let closestIdx = activeIndex;

    let minDistance = Infinity;

    items.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();

      const itemCenter = rect.left + rect.width / 2;

      const distance = Math.abs(center - itemCenter);

      if (distance < minDistance) {
        minDistance = distance;

        closestIdx = idx;
      }
    });

    // Infinite loop
    if (closestIdx >= setLength * 2 + 4) {
      const offset = closestIdx - setLength * 2;

      const newIdx = setLength + offset;

      const targetItem = items[newIdx];

      const containerCenter = container.offsetWidth / 2;

      const scrollTarget =
        targetItem.offsetLeft +
        targetItem.offsetWidth / 2 -
        containerCenter;

      container.scrollLeft = scrollTarget;

      closestIdx = newIdx;
    } else if (closestIdx < 4) {
      const offset = closestIdx;

      const newIdx = setLength + offset;

      const targetItem = items[newIdx];

      const containerCenter = container.offsetWidth / 2;

      const scrollTarget =
        targetItem.offsetLeft +
        targetItem.offsetWidth / 2 -
        containerCenter;

      container.scrollLeft = scrollTarget;

      closestIdx = newIdx;
    }

    setActiveIndex(closestIdx);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    let targetIndex =
      direction === "left"
        ? activeIndex - 1
        : activeIndex + 1;

    if (targetIndex < 0)
      targetIndex = setLength * 3 - 1;

    if (targetIndex >= setLength * 3)
      targetIndex = 0;

    const items = container.querySelectorAll(".carousel-item");

    const targetItem = items[targetIndex];

    if (!targetItem) return;

    const containerCenter = container.offsetWidth / 2;

    const itemCenterOffset =
      targetItem.offsetLeft +
      targetItem.offsetWidth / 2;

    const scrollTarget =
      itemCenterOffset - containerCenter;

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
  };

  const displayItems = [
    ...objects,
    ...objects,
    ...objects,
  ];

  return (
    <section
      id="objects-section"
      className="relative bg-[#F3F0E9] pt-12 pb-24 overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0"
      >
        <div className="text-black drop-shadow-md">
          {cursorType === "left" ? (
            <ChevronLeft size={36} strokeWidth={1} />
          ) : (
            <ChevronRight size={36} strokeWidth={1} />
          )}
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          style={{
            fontFamily: "'SageNav', sans-serif",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "58px",
            color: "#000",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          OBJECTS of DESIRE
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onClick={() => scroll(cursorType)}
        className="flex gap-8 px-[10vw] md:px-[35vw] overflow-x-auto snap-x snap-mandatory no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {displayItems.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={`${item.id}-${idx}`}
              className="carousel-item flex-shrink-0 w-[280px] md:w-[350px] snap-center transition-all duration-700 ease-in-out"
            >
              <div
                className={`group relative aspect-[3/4] transition-all duration-700 mx-auto overflow-hidden
                ${
                  isActive
                    ? "border-[12px] border-[#8B4513] scale-100"
                    : "border-transparent border-[12px] scale-95"
                }`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  alt={item.title}
                  draggable="false"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Get Quote Button */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    -translate-x-1/2
                    translate-y-4
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuote(item);
                    }}
                    className="
                      backdrop-blur-md
                      bg-white/80
                      hover:bg-black
                      hover:text-white
                      border
                      border-white/40
                      px-6
                      py-3
                      text-[10px]
                      tracking-[0.32em]
                      uppercase
                      text-black
                      transition-all
                      duration-500
                    "
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="mt-16 max-w-xl mx-auto text-center px-6 h-[120px] relative">
        {objects.map((item) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              activeId === item.id
                ? "opacity-100 translate-y-0 z-10"
                : "opacity-0 translate-y-4 z-0 pointer-events-none"
            }`}
          >
            <h3
              style={{
                fontFamily:
                  "var(--font-elicyon), 'Playfair Display', Georgia, serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#000",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontFamily:
                  '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
                color: "#000",
                margin: "0 auto",
                maxWidth: "400px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}