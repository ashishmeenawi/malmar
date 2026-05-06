"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ✅ Footer Typography + Color */
const footerFontStyle = {
  fontFamily:
    '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
  letterSpacing: "0.12em",
  lineHeight: "1.7",
  color: "rgba(67, 67, 67, 0.6)",
};

const Navbar = () => {
  const pathname = usePathname();

  const isProjectsPage = pathname === "/projects";
  const isContactPage = pathname === "/contact";
  const isAboutPage = pathname === "/about";

  const isLightPage =
    isProjectsPage || isContactPage || isAboutPage;

  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverArc, setIsOverArc] = useState(false);

  /* ✅ Arc Section Detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverArc(entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px -90% 0px",
        threshold: 0,
      }
    );

    const target = document.getElementById("arc-section");

    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  /* ✅ Navbar Hide / Show Animation */
  useGSAP(
    () => {
      const showAnim = gsap
        .from(navbarRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: "power2.out",
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",

        onUpdate: (self) => {
          if (!isMenuOpen) {
            self.direction === -1
              ? showAnim.play()
              : showAnim.reverse();
          }
        },
      });
    },
    {
      scope: navbarRef,
      dependencies: [isMenuOpen],
    }
  );

  /* ✅ Fullscreen Menu Animation */
  useGSAP(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      const menuItems =
        document.querySelectorAll(".menu-item");

      if (menuItems.length) {
        gsap.fromTo(
          menuItems,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      const footer =
        document.querySelector(".menu-footer");

      if (footer) {
        gsap.fromTo(
          footer,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
            delay: 0.8,
          }
        );
      }
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.in",
      });
    }
  }, [isMenuOpen]);

  /* ✅ Detect Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > window.innerHeight * 0.9
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ✅ Close Menu on Route Change */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /* ✅ iPhone Safe Scroll Lock */
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
      } else {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-[100] grid grid-cols-3 items-center px-6 md:px-12 py-8 transition-colors duration-500 ${
          isOverArc
            ? "text-white"
            : isScrolled || isLightPage
            ? isMenuOpen
              ? "text-black"
              : "text-[#78233e]"
            : isMenuOpen
            ? "text-black"
            : "text-white"
        }`}
      >
        {/* LEFT NAV */}
        <div className="flex items-center">
          <div className="hidden md:flex space-x-8 uppercase nav-font text-[14px] tracking-[2.1px]">
            <Link
              href="/projects"
              className="hover:opacity-70 transition-all duration-300"
            >
              Projects
            </Link>

            <Link
              href="/services"
              className="hover:opacity-70 transition-all duration-300"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="hover:opacity-70 transition-all duration-300"
            >
              About
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden uppercase nav-font tracking-[2.1px]"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* LOGO */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MALMAR"
              width={200}
              height={50}
              priority
              className="h-6 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* RIGHT NAV */}
        <div className="flex justify-end uppercase nav-font text-[14px] tracking-[2.1px]">
          <Link
            href="/contact"
            className="hover:opacity-70 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* ================= FULLSCREEN MENU ================= */}
      <div
        ref={menuRef}
        className="
          fixed
          inset-0
          w-full
          h-[100svh]
          min-h-screen
          z-[90]
          -translate-y-full
          flex
          flex-col
          justify-between
          overflow-y-auto
          overscroll-none
          touch-pan-y
          px-6
          md:px-12
          pt-28
          pb-10
          md:py-20
          text-black
        "
        style={{
          backgroundColor: "#fcefd4",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* MENU ITEMS */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 md:space-y-8">
          {["Projects", "Services", "About"].map(
            (item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="
                  menu-item
                  uppercase
                  nav-font
                  text-[32px]
                  md:text-[64px]
                  leading-[1]
                "
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* MENU FOOTER */}
        <div className="menu-footer w-full flex flex-col space-y-10 text-[8px] pb-safe">

          <div className="flex justify-between gap-8">

            {/* LEFT SOCIAL */}
            <div className="flex flex-col space-y-2">
              {[
                "INSTAGRAM",
                "PINTEREST",
                "LINKEDIN",
                "FACEBOOK",
              ].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="uppercase hover:opacity-90 transition-all duration-300"
                  style={footerFontStyle}
                >
                  {social}
                </a>
              ))}
            </div>

            {/* RIGHT LINKS */}
            <div className="flex flex-col space-y-2 text-right">
              {[
                "TERMS OF SERVICE",
                "PRIVACY POLICY",
                "FAQs",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="uppercase hover:opacity-90 transition-all duration-300"
                  style={footerFontStyle}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* COPYRIGHT */}
          <div
            className="text-center uppercase text-[8px]"
            style={footerFontStyle}
          >
            COPYRIGHT MALMAR STUDIO 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;