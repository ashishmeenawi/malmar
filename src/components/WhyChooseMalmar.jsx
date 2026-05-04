"use client";
import React from 'react';

const WhyChooseMalmar = () => {
  const items = [
    {
      title: "41 Years Of Experience",
      description: "We brings 41 years of interior designs experience office, hospital and etc...",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M8 10h.01" />
          <path d="M16 10h.01" />
          <path d="M8 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      )
    },
    {
      title: "Creative Designers",
      description: "Our designing team designs with your taste, space, and budget, Also our team will guide you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: "Quality Products",
      description: "We provide high quality products only to our customers, our products are certified with WIOC.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Awards Winning Team",
      description: "In 1984 we won the best residential interior designer award from organization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      )
    },
    {
      title: "Free Consultation",
      description: "We providing free consultation about interior quality, space, budget and etc but it is free for all.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
        </svg>
      )
    },
    {
      title: "24/7 Customer Support",
      description: "whenever and wherever you need our support you can contact our 24/7 customer support team.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full py-24 bg-cover bg-center bg-fixed text-white overflow-hidden" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2000&auto=format&fit=crop')" }}>
      {/* Darkened Overlay */}
      <div className="absolute inset-0 bg-[#111111]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-[36px] font-bold uppercase tracking-[2px] leading-tight">
            WHY CHOOSE <span className="text-[#c5a059]">MALMAR</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-[2px] w-14 bg-[#c5a059]"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-[#c5a059] mx-3"></div>
            <div className="h-[2px] w-14 bg-[#c5a059]"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {items.map((item, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-[70px] h-[70px] bg-[#c5a059] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-[#b38f4a]">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[19px] font-bold mb-3 text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-[1.7] font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMalmar;

