import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [settings, setSettings] = useState({
    logo_url: '/images/raigad-logo.png',
    resort_name: 'Raigad Tropical',
    phone: '8421009712',
    email: 'contact@raigadtropical.in'
  });
  
  const location = useLocation();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        let record;
        try {
          // Try fetching by 'default' ID first
          record = await pb.collection('settings').getOne('default', { $autoCancel: false });
        } catch (err) {
          // Fallback to getting the first available record if 'default' fails (e.g., 404)
          const result = await pb.collection('settings').getList(1, 1, { $autoCancel: false });
          if (result.items.length > 0) {
            record = result.items[0];
          }
        }
        
        if (record) {
          setSettings(prev => ({
            ...prev,
            logo_url: record.logo_url || prev.logo_url,
            resort_name: record.resort_name || prev.resort_name,
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Accommodations', path: '/accommodations' },
    // { name: 'Facilities', path: '/facilities' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0, ease: 'linear' }
    },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn', delay: 0.3 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1 + i * 0.1 }
    }),
    exit: (i) => ({ 
      opacity: 0, 
      y: -20,
      transition: { delay: i * 0.05 }
    }),
  };

  const headerIsScrolled = isScrolled || !isHomePage;
  const whatsappLink = `https://wa.me/91${settings.phone}?text=Hi%20${encodeURIComponent(settings.resort_name)},%20I%20would%20like%20to%20inquire%20about%20booking`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          headerIsScrolled && !isMobileMenuOpen ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* Top Contact Bar */}
        <div className={`hidden md:block border-b transition-colors duration-300 ${headerIsScrolled ? 'border-border/50 bg-muted/30' : 'border-white/20 bg-black/20'}`}>
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs font-medium">
            <div className="flex items-center gap-6">
              <a href={`tel:+91${settings.phone}`} className={`flex items-center gap-2 hover:text-primary transition-colors ${headerIsScrolled ? 'text-muted-foreground' : 'text-gray-200'}`}>
                <Phone className="w-3 h-3" />
                +91 {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`} className={`flex items-center gap-2 hover:text-primary transition-colors ${headerIsScrolled ? 'text-muted-foreground' : 'text-gray-200'}`}>
                <Mail className="w-3 h-3" />
                {settings.email}
              </a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 hover:text-[#25D366] transition-colors ${headerIsScrolled ? 'text-muted-foreground' : 'text-gray-200'}`}
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {loading ? (
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full animate-pulse ${headerIsScrolled ? 'bg-muted' : 'bg-white/20'}`}></div>
                <div className={`h-6 w-32 rounded animate-pulse ${headerIsScrolled ? 'bg-muted' : 'bg-white/20'}`}></div>
              </div>
            ) : (
              <Link to="/" className="relative z-10 flex items-center gap-3 group">
                  {settings.logo_url && (
                  <img
                    src={settings.logo_url}
                    alt={`${settings.resort_name} Logo`}
                    className="h-11 md:h-12 w-11 md:w-12 object-cover rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors duration-300"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xl md:text-2xl font-bold tracking-wide transition-colors duration-300 ${
                    isMobileMenuOpen ? 'text-white' : headerIsScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {settings.resort_name}
                </motion.div>
              </Link>
            )}

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? headerIsScrolled ? 'text-primary' : 'text-primary'
                        : headerIsScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full transition-colors duration-300 relative z-10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className={`w-6 h-6 transition-colors duration-300 ${headerIsScrolled ? 'text-foreground' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-accent backdrop-blur-lg z-50 flex flex-col items-center justify-center md:hidden"
          >
            <motion.nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={item.path}
                    className="text-3xl font-light text-white/90 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Contact Info */}
              <motion.div 
                custom={navItems.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-8 flex flex-col items-center gap-4 text-white/80"
              >
                <a href={`tel:+91${settings.phone}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="w-5 h-5" /> +91 {settings.phone}
                </a>
                <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-5 h-5" /> {settings.email}
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#25D366] mt-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;