import { motion } from "framer-motion";

import { draw } from "./draw";
export const LeftBottom = () => {
    return (
        <>
        
      <motion.svg
        width="735" height="526"
        viewBox="0 0 735 526"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.2}}
      >
        <motion.path
            d="M0 1H127C143.569 1 157 14.4315 157 31V1087"
            
            stroke="black"
            fill="none"
            variants={draw}
                custom={1}
            />
      
      </motion.svg>
      <motion.h1 className="p-0 font-bold text-6xl absolute bottom-56 -left-5 -rotate-90"
      initial={{ opacity: 0  }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay:1 }}
      >
        About Me
      </motion.h1>
      </>
    );
  }

