"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function AboutPage() {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  const headingStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.7)",
  };

  const bodyStyleWhite = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.7)",
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2.5,
          ease: "power2.out",
          onUpdate: () => {
            const val = Math.floor(obj.value);
            counter.innerText = val < 10 ? '0' + val : val;
          },
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play none none none"
          },
        });
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f0ede6] selection:bg-stone-200">
      <Navbar />

      {/* Hero Section - Banner Style */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/services-hero.png')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <h1
            className="text-white text-[28px] leading-[28px] md:text-[80px] uppercase tracking-wide mb-4"
            style={headingStyle}
          >
            About Us
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center space-x-4 text-[16px] md:text-[18px] font-medium">
            <Link href="/" className="text-white hover:text-[#c5a059] transition-colors cursor-pointer">
              Home
            </Link>
            <span className="text-white opacity-60">|</span>
            <span className="text-[#c5a059]">About</span>
          </div>
        </div>
      </section>

      {/* Experience Section - Light Style */}
      <section className="bg-[#ede8df] py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: Two Vertical Images */}
          <div className="flex gap-4 md:gap-8 h-[500px] md:h-[650px]">
            <div className="flex-1 overflow-hidden">
              <img
                src="/arc1.jpg"
                alt="Architecture Interior 1"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="flex-1 overflow-hidden mt-12 md:mt-20">
              <img
                src="/arc2.jpg"
                alt="Architecture Interior 2"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col space-y-8 text-[#222222]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#c5a059]"></div>
              <span className="text-[#c5a059] uppercase tracking-[0.3em] font-bold text-sm">
                About Us
              </span>
            </div>

            <h2
              className="text-[28px] leading-[28px] md:text-[60px] md:leading-tight uppercase tracking-tight text-[#111111]"
              style={headingStyle}
            >
              We Provide You Best <br className="hidden md:block" /> Experience
            </h2>

            <div className="flex items-start gap-6 border-l-2 border-[#c5a059] pl-6 py-2">
              <p
                className="text-[#444444] italic text-[18px] md:text-[20px] leading-relaxed"
                style={bodyStyle}
              >
                Our signature design process comes standard...refresh, remodel, new and enjoyable design experience
              </p>
            </div>

            <div className="space-y-6 text-[#666666] text-[16px] leading-[1.8] font-light">
              <p style={bodyStyle}>
                Cras aliquet scelerisque dui, dapibus condimentum lacus pulvinar quis. Quisque ullamcorper placerat sem nec congue. Ut sed consequat nunc. Aenean mollis dolor nec diam feugiat molestie.
              </p>
              <p style={bodyStyle}>
                Nulla et leo lacus. Nulla facilisi. Integer nunc orci, porttitor eu urna non, porta faucibus dolor. Integer at felis varius, interdum enim vel, ornare felis.
              </p>
            </div>

            <div className="flex items-center gap-10 pt-4">
              {/* <button className="bg-[#c5a059] text-white px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-[#b38f4a] transition-all">
                Learn More
              </button> */}

              {/* Signature */}
              <div className="w-40 opacity-80">
                <img src="/signature.png" alt="Signature" className="w-full h-auto"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video & Stats Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Video Content */}
        <div className="relative h-[60vh] md:h-[75vh] w-full flex flex-col items-center justify-center text-white text-center">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/services-hero.png"
            >
              <source src="/malmar.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
          </div>

          {/* Centered Content */}
          <div className={`relative z-10 flex flex-col items-center transition-all duration-700 ${isPlaying ? 'opacity-0 cursor-default pointer-events-none' : 'opacity-100'}`}>
            {/* Play Button - exact same as image */}
            <div
              onClick={togglePlay}
              className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center mb-8 cursor-pointer group hover:bg-white transition-all duration-500"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent group-hover:border-l-black ml-1"></div>
            </div>
            <h2
              className="text-[28px] leading-[28px] md:text-[64px] uppercase tracking-[2px] md:leading-tight"
              style={headingStyle}
            >
              Take A Tour Of Luxury
            </h2>
          </div>

          {/* Invisible Overlay to allow pausing when video is playing */}
          {isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 z-20 cursor-pointer"
              title="Click to Pause"
            ></div>
          )}
        </div>

        {/* Stats Bar - Centered Container Style */}
        <div className="bg-[#ede8df] relative z-30 pt-1">
          <div className="relative -mt-12 md:-mt-16 px-6 md:px-12 pb-12">
            <div className="bg-[#111111] max-w-[1200px] mx-auto py-10 md:py-14 px-8 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left items-center shadow-2xl">

              {/* Stat Item 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex text-[#c5a059] text-[48px] md:text-[72px] font-bold leading-none">
                  <span>15</span>
                  <span className="stat-number" data-target="47">00</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[16px] md:text-[18px] font-bold leading-tight">Project<br />Completed</span>
                </div>
              </div>

              {/* Stat Item 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex text-[#c5a059] text-[48px] md:text-[72px] font-bold leading-none">
                  <span>25</span>
                  <span className="stat-number" data-target="87">00</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[16px] md:text-[18px] font-bold leading-tight">Our Happy<br />Clients</span>
                </div>
              </div>

              {/* Stat Item 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex text-[#c5a059] text-[48px] md:text-[72px] font-bold leading-none">
                  <span>18</span>
                  <span className="stat-number" data-target="79">00</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[16px] md:text-[18px] font-bold leading-tight">Cup<br />Of Coffee</span>
                </div>
              </div>

              {/* Stat Item 4 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex text-[#c5a059] text-[48px] md:text-[72px] font-bold leading-none">
                  <span>25</span>
                  <span className="stat-number" data-target="47">00</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[16px] md:text-[18px] font-bold leading-tight">Win<br />Awards</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Happy Client Testimonials Section */}
      <section className="bg-[#ede8df] py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#c5a059]"></div>
              <span className="text-[#c5a059] uppercase tracking-[0.3em] font-bold text-sm">
              </span>
            </div>
            <h2
              className="text-[28px] leading-[28px] md:text-[60px] md:leading-tight uppercase tracking-tight text-[#111111]"
              style={headingStyle}
            >
              Our Happy Client
            </h2>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative w-full overflow-hidden bg-[#111111] min-h-[500px] flex items-stretch">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Image Pane */}
          <div className="relative h-[370px] lg:h-auto">
            <img
              src="/object1.jpeg"
              alt="Interior Process"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => e.target.src = "/object1.jpeg"}
            />
          </div>

          {/* Right: Text Pane */}
          <div className="px-10 md:px-16 lg:px-20 pt-10 md:pt-16 lg:pt-30 pb-16 md:pb-24 lg:pb-32 flex flex-col justify-center relative bg-[url(/blueprint.png)] bg-fixed bg-cover">
            {/* Dark Overlay for the background pattern if any */}
            <div className="absolute inset-0 bg-[#0a0a0a]/90 z-0"></div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#c5a059]"></div>
                <span className="text-[#c5a059] uppercase tracking-[0.3em] font-bold text-sm">
                  Our Process
                </span>
              </div>

              <h2
                className="text-[28px] leading-[28px] md:text-[48px] text-white uppercase md:leading-tight tracking-tight"
                style={headingStyle}
              >
                See How We Work <br /> For You
              </h2>

              <div className="space-y-6 pt-4">
                {/* Step 1 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-[#c5a059]/30 flex items-center justify-center text-[20px] font-bold text-white group-hover:bg-[#c5a059] transition-all duration-500">
                    1.
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-[20px] text-white uppercase tracking-wide"
                      style={headingStyle}
                    >
                      Idea
                    </h3>
                    <p
                      className="text-white/70 text-[14px] leading-[22px] max-w-sm"
                      style={bodyStyleWhite}
                    >
                      Phasellus non libero non nisi fermentum sodales non non neque nulla quis tortor orci.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-[#c5a059]/30 flex items-center justify-center text-[20px] font-bold text-white group-hover:bg-[#c5a059] transition-all duration-500">
                    2.
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-[20px] text-white uppercase tracking-wide"
                      style={headingStyle}
                    >
                      Design
                    </h3>
                    <p
                      className="text-white/70 text-[14px] leading-[22px] max-w-sm"
                      style={bodyStyleWhite}
                    >
                      Phasellus non libero non nisi fermentum sodales non non neque nulla quis tortor orci.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-[#c5a059]/30 flex items-center justify-center text-[20px] font-bold text-white group-hover:bg-[#c5a059] transition-all duration-500">
                    3.
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-[20px] text-white uppercase tracking-wide"
                      style={headingStyle}
                    >
                      Execution
                    </h3>
                    <p
                      className="text-white/70 text-[14px] leading-[22px] max-w-sm"
                      style={bodyStyleWhite}
                    >
                      Phasellus non libero non nisi fermentum sodales non non neque nulla quis tortor orci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#ede8df]">
        <HeroParallax products={products} />
        {/* Spacer to create gap before footer */}
        <div className="h-40 md:h-30" />
      </section>


      <Footer />
    </main>
  );
}

