import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';
import aboutImage from '../assets/1S8h44XHSHMu.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: Award, number: '20+', label: 'Years of Excellence' },
    { icon: Globe, number: '15+', label: 'Countries Sourced' },
    { icon: Users, number: '500+', label: 'Satisfied Clients' },
    { icon: TrendingUp, number: '1000+', label: 'Premium Products' }
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

  return (
    <section id="about" className="py-20 bg-aa-cream" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-aa-navy mb-6"
              >
                Who We Are
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="w-24 h-1 bg-aa-gold mb-8"
              ></motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aa-gold hover-lift">
                <p className="text-lg text-gray-700">
                  <span className="text-aa-gold font-semibold">Founded in Singapore</span>, with over 20 years of experience in sourcing and supplying premium food ingredients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aa-red hover-lift">
                <p className="text-lg text-gray-700">
                  Serving the most <span className="text-aa-red font-semibold">discerning hospitality and culinary clients</span> across Asia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aa-gold hover-lift">
                <p className="text-lg text-gray-700">
                  Our expertise spans <span className="text-aa-gold font-semibold">traditional Asian flavors</span> to <span className="text-aa-red font-semibold">modern, innovative cuisines</span>.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-aa-navy/5 p-6 rounded-lg"
            >
              <p className="text-lg italic text-aa-navy">
                "Elevating dining experiences since 2003"
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={aboutImage} 
                alt="High-end hotel dining experience" 
                className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aa-navy/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    Elevating dining experiences since 2003
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white p-6 rounded-lg shadow-md hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-aa-gold/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-aa-gold" />
              </div>
              <motion.h3 
                className="text-3xl font-bold text-aa-navy mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

