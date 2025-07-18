"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Wrench, Zap, Home, Shield, Package, ArrowRight, CheckCircle, Truck, Factory, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const materials = [
  {
    icon: Building2,
    title: "AAC BLOCKS",
    description: "Lightweight autoclaved aerated concrete blocks providing excellent thermal insulation and fire resistance for modern construction.",
    features: ["Lightweight & Strong", "Fire Resistant", "Thermal Insulation", "Eco-Friendly"],
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Package,
    title: "READYMIX PLASTER",
    description: "High-quality ready-to-use plaster mix ensuring consistent finish and superior wall protection for all construction projects.",
    features: ["Ready to Use", "Consistent Quality", "Time Saving", "Superior Finish"],
    color: "from-slate-500 to-slate-600",
    borderColor: "border-slate-500",
    textColor: "text-slate-600",
    bgColor: "bg-slate-50"
  },
  {
    icon: Wrench,
    title: "REBAR COUPLER",
    description: "Mechanical reinforcement connectors providing stronger joints than traditional overlapping methods for structural integrity.",
    features: ["High Strength", "Easy Installation", "Cost Effective", "Reliable Joints"],
    color: "from-gray-600 to-gray-700",
    borderColor: "border-gray-600",
    textColor: "text-gray-700",
    bgColor: "bg-gray-50"
  },
  {
    icon: Factory,
    title: "PREMIUM CEMENT",
    description: "Top-grade cement meeting all international standards for durability and strength in residential and commercial construction.",
    features: ["High Grade Quality", "Consistent Strength", "Durability Tested", "Multiple Grades"],
    color: "from-stone-500 to-stone-600",
    borderColor: "border-stone-500",
    textColor: "text-stone-600",
    bgColor: "bg-stone-50"
  },
  {
    icon: Zap,
    title: "ELECTRICAL SOLUTIONS",
    description: "Complete electrical wiring systems and components designed for safety and efficiency in modern building projects.",
    features: ["Complete Systems", "Safety Standards", "Modern Technology", "Professional Grade"],
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Shield,
    title: "ANCHORS & FASTENERS",
    description: "Heavy-duty anchoring solutions and fasteners designed for structural applications requiring maximum holding power.",
    features: ["Heavy Duty", "Corrosion Resistant", "Multiple Sizes", "Structural Grade"],
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Package,
    title: "TILE ADHESIVES",
    description: "High-performance adhesives for tile and stone installation providing long-lasting bonds in all weather conditions.",
    features: ["Strong Bond", "Weather Resistant", "Easy Application", "Long Lasting"],
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Settings,
    title: "HOME AUTOMATION",
    description: "Smart home automation systems bringing modern technology to residential and commercial building projects.",
    features: ["Smart Controls", "Energy Efficient", "Remote Access", "Future Ready"],
    color: "from-teal-500 to-teal-600",
    borderColor: "border-teal-500",
    textColor: "text-teal-600",
    bgColor: "bg-teal-50"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Construction
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Materials Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From foundation to finishing, we supply premium construction materials that meet international quality standards. 
              Every product is certified and tested for reliability and durability.
            </p>
          </motion.div>

          {/* Materials Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {materials.map((material, index) => {
              const Icon = material.icon
              const isHovered = hoveredIndex === index
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group h-full"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${material.color} flex items-center justify-center ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">
                          {material.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {material.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2">
                          {material.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className={`w-3 h-3 ${material.textColor}`} />
                              <span className="text-xs text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`w-full mt-4 ${material.borderColor} ${material.textColor} hover:bg-gradient-to-r ${material.color} hover:text-white hover:border-transparent transition-all duration-300 group`}
                      >
                        Get Quote
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Featured Categories */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Structural Materials</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                AAC blocks, cement, rebar couplers for strong foundations and structures.
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                <Truck className="w-4 h-4 mr-2" />
                Bulk delivery available
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Finishing Materials</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Plasters, adhesives, grouts for perfect finishing and aesthetics.
              </p>
              <div className="flex items-center text-orange-600 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Quality guaranteed
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Smart Solutions</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Home automation, electrical systems for modern smart buildings.
              </p>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Latest technology
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Need Bulk Materials for Your Project?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get competitive quotes for bulk orders and enjoy volume discounts on all construction materials. 
              Expert consultation and logistics support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Get Bulk Quote
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
                Download Product Catalog
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 