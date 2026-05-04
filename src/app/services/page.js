"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ObjectsOfDesire from "@/components/ObjectsOfDesire";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isNarrativeExpanded, setIsNarrativeExpanded] = useState(false);
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  const togglePlay = (e) => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // If event came from the button specifically, we start playing
      if (e.target.closest("#play-btn")) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const startPlayback = (e) => {
    e.stopPropagation();
    videoRef.current.play();
    setIsPlaying(true);
  };

  const stopPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const processes = [
    {
      title: "DISCOVERY",
      text: "Every project begins with understanding. Understanding not only what you envision, but how you will live, work, and thrive within the space. We listen deeply, uncovering aspirations, lifestyle requirements, and the true character of the environment, to build a foundation of purpose.",
    },
    {
      title: "DEVELOPMENT",
      text: "Through design meetings led by senior members of our team, we translate ideas into atmosphere and narrative. This stage is about storytelling, layering concept, mood, and materiality to shape a vision that is both unique and timeless.",
    },
    {
      title: "DETAILING",
      text: "The vision becomes tangible. We refine every element, from architectural detailing and bespoke joinery to finishes and furnishings, ensuring coherence, precision, and artistry across every scale.",
    },
    {
      title: "DELIVERY",
      text: "We seamlessly orchestrate the installation and handover, managing every discipline and detail with care. Our experienced project management team ensures that the process runs smoothly, ensuring deadlines are met and the final result is a space ready to be lived in, admired and enjoyed from the very first moment.",
    },
  ];

  useEffect(() => {
    const items = gsap.utils.toArray(".process-item");

    items.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
          onEnter: () => gsap.to(item, { color: "rgb(0, 0, 0)" }),
          onLeave: () => gsap.to(item, { color: "rgb(0, 0, 0)" }),
          onEnterBack: () => gsap.to(item, { color: "rgb(0, 0, 0)" }),
          onLeaveBack: () => gsap.to(item, { color: "rgb(0, 0, 0)" }),
        },
      });
    });
  }, []);

  const recognitionData = [
    "The Brit List Awards 2025 | Interior Designer of the Year Finalist",
    "Spear's 500 2026 | Index & Top Flight Advisor",
    "House & Gardens Interior Designers & Architecture Top 100 2025",
    "Country & Townhouse Top 50 Finest Interior Designers 2025/2026",
    "1st Dibs Top 50 Honoree 2025",
    "Architectural Digest India Top 100 2025",
    "SBID Interior Design Icon 2025",
    "Design et al Designer of the Year 2025 Finalist",
  ];

  const awardsData = [
    "The Global Brands Award 2025 | The Most Innovative Interior Architecture Firm UK",
    "The International Property Awards 2025 | Residential Interior Show Home UK Winner 60 Curzon Apartment",
    "Design et al International Design & Architecture 2025 Awards | Luxury Residence — London Winner Lancaster Residence",
    "SBID UK 2025 | Show Flats & Development Regional Winner 60 Curzon Apartment",
    "SBID Arabian, Dubai & Saudi Arabian Property & Hotel Awards 2025 | Residential Interior Private Residence Winner Dubai Family Villa",
    "Homes & Gardens Design Awards 2024 | Best Remodel",
    "SBID Awards 2024 | Ultra-Luxury Residential Property UK",
  ];

  const headingStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const heroHeadingStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "rgb(244, 242, 238)",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  };

  const narrativeHeadingStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "48px",
    lineHeight: "58px",
    textTransform: "uppercase",
  };

  const narrativeBodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "14px",
    lineHeight: "17px",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const projectLinkStyle = {
    fontFamily: 'Elicyon-Regular, serif',
    fontWeight: 400,
  };

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollerContainerRef = useRef(null);
  const panelsRef = useRef([]);

  const projects = [
    {
      title: "INTERIOR DESIGN",
      description: "We design interiors that tell the story of each client, balancing aesthetic excellence with functional precision to create spaces that are as enduring as they are beautiful.",
      image: "/service2.jpg",
      rightImage: "/hero.jpeg",
      label: "INNER VIEW FAMILY HOME"
    },
    {
      title: "ARCHITECTURE",
      description: "We shape the structural and spatial framework of your vision, ensuring that every project harmonizes with its surroundings while pushing the boundaries of modern design.",
      image: "/project3.jpeg",
      rightImage: "/project33.png",
      label: "LONDON FAMILY HOME"
    },
    {
      title: "PROCUREMENT",
      description: "We source, curate and deliver every element of your project with an unrivalled attention to detail, ensuring that the final realization is nothing short of extraordinary.",
      image: "/arc9.jpg",
      rightImage: "/contact.jpg",
      label: "PRIVATE HOME"
    }
  ];

  useEffect(() => {
    if (!scrollerContainerRef.current) return;

    const panels = panelsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollerContainerRef.current,
        start: "top top",
        end: `+=${panels.length * 150}%`,
        pin: true,
        scrub: 1,
      },
    });

    // Add a small pause at the start
    tl.to({}, { duration: 0.5 });

    panels.forEach((panel, index) => {
      if (index === 0) return;

      tl.fromTo(
        panel,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          duration: 1
        }
      );

      // Pause after each reveal
      tl.to({}, { duration: 0.5 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const services = [
    {
      title: "INTERIOR DESIGN",
      description: "Our award-winning interior design team creates bespoke environments that reflect the unique personality and lifestyle of our clients. From conceptual sketches to final installation, we manage every detail with precision and care.",
      features: ["Space Planning", "Furniture Procurement", "Custom Cabinetry", "Material Selection"]
    },
    {
      title: "ARCHITECTURE",
      description: "We provide comprehensive architectural services that blend innovative design with functional excellence. Our approach ensures that every structure Harmonizes with its surroundings while exceeding technical requirements.",
      features: ["Concept Design", "Planning Applications", "Structural Coordination", "Building Regulations"]
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Our dedicated project managers ensure that every vision is realized exactly as planned. We handle timelines, budgets, and contractor coordination, allowing our clients to enjoy the creative journey without the stress of logistics.",
      features: ["Budget Management", "Timeline Oversight", "Quality Control", "Contractor Liaison"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f3f0] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 767px) {
          .refined-heading-fix {
            font-size: 32px !important;
            line-height: 37px !important;
          }
          .leaders-heading-fix {
            font-size: 32px !important;
            line-height: 37px !important;
          }
          .intention-heading-fix {
            font-size: 32px !important;
            line-height: 37px !important;
          }
          .services-hero-title {
            font-size: 28px !important;
            letter-spacing: 0.25em !important;
            line-height: 1 !important;
          }
          .services-narrative-heading {
            font-size: 7.5vw !important;
            line-height: 1.2 !important;
          }
          .mobile-service-title {
            font-size: 5.5vw !important;
            line-height: 1.2 !important;
            letter-spacing: 0.05em !important;
          }
          @media (max-width: 400px) {
            .mobile-service-title {
              font-size: 5vw !important;
            }
          }
        }
      `}} />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen max-md:h-[62vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services-hero.png')" }}
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Centered Heading */}
        <motion.div
          className="relative z-20 text-center px-6 w-full"
          style={{ y }}
        >
          <h1
            className="services-hero-title md:text-[64px] md:leading-[77px] max-md:leading-none drop-shadow-lg"
            style={heroHeadingStyle}
          >
            SERVICES
          </h1>
        </motion.div>
      </section>

      {/* New Narrative Section */}
      <section className="py-32 max-md:py-10 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-x-hidden">

        {/* Heading - both mobile and desktop */}
        <div className="mb-48 max-md:mb-8">
          <h2
            style={narrativeHeadingStyle}
            className="services-narrative-heading max-w-[1000px] max-md:w-full"
          >
            <span className="block">REALISATION of EXTRAORDINARY</span>
            <span className="pl-16 md:pl-18 max-md:pl-6 inline-block">DETAIL and an UNRIVALLED</span>
            <span className="block">DEDICATION to MATERIAL.</span>
          </h2>
        </div>

        {/* DESKTOP ONLY: 2-column body text */}
        <div className="hidden md:grid grid-cols-2 gap-12 md:gap-x-16 md:w-1/2 ml-auto">
          <div style={narrativeBodyStyle}>
            <p className="mb-6">
              Elicyon is an award-winning design studio renowned for crafting spaces that combine individuality, refinement and enduring quality. From elegant residences to innovative workplaces and landmark developments, we create environments that balance function and beauty, while reflecting the unique identity of each client. As a leading luxury design studio, our work spans the full spectrum of design and delivery, from initial concept and spatial planning to architectural detailing, bespoke interior design and final installation.
            </p>
          </div>
          <div style={narrativeBodyStyle}>
            <p className="mb-6">
              With in-house expertise across interior design, architecture and project management, we offer a fully integrated service that ensures every project is cohesive, meticulously executed and tailored to its purpose. We collaborate with an international network of artisans, suppliers and craftspeople, sourcing materials and creating pieces that are both timeless and distinctive. Every decision is made with intention, considering sustainability, longevity and the story a space will tell.
            </p>
          </div>
        </div>

        {/* MOBILE ONLY: Stacked editorial layout with accordion */}
        <div className="md:hidden flex flex-col">
          {/* First paragraph - always visible */}
          <p className="mb-4 text-[13px] leading-[1.6]" style={narrativeBodyStyle}>
            Malmar is an award-winning design studio renowned for crafting spaces that combine individuality, refinement and enduring quality. From elegant residences to innovative workplaces and landmark developments, we create environments that balance function and beauty, while reflecting the unique identity of each client. As a leading luxury design studio, our work spans the full spectrum of design and delivery, from initial concept and spatial planning to architectural detailing, bespoke interior design and final installation.
          </p>

          {/* Second paragraph - hidden by default, expands on chevron click */}
          <div
            style={{
              maxHeight: isNarrativeExpanded ? '500px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <p className="mb-6 text-[13px] leading-[1.6] opacity-60" style={narrativeBodyStyle}>
              With in-house expertise across interior design, architecture and project management, we offer a fully integrated service that ensures every project is cohesive, meticulously executed and tailored to its purpose. We collaborate with an international network of artisans, suppliers and craftspeople, sourcing materials and creating pieces that are both timeless and distinctive. Every decision is made with intention, considering sustainability, longevity and the story a space will tell.
            </p>
          </div>

          {/* Animated Chevron - simple clean arrow like reference */}
          <button
            onClick={() => setIsNarrativeExpanded(!isNarrativeExpanded)}
            className="w-full flex justify-center mb-10 mt-4 cursor-pointer"
            aria-label="Toggle more text"
          >
            <svg
              width="28" height="28" viewBox="0 0 24 24"
              fill="none" stroke="black" strokeWidth="1.5"
              className="transition-transform duration-500"
              style={{ transform: isNarrativeExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path d="M5 10l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Explore Services */}
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-90 mb-6 text-center" style={bodyStyle}>
            Explore Services
          </p>

          {/* Service list */}
          <div className="flex flex-col items-center gap-1">
            {["INTERIOR DESIGN", "ARCHITECTURE", "PROJECT MANAGEMENT", "PROCUREMENT"].map((s) => (
              <span
                key={s}
                className="text-[5vw] max-[400px]:text-[4.5vw] uppercase leading-tight text-center"
                style={{ ...headingStyle, color: "rgb(0,0,0)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Pinned Scroller Section - DESKTOP ONLY */}
      <section ref={scrollerContainerRef} className="relative h-screen w-full overflow-hidden bg-[#ede8df] hidden md:block">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (panelsRef.current[index] = el)}
            className="absolute inset-0 flex h-full w-full bg-[#ede8df]"
            style={{ zIndex: index }}
          >
            {/* Left Side: Big Image */}
            <div className="relative w-1/2 h-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute bottom-10 left-10 text-xs tracking-widest uppercase opacity-40"
                style={bodyStyle}
              >
                {project.label} —→
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex w-1/2 flex-col items-center justify-between py-24 px-20 text-center">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase"
                style={narrativeHeadingStyle}
              >
                {project.title}
              </h2>

              <div className="w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] overflow-hidden my-12 shadow-sm">
                <img
                  src={project.rightImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-sm">
                <p
                  className="text-sm md:text-base leading-relaxed opacity-70 mb-12"
                  style={narrativeBodyStyle}
                >
                  {project.description}
                </p>

                <div className="inline-block relative group cursor-pointer pb-1 overflow-hidden">
                  <span
                    className="text-[10px] tracking-[0.3em] uppercase font-semibold relative"
                    style={{ ...bodyStyle, ...projectLinkStyle }}
                  >
                    VIEW PROJECTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MOBILE ONLY: Service Cards - Stacked vertical editorial layout */}
      <div className="md:hidden bg-[#ede8df] overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-6 py-16 border-b border-black/10 last:border-b-0"
          >
            {/* Title at top */}
            <h2
              className="mobile-service-title uppercase tracking-wide text-center mb-8 w-full px-2"
              style={narrativeHeadingStyle}
            >
              {project.title}
            </h2>

            {/* Image in middle - padded with shadow like reference */}
            <div className="w-[78%] aspect-[3/4] overflow-hidden shadow-md mb-8">
              <img
                src={project.rightImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description text */}
            <p
              className="text-[13px] leading-[1.7] text-center opacity-80 mb-8 max-w-[320px]"
              style={narrativeBodyStyle}
            >
              {project.description}
            </p>

            {/* VIEW PROJECTS underline link */}
            <div className="inline-block relative group cursor-pointer pb-1 overflow-hidden">
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-semibold relative"
                style={{ ...bodyStyle, ...projectLinkStyle }}
              >
                VIEW PROJECTS
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Video Section */}
      <section
        className="relative h-[90vh] md:h-[105vh] w-full overflow-hidden bg-black cursor-pointer"
        onClick={stopPlayback}
      >
        <video
          ref={videoRef}
          src="/malmar.webm"
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Ultra-Thin Progress Bar */}
        <div className="absolute bottom-14 left-10 right-10 h-[1px] bg-white/20 z-20">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Sound Toggle */}
        <div
          className="absolute bottom-18 right-8 z-30 transition-opacity duration-1000 opacity-60 hover:opacity-100 cursor-pointer"
          onClick={toggleMute}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white cursor-pointer" />
          ) : (
            <Volume2 className="w-5 h-5 text-white cursor-pointer" />
          )}
        </div>

        {/* Play Overlay */}
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-1000 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div
            id="play-btn"
            className="inline-block relative group cursor-pointer pb-1"
            onClick={startPlayback}
          >
            <span
              className="text-xs md:text-sm tracking-[0.4em] uppercase font-semibold relative text-white"
              style={{ fontFamily: narrativeHeadingStyle.fontFamily }}
            >
              PLAY VIDEO
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-100 origin-left transition-transform duration-500 ease-out group-hover:scale-x-0 group-hover:origin-right" />
            </span>
          </div>
        </div>
      </section>

      {/* A Refined Process Section - Natural Scroll */}
      <section
        className="relative w-full bg-[#6d88c7] px-10 md:px-20 py-32 max-md:py-16 max-md:px-6"
      >
        {/* Header - Scrolls with section */}
        <div className="mb-32 max-md:mb-10">
          <div className="flex flex-col items-center text-center">
            <h2
              className="text-5xl md:text-7xl max-md:!text-[32px] max-md:!leading-[37px] refined-heading-fix font-light tracking-widest text-[#1a1a1a] uppercase leading-tight relative"
              style={headingStyle}
            >
              <span className="block max-md:-ml-5">A REFINED</span>
              <span className="relative left-10 md:left-20 max-md:left-10 block">PROCESS</span>
            </h2>
          </div>
        </div>

        {/* List Content - Follows natural flow */}
        <div className="mx-auto max-w-5xl relative md:pl-46">
          {processes.map((item, index) => (
            <div
              key={index}
              className="process-item mb-12 max-md:mb-8 flex flex-col md:flex-row gap-16 md:gap-24 max-md:gap-4 transition-all duration-700"
            >
              {/* Left Column: Title */}
              <div className="w-full md:w-1/3">
                <h3
                  className="tracking-widest uppercase"
                  style={{
                    ...headingStyle,
                    fontSize: "22px",
                    lineHeight: "26px"
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Right Column: Description */}
              <div className="w-full md:w-2/3">
                <p
                  className="font-light text-black max-w-[320px]"
                  style={{
                    ...narrativeBodyStyle,
                    fontSize: "16px",
                    lineHeight: "19px"
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition & Awards Section */}
      <section className="bg-[#f2f1ee] px-8 py-32 md:px-20 lg:px-32 max-md:pt-10 max-md:pb-16 max-md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 max-w-[1600px] mx-auto">

          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2
              className="sticky top-24 text-6xl md:text-7xl max-md:!text-[32px] max-md:!leading-[37px] leaders-heading-fix font-light uppercase leading-[0.9] tracking-tighter text-black max-md:relative max-md:top-0 max-md:pt-4 max-md:mb-16"
              style={headingStyle}
            >
              Leaders <br /> <span className="inline-block ml-10 max-md:ml-16">in Design</span>
            </h2>
          </div>

          {/* Right Column: List */}
          <div className="lg:col-span-8 lg:pt-12">

            {/* Recognition Sub-section */}
            <div className="mb-24 pl-60 max-md:pl-0 max-md:mb-16">
              <h3
                className="mb-8"
                style={{
                  ...bodyStyle,
                  fontSize: "13px",
                  lineHeight: "13px",
                  color: "rgb(0, 0, 0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em"
                }}
              >
                Recognition
              </h3>
              <div className="border-t border-black">
                {recognitionData.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex w-full cursor-pointer items-center justify-between border-b border-black py-5 transition-colors duration-300 hover:bg-black/5"
                  >
                    <p
                      className="transition-transform duration-300 group-hover:translate-x-3 tracking-wide"
                      style={{
                        ...bodyStyle,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "rgb(0, 0, 0)"
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Sub-section */}
            <div className="mb-20 pl-60 max-md:pl-0">
              <h3
                className="mb-8"
                style={{
                  ...bodyStyle,
                  fontSize: "13px",
                  lineHeight: "13px",
                  color: "rgb(0, 0, 0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em"
                }}
              >
                Awards
              </h3>
              <div className="border-t border-black">
                {awardsData.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex w-full cursor-pointer items-center justify-between border-b border-black py-5 transition-colors duration-300 hover:bg-black/5"
                  >
                    <p
                      className="transition-transform duration-300 group-hover:translate-x-3 tracking-wide"
                      style={{
                        ...bodyStyle,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "rgb(0, 0, 0)"
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intention Section - Sustainability & Ethos */}
      <section className="bg-[#cdc6bc] min-h-screen w-full flex flex-col justify-center px-8 md:px-20 lg:px-32 pt-28 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-[1600px] mx-auto">

          {/* Left Column: Heading */}
          <div className="lg:col-span-6 lg:pt-12">
            <h2
              className="text-[60px] md:text-[80px] lg:text-[100px] max-md:!text-[32px] max-md:!leading-[37px] intention-heading-fix font-light uppercase leading-[0.85] tracking-tight text-black"
              style={headingStyle}
            >
              Designed with <br />
              <span className="ml-[15%] md:ml-[25%] max-md:ml-[30px] block">Intention</span>
            </h2>
          </div>

          {/* Right Column: Content Block */}
          <div className="lg:col-span-6 lg:pt-60 flex flex-col items-end lg:items-start relative">
            <div className="w-full">
              {/* Sustainability Header */}
              <h3
                className="mb-10"
                style={{
                  ...bodyStyle,
                  fontSize: "12px",
                  lineHeight: "12px",
                  color: "rgb(0, 0, 0)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em"
                }}
              >
                SUSTAINABILITY ETHOS – WE ARE PRIME
              </h3>

              {/* Flex Container for Text + Signature Branding */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                {/* Paragraphs */}
                <div
                  className="space-y-8 text-black max-w-[480px]"
                  style={{
                    ...bodyStyle,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "rgb(0, 0, 0)"
                  }}
                >
                  <p>
                    At Elicyon, designing with intention means creating spaces that
                    honour both our clients’ vision and the world we share. We source
                    responsibly, work with enduring materials, and partner with
                    craftspeople who share our commitment to quality and sustainability.
                  </p>
                  <p>
                    To make a tangible difference, we support the PRIME Principles for
                    sustainable business, guiding our practice through environmental
                    responsibility, innovation, impact, and accountability. Every decision
                    is made with purpose, ensuring beauty today and a legacy for tomorrow.
                  </p>
                  <p>
                    Find out more about the PRIME Principles at weareprime.org.
                  </p>
                </div>

                {/* Right-side Branding Signature */}
                <div className="text-right pb-1">
                  <span
                    className="text-6xl md:text-8xl font-serif leading-none block mb-2 text-black"
                    style={{ fontFamily: '"__elicyon_df1f4c", serif' }}
                  >
                    II
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.22em] font-semibold text-black whitespace-nowrap"
                    style={bodyStyle}
                  >
                    Prime Score
                  </span>
                </div>
              </div>

              {/* Underline Branding */}
              <div className="mt-8 md:mt-12 w-full border-t border-black/40 pt-4" />
            </div>
          </div>

        </div>
      </section>

      <ObjectsOfDesire />
      <ContactForm />
      <Footer />
    </main>
  );
}