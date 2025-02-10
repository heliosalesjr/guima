"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Circles() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("circle-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica logo no início

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="items-center justify-center flex flex-col">
      <div id="circle-container" className="relative w-[300px] h-[300px] flex justify-center items-center">
        <motion.div
          className="absolute w-[300px] h-[300px] border-2 border-slate-300 rounded-full"
          initial={{ y: -300, opacity: 0, scale: 0.8 }}
          animate={animate ? { y: 30, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] border-2 border-slate-300 rounded-full"
          initial={{ y: 300, opacity: 0, scale: 0.8 }}
          animate={animate ? { y: 60, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] border-2 border-slate-300 rounded-full"
          initial={{ x: 175, y: 45, opacity: 0, scale: 0.8 }}
          animate={animate ? { x: -30, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] border-2 border-slate-300 rounded-full"
          initial={{ x: -175, y: 45, opacity: 0, scale: 0.8 }}
          animate={animate ? { x: 30, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>
    </div>
    
  );
}
