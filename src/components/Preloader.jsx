"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const words = "MALMAR".split("");

const Preloader = ({ onComplete }) => {
  const [isExpanding, setIsExpanding] = useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fcefd4" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">

        {/* 1. MALMAR Text — moves to logo position when window expands */}
        <motion.div
          className="flex z-30 pointer-events-none absolute"
          style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
          animate={isExpanding ? {
            top: "40px",
            left: "50%",
            x: "-50%",
            y: "0%",
            scale: 0.5,
            opacity: 0,
          } : {
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.13,
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="text-5xl md:text-7xl font-light tracking-tighter text-black"
              style={{ fontFamily: "'SageNav', sans-serif" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* 2. The "Window" Opening */}
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={isExpanding
            ? { width: "100%", height: "100%", borderRadius: 0 }
            : { width: "400px", height: "180px" }
          }
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
            delay: isExpanding ? 0 : 0.8
          }}
          onAnimationComplete={() => {
            if (!isExpanding) {
              // Small window formed — now expand to full screen
              setIsExpanding(true);
            } else {
              // Fully expanded — reveal the site
              onComplete();
            }
          }}
          className="absolute z-10 overflow-hidden shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/MMM.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Preloader;
