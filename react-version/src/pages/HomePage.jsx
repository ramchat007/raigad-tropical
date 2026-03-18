import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, Waves, Sun, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Mountain,
    title: "Sahyadri Serenity",
    description:
      "Nestled amidst the majestic peaks and lush valleys of the Sahyadri range, experience mountain life at its finest.",
  },
  {
    icon: Waves,
    title: "Riverside Luxury",
    description:
      "Located near the scenic Kundalika river, offering world-class facilities and a refreshing highland escape.",
  },
  {
    icon: Sun,
    title: "Mist-Covered Mornings",
    description:
      "Wake up to the cool mountain breeze and golden sunrises over the Western Ghats.",
  },
  {
    icon: Sparkles,
    title: "Unforgettable Heritage",
    description:
      "A perfect blend of modern comfort and the timeless heritage of the historic Raigad region.",
  },
];

const QUICK_LINKS = [
  {
    title: "Accommodations",
    description: "Choose from AC Rooms, Non-AC Rooms, and Cozi Houses",
    link: "/accommodations",
    image: "/images/accomodation.jpg",
    alt: "Luxurious resort rooms with mountain views",
  },
  {
    title: "Facilities",
    description: "Swimming pool, restaurant, party hall, and event spaces",
    link: "/facilities",
    image: "/images/resort-view.jpg",
    alt: "Resort swimming pool overlooking the Sahyadri mountains",
  },
  {
    title: "Gallery",
    description: "View our stunning resort photos and scenic landscapes",
    link: "/gallery",
    image: "/images/image-lawn.jpg",
    alt: "Beautiful mountain resort landscape at sunset",
  },
];

const HomePage = () => {
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGate(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWelcome = () => {
    document
      .getElementById("welcome-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          Raigad Tropical - The Pride of Kolad | Sahyadri Mountain Resort
        </title>
        <meta
          name="description"
          content="Experience the majesty of the Sahyadri mountains at Raigad Tropical, Kolad. Luxury cottages, riverside views, and mountain serenity await."
        />
      </Helmet>

      {/* FORT GATE INTRO */}
      <AnimatePresence>
        {showGate && (
          <motion.div
            className="fixed inset-0 z-[9999] flex pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <motion.div
              className="w-1/2 h-full bg-[#3b2f2f] border-r-4 border-[#2a1f1f] shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage: 'url("/images/gate-image.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className="w-1/2 h-full bg-[#3b2f2f] border-l-4 border-[#2a1f1f] shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage: 'url("/images/gate-image.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover">
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Raigad Tropical
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-light mb-8 tracking-wide">
              The Pride of Kolad
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Escape to the Sahyadri highlands and experience the perfect blend
              of luxury, nature, and mountain tranquility.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Book Your Stay
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator (Clickable) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          onClick={scrollToWelcome}>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome-section"
        className="py-20 bg-gradient-to-br from-background via-card to-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to Raigad Tropical
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your perfect mountain escape in the heart of Kolad, where
              luxury meets the rugged beauty of the Sahyadris.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16">
            <Link to="/accommodations">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300">
                Explore Accommodations
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Resort
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QUICK_LINKS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Link to={item.link} className="group block">
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
