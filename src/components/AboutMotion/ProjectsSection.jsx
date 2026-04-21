import { motion } from "framer-motion";
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

/* Rounded-rectangle outline drawn as a path so pathLength animation works */
const ProjectsBox = () => (
  <motion.svg
    width="90"
    height="290"
    viewBox="0 0 90 290"
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    className="absolute left-0 top-1/2 -translate-y-1/2"
  >
    <motion.path
      d="M22,2 H68 Q88,2 88,22 V268 Q88,288 68,288 H22 Q2,288 2,268 V22 Q2,2 22,2 Z"
      stroke="black"
      strokeWidth="1.5"
      fill="none"
      variants={draw}
      custom={0}
    />
  </motion.svg>
);

export const ProjectsSection = () => {
  return (
    <section className="relative flex min-h-screen">
      {/* Left label column — matches "About Me" style */}
      <div className="relative w-24 shrink-0 flex items-center justify-center">
        <ProjectsBox />
        <motion.h1
          className="p-0 font-bold text-6xl -rotate-90 whitespace-nowrap relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          viewport={viewport}
        >
          Projects
        </motion.h1>
      </div>

      {/* Project list */}
      <div className="flex-1 flex flex-col justify-center py-10 pr-6 md:pr-24">
        {projects.map((project, i) => (
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            viewport={viewport}
          >
            <div
              className="flex items-center gap-8 px-6 py-7"
              style={{ background: project.gradient }}
            >
              <span
                className="text-6xl md:text-7xl font-light text-gray-300 select-none leading-none w-24 shrink-0"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.04em" }}
              >
                {project.num}
              </span>

              <div className="flex flex-col gap-0.5">
                <span
                  className="font-bold text-xl md:text-2xl leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {project.name}
                </span>
                <span className="text-xs text-gray-500">{project.category}</span>
              </div>
            </div>

            {i < projects.length - 1 && (
              <motion.div
                className="h-px bg-gray-300"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.25, ease: "easeOut" }}
                viewport={viewport}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
