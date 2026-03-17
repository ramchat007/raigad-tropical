import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Palmtree, Waves, Sun } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Raigad Tropical - The Pride of Kolad | Luxury Resort</title>
        <meta
          name="description"
          content="Experience luxury and tranquility at Raigad Tropical, the premier tropical resort destination in Kolad. Book your perfect getaway today."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>
          {/* <img src="/images/resort-view.jpg" alt="Luxury tropical resort with palm trees and pristine pool overlooking lush greenery" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Raigad Tropical
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-light mb-8 tracking-wide">
              The Pride of Kolad
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Escape to paradise and experience the perfect blend of luxury,
              nature, and tranquility
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to Raigad Tropical
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your perfect tropical escape at Raigad Tropical, where
              luxury meets nature in the heart of Kolad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palmtree,
                title: "Tropical Paradise",
                description:
                  "Surrounded by lush greenery and swaying palms, experience nature at its finest",
              },
              {
                icon: Waves,
                title: "Luxury Amenities",
                description:
                  "World-class facilities including swimming pool, restaurant, and event spaces",
              },
              {
                icon: Sun,
                title: "Perfect Location",
                description:
                  "Nestled in the scenic beauty of Kolad, your ideal getaway destination",
              },
              {
                icon: Sparkles,
                title: "Unforgettable Experience",
                description:
                  "Create lasting memories with exceptional service and stunning surroundings",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="text-center mt-16"
          >
            <Link to="/accommodations">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
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
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Resort
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Accommodations",
                description:
                  "Choose from AC Rooms, Non-AC Rooms, and Cozi Houses",
                link: "/accommodations",
                image:
                  "/images/image1.png",
                alt: "Luxurious hotel room with modern furnishings and elegant decor",
              },
              {
                title: "Facilities",
                description:
                  "Swimming pool, restaurant, party hall, and event spaces",
                link: "/facilities",
                image:
                  "/images/image2.png",
                alt: "Crystal clear swimming pool surrounded by tropical landscaping",
              },
              {
                title: "Gallery",
                description: "View our stunning resort photos and facilities",
                link: "/gallery",
                image:
                  "/images/image3.png",
                alt: "Beautiful tropical resort landscape with palm trees and sunset",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
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
