"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ElicyonTextSection = () => {
  const sectionRef = useRef(null);
  const textWrapper = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;

      if (isDesktop) {
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=420%",
            pin: true,
            scrub: 1.2,
          }
        });

        mainTl.to(textWrapper.current, { y: "15vh", duration: 3, ease: "power1.inOut" }, 0.5);

        mainTl.to(".word-spaces", { opacity: 0, y: -30, scale: 0.95, duration: 1.5 }, 1.5);

        mainTl.to(".row-2", { x: -300, y: 1, duration: 3, ease: "power2.inOut" }, 3.5);
        mainTl.to(".row-3", { x: 170, y: -48, duration: 3, ease: "power2.inOut" }, 3.5);

        mainTl.to(textWrapper.current, { y: "25vh", duration: 8, ease: "power1.inOut" }, 6.5);

        gsap.to(".parallax-img", {
          y: "-260vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=500%",
            scrub: 1,
          }
        });
      } else {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1.2,
          }
        });

        // Similar behavior to desktop but with adjusted values
        mobileTl.to(textWrapper.current, { y: "12vh", duration: 3, ease: "power1.inOut" }, 0.5);
        mobileTl.to(".word-spaces", { opacity: 0, y: -20, scale: 0.95, duration: 1.5 }, 1.5);
        mobileTl.to(".row-2", { x: "-15vw", duration: 3, ease: "power2.inOut" }, 3.5);
        mobileTl.to(".row-3", { x: "10vw", y: 5, duration: 3, ease: "power2.inOut" }, 3.5);
        mobileTl.to(textWrapper.current, { y: "20vh", duration: 8, ease: "power1.inOut" }, 6.5);

        gsap.to(".parallax-img", {
          y: "-260vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            scrub: 1,
          }
        });
      }
    });
  }, { scope: sectionRef });

  const wordStyle = {
    fontFamily: "'Elicyon', sans-serif",
    fontSize: "clamp(16px, 5.8vw, 48px)",
    lineHeight: "1", // ✅ tightened
    color: "#000",
    textTransform: "none",
    display: "inline-block",
  };

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-[#f8f7f3] overflow-hidden">

      {/* BACKGROUND IMAGES */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src="/new.jpeg" className="parallax-img absolute top-[25vh] right-[8%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 1" />
        <img src="/new1.jpeg" className="parallax-img absolute top-[85vh] left-[6%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 2" />
        <img src="/new3.jpeg" className="parallax-img absolute top-[155vh] right-[10%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 3" />
        <img src="/elylast.jpeg" className="parallax-img absolute top-[225vh] left-[10%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 4" />
      </div>

      {/* TEXT CONTENT */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center px-4 pointer-events-none">
        <div ref={textWrapper} className="flex flex-col items-center">

          {/* Line 1 */}
          <div className="word-spaces mb-0" style={wordStyle}>
            SPACES THAT
          </div>

          {/* Line 2 */}
          <div className="row-2 flex space-x-2 md:space-x-6 mb-0">
            <div className="word-reflect" style={wordStyle}>REFLECT</div>
            <div className="word-vision" style={wordStyle}>VISION</div>
          </div>

          {/* Line 3 */}
          <div className="row-3 flex space-x-2 md:space-x-6">
            <div className="word-through" style={{ ...wordStyle, fontStyle: "italic" }}>
              THROUGH
            </div>
            <div className="word-craft" style={{ ...wordStyle, fontStyle: "italic" }}>
              CRAFT
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ElicyonTextSection;