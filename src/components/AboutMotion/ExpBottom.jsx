import { motion } from "framer-motion";
import { draw } from "./draw";


export const ExpBottom = () => {
    return (
     
      <motion.svg
        width="1440" height="74"
        viewBox="0 0 1440 74"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.1}}
        
      >
        <motion.path
            d="M0 1H829.754C846.323 1 859.754 14.4315 859.754 31V43C859.754 59.5685 873.186 73 889.754 73H1440" // Moves to (0, 1) and creates a horizontal line to (704, 1)
            stroke="black"
            fill="none"
            variants={draw}
                custom={0.01}
            />
      
      </motion.svg>
    );
  }