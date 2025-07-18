'use client'

import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                Privacy <span className="text-construction-yellow">Policy</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
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
                    Starken Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Information We Collect */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Eye className="w-6 h-6 mr-3 text-primary-600" />
                      Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          We may collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>Name and contact information (email, phone, address)</li>
                          <li>Company name and job title</li>
                          <li>Project requirements and specifications</li>
                          <li>Payment and billing information</li>
                          <li>Communication preferences</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                          When you visit our website, we automatically collect certain information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Pages visited and time spent</li>
                          <li>Referring website</li>
                          <li>Cookies and similar technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* How We Use Your Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-primary-600" />
                      How We Use Your Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                      <li>Providing and improving our construction materials and services</li>
                      <li>Processing orders and managing customer accounts</li>
                      <li>Communicating with you about products, services, and updates</li>
                      <li>Responding to inquiries and providing customer support</li>
                      <li>Analyzing website usage and improving user experience</li>
                      <li>Complying with legal obligations and industry regulations</li>
                      <li>Marketing and promotional activities (with your consent)</li>
                    </ul>
                  </div>

                  {/* Information Sharing */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-primary-600" />
                      Information Sharing and Disclosure
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                      <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                      <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                      <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Lock className="w-6 h-6 mr-3 text-primary-600" />
                      Data Security
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and authentication procedures</li>
                      <li>Employee training on data protection practices</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>

                  {/* Cookies and Tracking */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Types of Cookies We Use:</h4>
                      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                      </ul>
                    </div>
                  </div>

                  {/* Your Rights */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                      <li><strong>Objection:</strong> Object to certain processing activities</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                    </ul>
                  </div>

                  {/* Children's Privacy */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                    </p>
                  </div>

                  {/* International Transfers */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                    </p>
                  </div>

                  {/* Changes to Policy */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-6 h-6 mr-3 text-primary-600" />
                      Contact Us
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="space-y-2">
                        <p className="text-gray-700"><strong>Email:</strong> privacy@starkengroup.com</p>
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