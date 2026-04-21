import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeOut" },
  },
});

const viewport = { once: true, amount: 0.1 };

const skillCategories = [
  {
    category: "3D Modeling",
    skills: ["Rhinoceros 3D", "SolidWorks", "Fusion 360", "Blender"],
  },
  {
    category: "Visualization",
    skills: ["KeyShot", "V-Ray", "Lumion"],
  },
  {
    category: "2D & Design",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign"],
  },
  {
    category: "Making & Fabrication",
    skills: ["Sketching", "Model Making", "Prototyping", "3D Printing", "Laser Cutting"],
  },
  {
    category: "Technical",
    skills: ["AutoCAD", "Technical Drawing", "Material Science"],
  },
];

export const SkillsContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 py-8">
      {skillCategories.map((cat, ci) =>
        <motion.div
          key={cat.category}
          variants={fadeUp(ci * 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-3"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            {cat.category}
          </span>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, si) => (
              <motion.span
                key={skill}
                variants={fadeUp(ci * 0.12 + si * 0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="px-3 py-1 text-[12px] font-medium bg-gray-100 rounded-full text-gray-700 border border-gray-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
