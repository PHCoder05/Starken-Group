'use client';

import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/layout/footer';
import CtaSection from '@/components/sections/cta-section';
import { motion } from 'framer-motion';

// Construction Materials Products Component
function ConstructionProductsSection() {
  const products = [
    {
      title: "AAC BLOCKS",
      description: "Autoclaved Aerated Concrete blocks for lightweight, thermal-efficient construction",
      features: ["Lightweight", "Fire Resistant", "Thermal Insulation", "Sound Proof"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      image: "/assets/products/AAC BLOCKS.jpg"
    },
    {
      title: "READYMIX PLASTER",
      description: "High-quality ready-to-use plaster mix for smooth and durable wall finishes",
      features: ["Ready to Use", "Consistent Quality", "Time Saving", "Superior Finish"],
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-50",
      textColor: "text-slate-600",
      image: "/assets/products/PLASTER.jpg"
    },
    {
      title: "REBAR COUPLER",
      description: "Mechanical reinforcement connectors for strong and reliable structural joints",
      features: ["High Strength", "Easy Installation", "Cost Effective", "Reliable Joints"],
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
      image: "/assets/products/COUPLER.jpg"
    },
    {
      title: "CEMENT",
      description: "Premium quality cement for all types of construction requirements",
      features: ["High Grade", "Consistent Quality", "Durability", "Multiple Grades"],
      color: "from-stone-500 to-stone-600",
      bgColor: "bg-stone-50",
      textColor: "text-stone-600",
      image: "/assets/products/CEMENT.png"
    },
    {
      title: "ELECTRICAL WORK",
      description: "Complete electrical solutions and wiring systems for construction projects",
      features: ["Complete Wiring", "Safety Standards", "Modern Systems", "Professional Installation"],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      image: "/assets/products/ELECTRICAL WORK.png"
    },
    {
      title: "ANCHORS & FASTENERS",
      description: "Heavy-duty anchoring and fastening solutions for structural applications",
      features: ["Heavy Duty", "Corrosion Resistant", "Multiple Sizes", "Structural Grade"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      image: "/assets/products/ANCHORS & FASTENERS.png"
    },
    {
      title: "TILE / STONE ADHESIVES",
      description: "High-performance adhesives for tile and stone installation applications",
      features: ["Strong Bond", "Weather Resistant", "Easy Application", "Long Lasting"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      image: "/assets/products/TILE _ STONE ADHESIVES.png"
    },
    {
      title: "MARBLE ADHESIVES",
      description: "Specialized adhesives designed specifically for marble and natural stone",
      features: ["Marble Specific", "No Staining", "Flexible", "Premium Quality"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      image: "/assets/products/MARBLE ADHESIVES.png"
    },
    {
      title: "GROUT & MICRO CONCRETE",
      description: "High-strength grouting materials and micro concrete for precision applications",
      features: ["High Strength", "Precision Mix", "Quick Setting", "Smooth Finish"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      image: "/assets/products/GROUT & MICRO CONCRETE.png"
    },
    {
      title: "HOME AUTOMATION",
      description: "Smart home automation systems for modern residential and commercial buildings",
      features: ["Smart Controls", "Energy Efficient", "Remote Access", "Modern Technology"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      image: "/assets/products/HOME AUTOMATION.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Construction
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Products Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality construction materials and solutions for all your building needs, 
              from foundation to finishing with guaranteed quality and reliability.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Product Header */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} mb-4 flex items-center justify-center`}>
                      <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                        <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-2 px-4 rounded-lg border-2 border-transparent bg-gradient-to-r ${product.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Product Categories Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Complete Construction Solutions
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              From structural materials to finishing products, we provide everything you need for your construction projects 
              with guaranteed quality and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Download Catalog
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Request Bulk Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar siteType="starken-group" />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-construction-orange overflow-hidden">
          <div className="absolute inset-0 bg-construction-pattern opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Our <span className="text-construction-yellow">Products</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Quality construction materials for all your building needs - from AAC blocks to advanced home automation systems with 
                reliability, durability, and innovation.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Construction Products Section */}
        <ConstructionProductsSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
      <Footer siteType="starken-group" />
    </div>
  );
} 