'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Users, Award, Building2, Mail, Linkedin, Twitter, Star, Target, Calendar, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const leadership = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "Chief Executive Officer & Founder",
    department: "Leadership",
    experience: "20+ Years",
    education: "MBA - IIM Ahmedabad, B.Tech - IIT Delhi",
    expertise: ["Strategic Planning", "Business Development", "Industry Leadership", "Corporate Governance"],
    bio: "Rajesh founded Starken Group with a vision to revolutionize the construction industry in India. With over 20 years of experience in construction and real estate, he has led the company from a small startup to one of India's leading construction companies.",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: [
      "Built 500+ successful projects",
      "Industry Leader Award 2023",
      "Featured in Forbes 40 Under 40"
    ],
    email: "rajesh.sharma@starkengroup.com",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Chief Operating Officer",
    department: "Operations",
    experience: "18+ Years",
    education: "M.Tech - Civil Engineering, B.Tech - Structural Engineering",
    expertise: ["Project Management", "Operations Excellence", "Quality Control", "Team Leadership"],
    bio: "Priya oversees all operational aspects of Starken Group, ensuring project delivery excellence and maintaining the highest quality standards. Her engineering background and operational expertise drive the company's success.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: [
      "Led 200+ project completions",
      "Operational Excellence Award",
      "ISO 9001 Implementation Lead"
    ],
    email: "priya.patel@starkengroup.com",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Amit Kumar",
    position: "Chief Technology Officer",
    department: "Technology",
    experience: "15+ Years",
    education: "M.Tech - Computer Science, B.Tech - Information Technology",
    expertise: ["Digital Transformation", "Construction Technology", "BIM Implementation", "Innovation Strategy"],
    bio: "Amit drives digital transformation and technology innovation at Starken Group. He leads the implementation of cutting-edge construction technologies and smart building solutions.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: [
      "Led BIM implementation across projects",
      "Technology Innovation Award",
      "10+ Patents in Construction Tech"
    ],
    email: "amit.kumar@starkengroup.com",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Sanjay Gupta",
    position: "Chief Financial Officer",
    department: "Finance",
    experience: "16+ Years",
    education: "CA, MBA - Finance",
    expertise: ["Financial Planning", "Investment Strategy", "Risk Management", "Corporate Finance"],
    bio: "Sanjay manages the financial strategy and operations of Starken Group, ensuring strong financial performance and sustainable growth while maintaining fiscal responsibility.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: [
      "Managed ₹1000+ Cr portfolio",
      "CFO of the Year Award",
      "Led 3 successful fundraising rounds"
    ],
    email: "sanjay.gupta@starkengroup.com",
    linkedin: "#",
    twitter: "#"
  }
]

const teamMembers = [
  {
    id: 5,
    name: "Neha Singh",
    position: "Head of Design & Architecture",
    department: "Design",
    experience: "12+ Years",
    education: "M.Arch - Urban Planning, B.Arch",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["50+ Award-winning designs", "Sustainable Architecture Expert"]
  },
  {
    id: 6,
    name: "Vikram Reddy",
    position: "Head of Safety & Compliance",
    department: "Safety",
    experience: "14+ Years",
    education: "M.Tech - Industrial Safety, B.Tech - Mechanical",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["Zero-accident record", "Safety Excellence Award"]
  },
  {
    id: 7,
    name: "Kavita Joshi",
    position: "Head of Human Resources",
    department: "HR",
    experience: "11+ Years",
    education: "MBA - HR, PGDM - Organizational Behavior",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["Best Employer Award", "Team of 200+ professionals"]
  },
  {
    id: 8,
    name: "Rahul Mehta",
    position: "Head of Business Development",
    department: "Business",
    experience: "13+ Years",
    education: "MBA - Marketing, B.Com - Business",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["₹500+ Cr business generated", "Client Satisfaction 98%"]
  },
  {
    id: 9,
    name: "Deepak Shah",
    position: "Head of Engineering",
    department: "Engineering",
    experience: "17+ Years",
    education: "M.Tech - Structural Engineering, B.Tech - Civil",
    image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["100+ Engineering solutions", "Innovation in Construction"]
  },
  {
    id: 10,
    name: "Sunita Agarwal",
    position: "Head of Quality Assurance",
    department: "Quality",
    experience: "10+ Years",
    education: "M.Tech - Quality Management, B.Tech - Industrial",
    image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=600",
    achievements: ["ISO Implementation Lead", "Quality Excellence Award"]
  }
]

const departments = [
  {
    name: "Engineering & Design",
    headCount: 45,
    description: "Expert engineers and architects creating innovative solutions",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Project Management",
    headCount: 35,
    description: "Experienced project managers ensuring timely delivery",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Quality Assurance",
    headCount: 25,
    description: "Quality specialists maintaining highest standards",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    name: "Safety & Compliance",
    headCount: 20,
    description: "Safety experts ensuring secure work environments",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Business Development",
    headCount: 30,
    description: "Growth specialists driving business expansion",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    name: "Administration",
    headCount: 45,
    description: "Support team enabling smooth operations",
    color: "from-pink-500 to-pink-600"
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

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar siteType="starken-group" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> Team</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Meet the dedicated professionals who bring expertise, innovation, and passion 
                to every project, making Starken Group a leader in construction excellence.
              </p>
            </motion.div>

            {/* Team Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-slate-300">Team Members</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-300">Industry Experts</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Building2 className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-slate-300">Departments</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-300">Avg. Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visionary leaders with decades of experience driving innovation, 
                growth, and excellence in the construction industry.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      {/* Image */}
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {leader.department}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-4">
                          {leader.position}
                        </p>
                        
                        <div className="space-y-3 mb-6 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Experience: </span>
                            <span className="text-gray-600">{leader.experience}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Education: </span>
                            <span className="text-gray-600">{leader.education}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {leader.bio}
                        </p>
                        
                        {/* Expertise */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Contact */}
                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </Button>
                          <Button variant="outline" size="sm">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Department Heads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals leading specialized teams and driving 
                excellence in their respective domains.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {member.department}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {member.position}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Experience: </span>
                          <span className="text-gray-600">{member.experience}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Education: </span>
                          <span className="text-gray-600">{member.education}</span>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized teams working together to deliver exceptional results 
                across all aspects of construction and real estate development.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${dept.color} mb-6`}>
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {dept.name}
                      </h3>
                      
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {dept.headCount}
                      </div>
                      <div className="text-sm text-gray-500 mb-4">Team Members</div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {dept.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Be part of a dynamic team that's building the future of India. 
                We offer exciting career opportunities, professional growth, and a collaborative work environment.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-blue-100">Open Positions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-blue-100">Employee Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.8/5</div>
                  <div className="text-blue-100">Glassdoor Rating</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                  Learn About Benefits
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 