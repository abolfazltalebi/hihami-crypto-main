import React from "react";
import { motion } from "framer-motion";

export default function NeonButton({ title }) {
  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-full"
    >   
      <span className="absolute left-0 w-2 h-6 bg-pink-500 z-10 rounded"></span>
      <span className="absolute right-0 w-2 h-6 bg-pink-500 z-10 rounded"></span>
      <button className="relative  button-nft w-[97%]">{title}</button>
    </motion.button>
  );
}
