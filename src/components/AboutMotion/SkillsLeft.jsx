import { motion } from "framer-motion";
import { draw } from "./draw";

const viewport = { once: true, amount: 0.1 };

const SkillsBox = () => (
  <motion.svg
    width="90"
    height="100%"
    viewBox="0 0 90 520"
    preserveAspectRatio="none"
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

export const SkillsLeft = () => {
  return (
    <>
      <SkillsBox />
      <motion.h1
        className="p-0 font-bold text-6xl -rotate-90 whitespace-nowrap relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={viewport}
      >
        Skills
      </motion.h1>
    </>
  );
};
