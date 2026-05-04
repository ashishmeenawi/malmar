"use client";
import Link from 'next/link';
import React from 'react';

const AboutInterrioSection = () => {
  return (
    <section className="w-full bg-white pt-16 pb-20 md:pt-24 md:pb-36 font-sans relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-2">
          <h2 className="text-3xl md:text-[32px] font-bold text-[#222222] uppercase tracking-normal">
            ABOUT <span className="text-[#c5a059]">MALMAR</span>
          </h2>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center mb-12">
          <div className="w-[6px] h-[6px] rounded-full bg-[#c5a059]"></div>
          <div className="h-[2px] w-[180px] bg-[#c5a059]"></div>
        </div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

          {/* Column 1 */}
          <div className="flex flex-col lg:pr-4">
            <h3 className="text-[20px] font-bold text-[#222222] leading-[1.4] mb-4">
              We Have The Right Products to Fit Your Needs <span className="text-[#c5a059] block sm:inline">Purchase - Interrio.</span>
            </h3>
            <p className="text-[#888888] text-[15px] leading-[1.8] mb-8 font-light">
              Interior brings 41 years of interior designs experience right to home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers within the colors and lighting of your we make more than your expectation and your dream designs.
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-32 h-16 opacity-80 flex items-center">
                {/* Signature Placeholder */}
                <img
                  src="/signature.png"
                  alt="Signature"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><path d="M10,40 Q25,20 40,35 T70,25 T100,40 T130,25 T160,35" fill="none" stroke="%23333" stroke-width="1.5"/><path d="M30,35 Q60,50 70,30 T130,45" fill="none" stroke="%23333" stroke-width="1.5"/></svg>';
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-[#222222] text-[15px] block">William Shocks,</span>
                <span className="text-[#c5a059] text-[13px] italic font-medium">CEO & Founder</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="w-full h-[240px] mb-5 overflow-hidden group bg-gray-100">
              <img
                src="/arc1.jpg"
                alt="Architect"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1471&auto=format&fit=crop';
                }}
              />
            </div>
            <h3 className="text-[18px] font-bold text-[#222222] mb-3">Our Mission</h3>
            <p className="text-[#888888] text-[15px] leading-[1.8] font-light">
              To work in accordance with the clients&apos; requirement and exceed their expectations in terms of quality, cost control and time management.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="w-full h-[240px] mb-5 overflow-hidden group bg-gray-100">
              <img
                src="/service1.jpg"
                alt="Carpenter"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop';
                }}
              />
            </div>
            <h3 className="text-[18px] font-bold text-[#222222] mb-3">Our Vision</h3>
            <p className="text-[#888888] text-[15px] leading-[1.8] font-light">
              To consistently deliver eco-friendly world class finishes in our interior design concepts, execute & complete all projects in such a way.
            </p>
          </div>

        </div>

        {/* Navigation Link with Clear Sliding Underline Animation */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link 
            href="/about" 
            className="relative py-2 text-[#222222] uppercase tracking-[0.3em] font-bold text-sm group inline-block"
          >
            <span className="relative z-10">Learn More</span>
            {/* 
                - Normal: origin-left, scale-x-100 (Visible)
                - Hover: origin-right, scale-x-0 (Shrinks to right/disappears)
                - Leave: origin-left, scale-x-100 (Grows from left/returns)
            */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a059] transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutInterrioSection;
