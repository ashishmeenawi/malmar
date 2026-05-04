"use client";
import React from "react";

const BackgroundVideo = ({ videoRef }) => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        src="/MMM.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default BackgroundVideo;
