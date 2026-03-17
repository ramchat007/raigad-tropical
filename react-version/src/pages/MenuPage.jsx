import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const menuData = {
  starters: [
    { name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, basil pesto, balsamic glaze.", price: "$18" },
    { name: "Tuna Tartare", description: "Ahi tuna, avocado, cucumber, citrus-soy vinaigrette, wonton crisps.", price: "$22" },
    { name: "Foie Gras Brûlée", description: "Seared foie gras, fig jam, toasted brioche, port wine reduction.", price: "$28" },
  ],
  mainCourses: [
    { name: "Pan-Seared Scallops", description: "Jumbo scallops, saffron risotto, asparagus, lemon-butter sauce.", price: "$42" },
    { name: "Filet Mignon", description: "8oz center-cut filet, potato gratin, grilled asparagus, red wine jus.", price: "$55" },
    { name: "Lobster Thermidor", description: "Maine lobster tail, brandy cream sauce, Parmesan cheese, herb breadcrumbs.", price: "$65" },
     { name: "Mushroom Risotto", description: "Arborio rice, wild mushrooms, parmesan, truffle oil.", price: "$35" },
  ],
  desserts: [
    { name: "Chocolate Lava Cake", description: "Molten chocolate center, raspberry coulis, vanilla bean ice cream.", price: "$15" },
    { name: "Crème Brûlée Trio", description: "Classic vanilla, lavender, and espresso infused custard.", price: "$16" },
    { name: "Deconstructed Tiramisu", description: "Mascarpone mousse, espresso-soaked ladyfingers, cocoa dust.", price: "$14" },
  ],
};

const MenuCategory = ({ title, items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-light text-center text-[#6B5D4F] mb-8 tracking-wider">{title}</h2>
    <div className="space-y-6 max-w-2xl mx-auto">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-normal text-[#3D352E]">{item.name}</h3>
            <p className="text-xl font-light text-[#6B5D4F]">{item.price}</p>
          </div>
          <p className="text-[#6B5D4F]/80 mt-1">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>Menu - Saint-Laurent Restaurant</title>
        <meta name="description" content="Explore the exquisite menu at Saint-Laurent, featuring a curated selection of starters, main courses, and desserts." />
      </Helmet>
      <div className="bg-[#F5F1EB] pt-32 pb-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-thin text-center text-[#3D352E] mb-16 tracking-widest"
        >
          OUR MENU
        </motion.h1>
        
        <div className="max-w-7xl mx-auto">
          <MenuCategory title="Starters" items={menuData.starters} />
          <MenuCategory title="Main Courses" items={menuData.mainCourses} />
          <MenuCategory title="Desserts" items={menuData.desserts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;