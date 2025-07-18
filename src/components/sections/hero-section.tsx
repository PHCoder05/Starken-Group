'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Play, Star, Building, Calendar, Award, CheckCircle, MapPin, Zap, Shield, Clock, Users, Target, Package, Truck, Factory } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a)",
            "linear-gradient(135deg, #1e3a8a, #0f172a, #0f172a)",
            "linear-gradient(135deg, #0f172a, #0f172a, #1e3a8a)",
            "linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a)",
          ],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-0"
      />
      
      {/* Floating Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: "100vh",
            x: `${Math.random() * 100}vw`,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 5,
          }}
          className="absolute w-20 h-20 bg-white/5 rounded-full blur-xl"
        />
      ))}
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Content Section */}
          <motion.div variants={containerVariants} className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-3 text-base font-medium rounded-full">
                <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                ISO 9001:2015 Certified Quality Materials
              </Badge>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Premium Construction Materials
              <motion.span 
                variants={itemVariants} 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mt-2"
              >
                & Building Solutions
              </motion.span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Your trusted supplier for high-quality construction materials from AAC blocks to home automation systems. We deliver reliability, durability, and innovation for all your building needs.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg mb-2">Our Commitment</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To be the leading supplier of premium construction materials, setting new standards in quality, reliability, and customer service across all building projects.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300 group">
                <Package className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Catalog
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Founder Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 max-w-sm w-full"
            >
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/founder profile.jpeg"
                    alt="Founder - Starken Group"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="border-4 border-white/30"
                  />
                </div>
                <div className="relative">
                  <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-orange-500 rounded-full p-2">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Industry Leadership</h3>
                  <p className="text-slate-300 text-md">15+ Years in Materials Supply</p>
                  <p className="text-orange-400 text-sm font-medium mt-1">Founder & Managing Director</p>
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-400 pt-2">
                  <div className="flex items-center space-x-1">
                    <Package className="w-4 h-4" />
                    <span>10K+ Products</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Factory className="w-4 h-4" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
} 