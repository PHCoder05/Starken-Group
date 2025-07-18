'use client'

import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, Truck, CreditCard, Shield, Gavel } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <Link href="/" className="inline-flex items-center text-construction-yellow hover:text-white transition-colors mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Terms of <span className="text-construction-yellow">Service</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Please read these terms carefully before using our services or purchasing our products.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Terms of Service Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service ("Terms") govern your use of Starken Group's website, services, and products. By accessing our website or using our services, you agree to be bound by these Terms.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Acceptance of Terms */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-primary-600" />
                      Acceptance of Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing and using our website, services, or purchasing our products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Starken Group</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Starken Group is a leading construction materials supplier operating in India. We provide:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                      <li>Construction materials and building supplies</li>
                      <li>Technical consultation and project support</li>
                      <li>Quality assurance and testing services</li>
                      <li>Logistics and delivery solutions</li>
                      <li>Customer support and after-sales service</li>
                    </ul>
                  </div>

                  {/* Service Usage */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Usage and Eligibility</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility</h3>
                        <p className="text-gray-700 leading-relaxed">
                          You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Registration</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Some services may require account registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Prohibited Activities</h3>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          You agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>Use our services for any illegal or unauthorized purpose</li>
                          <li>Violate any applicable laws or regulations</li>
                          <li>Interfere with or disrupt our services or servers</li>
                          <li>Attempt to gain unauthorized access to our systems</li>
                          <li>Provide false or misleading information</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Product Information and Orders */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-6 h-6 mr-3 text-primary-600" />
                      Product Information and Orders
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Descriptions</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We strive to provide accurate product descriptions, specifications, and pricing. However, we do not warrant that product descriptions are complete, reliable, current, or error-free. Product availability is subject to change without notice.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ordering Process</h3>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          Orders are subject to acceptance and availability. We reserve the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>Accept or decline any order at our discretion</li>
                          <li>Limit quantities of products purchased</li>
                          <li>Cancel orders due to insufficient inventory</li>
                          <li>Modify or discontinue products without notice</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing and Payment</h3>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          All prices are subject to change without notice. Payment terms are as follows:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>Payment is due upon order confirmation unless otherwise agreed</li>
                          <li>We accept various payment methods as indicated on our website</li>
                          <li>Prices exclude applicable taxes, shipping, and handling charges</li>
                          <li>Late payments may result in additional charges or order cancellation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Delivery and Shipping */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery and Shipping</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery Terms</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Delivery times are estimates only and may vary based on location, product availability, and other factors. We are not liable for delays beyond our reasonable control.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Risk of Loss</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Risk of loss and title for products pass to you upon delivery to the specified address. You are responsible for inspecting products upon delivery and reporting any damage or discrepancies within 24 hours.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Shipping Charges</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Shipping charges are calculated based on order weight, destination, and delivery method. These charges will be clearly displayed during the checkout process.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Returns and Refunds */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns and Refunds</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Return Policy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Returns are accepted within 30 days of delivery for products in original condition. Custom or special-order items may not be eligible for return. Return shipping costs are the responsibility of the customer unless the return is due to our error.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Refund Process</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Refunds will be processed within 14 business days of receiving returned items. Refunds will be issued to the original payment method used for the purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warranties and Disclaimers */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-6 h-6 mr-3 text-primary-600" />
                      Warranties and Disclaimers
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Warranties</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our products come with manufacturer warranties as applicable. We do not provide additional warranties beyond those provided by the original manufacturer.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Warranties</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We warrant that our services will be performed in a professional manner consistent with industry standards. However, we do not guarantee specific results or outcomes.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Disclaimers</h3>
                        <p className="text-gray-700 leading-relaxed">
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Limitation of Liability */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed">
                      IN NO EVENT SHALL STARKEN GROUP BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES.
                    </p>
                  </div>

                  {/* Intellectual Property */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                    <p className="text-gray-700 leading-relaxed">
                      All content on our website, including text, graphics, logos, images, and software, is the property of Starken Group or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                    </p>
                  </div>

                  {/* Privacy Policy */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
                    </p>
                  </div>

                  {/* Dispute Resolution */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Gavel className="w-6 h-6 mr-3 text-primary-600" />
                      Dispute Resolution
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Governing Law</h3>
                        <p className="text-gray-700 leading-relaxed">
                          These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dispute Resolution Process</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Before pursuing legal action, we encourage you to contact us directly to resolve any disputes. We are committed to working with customers to find mutually acceptable solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Changes to Terms */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-2">
                        <p className="text-gray-700"><strong>Email:</strong> legal@starkengroup.com</p>
                        <p className="text-gray-700"><strong>Phone:</strong> +91 9876543212</p>
                        <p className="text-gray-700"><strong>Address:</strong> Starken Group, Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer siteType="starken-group" />
    </div>
  );
} 