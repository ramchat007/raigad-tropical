import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Rooms", "Facilities", "Events", "Landscape"];

  const images = [
    {
      url: "/images/gallery/gallery-landscape1.jpg",
      alt: "",
      category: "Landscape",
    },
    {
      url: "/images/gallery/gallery-landscape2.jpg",
      alt: "",
      category: "Landscape",
    },
    {
      url: "/images/gallery/gallery-landscape3.jpg",
      alt: "",
      category: "Landscape",
    },
    {
      url: "/images/gallery/gallery-event1.jpg",
      alt: "",
      category: "Events",
    },
    {
      url: "/images/gallery/gallery-event2.jpg",
      alt: "",
      category: "Events",
    },
    {
      url: "/images/gallery/gallery-event3.jpg",
      alt: "",
      category: "Events",
    },
    
    {
      url: "/images/gallery/gallery-room1.jpg",
      alt: "",
      category: "Rooms",
    },
    {
      url: "/images/gallery/gallery-room2.jpg",
      alt: "",
      category: "Rooms",
    },
    {
      url: "/images/gallery/gallery-room3.jpg",
      alt: "",
      category: "Rooms",
    },
    {
      url: "/images/gallery/gallery-room4.jpg",
      alt: "",
      category: "Rooms",
    },
    {
      url: "/images/gallery/gallery-room5.jpg",
      alt: "",
      category: "Rooms",
    },
    {
      url: "/images/gallery/gallery-facilities1.jpg",
      alt: "",
      category: "Facilities",
    },
    {
      url: "/images/gallery/gallery-facilities2.jpg",
      alt: "",
      category: "Facilities",
    },
    {
      url: "/images/gallery/gallery-facilities3.jpg",
      alt: "",
      category: "Facilities",
    },
    {
      url: "/images/gallery/gallery-facilities4.jpg",
      alt: "",
      category: "Facilities",
    }
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery - Raigad Tropical | Resort Photos & Facilities</title>
        <meta
          name="description"
          content="Browse our stunning photo gallery showcasing rooms, facilities, events, and the beautiful tropical landscape at Raigad Tropical resort."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/gallery-hero.jpg"
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
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
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
                    <p className="text-white text-sm font-medium">
                      {image.category}
                    </p>
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
