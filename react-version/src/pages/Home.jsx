import React from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuPreview from "@/components/MenuPreview";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";

const Home = ({ refs }) => {
  return (
    <>
      <Helmet>
        <title>Raigad Tropical | Best Eco-Resort in Sahyadri</title>
        <meta
          name="description"
          content="Experience luxury and heritage at Raigad Tropical Resort."
        />
      </Helmet>
      <Hero />
      <AboutSection ref={refs.about} />
      <MenuPreview ref={refs.menu} />
      <ReservationSection ref={refs.reservations} />
      <ContactSection ref={refs.contact} />
    </>
  );
};

export default Home;
