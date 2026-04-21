import { motion } from "framer-motion";
import { draw } from "./draw";
export const TopRight = () => {
    return (
      <motion.svg
        width="735" height="526"
        viewBox="0 0 735 526"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.1}}
        
      >
        <motion.path
            d="M0 1 H674 A30 30 0 0 1 704 31 V525" // Moves to (0, 1) and creates a horizontal line to (704, 1)
            stroke="black"
            fill="none"
            variants={draw}
                custom={0.01}
            />
      
      </motion.svg>
    );
  }