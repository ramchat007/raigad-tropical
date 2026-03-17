import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const AboutSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return <section ref={setRefs} className="py-24 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <span className="text-[#8B7355] text-sm tracking-[0.2em] uppercase mb-4 block">Est. 1961</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#6B5D4F] mb-6 leading-tight">
              Honest, Simple,
              <br />
              Heartfelt, Delicious
            </h2>
            <p className="text-[#6B5D4F]/80 leading-relaxed mb-8">
              At Saint-Laurent, we believe that true culinary artistry lies in simplicity and the finest ingredients.
              Established in 1961, our philosophy has always been to serve natural, healthy, and incredibly tasty dishes.
              Dine with us to experience a symphony of flavors, meticulously crafted with heart-felt honesty,
              turning every meal into a cherished memory. Our chefs are dedicated to creating an unforgettable journey for your palate,
              ensuring each visit is a celebration of exquisite cuisine and warm hospitality.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gourmet steak dish with vegetables" src="https://images.unsplash.com/photo-1692296979430-13bee2e264f3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
});
export default AboutSection;