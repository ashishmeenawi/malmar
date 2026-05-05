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

const Navbar = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  const isContactPage = pathname === "/contact";
  const isAboutPage = pathname === "/about";
  const isLightPage = isProjectsPage || isContactPage || isAboutPage;

  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverArc, setIsOverArc] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverArc(entry.isIntersecting),
      {
        rootMargin: "-80px 0px -90% 0px",
        threshold: 0,
      }
    );

    const target = document.getElementById("arc-section");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
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
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
      },
    });
  }, { scope: navbarRef, dependencies: [isMenuOpen] });

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.fromTo(
        ".menu-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(".menu-footer", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.8 });
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.in",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveMenu("main");
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-[100] grid grid-cols-3 items-center px-6 md:px-12 py-8 drop-shadow-sm transition-colors duration-500 ease-in-out ${
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
        {/* LEFT MENU */}
        <div className="flex items-center">
          <div className="hidden md:flex space-x-8 uppercase nav-font text-[14px] leading-[14px] tracking-[2.1px]">
            <Link href="/projects" className="hover:opacity-80">Projects</Link>
            <Link href="/services" className="hover:opacity-80">Services</Link>
            <Link href="/about" className="hover:opacity-80">About</Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden uppercase nav-font tracking-[2.1px]"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* LOGO */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MALMAR"
              width={200}
              height={50}
              className={`h-6 md:h-10 w-auto transition-all duration-500 ${
                isOverArc
                  ? "invert brightness-0 invert"
                  : isScrolled || isLightPage
                  ? ""
                  : isMenuOpen
                  ? ""
                  : "invert brightness-0 invert"
              }`}
              priority
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-center uppercase nav-font text-[14px] leading-[14px] tracking-[2.1px]">
          <Link href="/contact" className="hover:opacity-70">
            Contact
          </Link>
        </div>
      </nav>

      {/* MENU */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen z-[90] -translate-y-full flex flex-col justify-between px-6 md:px-12 py-10 md:py-20 text-black"
        style={{ backgroundColor: "#fcefd4" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 md:space-y-6">
          {["Projects", "Services", "About"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="menu-item uppercase nav-font text-[28px] md:text-[64px]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;