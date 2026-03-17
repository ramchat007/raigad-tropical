import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
      
      <motion.div initial={{
      scale: 1.1
    }} animate={{
      scale: 1
    }} transition={{
      duration: 1.5,
      ease: 'easeOut'
    }} className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Outdoor restaurant seating with checkered tablecloths and Italian food" src="https://horizons-cdn.hostinger.com/b326f609-ccc2-439f-af74-7c154119f498/e9a65078d983be32679738e7dfc48bbd-VM2jJ.webp" />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="mb-6">
          <span className="text-[#F5F1EB] text-sm tracking-[0.3em] uppercase">
            Restaurant & Bar
          </span>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="text-6xl md:text-8xl font-light text-[#F5F1EB] mb-8 tracking-tight">
          SAN-LORENZO
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }} className="text-[#F5F1EB]/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Experience culinary excellence in a nostalgic Italian atmosphere</motion.p>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F1EB] to-transparent z-20" />
    </section>;
};
export default Hero;