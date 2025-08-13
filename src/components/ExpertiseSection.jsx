import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Globe, Users, Award } from 'lucide-react';
import asiaMap from '../assets/asia_map.png';

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const regions = [
    {
      title: 'East Asia',
      description: 'Deep flavor knowledge from China, Japan, and Korea, with expertise in regional specialties and traditional techniques.',
      color: 'aa-gold',
      icon: MapPin
    },
    {
      title: 'Southeast Asia',
      description: 'Extensive network across Thailand, Vietnam, Malaysia, and Indonesia, sourcing authentic ingredients and flavors.',
      color: 'aa-gold',
      icon: Globe
    },
    {
      title: 'Singapore',
      description: "Local market insight for Singapore's top-tier hotels & restaurants, with tailored solutions for the city's diverse culinary landscape.",
      color: 'aa-red',
      icon: Award
    }
  ];

  const advantages = [
    {
      icon: Globe,
      title: 'Global Sourcing Network',
      description: 'Curated suppliers from across Asia, Europe, and beyond, ensuring authentic ingredients.'
    },
    {
      icon: Users,
      title: 'Ready Delivery & Supply Chain',
      description: 'On-time delivery in optimal condition, with reliable logistics solutions.'
    },
    {
      icon: Award,
      title: 'Unmatched Quality & Variety',
      description: 'Premium condiments, herbs, spices, dried goods, and specialty pastes.'
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

  return (
    <section id="expertise" className="py-20 bg-aa-cream" ref={ref}>
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
            Our Edge
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-aa-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your strategic partner in culinary sourcing
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover-lift border-b-4 border-aa-gold"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-aa-red/10 rounded-full mr-4">
                  <advantage.icon className="w-8 h-8 text-aa-red" />
                </div>
                <h3 className="text-xl font-semibold text-aa-navy">{advantage.title}</h3>
              </div>
              <p className="text-gray-700">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Geographic Expertise */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-aa-navy mb-6">Geographic Expertise</h3>
              <p className="text-lg text-gray-600 mb-8">
                Masters of Asian terroir with deep knowledge of regional specialties
              </p>
            </div>

            <div className="space-y-6">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 bg-white rounded-lg shadow-md border-l-4 border-${region.color} hover-lift`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full bg-${region.color}/10`}>
                      <region.icon className={`w-6 h-6 text-${region.color}`} />
                    </div>
                    <div>
                      <h4 className={`text-xl font-semibold text-${region.color} mb-2`}>
                        {region.title}
                      </h4>
                      <p className="text-gray-700">{region.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <img
                src={asiaMap}
                alt="Stylized map of Asia highlighting key culinary regions"
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 italic">
                  Our sourcing network spans the entire Asian continent
                </p>
              </div>
            </div>

            {/* Floating indicators */}
            <motion.div
              className="absolute top-1/4 left-1/3 w-4 h-4 bg-aa-gold rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-4 h-4 bg-aa-red rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-aa-gold rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Why Partner With Us */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 bg-aa-navy p-8 lg:p-12 rounded-2xl text-white"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold mb-8 text-center"
          >
            Why Partner With Us
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-aa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-aa-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Trusted by Leading Hotel Groups</h4>
              <p className="text-gray-300">
                Supplying premium ingredients to the most prestigious establishments across Singapore and beyond.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-aa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-aa-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Curated & Sourced on Demand</h4>
              <p className="text-gray-300">
                Our global network allows us to find and procure rare, niche ingredients to meet specific culinary needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-aa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-aa-navy" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Full-Service Logistics Solution</h4>
              <p className="text-gray-300">
                End-to-end delivery and supply chain management, allowing chefs to focus on what matters most—the food.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center bg-white/10 p-6 rounded-lg"
          >
            <p className="text-lg italic">
              "Asian Artisan has been instrumental in helping us source authentic ingredients that elevate our signature dishes to new heights."
            </p>
            <p className="text-aa-gold font-semibold mt-2">— Executive Chef, Five-Star Hotel Group</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

