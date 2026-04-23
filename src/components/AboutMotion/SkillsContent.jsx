import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projectGradients = [
  "linear-gradient(135deg, rgba(200,170,255,0.55) 0%, rgba(255,170,210,0.5) 100%)",
  "linear-gradient(135deg, rgba(255,240,140,0.55) 0%, rgba(170,255,190,0.5) 100%)",
  "linear-gradient(135deg, rgba(150,255,200,0.55) 0%, rgba(140,220,255,0.5) 100%)",
  "linear-gradient(135deg, rgba(255,190,120,0.55) 0%, rgba(255,230,140,0.5) 100%)",
];

const skillCategories = [
  { category: "3D Modeling", skills: ["Rhinoceros 3D", "SolidWorks", "Fusion 360", "Blender"] },
  { category: "Visualization", skills: ["KeyShot", "V-Ray", "Lumion"] },
  { category: "2D & Design", skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign"] },
  { category: "Making & Fabrication", skills: ["Sketching", "Model Making", "Prototyping", "3D Printing", "Laser Cutting"] },
  { category: "Technical", skills: ["AutoCAD", "Technical Drawing", "Material Science"] },
];

const SkillGroup = ({ cat, ci, gradient }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setSpread(true), 500);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: ci * 0.12, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-3"
    >
      <span className="text-[14px] font-semibold uppercase tracking-widest">
        {cat.category}
      </span>

      {/* Container switches from relative (stacked) → flex (spread) to trigger layout animation */}
      <div
        ref={containerRef}
        className={spread ? "flex flex-wrap gap-2" : "relative"}
        style={!spread ? { minHeight: "2.5rem" } : undefined}
      >
        {cat.skills.map((skill, si) => (
          <motion.span
            key={skill}
            layout
            transition={{
              layout: {
                type: "spring",
                stiffness: 280,
                damping: 26,
                delay: si * 0.08,
              },
            }}
            className="px-4 py-2 text-[14px] font-medium rounded-full text-gray-700 border border-gray-800 whitespace-nowrap"
            style={{
              background: gradient,
              ...(!spread && {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: cat.skills.length - si,
              }),
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 py-8">
    {skillCategories.map((cat, ci) => (
      <SkillGroup
        key={cat.category}
        cat={cat}
        ci={ci}
        gradient={projectGradients[ci % projectGradients.length]}
      />
    ))}
  </div>
);
