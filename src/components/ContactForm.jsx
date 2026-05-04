"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.to(cardRef.current, {
      y: -120, 
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  const elicyonFont = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: "400",
    color: "rgb(0, 0, 0)",
    textTransform: "uppercase",
  };

  const antiqueFont = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: "400",
    color: "rgb(0, 0, 0)",
    textTransform: "uppercase",
  };

  const inputStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    color: "black",
    caretColor: "black"
  };

  return (
    <section ref={containerRef} className="relative pt-32 md:pt-48 pb-16 md:pb-24 w-full flex justify-center bg-gray-200 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-bg.png')" }} 
      />

      {/* Main Content Card - Full Height Column */}
      <div ref={cardRef} className="relative z-10 w-[85%] md:w-full max-w-[720px] bg-[#f8f6f3] p-8 md:p-14 shadow-2xl flex flex-col justify-start">
        {/* Heading Section */}
        <div className="mb-6">
          <style>{`
            .contact-mobile-h2 { font-size: 18px; line-height: 21px; }
            @media (min-width: 768px) { .contact-mobile-h2 { font-size: 35px; line-height: 42px; } }
          `}</style>
          <h2 style={elicyonFont} className="contact-mobile-h2 tracking-tighter">
            START YOUR CREATIVE <br /> 
            JOURNEY NOW
          </h2>
        </div>

        {/* Form Container */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[11px] md:text-[16px] leading-[1.3] md:leading-[24px]">
          {/* Inputs Row 1 */}
          <div className="flex flex-col group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">FIRST NAME *</label>
            <input type="text" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          <div className="flex flex-col group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">LAST NAME *</label>
            <input type="text" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          {/* Inputs Row 2 */}
          <div className="flex flex-col group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">EMAIL *</label>
            <input type="email" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          <div className="flex flex-col group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">TELEPHONE</label>
            <input type="tel" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          {/* Design Services & Location */}
          <div className="flex flex-col group">
            <div className="flex justify-between items-center mb-1">
              <label style={antiqueFont} className="opacity-80 transition-opacity group-focus-within:opacity-100">DESIGN SERVICES *</label>
              <span className="text-[10px] opacity-40">▼</span>
            </div>
            <select style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none appearance-none cursor-pointer transition-colors w-full text-black">
              <option value=""></option>
              <option value="interior">Interior Design</option>
              <option value="architecture">Architecture</option>
              <option value="project-management">Project Management</option>
            </select>
          </div>

          <div className="flex flex-col group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">PROJECT LOCATION *</label>
            <input type="text" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          {/* Project Type & Refer Source */}
          <div className="flex flex-col group">
            <div className="flex justify-between items-center mb-1">
              <label style={antiqueFont} className="opacity-80 transition-opacity group-focus-within:opacity-100">PROJECT TYPE *</label>
              <span className="text-[10px] opacity-40">▼</span>
            </div>
            <select style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none appearance-none cursor-pointer transition-colors w-full text-black">
              <option value=""></option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="hospitality">Hospitality</option>
            </select>
          </div>

          <div className="flex flex-col group">
            <div className="flex justify-between items-center mb-1">
              <label style={antiqueFont} className="opacity-80 transition-opacity group-focus-within:opacity-100">HOW DID YOU HEAR ABOUT US? *</label>
              <span className="text-[10px] opacity-40">▼</span>
            </div>
            <select style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none appearance-none cursor-pointer transition-colors w-full text-black">
              <option value=""></option>
              <option value="social">Social Media</option>
              <option value="press">Press</option>
              <option value="referral">Referral</option>
            </select>
          </div>

          {/* Key Information (Stay full width but shorter) */}
          <div className="flex flex-col md:col-span-2 group">
            <label style={antiqueFont} className="mb-1 opacity-80 transition-opacity group-focus-within:opacity-100">KEY INFORMATION ON THE PROJECT *</label>
            <input type="text" style={inputStyle} className="border-b-2 border-black bg-transparent py-1 focus:outline-none transition-colors text-black" />
          </div>

          {/* Consent Checkbox */}
          <div className="md:col-span-2 flex items-center gap-4 mt-4">
            <input type="checkbox" id="consent" className="w-[16px] h-[16px] border border-black/20 rounded-none bg-transparent accent-black cursor-pointer" />
            <label htmlFor="consent" style={antiqueFont} className="normal-case text-[12px] opacity-80 cursor-pointer">
              I consent to my information being collected in accordance with the Elicyon privacy policy
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4 mb-4">
            <button 
              type="submit" 
              style={antiqueFont} 
              className="group relative inline-flex items-center text-[13px] hover:opacity-100 transition-all duration-300 font-medium tracking-tight"
            >
              SUBMIT FORM
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-100 transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
