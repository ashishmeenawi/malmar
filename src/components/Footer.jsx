import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const letters = "MALMAR".split("");

  const antiqueStyle = {
    fontFamily: "'Elicyon', serif",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    lineHeight: "1.6",
    color: "rgb(0, 0, 0)"
  };

  const navLinks = [
    { name: "PROJECTS", path: "/projects" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <footer className="relative bg-[#fdf0d5] text-[#1a1a1a] pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-16 overflow-hidden flex flex-col">
      {/*pt-6 md:pt-10   */}
      <div className="max-w-[1400px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT: NEWSLETTER FORM */}
          <div className="flex flex-col">
            <style>{`
              .footer-mobile-title { font-size: 5.5vw; line-height: 1; }
              @media (min-width: 400px) { .footer-mobile-title { font-size: 20px; line-height: 1; } }
              @media (min-width: 768px) { .footer-mobile-title { font-size: 24px; line-height: 0.9; } }
            `}</style>
            <h2 className="mb-6 uppercase footer-mobile-title" style={{
              fontFamily: "'SageNav', sans-serif",
              fontWeight: 400,
              color: "rgb(0, 0, 0)"
            }}>
              {/* Desktop View */}
              <div className="hidden md:block">
                <div>JOIN <span className="italic lowercase" style={{ textTransform: "none" }}>the</span></div>
                <div>WORLD</div>
                <div><span className="italic lowercase mr-2" style={{ textTransform: "none" }}>of</span> MALMAR</div>
              </div>

              {/* Mobile View */}
              <div className="block md:hidden" style={{ lineHeight: "1.2" }}>
                <div className="whitespace-nowrap">JOIN <span className="italic lowercase mx-1" style={{ textTransform: "none" }}>the</span> WORLD</div>
                <div className="whitespace-nowrap"><span className="italic lowercase mr-2" style={{ textTransform: "none" }}>of</span> MALMAR</div>
              </div>
            </h2>

            <p className="text-[9px] md:text-[17px] leading-relaxed mb-5 max-w-sm" style={{
              fontFamily: "'Elicyon', serif",
              fontWeight: 400,
              color: "rgb(0, 0, 0)"
            }}>
              Subscribe to join our community and stay up to date with the studio.
            </p>

            <form className="space-y-5 w-full max-w-md">
              <div className="flex flex-row gap-3 md:gap-5">
                <input
                  type="text"
                  placeholder="FIRST NAME *"
                  className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "8.5px" }}
                />
                <input
                  type="text"
                  placeholder="LAST NAME *"
                  className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "8.5px" }}
                />
              </div>

              <input
                type="email"
                placeholder="EMAIL *"
                className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                style={{ ...antiqueStyle, fontSize: "8.5px" }}
              />

              <label className="flex items-start gap-3 cursor-pointer mt-3">
                <div className="relative">
                  <input type="checkbox" className="peer appearance-none w-3 h-3 border border-black/40 rounded-none checked:bg-black/80 mt-1 cursor-pointer" />
                </div>
                <p className="text-[8px] md:text-[14px] leading-relaxed opacity-70" style={{
                  fontFamily: "'Elicyon', serif",
                  fontWeight: 400,
                  color: "rgb(0, 0, 0)"
                }}>
                  I consent to my information being collected in accordance with the Malmar privacy policy
                </p>
              </label>

              <button
                type="button"
                className="border-b border-black pb-0.5 hover:opacity-50 transition-opacity mt-1.5 text-[9px] md:text-[10px]"
                style={{ ...antiqueStyle, fontWeight: 600 }}
              >
                SUBMIT FORM
              </button>
            </form>
          </div>

          {/* RIGHT: LINKS */}
          <div className="grid grid-cols-2 gap-4 md:gap-10 pt-1 lg:pt-0">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className="cursor-pointer hover:opacity-50 transition-opacity text-[9px] md:text-[11px]"
                  style={antiqueStyle}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {["INSTAGRAM", "PINTEREST", "LINKEDIN", "FACEBOOK"].map((link) => (
                <span key={link} className="cursor-pointer hover:opacity-50 transition-opacity text-[9px] md:text-[11px]" style={antiqueStyle}>
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- BIG LOGO TEXT WITH SHUTTER EFFECT --- */}
      <motion.div
        className="hidden md:flex w-full mt-8 mb-6 z-10 overflow-hidden justify-center"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      >
        <div className="flex select-none">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + (i * 0.08),
                duration: 1.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              style={{
                fontFamily: "'SageNav', sans-serif",
                fontSize: "clamp(20px, 6vw, 60px)",
                lineHeight: "clamp(20px, 6vw, 60px)",
                color: "rgb(0, 0, 0)",
                textTransform: "uppercase",
                display: "inline-block"
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="hidden md:block w-full py-2 z-10 bg-[#fdf0d5]">
        <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center gap-4 text-[9px] opacity-60" style={antiqueStyle}>
          <div className="flex gap-4 hover:opacity-100 transition-opacity">
            <Link href="/privacy" className="cursor-pointer font-bold">Privacy Policy</Link>
            <Link href="/terms" className="cursor-pointer font-bold">Terms & Conditions</Link>
          </div>
          <div className="text-right">
            <span>REGISTERED TRADE MARK OF MALMAR STUDIO © 2026</span>
          </div>
        </div>
      </div>

      {/* --- MOBILE BOTTOM LAYER --- */}
      <div className="flex flex-col md:hidden w-full mt-8 mb-3 z-10">
        {/* Logo Replacement */}
        <div className="w-full flex justify-center mb-5">
          <Link href="/">
            <img src="/logo.png" alt="Malmar Logo" className="h-[22px] sm:h-[30px] w-auto object-contain object-center opacity-90" />
          </Link>
        </div>

        {/* Legal Text */}
        <div className="w-full flex flex-col text-[7.5px] min-[390px]:text-[8.5px] uppercase opacity-70 tracking-widest font-medium" style={antiqueStyle}>
          <div className="flex justify-start gap-[10%] w-full mb-2">
            <Link href="/terms" className="cursor-pointer">TERMS OF SERVICE</Link>
            <Link href="/privacy" className="cursor-pointer">PRIVACY POLICY</Link>
          </div>
          <div className="text-left w-full">
            <span>REGISTERED TRADE MARK OF MALMAR 2026</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
