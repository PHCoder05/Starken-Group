'use client'

import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

export default function BlogsPage() {
  const blogs = [
    {
      id: 'top-5-trends-construction-materials-2024',
      title: 'Top 5 Trends in Construction Materials for 2024',
      date: '2024-06-01',
      readTime: '8 min read',
      author: 'Technical Team',
      category: 'Trends',
      summary: 'Discover the latest innovations in sustainable, high-performance construction materials that are shaping the industry this year.',
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      tags: ['Sustainability', 'Innovation', 'Materials'],
      content: `
        <h2>Introduction</h2>
        <p>The construction materials industry is experiencing a revolutionary transformation in 2024, driven by sustainability concerns, technological advancements, and changing market demands. As a leading construction materials supplier, Starken Group is at the forefront of these innovations.</p>
        
        <h2>1. Sustainable and Eco-Friendly Materials</h2>
        <p>The demand for sustainable construction materials has never been higher. Builders and developers are increasingly opting for materials that have minimal environmental impact while maintaining high performance standards. This includes recycled steel, bamboo products, and low-carbon concrete alternatives.</p>
        
        <h2>2. Smart Materials with Embedded Technology</h2>
        <p>Smart materials that can monitor their own condition and report structural health are becoming mainstream. These materials include self-healing concrete, temperature-responsive materials, and sensors-embedded building components.</p>
        
        <h2>3. High-Performance Insulation Solutions</h2>
        <p>Energy efficiency remains a top priority, leading to innovations in insulation materials. New aerogel-based insulations and phase-change materials are providing superior thermal performance in thinner profiles.</p>
        
        <h2>4. 3D-Printed Construction Materials</h2>
        <p>3D printing technology is revolutionizing how we think about construction materials. From concrete printing to composite materials, this technology is enabling complex geometries and reducing waste.</p>
        
        <h2>5. Carbon-Neutral and Carbon-Negative Materials</h2>
        <p>Materials that actively remove carbon from the atmosphere during their lifecycle are gaining traction. This includes bio-based materials, carbon-capturing concrete, and other innovative solutions.</p>
        
        <h2>Conclusion</h2>
        <p>These trends represent not just technological advancement, but a fundamental shift toward more responsible and efficient construction practices. At Starken Group, we're committed to staying ahead of these trends and providing our clients with the most innovative and sustainable materials available.</p>
      `
    },
    {
      id: 'choose-right-cement-project',
      title: 'How to Choose the Right Cement for Your Project',
      date: '2024-05-20',
      readTime: '6 min read',
      author: 'Engineering Team',
      category: 'Guide',
      summary: 'A practical guide to selecting the best cement type for residential, commercial, and infrastructure projects.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      tags: ['Cement', 'Guide', 'Construction'],
      content: `
        <h2>Understanding Cement Types</h2>
        <p>Selecting the right cement is crucial for the success and longevity of any construction project. Different cement types offer varying properties that make them suitable for specific applications and environmental conditions.</p>
        
        <h2>Portland Cement (OPC)</h2>
        <p>Ordinary Portland Cement is the most commonly used cement type, suitable for general construction purposes. It offers good strength development and is cost-effective for most applications.</p>
        
        <h2>Portland Pozzolana Cement (PPC)</h2>
        <p>PPC contains pozzolanic materials that improve workability and reduce heat generation. It's ideal for mass concrete structures and projects requiring enhanced durability.</p>
        
        <h2>Rapid Hardening Cement</h2>
        <p>This cement type achieves high early strength, making it perfect for projects with tight timelines or cold weather conditions where quick strength development is essential.</p>
        
        <h2>Sulfate Resisting Cement</h2>
        <p>Designed for environments with high sulfate content, this cement type provides excellent resistance to chemical attack and is commonly used in marine structures and sewage treatment plants.</p>
        
        <h2>Factors to Consider</h2>
        <ul>
          <li>Project requirements and specifications</li>
          <li>Environmental conditions</li>
          <li>Timeline constraints</li>
          <li>Budget considerations</li>
          <li>Local availability</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Choosing the right cement requires careful consideration of multiple factors. Consulting with experienced suppliers like Starken Group can help ensure you select the most appropriate cement for your specific project needs.</p>
      `
    },
    {
      id: 'benefits-aac-blocks-modern-construction',
      title: 'The Benefits of Using AAC Blocks in Modern Construction',
      date: '2024-05-10',
      readTime: '5 min read',
      author: 'Product Team',
      category: 'Technology',
      summary: 'Explore why AAC blocks are becoming the preferred choice for energy-efficient and cost-effective building.',
      image: 'https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      tags: ['AAC Blocks', 'Efficiency', 'Modern Construction'],
      content: `
        <h2>What are AAC Blocks?</h2>
        <p>Autoclaved Aerated Concrete (AAC) blocks are lightweight, precast building materials that offer excellent thermal insulation and fire resistance. They are manufactured from natural materials including sand, cement, lime, and water.</p>
        
        <h2>Key Benefits of AAC Blocks</h2>
        
        <h3>1. Thermal Insulation</h3>
        <p>AAC blocks provide superior thermal insulation compared to traditional clay bricks. This results in significant energy savings for heating and cooling, making buildings more energy-efficient.</p>
        
        <h3>2. Lightweight Construction</h3>
        <p>Being up to 50% lighter than conventional bricks, AAC blocks reduce structural load and allow for faster construction. This also translates to lower transportation costs and easier handling on site.</p>
        
        <h3>3. Fire Resistance</h3>
        <p>AAC blocks offer excellent fire resistance, with some products capable of withstanding fire for up to 6 hours. This makes them ideal for fire-rated walls and structures.</p>
        
        <h3>4. Sound Insulation</h3>
        <p>The porous structure of AAC blocks provides excellent sound insulation, making them perfect for residential buildings, hotels, and other noise-sensitive environments.</p>
        
        <h3>5. Environmental Sustainability</h3>
        <p>AAC blocks are environmentally friendly, requiring less energy to manufacture and producing fewer emissions compared to traditional building materials.</p>
        
        <h2>Applications</h2>
        <p>AAC blocks are suitable for various applications including residential buildings, commercial structures, industrial facilities, and institutional buildings.</p>
        
        <h2>Conclusion</h2>
        <p>The numerous benefits of AAC blocks make them an excellent choice for modern construction projects. Their combination of performance, sustainability, and cost-effectiveness positions them as a leading material in the construction industry.</p>
      `
    },
    {
      id: 'sustainable-sourcing-starken-material-quality',
      title: 'Sustainable Sourcing: How Starken Ensures Material Quality',
      date: '2024-04-28',
      readTime: '7 min read',
      author: 'Quality Team',
      category: 'Sustainability',
      summary: 'Learn about our rigorous sourcing process and commitment to sustainability in every product we supply.',
      image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      tags: ['Sustainability', 'Quality', 'Sourcing'],
      content: `
        <h2>Our Commitment to Quality</h2>
        <p>At Starken Group, we understand that the quality of construction materials directly impacts the safety, durability, and performance of buildings. Our comprehensive sourcing process ensures that every product meets the highest standards.</p>
        
        <h2>Supplier Selection Process</h2>
        <p>We maintain a rigorous supplier selection process that includes:</p>
        <ul>
          <li>Comprehensive background checks</li>
          <li>Quality certification verification</li>
          <li>Production capacity assessment</li>
          <li>Financial stability evaluation</li>
          <li>Sustainability practices review</li>
        </ul>
        
        <h2>Quality Control Measures</h2>
        <p>Our quality control process includes:</p>
        <ul>
          <li>Regular supplier audits</li>
          <li>Batch testing and certification</li>
          <li>Third-party quality verification</li>
          <li>Continuous performance monitoring</li>
        </ul>
        
        <h2>Sustainability Standards</h2>
        <p>We prioritize suppliers who demonstrate commitment to:</p>
        <ul>
          <li>Reduced carbon footprint</li>
          <li>Efficient resource utilization</li>
          <li>Waste reduction practices</li>
          <li>Renewable energy usage</li>
        </ul>
        
        <h2>Certification and Compliance</h2>
        <p>All our materials meet or exceed international standards including ISO certifications, BIS standards, and other relevant industry specifications.</p>
        
        <h2>Conclusion</h2>
        <p>Our sustainable sourcing practices ensure that we deliver not just quality materials, but also contribute to a more sustainable construction industry. This commitment benefits our clients, the environment, and future generations.</p>
      `
    },
    {
      id: 'understanding-supply-chain-construction-materials',
      title: 'Understanding the Supply Chain for Construction Materials',
      date: '2024-04-15',
      readTime: '9 min read',
      author: 'Logistics Team',
      category: 'Operations',
      summary: 'A behind-the-scenes look at how materials move from manufacturer to your project site, and how to avoid common delays.',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      tags: ['Supply Chain', 'Logistics', 'Operations'],
      content: `
        <h2>The Construction Materials Supply Chain</h2>
        <p>The journey of construction materials from raw materials to your project site involves multiple stages, each critical to ensuring timely delivery and quality assurance.</p>
        
        <h2>Key Stages in the Supply Chain</h2>
        
        <h3>1. Raw Material Sourcing</h3>
        <p>The process begins with sourcing raw materials from quarries, mines, and other natural resources. This stage requires careful planning to ensure consistent quality and availability.</p>
        
        <h3>2. Manufacturing and Processing</h3>
        <p>Raw materials are processed into finished products through various manufacturing processes. Quality control measures are implemented at every stage to maintain standards.</p>
        
        <h3>3. Quality Testing and Certification</h3>
        <p>All materials undergo rigorous testing to ensure they meet industry standards and specifications. This includes strength testing, durability assessments, and environmental compliance checks.</p>
        
        <h3>4. Storage and Inventory Management</h3>
        <p>Proper storage conditions are maintained to preserve material quality. Inventory management systems ensure optimal stock levels and prevent shortages.</p>
        
        <h3>5. Transportation and Logistics</h3>
        <p>Efficient transportation networks ensure timely delivery to project sites. This includes route optimization, vehicle maintenance, and real-time tracking systems.</p>
        
        <h2>Common Challenges and Solutions</h2>
        <p>Supply chain challenges include weather delays, transportation issues, and quality variations. Our integrated approach addresses these challenges through:</p>
        <ul>
          <li>Multiple supplier relationships</li>
          <li>Advanced planning and forecasting</li>
          <li>Real-time tracking systems</li>
          <li>Contingency planning</li>
        </ul>
        
        <h2>Technology Integration</h2>
        <p>Modern technology plays a crucial role in supply chain management, including:</p>
        <ul>
          <li>Digital tracking systems</li>
          <li>Automated inventory management</li>
          <li>Predictive analytics</li>
          <li>Mobile applications for real-time updates</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Understanding the supply chain helps project managers plan more effectively and avoid common pitfalls. At Starken Group, we leverage our extensive experience and technology to ensure smooth, reliable material supply for all our clients.</p>
      `
    }
  ];

  const featuredBlog = blogs.find(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar siteType="starken-group" />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-construction-orange overflow-hidden">
          <div className="absolute inset-0 bg-construction-pattern opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-construction-yellow/20 rounded-full text-construction-yellow font-medium text-sm mb-6"
              >
                <Tag className="w-4 h-4 mr-2" />
                Industry Insights & Expertise
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                Our <span className="text-construction-yellow bg-clip-text">Blogs</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
                Stay ahead with cutting-edge insights, industry trends, and expert knowledge from construction material professionals.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 text-gray-300"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span>Latest Trends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span>Expert Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-construction-yellow rounded-full"></div>
                  <span>Industry Insights</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Blog Section */}
        {featuredBlog && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-construction-orange to-transparent flex-1"></div>
                  <div className="px-6 py-2 bg-construction-orange/10 rounded-full">
                    <span className="text-construction-orange font-semibold text-sm uppercase tracking-wider">Featured Article</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-construction-orange to-transparent flex-1"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl shadow-primary-900/10 overflow-hidden border border-gray-200/50"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center px-3 py-1 bg-construction-yellow text-primary-900 font-bold text-sm rounded-full">
                        {featuredBlog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredBlog.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredBlog.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredBlog.summary}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">By {featuredBlog.author}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredBlog.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blogs/${featuredBlog.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-construction-orange to-construction-yellow text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular Blogs Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="text-construction-orange">Insights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our collection of expert articles, industry guides, and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            >
              {regularBlogs.map((blog, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-construction-orange/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-900 font-semibold text-sm rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-construction-orange transition-colors duration-300 leading-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {blog.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center text-construction-orange font-semibold hover:text-construction-yellow transition-colors duration-300 group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-construction-orange relative overflow-hidden">
          <div className="absolute inset-0 bg-construction-pattern opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Industry <span className="text-construction-yellow">Insights</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest trends, tips, and innovations in construction materials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-2 focus:ring-construction-yellow text-gray-900 placeholder-gray-500"
                />
                <button className="px-8 py-3 bg-construction-yellow text-primary-900 font-semibold rounded-xl hover:bg-construction-orange hover:text-white transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer siteType="starken-group" />
    </div>
  );
}