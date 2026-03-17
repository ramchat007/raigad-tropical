import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Wind, Droplets, Coffee, Home, MessageCircle } from 'lucide-react';

const AccommodationsPage = () => {
  const whatsappNumber = '919876543210';
  const whatsappMessage = encodeURIComponent('Hi Raigad Tropical, I would like to inquire about room bookings.');

  const accommodations = [
    {
      title: 'AC Rooms',
      image: 'https://images.unsplash.com/photo-1600076616965-2468b850519f',
      alt: 'Luxurious air-conditioned hotel room with modern furnishings, comfortable bed, and elegant decor',
      description: 'Experience ultimate comfort in our air-conditioned rooms featuring modern amenities and elegant design. Perfect for a relaxing stay in tropical luxury.',
      amenities: [
        { icon: Wind, text: 'Air Conditioning' },
        { icon: Wifi, text: 'High-Speed WiFi' },
        { icon: Tv, text: 'Smart TV' },
        { icon: Droplets, text: 'Attached Bathroom' },
        { icon: Coffee, text: 'Mini Fridge' },
        { icon: Home, text: 'Room Service' }
      ]
    },
    {
      title: 'Non-AC Rooms',
      image: 'https://images.unsplash.com/photo-1613688684407-cc73e44fdc74',
      alt: 'Cozy non-air-conditioned room with natural ventilation, comfortable bedding, and warm ambiance',
      description: 'Enjoy a natural and eco-friendly stay in our well-ventilated non-AC rooms. Experience the tropical breeze while staying comfortable and connected.',
      amenities: [
        { icon: Wind, text: 'Natural Ventilation' },
        { icon: Wifi, text: 'WiFi Access' },
        { icon: Tv, text: 'Television' },
        { icon: Droplets, text: 'Attached Bathroom' },
        { icon: Coffee, text: 'Tea/Coffee Maker' },
        { icon: Home, text: 'Daily Housekeeping' }
      ]
    },
    {
      title: 'Cozi Houses',
      image: 'https://images.unsplash.com/photo-1601701119495-d6e39b664001',
      alt: 'Charming independent cottage with private outdoor space, rustic design, and homely atmosphere',
      description: 'Perfect for families and groups, our Cozi Houses offer a home-away-from-home experience with private spaces and all essential amenities for a memorable stay.',
      amenities: [
        { icon: Home, text: 'Private Space' },
        { icon: Wifi, text: 'WiFi Connectivity' },
        { icon: Tv, text: 'Entertainment System' },
        { icon: Droplets, text: 'Multiple Bathrooms' },
        { icon: Coffee, text: 'Kitchenette' },
        { icon: Wind, text: 'Outdoor Seating' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accommodations - Raigad Tropical | Luxury Rooms & Cottages</title>
        <meta name="description" content="Choose from our AC Rooms, Non-AC Rooms, and Cozi Houses at Raigad Tropical. Comfortable accommodations with modern amenities for your perfect stay." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600076616965-2468b850519f"
            alt="Luxurious resort accommodations overview"
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
            Our Accommodations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Choose your perfect stay at Raigad Tropical
          </motion.p>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {accommodation.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {accommodation.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Amenities
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {accommodation.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <amenity.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

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

export default AccommodationsPage;