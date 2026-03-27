import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const StickyWhatsAppFooter = () => {
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
    <>
      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${loading ? 'opacity-0' : 'opacity-100'}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
      </a>

      {/* Footer */}
      <footer className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 transition-opacity duration-500 ${loading ? 'opacity-80' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Resort Branding */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{settings.resort_name}</h3>
              <p className="text-gray-300 mb-4">{settings.resort_tagline}</p>
              <p className="text-gray-400 text-sm">
                Experience luxury and tranquility at our tropical paradise. Your perfect getaway awaits in the heart of Kolad.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Home
                  </Link>
                </li>
                {/* <li> */}
                  {/* <Link to="/accommodations" className="text-gray-300 hover:text-primary transition-colors duration-300"> */}
                    {/* Accommodations */}
                  {/* </Link> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <Link to="/facilities" className="text-gray-300 hover:text-primary transition-colors duration-300"> */}
                    {/* Facilities */}
                  {/* </Link> */}
                {/* </li> */}
                {/* <li> */}
                  {/* <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors duration-300"> */}
                    {/* Gallery */}
                  {/* </Link> */}
                {/* </li> */}
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <a href={`tel:+91${settings.phone}`} className="text-gray-300 hover:text-primary transition-colors duration-300">
                      +91 {settings.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <a href={`mailto:${settings.email}`} className="text-gray-300 hover:text-primary transition-colors duration-300">
                      {settings.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300">
                    Kolad, Raigad District<br />
                    Maharashtra, India
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {settings.resort_name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StickyWhatsAppFooter;