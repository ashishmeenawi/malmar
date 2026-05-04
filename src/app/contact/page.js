"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    nature: '',
    message: '',
    consent: false
  });
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);
    // Add submission logic here later
  };

  const textStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "#111"
  };

  const subtextStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)"
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] selection:bg-stone-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center flex-col pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
          {/* Main Title */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-[18px] md:text-[60px] leading-tight uppercase tracking-tight relative"
              style={textStyle}>
              The WORLD <br className="md:hidden" /> of <br /> MALMAR
            </h1>
          </div>

          {/* Subtext Paragraphs */}
          <div className="max-w-xl mx-auto space-y-8">
            <p 
              className="text-[16px] md:text-[18px] leading-[1.8] text-stone-600 font-light"
              style={subtextStyle}
            >
              A collection of narratives, from our own reflections to those told by esteemed industry peers, capturing the essence of our work and the inspirations behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Section Detail */}
      <section className="relative w-full overflow-hidden bg-[#f4f1ea] flex flex-col lg:flex-row items-stretch border-t border-stone-200">
        {/* Left Image Pane */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[560px]">
          <img src="/insite22.jpeg" alt="Dubai Villa" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right Content Pane */}
        <div className="w-full lg:w-1/2 bg-[#d8d3cd] flex flex-col items-center justify-center py-8 px-8 text-center min-h-[400px] lg:min-h-[560px] gap-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-[24px] md:text-[32px] uppercase" style={textStyle}>
              A Dubai Villa of QUIET <br /> GRANDEUR and CRAFTED <br /> DETAIL
            </h2>
          </div>
          <div className="w-full max-w-[280px] aspect-[4/5] overflow-hidden shadow-2xl">
            <img src="/new4.jpeg" alt="Architectural Detail" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8 mb-8">
            <p className="text-[14px] uppercase tracking-widest text-stone-800" style={subtextStyle}>
              Where BESPOKE FORM meets desert STILLNESS
            </p>
            <div className="flex justify-center">
              <Link href="/projects" className="relative py-2 text-[#111] uppercase tracking-widest font-bold text-[11px] group">
                <span className="relative z-10 transition-opacity hover:opacity-80">READ INSIGHT</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#c5a059] transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-[#f4f1ea] py-24 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          <div className="flex flex-col justify-start">
            <h2 className="text-[36px] md:text-[52px] leading-[1.1] uppercase tracking-tight text-[#111]"
              style={textStyle}>
              EVERY SPACE STARTS <br /> with a STORY. LET&apos;S <br /> START YOURS
            </h2>
          </div>

          <div className="w-full">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* First Name */}
                <div className="relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.firstName ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.firstName && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">First name is required</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.lastName ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.lastName && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Last name is required</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.email ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.email && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Email is required</p>
                  )}
                </div>

                {/* Telephone */}
                <div className="relative group">
                  <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-stone-400 transition-colors text-stone-900 font-light"
                  />
                </div>
              </div>

              {/* dropdown */}
              <div className="relative group pt-4">
                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                  Nature of Enquiry (Please Select) *
                </label>
                <div className={`relative border-b ${showErrors && !formData.nature ? 'border-red-500' : 'border-stone-800'}`}>
                  <select
                    value={formData.nature}
                    onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
                    className="w-full bg-transparent py-2 focus:outline-none appearance-none cursor-pointer text-stone-900 font-light"
                  >
                    <option value="">Select an option</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="bespoke">Bespoke Furniture</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                </div>
                {showErrors && !formData.nature && (
                  <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Please select a nature of enquiry</p>
                )}
              </div>

              {/* Message */}
              <div className="relative group pt-4">
                <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                  Message *
                </label>
                <textarea
                  rows="1"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors resize-none text-stone-900 font-light ${showErrors && !formData.message ? 'border-red-500' : 'border-stone-800'}`}
                ></textarea>
                {showErrors && !formData.message && (
                  <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Message is required</p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-10">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input type="checkbox" className="mt-1 accent-stone-800" />
                  <span className="text-[11px] uppercase tracking-[0.1em] text-stone-600 font-medium">Join our community</span>
                </label>
                <div className="relative">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      className={`mt-1 h-3 w-3 accent-stone-800 outline outline-offset-2 ${showErrors && !formData.consent ? 'outline-red-500' : 'outline-transparent'}`}
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span className="text-[11px] uppercase tracking-[0.1em] text-stone-600 font-medium leading-relaxed">
                      I consent to my information being collected <br className="hidden md:block" /> in accordance with the Malmar privacy policy
                    </span>
                  </label>
                  {showErrors && !formData.consent && (
                    <p className="absolute -bottom-6 left-8 text-[10px] text-red-500 font-medium">You must consent to data collection</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-16 flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="relative py-2 text-[#111] uppercase tracking-[0.3em] font-bold text-[13px] group inline-block"
                >
                  <span className="relative z-10 transition-opacity hover:opacity-80">SUBMIT ENQUIRY</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#c5a059] transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Professional Enquiries Section */}
      <section className="relative w-full flex flex-col lg:flex-row items-stretch">
        {/* Left: General Enquiries */}
        <div className="w-full lg:w-1/2 bg-[#6d88c7] py-24 px-8 md:px-12 flex flex-col items-center text-center text-[#111] min-h-[600px] lg:min-h-[800px] justify-between">
          <h2 className="text-[32px] md:text-[48px] uppercase tracking-tight leading-tight" style={textStyle}>
            GENERAL <br /> ENQUIRIES
          </h2>

          <div className="space-y-12">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">London Studio</p>
              <a href="mailto:studio@elicyon.com" className="text-[14px] md:text-[16px] block hover:opacity-70 transition-opacity">studio@elicyon.com</a>
              <p className="text-[14px] md:text-[16px]">+44 (0) 203 772 0011</p>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Singapore Studio</p>
              <a href="mailto:studio.sg@elicyon.com" className="text-[14px] md:text-[16px] block hover:opacity-70 transition-opacity">studio.sg@elicyon.com</a>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Library</p>
              <a href="mailto:librarian@elicyon.com" className="text-[14px] md:text-[16px] block hover:opacity-70 transition-opacity">librarian@elicyon.com</a>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Careers</p>
              <Link href="/careers" className="relative group inline-block py-1">
                <span className="text-[14px] md:text-[16px]">View open positions</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111] transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Press Enquiries */}
        <div className="w-full lg:w-1/2 bg-[#d4cdc5] py-24 px-8 md:px-12 flex flex-col items-center text-center text-[#111] min-h-[600px] lg:min-h-[800px] justify-between">
          <h2 className="text-[32px] md:text-[48px] uppercase tracking-tight leading-tight" style={textStyle}>
            PRESS <br /> ENQUIRIES
          </h2>

          <div className="space-y-12 flex flex-col items-center">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Press</p>
              <a href="mailto:marketing@elicyon.com" className="text-[14px] md:text-[16px] block hover:opacity-70 transition-opacity">marketing@elicyon.com</a>
            </div>

            <div className="max-w-[400px] aspect-[1/1.2] overflow-hidden shadow-2xl bg-stone-100">
              <img
                src="/object5.jpg"
                alt="Forbes Malmar Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#f4f1ea] py-24 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: Address Info */}
          <div className="space-y-12">
            <h2 className="text-[36px] md:text-[56px] leading-[1.1] uppercase tracking-tight text-[#111]"
              style={textStyle}>
              OUR <br /> LOCATION
            </h2>

            <div className="space-y-6">
              <div className="text-[14px] md:text-[16px] leading-relaxed text-stone-800 font-light" style={subtextStyle}>
                <p>First Floor, Avon House</p>
                <p>Avonmore Road</p>
                <p>Kensington Village</p>
                <p>London, W14 8TS</p>
              </div>

              <p className="text-[14px] md:text-[16px] italic text-stone-600 font-light" style={subtextStyle}>
                Visits by appointment only
              </p>
            </div>
          </div>

          {/* Right: Map Integration */}
          <div className="w-full aspect-video lg:aspect-square bg-stone-200 shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.740446944645!2d-0.21319202359487774!3d51.490445611634594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fa0db917997%3A0xe54d852a4659f81a!2sAvon%20House!5e0!3m2!1sen!2suk!4v1711974000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
