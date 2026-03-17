import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Rooms', 'Facilities', 'Events', 'Landscape'];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1600076616965-2468b850519f',
      alt: 'Luxurious air-conditioned hotel room with modern furnishings and elegant decor',
      category: 'Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1613688684407-cc73e44fdc74',
      alt: 'Cozy non-air-conditioned room with natural ventilation and comfortable bedding',
      category: 'Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1601701119495-d6e39b664001',
      alt: 'Charming independent cottage with private outdoor space and rustic design',
      category: 'Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1615880326062-f2de6eb10e46',
      alt: 'Spacious resort room with panoramic windows and tropical garden views',
      category: 'Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1691505429513-a30e45267462',
      alt: 'Crystal clear swimming pool surrounded by tropical landscaping and lounge chairs',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1693360345552-b0272db7b41c',
      alt: 'Elegant restaurant interior with modern dining setup and ambient lighting',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1698934641149-93431f3bd4f7',
      alt: 'Spacious party hall with elegant decor and modern lighting for celebrations',
      category: 'Facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1625038032515-308ab14d10b9',
      alt: 'Beautiful outdoor wedding venue with elegant floral decorations and romantic ambiance',
      category: 'Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1680416105281-ec213b1986f7',
      alt: 'Professional conference room with modern presentation equipment and comfortable seating',
      category: 'Events'
    },
    {
      url: 'https://images.unsplash.com/photo-1657340835640-8cd097332129',
      alt: 'Stunning tropical resort landscape with palm trees and golden sunset',
      category: 'Landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1609925428492-0dc8cdde517f',
      alt: 'Lush tropical gardens with exotic plants and peaceful walking paths',
      category: 'Landscape'
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery - Raigad Tropical | Resort Photos & Facilities</title>
        <meta name="description" content="Browse our stunning photo gallery showcasing rooms, facilities, events, and the beautiful tropical landscape at Raigad Tropical resort." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1657340835640-8cd097332129"
            alt="Resort gallery overview with tropical landscape"
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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Explore the beauty of Raigad Tropical
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={`${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;