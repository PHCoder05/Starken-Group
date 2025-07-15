'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Mail, Play, Star, Building, Calendar, Award, CheckCircle, MapPin, Zap, Shield, Clock } from 'lucide-react';

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Building, number: "500+", label: "Projects Completed", color: "text-orange-500" },
    { icon: Calendar, number: "15+", label: "Years Excellence", color: "text-blue-500" },
    { icon: Award, number: "ISO", label: "9001:2015 Certified", color: "text-emerald-500" }
  ];

  const guarantees = [
    { icon: CheckCircle, text: "Quality Assured Projects" },
    { icon: Clock, text: "On-Time Delivery" },
    { icon: Shield, text: "Safety First Approach" },
    { icon: Zap, text: "24/7 Support" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-orange-500/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Content */}
          <div className="text-center space-y-12 mb-20">
            
            {/* Certification Badge */}
            <div className="flex justify-center">
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-3 text-base font-medium rounded-full">
                <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                ISO 9001:2015 Certified Excellence
                <div className="flex ml-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Building Tomorrow's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mt-2">
                  Infrastructure
                </span>
                <span className="block text-white">Today</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Starken Group delivers world-class construction and real estate services with 
                <span className="text-orange-400 font-semibold"> innovation, quality, and sustainability</span> 
                at the forefront of every project.
              </p>
            </div>

            {/* Trust Guarantees */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-2 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <span className="text-sm text-slate-300 text-center font-medium">{guarantee.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isActive = currentStat === index;
              return (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 ${
                    isActive ? 'scale-105 border-orange-400/50 shadow-2xl' : 'hover:scale-102'
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 ${stat.color} transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <div className={`text-4xl font-bold text-white transition-colors duration-300 ${
                        isActive ? 'text-orange-400' : ''
                      }`}>
                        {stat.number}
                      </div>
                      <div className="text-slate-300 font-medium text-lg">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl -z-10 blur-xl"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Call Us Now</div>
                <div className="font-semibold text-white">+91 98765 43210</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Email Us</div>
                <div className="font-semibold text-white">info@starkengroup.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Visit Us</div>
                <div className="font-semibold text-white">Mumbai, India</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
              </div>
              <div className="text-center mt-2 text-slate-400 text-sm">Scroll to explore</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 