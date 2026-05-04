"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsSection from "@/components/InsightsSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "MAYFAIR RESIDENCE",
    category: "INTERIOR DESIGN",
    image: "/arc1.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "BELGRAVIA HOUSE",
    category: "ARCHITECTURE",
    image: "/arc2.jpg",
    year: "2023"
  },
  {
    id: 3,
    title: "MODERN LOFT",
    category: "INTERIOR DESIGN",
    image: "/arc3.jpg",
    year: "2024"
  },
  {
    id: 4,
    title: "RIVERSIDE APARTMENT",
    category: "PROJECT MANAGEMENT",
    image: "/arc4.jpeg",
    year: "2023"
  },
  {
    id: 5,
    title: "THE LANDMARK",
    category: "ARCHITECTURE",
    image: "/arc5.jpeg",
    year: "2025"
  },
  {
    id: 6,
    title: "SILK ROAD STUDIO",
    category: "INTERIOR DESIGN",
    image: "/arc6.jpg",
    year: "2024"
  },
  {
    id: 7,
    title: "NORTH LONDON FAMILY HOME",
    category: "RESIDENTIAL",
    image: "/arc1.jpg",
    year: "2024"
  },
  {
    id: 8,
    title: "TOWNHOUSE RENOVATION",
    category: "ARCHITECTURE",
    image: "/arc2.jpg",
    year: "2024"
  },
  {
    id: 9,
    title: "PENTHOUSE SUITE",
    category: "INTERIOR DESIGN",
    image: "/arc3.jpg",
    year: "2025"
  },
  {
    id: 10,
    title: "COUNTRY ESTATE",
    category: "ARCHITECTURE",
    image: "/arc4.jpeg",
    year: "2023"
  },
  {
    id: 11,
    title: "URBAN OASIS",
    category: "INTERIOR DESIGN",
    image: "/arc5.jpeg",
    year: "2024"
  },
  {
    id: 12,
    title: "KENSINGTON GARDEN VIEW, PIED-A-TERRE",
    category: "KENSINGTON • RESIDENTIAL",
    image: "/arc6.jpg",
    year: "2024"
  },
  {
    id: 13,
    title: "REGENT'S PARK FAMILY HOUSE",
    category: "REGENT'S PARK • RESIDENTIAL",
    image: "/arc1.jpg",
    year: "2024"
  },
  {
    id: 14,
    title: "MODERN VILLA",
    category: "ARCHITECTURE",
    image: "/arc2.jpg",
    year: "2024"
  },
  {
    id: 15,
    title: "STUDIO APARTMENT",
    category: "INTERIOR DESIGN",
    image: "/arc3.jpg",
    year: "2025"
  },
  {
    id: 16,
    title: "LUXURY SUITE",
    category: "INTERIOR DESIGN",
    image: "/arc4.jpeg",
    year: "2024"
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState("ALL");
  const [viewMode, setViewMode] = React.useState("grid-3"); // grid-3, grid-2, or full
  const [visibleCount, setVisibleCount] = React.useState(13);

  const headingStyle = {
    fontFamily: "'Elicyon', serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const filterLabelStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "10px",
    lineHeight: "10px",
    letterSpacing: "0.05em",
  };

  const filterButtonStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const filteredProjects = (activeFilter === "ALL"
    ? PROJECTS
    : PROJECTS.filter(p => {
      if (activeFilter === "RESIDENTIAL") return p.category.includes("INTERIOR DESIGN");
      if (activeFilter === "COMMERCIAL") return p.category.includes("PROJECT MANAGEMENT");
      if (activeFilter === "DEVELOPMENT") return p.category.includes("ARCHITECTURE");
      return true;
    })).slice(0, visibleCount);

  const categories = ["DEVELOPMENT", "RESIDENTIAL", "COMMERCIAL"];

  return (
    <main className="min-h-screen bg-[#f5f3f0] selection:bg-stone-200">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-20 flex items-center justify-center px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        {/* Mobile View */}
        <h1
          className="md:hidden text-[28px] leading-[28px] text-center tracking-tight flex flex-col items-center justify-center text-[#111111]"
          style={{ ...headingStyle, fontFamily: "'SageNav', sans-serif" }}
        >
          <span className="italic lowercase" style={{ textTransform: "none" }}>MALMAR</span>
          <span className="uppercase">PROJECT</span>
        </h1>
        {/* Desktop View */}
        <h1
          className="hidden md:block text-[115px] leading-tight uppercase text-center tracking-tight text-[#111111]"
          style={{ ...headingStyle, fontFamily: "'SageNav', sans-serif" }}
        >
          MALMAR  PROJECTS
        </h1>
      </section>

      {/* Filter & View Controls */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-12 flex flex-row justify-between items-end pt-6">
        <div className="flex flex-col">
          <span className="mb-4" style={filterLabelStyle}>
            FILTER PROJECTS
          </span>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(activeFilter === cat ? "ALL" : cat)}
                className={`uppercase transition-all duration-300 text-left text-[20px] md:text-[18px] leading-[1.2] ${activeFilter === "ALL"
                  ? "opacity-100"
                  : activeFilter === cat
                    ? "opacity-100"
                    : "opacity-20 hover:opacity-100"
                  }`}
                style={filterButtonStyle}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="ml-2">×</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-[#8a685b] pb-1">
          <button
            onClick={() => setViewMode("grid-3")}
            className={`transition-opacity duration-300 flex items-center justify-center ${viewMode === "grid-3" ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
            title="Grid View"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" />
              <rect x="13" y="3" width="8" height="8" />
              <rect x="3" y="13" width="8" height="8" />
              <rect x="13" y="13" width="8" height="8" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode("full")}
            className={`hidden md:flex transition-opacity duration-300 items-center justify-center ${viewMode === "full" ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
            title="List View"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="5" width="18" height="3" />
              <rect x="3" y="11" width="18" height="3" />
              <rect x="3" y="17" width="18" height="3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="pt-2 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[600px]">
        <div className={`grid gap-12 md:gap-x-12 md:gap-y-24 transition-all duration-700 ${viewMode === "grid-3"
          ? "grid-cols-1 md:grid-cols-12"
          : "grid-cols-1 max-w-5xl mx-auto"
          }`}>
          {filteredProjects.map((project, idx) => {
            let colSpanClass = "col-span-12";
            let aspectClass = viewMode === "full" ? "w-full h-auto" : "aspect-video w-full";
            let wrapperClass = "w-full";

            if (viewMode === "grid-3") {
              if (idx < 3) {
                // First 3 items: 3-column row
                colSpanClass = "md:col-span-4";
                aspectClass = "aspect-[4/5]";
              } else if (idx === 11 || idx === 12) {
                // Last Row: Symmetrical Twin Boxes
                colSpanClass = idx === 11
                  ? "md:col-start-1 md:col-span-6 lg:col-span-6"
                  : "md:col-start-7 lg:col-start-7 md:col-span-6 lg:col-span-6";
                aspectClass = "aspect-[4/5]";
                wrapperClass = "w-full";
              } else if (idx >= 13) {
                // Load More Section Layout
                if (idx === 13) {
                  // Small Left 1
                  colSpanClass = "md:col-span-3 lg:col-span-3";
                  aspectClass = "aspect-[3/4]";
                  wrapperClass = "w-full";
                } else if (idx === 14) {
                  // Small Left 2
                  colSpanClass = "md:col-span-3 lg:col-span-3";
                  aspectClass = "aspect-[3/4]";
                  wrapperClass = "w-full";
                } else if (idx === 15) {
                  // Right Big
                  colSpanClass = "md:col-span-6 lg:col-span-6";
                  aspectClass = "aspect-[4/5]";
                  wrapperClass = "w-full";
                }
              } else {
                // Alternating Pattern for the rest
                const pattern = (idx - 3) % 4;
                if (pattern === 0) {
                  // Small Left (Left Aligned)
                  colSpanClass = "md:col-start-1 md:col-span-5 lg:col-span-4";
                  aspectClass = "aspect-[3/4]";
                  wrapperClass = "w-full";
                } else if (pattern === 1) {
                  // Big Right (Right Aligned)
                  colSpanClass = "md:col-start-6 lg:col-start-6 md:col-span-7 lg:col-span-7";
                  aspectClass = "aspect-[4/5]";
                  wrapperClass = "w-[80%] mx-auto lg:ml-26 mr-auto";
                } else if (pattern === 2) {
                  // Big Left (Left Aligned)
                  colSpanClass = "md:col-start-1 md:col-span-7 lg:col-span-7";
                  aspectClass = "aspect-[3/4]";
                  wrapperClass = "w-[75%] ml-4 md:ml-10 lg:ml-0 mr-auto";
                } else if (pattern === 3) {
                  // Small Right (Right Aligned)
                  colSpanClass = "md:col-start-8 lg:col-start-8 md:col-span-5 lg:col-span-4";
                  aspectClass = "aspect-[3/4]";
                  wrapperClass = "w-full -ml-4 md:-ml-14 lg:-ml-58";
                }
              }
            }

            const isEven = idx % 2 === 0;
            const mobileLayoutClass = isEven ? "max-md:items-start max-md:text-left max-md:pr-12" : "max-md:items-end max-md:text-right max-md:pl-12";

            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 flex flex-col justify-center ${colSpanClass} ${viewMode === "full" ? 'md:flex-row gap-12 items-center mb-12' : ''} ${viewMode === "grid-3" ? mobileLayoutClass : ''}`}
              >
                <div className={`relative overflow-hidden mb-6 shadow-xl transition-all duration-700 ${viewMode === "full" ? "md:w-2/3 w-full" : (viewMode === "grid-3" ? `max-md:w-[85%] ${wrapperClass}` : wrapperClass)} ${aspectClass}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full transition-transform duration-700 group-hover:scale-105 ${viewMode === "full" ? "h-auto object-contain" : "h-full object-cover"
                      }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className={`flex justify-between items-start transition-all duration-700 ${viewMode === "full" ? 'md:w-1/3' : (viewMode === "grid-3" ? `max-md:w-full ${wrapperClass}` : wrapperClass)
                  }`}>

                  <div className={`flex flex-col w-full`}>
                    <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase opacity-60 mb-2" style={bodyStyle}>
                      {project.category}
                    </p>
                    <h3 className="text-[20px] md:text-[26px] tracking-wide uppercase leading-tight" style={headingStyle}>
                      {project.title}
                    </h3>
                  </div>
                  {viewMode === "full" && (
                    <span className="text-[14px] opacity-40 font-serif ml-4 mt-1" style={bodyStyle}>
                      {project.year}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-20 md:mt-32">
          <button
            onClick={() => setVisibleCount(PROJECTS.length)}
            className={`group relative inline-flex justify-center items-center pb-1 uppercase tracking-wide transition-opacity duration-500 ${visibleCount >= PROJECTS.length ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
              fontSize: "14px",
              lineHeight: "14px"
            }}
          >
            LOAD MORE
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-100 transition-transform duration-500 ease-out group-hover:origin-right group-hover:scale-x-0" />
          </button>
        </div>
      </section>

      <InsightsSection />
      <ContactForm />

      <Footer />
    </main>
  );
}
