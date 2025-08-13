import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import logo from '../assets/asian_artisan_logo.png';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+65 6123 4567',
      color: 'aa-gold'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sales@asiansartisan.com',
      color: 'aa-red'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'CT Hub, Pandan Loop, Singapore',
      color: 'aa-gold'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'aa-red'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

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
    <section id="contact" className="py-20 bg-aa-navy text-white" ref={ref}>
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
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Contact & Next Steps
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-aa-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to elevate your culinary creations? Let's start the conversation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Contact us today to arrange a curated tasting session and discover the Asian Artisan difference.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover-lift"
                  whileHover={{ x: 5 }}
                >
                  <div className={`p-3 bg-${info.color} rounded-full`}>
                    <info.icon className="w-6 h-6 text-aa-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-aa-gold/10 p-6 rounded-lg border border-aa-gold/30"
            >
              <h4 className="text-xl font-semibold text-aa-gold mb-3">
                Ready to elevate your culinary creations?
              </h4>
              <p className="text-gray-300 mb-4">
                Contact us today to arrange a curated tasting session and discover the Asian Artisan difference.
              </p>
              <p className="text-gray-400 italic">
                We look forward to partnering with you.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Send us a Message
            </motion.h3>

            {!isSubmitted ? (
              <motion.form 
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-aa-gold text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-aa-gold text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Restaurant
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-aa-gold text-white placeholder-gray-400"
                    placeholder="Your company or restaurant"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-aa-gold text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-aa-gold text-aa-navy px-8 py-4 rounded-lg font-semibold hover:bg-aa-red hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-aa-gold mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-aa-gold mb-2">Message Sent!</h4>
                <p className="text-gray-300">
                  Thank you for your interest. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center border-t border-white/10 pt-12"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <img 
              src={logo} 
              alt="Asian Artisan Logo" 
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-2xl text-aa-gold mb-4">Crafting Flavors, Connecting Worlds</h3>
            <p className="text-xl text-gray-300 mb-6">
              Thank you for your time and consideration.
            </p>
            <p className="text-2xl font-bold text-white">
              www.asiansartisan.com
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-gray-400 text-sm"
          >
            <p>&copy; 2024 Asian Artisan Pte Ltd. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

