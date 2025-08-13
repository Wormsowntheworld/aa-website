import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import aboutImage from '../assets/1S8h44XHSHMu.jpg';

const AboutSectionCorrected = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: Award, number: '20+', label: 'Years of Excellence' },
    { icon: Globe, number: '15+', label: 'Countries Sourced' },
    { icon: Users, number: '500+', label: 'Satisfied Clients' },
    { icon: TrendingUp, number: '1000+', label: 'Premium Products' }
  ];

  const highlights = [
    {
      text: 'Founded in Singapore, with over 20 years of experience in sourcing and supplying premium food ingredients.',
      color: 'aa-gold'
    },
    {
      text: 'Serving the most discerning hospitality and culinary clients across Asia.',
      color: 'aa-red'
    },
    {
      text: 'Our expertise spans traditional Asian flavors to modern, innovative cuisines.',
      color: 'aa-gold'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-aa-cream" ref={ref}>
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
            className="text-2xl lg:text-3xl font-bold text-aa-navy mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-aa-gold mx-auto"
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 bg-white rounded-lg shadow-md border-l-4 border-${highlight.color} hover-lift`}
                whileHover={{ x: 5 }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {highlight.text}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="bg-aa-navy p-6 rounded-lg text-white text-center"
            >
              <p className="text-base italic">
                "Elevating dining experiences since 2003"
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={aboutImage}
                alt="Premium Asian culinary ingredients and dishes showcasing our quality"
                className="w-full h-auto object-cover hover-scale"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-xs text-gray-600 italic">
                  Elevating dining experiences since 2003
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center bg-white p-6 rounded-lg shadow-md hover-lift"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-aa-gold/10 rounded-full">
                  <stat.icon className="w-8 h-8 text-aa-gold" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-aa-navy mb-2">{stat.number}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionCorrected;

