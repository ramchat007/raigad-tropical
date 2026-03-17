import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FacilitiesPage = () => {
  const whatsappNumber = '919876543210';
  const whatsappMessage = encodeURIComponent('Hi Raigad Tropical, I would like to inquire about your facilities.');

  const facilities = [
    {
      title: 'Swimming Pool',
      image: 'https://images.unsplash.com/photo-1691505429513-a30e45267462',
      alt: 'Crystal clear swimming pool surrounded by tropical landscaping and comfortable lounge chairs',
      description: 'Dive into relaxation at our pristine swimming pool. Surrounded by lush tropical greenery, our pool offers the perfect escape for both leisure and recreation. Enjoy refreshing swims under the sun or unwind on our comfortable poolside loungers.'
    },
    {
      title: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1693360345552-b0272db7b41c',
      alt: 'Elegant restaurant interior with modern dining setup and ambient lighting',
      description: 'Savor exquisite culinary experiences at our in-house restaurant. Our talented chefs prepare a diverse menu featuring local delicacies and international cuisine. Enjoy your meals in a sophisticated ambiance with impeccable service.'
    },
    {
      title: 'Party Hall',
      image: 'https://images.unsplash.com/photo-1698934641149-93431f3bd4f7',
      alt: 'Spacious party hall with elegant decor, stage setup, and modern lighting for celebrations',
      description: 'Celebrate your special moments in our versatile party hall. Equipped with modern amenities, sound systems, and customizable decor options, our hall is perfect for birthdays, anniversaries, and social gatherings of all sizes.'
    },
    {
      title: 'Wedding Events',
      image: 'https://images.unsplash.com/photo-1625038032515-308ab14d10b9',
      alt: 'Beautiful outdoor wedding venue with elegant floral decorations and romantic ambiance',
      description: 'Make your dream wedding a reality at Raigad Tropical. Our stunning wedding venues, both indoor and outdoor, provide the perfect backdrop for your special day. From intimate ceremonies to grand celebrations, we handle every detail with care.'
    },
    {
      title: 'Corporate Events',
      image: 'https://images.unsplash.com/photo-1680416105281-ec213b1986f7',
      alt: 'Professional conference room with modern presentation equipment and comfortable seating',
      description: 'Host successful corporate events in our well-equipped conference facilities. Perfect for meetings, seminars, team building activities, and corporate retreats. We provide state-of-the-art technology, comfortable seating, and professional support services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Facilities - Raigad Tropical | Pool, Restaurant & Event Spaces</title>
        <meta name="description" content="Explore world-class facilities at Raigad Tropical including swimming pool, restaurant, party hall, wedding venues, and corporate event spaces." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1691505429513-a30e45267462"
            alt="Resort facilities overview with swimming pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            World-class amenities for your comfort and enjoyment
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {facility.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {facility.description}
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquire via WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesPage;