import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Droplets, Leaf, ChefHat, Star } from 'lucide-react';
import productsImage from '../assets/YoBLS75zz1dZ.jpg';
import sichuanSpices from '../assets/XO1rEddHDwin.jpg';
import appleBrand from '../assets/l8xlXjf6vSyS.png';

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  const productCategories = [
    {
      icon: Package,
      title: 'Dried Groceries & Premium Condiments',
      description: 'Carefully selected staples and specialty items from across Asia.',
      image: productsImage,
      features: ['Premium Quality', 'Authentic Sources', 'Long Shelf Life', 'Bulk Available']
    },
    {
      icon: Droplets,
      title: 'Signature Asian Sauces & Pastes',
      description: 'Authentic flavor foundations for traditional and fusion cuisines.',
      image: appleBrand,
      features: ['Traditional Recipes', 'Halal Certified', 'Restaurant Grade', 'Consistent Quality']
    },
    {
      icon: Leaf,
      title: 'Specialty Herbs & Spices',
      description: 'Rare and premium aromatics sourced directly from growers.',
      image: sichuanSpices,
      features: ['Direct Sourcing', 'Peak Freshness', 'Authentic Flavors', 'Expert Curation']
    },
    {
      icon: ChefHat,
      title: 'Hotel-Grade Ready-to-Cook Bases',
      description: 'Professional kitchen solutions for consistency and efficiency.',
      image: productsImage,
      features: ['Chef Approved', 'Time Saving', 'Consistent Results', 'Scalable Portions']
    }
  ];

  const sichuanProducts = [
    { chinese: '二荆条', english: 'Fine-grade Sichuan Chili Powder' },
    { chinese: '石柱红', english: 'Green Sichuan Peppercorns' },
    { chinese: '海椒面', english: 'Coarse-ground Sichuan Chili Powder' },
    { chinese: '红花椒', english: 'Red Sichuan Peppercorns' },
    { chinese: '火锅料', english: 'Spicy Hotpot Base' },
    { chinese: '建华芝麻酱', english: 'Premium Sesame Paste' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="products" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-aa-navy mb-6"
          >
            Product Range Overview
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-aa-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The building blocks of exceptional Asian cuisine
          </motion.p>
        </motion.div>

        {/* Product Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Categories List */}
          <div className="space-y-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-l-4 ${
                  activeCategory === index
                    ? 'bg-aa-gold/10 border-aa-gold shadow-lg'
                    : 'bg-gray-50 border-gray-200 hover:bg-aa-gold/5 hover:border-aa-gold/50'
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    activeCategory === index ? 'bg-aa-gold text-white' : 'bg-aa-red text-white'
                  }`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-aa-navy mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-white text-aa-navy text-sm rounded-full border border-aa-gold/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Category Image */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={productCategories[activeCategory].image}
                alt={productCategories[activeCategory].title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aa-navy/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    {productCategories[activeCategory].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured: Apple Brand Partnership */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-aa-cream p-8 lg:p-12 rounded-2xl mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-aa-gold mr-3" />
                <h3 className="text-3xl font-bold text-aa-navy">Featured Partnership</h3>
              </div>
              <h4 className="text-2xl text-aa-gold font-semibold mb-6">Apple Brand Soy Sauce</h4>
              
              <div className="bg-white p-6 rounded-lg mb-6 border-r-4 border-aa-red">
                <h5 className="text-xl font-semibold text-aa-navy mb-3">Heritage & Quality</h5>
                <p className="text-gray-700">
                  Sin Heng Lee's Apple Brand represents generations of traditional brewing expertise, 
                  creating premium Halal-certified sauces celebrated in top hotels across Asia.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xl font-semibold text-aa-navy">Key Products:</h5>
                {[
                  'Premium Naturally Brewed Soy Sauce - Aged for exceptional depth',
                  'Superior Dark Soy Sauce - Rich color and caramel notes',
                  'Light Soy Sauce - Delicate flavor for seafood dishes',
                  'Penang Char Kuey Teow Sauce - Authentic specialty blend'
                ].map((product, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg border-l-3 border-aa-gold"
                  >
                    <div className="w-2 h-2 bg-aa-gold rounded-full"></div>
                    <p className="text-gray-700">{product}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="relative inline-block">
                <img
                  src={appleBrand}
                  alt="Apple Brand soy sauce"
                  className="w-64 h-auto mx-auto shadow-2xl rounded-lg bg-white p-4"
                />
                <div className="absolute -bottom-4 -left-4 bg-aa-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Exclusive Singapore Partner
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Chef's Selection: Sichuan Specialties */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-aa-navy mb-4"
          >
            Chef's Selection
          </motion.h3>
          <motion.h4 
            variants={itemVariants}
            className="text-2xl text-aa-gold mb-12"
          >
            Sichuan & Specialty Condiments
          </motion.h4>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {sichuanProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md hover-lift"
                whileHover={{ y: -5 }}
              >
                <p className="text-xl font-bold text-aa-red mb-2 font-serif">
                  {product.chinese}
                </p>
                <p className="text-gray-700">{product.english}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-lg italic text-aa-navy">
              <span className="text-aa-gold font-semibold">The Soul of Sichuan</span><br />
              A curated palette for the modern chef
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

