import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';

const Footer = React.forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({
    resort_name: 'Raigad Tropical',
    resort_tagline: 'The Pride of Kolad',
    phone: '8421009712',
    email: 'contact@raigadtropical.in'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        let record;
        try {
          // Try fetching by 'default' ID first
          record = await pb.collection('settings').getOne('default', { $autoCancel: false });
        } catch (err) {
          // Fallback to getting the first available record if 'default' fails
          const result = await pb.collection('settings').getList(1, 1, { $autoCancel: false });
          if (result.items.length > 0) {
            record = result.items[0];
          }
        }
        
        if (record) {
          setSettings(prev => ({
            ...prev,
            resort_name: record.resort_name || prev.resort_name,
            resort_tagline: record.resort_tagline || prev.resort_tagline,
            phone: record.phone || prev.phone,
            email: record.email || prev.email
          }));
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const whatsappLink = `https://wa.me/91${settings.phone}?text=Hi%20${encodeURIComponent(settings.resort_name)},%20I%20would%20like%20to%20inquire%20about%20booking`;

  return (
    <footer ref={ref} className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 transition-opacity duration-500 ${loading ? 'opacity-80' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{settings.resort_name}</h3>
            <p className="text-gray-300 mb-4">{settings.resort_tagline}</p>
            <address className="not-italic text-gray-400 leading-relaxed">
              Kolad, Raigad District<br />
              Maharashtra, India
            </address>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 tracking-wide">Quick Links</h3>
            <div className="text-gray-300 space-y-2 flex flex-col">
              <Link to="/" className="hover:text-primary transition-colors w-fit">Home</Link>
              {/* <Link to="/accommodations" className="hover:text-primary transition-colors w-fit">Accommodations</Link> */}
              {/* <Link to="/facilities" className="hover:text-primary transition-colors w-fit">Facilities</Link> */}
              {/* <Link to="/gallery" className="hover:text-primary transition-colors w-fit">Gallery</Link> */}
              <Link to="/contact" className="hover:text-primary transition-colors w-fit">Contact</Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 tracking-wide">Contact Us</h3>
            <div className="text-gray-300 space-y-3 flex flex-col">
              <a href={`tel:+91${settings.phone}`} className="hover:text-primary transition-colors w-fit">
                +91 {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className="hover:text-primary transition-colors w-fit">
                {settings.email}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors w-fit">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {settings.resort_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;