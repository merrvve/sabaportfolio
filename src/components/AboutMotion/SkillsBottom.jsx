import { motion } from "framer-motion";
import { draw } from "./draw";
export const SkillsBottom = () => {
    

    return (
      <motion.svg
        width="1133" height="184"
        viewBox="0 0 1133 184"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.1}}
        
      >
        <motion.path
            d="M1132 0.755127V153C1132 169.569 1118.57 183 1102 183H29.6286C13.8175 183 1 170.183 1 154.372V154.372" // Moves to (0, 1) and creates a horizontal line to (704, 1)
            stroke="black"
            fill="none"
            variants={draw}
                custom={0.01}
            />
      
      </motion.svg>
    );
  }