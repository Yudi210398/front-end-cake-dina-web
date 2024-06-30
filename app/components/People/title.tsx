"use client";
import { motion } from "framer-motion";
import { bad } from "../Features";
const Title = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    >
      <h3
        style={{ fontSize: "35px", fontStyle: "oblique" }}
        className={`${bad.className} text-4xl sm:text-5xl font-semibold text-black text-center my-10`}
      >
        MACAM - MACAM KUE
      </h3>
      <hr
        style={{ border: "1px solid navy", color: "blue" }}
        className=" mx-auto w-20 border-1 -mt-2"
      />
    </motion.div>
  );
};

export default Title;
