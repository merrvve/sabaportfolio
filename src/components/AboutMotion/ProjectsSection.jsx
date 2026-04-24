import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { draw } from "./draw";

const viewport = { once: true, amount: 0.1 };

const projects = [
  {
    num: "01",
    name: "HeartBeat",
    category: "Bluetooth Speaker",
    gradient:
      "linear-gradient(135deg, rgba(200,170,255,0.35) 0%, rgba(255,170,210,0.3) 50%, rgba(150,190,255,0.35) 100%)",
  },
  {
    num: "02",
    name: "Art Nouveau Chess",
    category: "Chess Set Pieces",
    gradient:
      "linear-gradient(135deg, rgba(255,240,140,0.35) 0%, rgba(170,255,190,0.3) 50%, rgba(150,240,210,0.35) 100%)",
  },
  {
    num: "03",
    name: "Modular Art Station",
    category: "Modular Furniture",
    gradient:
      "linear-gradient(135deg, rgba(150,255,200,0.35) 0%, rgba(140,220,255,0.3) 50%, rgba(120,200,240,0.35) 100%)",
  },
  {
    num: "04",
    name: "Tumble Oil Painting",
    category: "Oil Painting",
    gradient:
      "linear-gradient(135deg, rgba(255,190,120,0.35) 0%, rgba(255,230,140,0.3) 50%, rgba(170,255,190,0.35) 100%)",
  },
];

/* Corner-bracket line matching About Me style */
const ProjectsBox = () => (
  <motion.svg
    width="90"
    height="520"
    viewBox="0 0 90 520"
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    className="absolute left-0 top-0 h-full"
  >
    <motion.path
      d="M0 1H58C74.569 1 88 14.4315 88 31V520"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
      variants={draw}
      custom={0}
    />
  </motion.svg>
);

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative flex min-h-screen">
      {/* Left label column — hidden on mobile */}
      <div className="relative w-24 shrink-0 hidden md:flex items-center justify-center">
        <ProjectsBox />
        <motion.h1
          className="p-0 font-bold text-6xl -rotate-90 whitespace-nowrap relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={viewport}
        >
          Projects
        </motion.h1>
      </div>

      {/* Project list */}
      <div className="flex-1 flex flex-col justify-center py-10 md:pr-2">
        {/* Mobile-only horizontal title */}
        <h1 className="block md:hidden font-bold text-3xl italic px-6 pb-6 scroll-animation scroll-animation-default">
          Projects
        </h1>
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
              y: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
              layout: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            viewport={viewport}
          >
            <motion.div
              className="relative flex items-center gap-8 px-6 cursor-pointer"
              style={{ background: project.gradient }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={
                hoveredIndex === i
                  ? {
                      paddingTop: 48,
                      paddingBottom: 48,
                      borderRadius: 16,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    }
                  : {
                      paddingTop: 28,
                      paddingBottom: 28,
                      borderRadius: 0,
                      boxShadow: "0 0px 0px rgba(0,0,0,0)",
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    }
              }
            >
              {/* Top-right arrow */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    key="arrow"
                    className="absolute top-3 right-3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "top right" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 17L17 5M17 5H8M17 5V14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              <span
                className="text-6xl md:text-7xl font-light text-gray-300 select-none leading-none w-24 shrink-0"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.04em" }}
              >
                {project.num}
              </span>

              <div className="flex flex-col gap-0.5 flex-1">
                <span
                  className="font-bold text-xl md:text-2xl leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {project.name}
                </span>
                <span className="text-xs text-gray-500">{project.category}</span>
              </div>

              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    key="img-placeholder"
                    className="shrink-0 rounded-lg bg-white/40 overflow-hidden"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.08)",
                      width: 160,
                      transformOrigin: "center center",
                    }}
                    initial={{ opacity: 0, scale: 0.8, height: 0 }}
                    animate={{ opacity: 1, scale: 1, height: 300 }}
                    exit={{ opacity: 0, scale: 0.8, height: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {i < projects.length - 1 && hoveredIndex !== i && hoveredIndex !== i + 1 && (
                <motion.div
                  key={`divider-${i}`}
                  className="h-px bg-gray-300"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.25, ease: "easeOut" }}
                  viewport={viewport}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