const products = [
  {
    title: "The Penthouse - London",
    link: "/projects",
    thumbnail: "/arc1.jpg",
  },
  {
    title: "Coastal Retreat - Ibiza",
    link: "/projects",
    thumbnail: "/arc2.jpg",
  },
  {
    title: "Modern Sanctuary",
    link: "/projects",
    thumbnail: "/arc3.jpg",
  },
  {
    title: "Imperial Suite",
    link: "/projects",
    thumbnail: "/arc4.jpeg",
  },
  {
    title: "Heritage Villa",
    link: "/projects",
    thumbnail: "/arc5.jpeg",
  },
  {
    title: "Azure Residences",
    link: "/projects",
    thumbnail: "/arc6.jpg",
  },
  {
    title: "The Glass House",
    link: "/projects",
    thumbnail: "/arc7.jpg",
  },
  {
    title: "Metropolitan Loft",
    link: "/projects",
    thumbnail: "/arc8.jpeg",
  },
  {
    title: "Ivory Court",
    link: "/projects",
    thumbnail: "/arc9.jpg",
  },
  {
    title: "Oasis Pavilion",
    link: "/projects",
    thumbnail: "/arc10.jpeg",
  },
  {
    title: "Ethereal Interiors",
    link: "/projects",
    thumbnail: "/new.jpeg",
  },
  {
    title: "Velvet Sky Lounge",
    link: "/projects",
    thumbnail: "/new1.jpeg",
  },
  {
    title: "Crystal Manor",
    link: "/projects",
    thumbnail: "/new3.jpeg",
  },
  {
    title: "Obsidian Office",
    link: "/projects",
    thumbnail: "/new4.jpeg",
  },
  {
    title: "Aurelian Chambers",
    link: "/projects",
    thumbnail: "/resnew.jpeg",
  },
];
