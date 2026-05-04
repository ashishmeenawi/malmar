"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const objects = [
  {
    id: 1,
    img: "/object1.jpeg",
    title: "VINTAGE ITALIAN CHAIR",
    desc: "A statement piece that combines Mid-Century Modern aesthetics with luxurious comfort, curated for the refined living space.",
  },
  {
    id: 2,
    img: "/object2.jpeg",
    title: "RECLAIMED OAK SIDEBOARD",
    desc: "Hand-finished to highlight the natural grain, grounding the room with warmth and a deep sense of heritage.",
  },
  {
    id: 3,
    img: "/object3.jpg",
    title: "BESPOKE JOINERY BENCH",
    desc: "Designed to follow the curvature of the entrance wall, offering an initial moment of grounding upon arrival.",
  },
  {
    id: 4,
    img: "/object4.jpg",
    title: "VINTAGE 1930S CONSOLE",
    desc: "A sculptural moment upon arrival that speaks to the heritage and timeless elegance of the space.",
  },
  {
    id: 5,
    img: "/object5.jpg",
    title: "ART DECO PIANO",
    desc: "Handcrafted in oak, this piece combines comfort with craftsmanship for an unparalleled aesthetic.",
  },
  {
    id: 6,
    img: "/object6.jpg",
    title: "WHITWAY CHANDELIER",
    desc: "Adapted from an original 1940s design, casting a warm, enveloping glow throughout the room.",
  },
  {
    id: 7,
    img: "/object7.jpg",
    title: "MURANO GLASS VASE",
    desc: "Transparent layers of hand-blown glass capture the shifting light, adding a delicate touch of artisanal craft.",
  },
  {
    id: 8,
    img: "/object8.jpeg",
    title: "GILDED BRONZE SCONCE",
    desc: "A subtle play of shadow and light, casting a sophisticated glow across the architectural details of the room.",
  },
];

export default function ObjectsOfDesire() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const totalSets = 3;
  const setLength = objects.length;
  const [activeIndex, setActiveIndex] = useState(setLength + 3); // Start in middle set (Id: 4)
  const activeId = objects[activeIndex % setLength].id;
  const [cursorType, setCursorType] = useState("right");

  // Initial Scroll to Middle Set (Id: 4)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const timeout = setTimeout(() => {
      const items = container.querySelectorAll(".carousel-item");
      const targetItem = items[activeIndex];
      if (!targetItem) return;

      const containerCenter = container.offsetWidth / 2;
      const itemCenterOffset = targetItem.offsetLeft + (targetItem.offsetWidth / 2);
      const scrollTarget = itemCenterOffset - containerCenter;

      container.scrollLeft = scrollTarget;
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  // 1. Custom Cursor & Visibility Logic
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
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    // Ensure cursor hides when scrolling section out of view
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => gsap.to(cursor, { opacity: 0, duration: 0.3 }),
      onLeaveBack: () => gsap.to(cursor, { opacity: 0, duration: 0.3 }),
    });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // 2. Active Index Detection
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

    // SEAMLESS LOOP RESET (Wider Safe Zone)
    // Only jump back to center if we move too far to the edges (Set 1 or Set 3 extremes)
    // This prevents jumps during normal 1-item click transitions
    if (closestIdx >= setLength * 2 + 4) { // Near end of Set 3
      const offset = closestIdx - (setLength * 2);
      const newIdx = setLength + offset;
      const targetItem = items[newIdx];
      const containerCenter = container.offsetWidth / 2;
      const scrollTarget = (targetItem.offsetLeft + targetItem.offsetWidth / 2) - containerCenter;
      container.scrollLeft = scrollTarget;
      closestIdx = newIdx;
    } else if (closestIdx < 4) { // Near beginning of Set 1
      const offset = closestIdx;
      const newIdx = setLength + offset;
      const targetItem = items[newIdx];
      const containerCenter = container.offsetWidth / 2;
      const scrollTarget = (targetItem.offsetLeft + targetItem.offsetWidth / 2) - containerCenter;
      container.scrollLeft = scrollTarget;
      closestIdx = newIdx;
    }

    setActiveIndex(closestIdx);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    let targetIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;

    // Boundaries — we render 3 sets, so we allow indices 0 to (setLength * 3 - 1)
    // The handleScroll reset logic will handle the "jumps" to keep it infinite
    if (targetIndex < 0) targetIndex = (setLength * 3) - 1;
    if (targetIndex >= setLength * 3) targetIndex = 0;

    const items = container.querySelectorAll(".carousel-item");
    const targetItem = items[targetIndex];
    if (!targetItem) return;

    const containerCenter = container.offsetWidth / 2;
    const itemCenterOffset = targetItem.offsetLeft + (targetItem.offsetWidth / 2);
    const scrollTarget = itemCenterOffset - containerCenter;

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
  };

  const displayItems = [...objects, ...objects, ...objects];

  return (
    <section
      id="objects-section"
      className="relative bg-[#F3F0E9] pt-12 pb-24 overflow-hidden"
      style={{ cursor: "none" }} // Hide default cursor over this section
    >
      {/* Custom Floating Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ opacity: 0 }}
      >
        <div className="text-black drop-shadow-md">
          {cursorType === "left" ? <ChevronLeft size={36} strokeWidth={1} /> : <ChevronRight size={36} strokeWidth={1} />}
        </div>
      </div>

      {/* Main Section Title */}
      <div className="text-center mb-16 mt-0">
        <h2
          style={{
            fontFamily: "'SageNav', sans-serif",
            fontSize: "48px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "58px",
            color: "rgb(0, 0, 0)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          OBJECTS of DESIRE
        </h2>
      </div>

      {/* Carousel Container */}
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
                className={`relative aspect-[3/4] transition-all duration-700 mx-auto
                  ${isActive ? "border-[12px] border-[#8B4513] scale-100" : "border-transparent border-[12px] scale-95"}`}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover shadow-2xl"
                  alt={item.title}
                  draggable="false" // Prevent ghost dragging image
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Description Area (Updates based on center item) */}
      <div className="mt-16 max-w-xl mx-auto text-center px-6 h-[100px] relative">
        {objects.map((item) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeId === item.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <h3
              style={{
                fontFamily: "var(--font-elicyon), 'Playfair Display', Georgia, serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgb(0,0,0)",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "17px",
                color: "rgb(0, 0, 0)",
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
