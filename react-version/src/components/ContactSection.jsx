import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const setRefs = (node) => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={setRefs} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#6B5D4F]">Contact Us</h2>
          <p className="text-[#6B5D4F]/70 mt-3">We'd love to hear from you. Here's how you can reach us.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block p-4 bg-[#F5F1EB] rounded-full mb-4">
              <Phone className="w-6 h-6 text-[#8B7355]" />
            </div>
            <p className="text-[#6B5D4F] font-semibold">Phone</p>
            <p className="text-[#6B5D4F]/80">(123) 456-7890</p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="inline-block p-4 bg-[#F5F1EB] rounded-full mb-4">
              <Mail className="w-6 h-6 text-[#8B7355]" />
            </div>
            <p className="text-[#6B5D4F] font-semibold">Email</p>
            <p className="text-[#6B5D4F]/80">contact@sanlorenzo.com</p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="inline-block p-4 bg-[#F5F1EB] rounded-full mb-4">
              <MapPin className="w-6 h-6 text-[#8B7355]" />
            </div>
            <p className="text-[#6B5D4F] font-semibold">Address</p>
            <p className="text-[#6B5D4F]/80">123 Culinary Lane, Foodie City</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default ContactSection;