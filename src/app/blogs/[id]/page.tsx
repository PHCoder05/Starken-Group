'use client'

import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/layout/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Clock, Share2, ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const blogId = params.id as string;

  const blogs = [
    {
      id: 'top-5-trends-construction-materials-2024',
      title: 'Top 5 Trends in Construction Materials for 2024',
      date: '2024-06-01',
      author: 'Starken Editorial Team',
      category: 'Industry Trends',
      readTime: '8 min read',
      summary: 'Discover the latest innovations in sustainable, high-performance construction materials that are shaping the industry this year.',
      image: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
        <p class="text-gray-700 leading-relaxed mb-6">The construction materials industry is experiencing a revolutionary transformation in 2024, driven by sustainability concerns, technological advancements, and changing market demands. As a leading construction materials supplier, Starken Group is at the forefront of these innovations.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Sustainable and Eco-Friendly Materials</h2>
        <p class="text-gray-700 leading-relaxed mb-6">The demand for sustainable construction materials has never been higher. Builders and developers are increasingly opting for materials that have minimal environmental impact while maintaining high performance standards. This includes recycled steel, bamboo products, and low-carbon concrete alternatives.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Smart Materials with Embedded Technology</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Smart materials that can monitor their own condition and report structural health are becoming mainstream. These materials include self-healing concrete, temperature-responsive materials, and sensors-embedded building components.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. High-Performance Insulation Solutions</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Energy efficiency remains a top priority, leading to innovations in insulation materials. New aerogel-based insulations and phase-change materials are providing superior thermal performance in thinner profiles.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 3D-Printed Construction Materials</h2>
        <p class="text-gray-700 leading-relaxed mb-6">3D printing technology is revolutionizing how we think about construction materials. From concrete printing to composite materials, this technology is enabling complex geometries and reducing waste.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Carbon-Neutral and Carbon-Negative Materials</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Materials that actively remove carbon from the atmosphere during their lifecycle are gaining traction. This includes bio-based materials, carbon-capturing concrete, and other innovative solutions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-6">These trends represent not just technological advancement, but a fundamental shift toward more responsible and efficient construction practices. At Starken Group, we're committed to staying ahead of these trends and providing our clients with the most innovative and sustainable materials available.</p>
      `
    },
    {
      id: 'choose-right-cement-project',
      title: 'How to Choose the Right Cement for Your Project',
      date: '2024-05-20',
      author: 'Engineering Team',
      category: 'Technical Guide',
      readTime: '6 min read',
      summary: 'A practical guide to selecting the best cement type for residential, commercial, and infrastructure projects.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Cement Types</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Selecting the right cement is crucial for the success and longevity of any construction project. Different cement types offer varying properties that make them suitable for specific applications and environmental conditions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Portland Cement (OPC)</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Ordinary Portland Cement is the most commonly used cement type, suitable for general construction purposes. It offers good strength development and is cost-effective for most applications.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Portland Pozzolana Cement (PPC)</h2>
        <p class="text-gray-700 leading-relaxed mb-6">PPC contains pozzolanic materials that improve workability and reduce heat generation. It's ideal for mass concrete structures and projects requiring enhanced durability.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Rapid Hardening Cement</h2>
        <p class="text-gray-700 leading-relaxed mb-6">This cement type achieves high early strength, making it perfect for projects with tight timelines or cold weather conditions where quick strength development is essential.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Sulfate Resisting Cement</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Designed for environments with high sulfate content, this cement type provides excellent resistance to chemical attack and is commonly used in marine structures and sewage treatment plants.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Factors to Consider</h2>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Project requirements and specifications</li>
          <li>Environmental conditions</li>
          <li>Timeline constraints</li>
          <li>Budget considerations</li>
          <li>Local availability</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Choosing the right cement requires careful consideration of multiple factors. Consulting with experienced suppliers like Starken Group can help ensure you select the most appropriate cement for your specific project needs.</p>
      `
    },
    {
      id: 'benefits-aac-blocks-modern-construction',
      title: 'The Benefits of Using AAC Blocks in Modern Construction',
      date: '2024-05-10',
      author: 'Product Specialist',
      category: 'Product Guide',
      readTime: '7 min read',
      summary: 'Explore why AAC blocks are becoming the preferred choice for energy-efficient and cost-effective building.',
      image: 'https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What are AAC Blocks?</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Autoclaved Aerated Concrete (AAC) blocks are lightweight, precast building materials that offer excellent thermal insulation and fire resistance. They are manufactured from natural materials including sand, cement, lime, and water.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits of AAC Blocks</h2>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Thermal Insulation</h3>
        <p class="text-gray-700 leading-relaxed mb-6">AAC blocks provide superior thermal insulation compared to traditional clay bricks. This results in significant energy savings for heating and cooling, making buildings more energy-efficient.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Lightweight Construction</h3>
        <p class="text-gray-700 leading-relaxed mb-6">Being up to 50% lighter than conventional bricks, AAC blocks reduce structural load and allow for faster construction. This also translates to lower transportation costs and easier handling on site.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Fire Resistance</h3>
        <p class="text-gray-700 leading-relaxed mb-6">AAC blocks offer excellent fire resistance, with some products capable of withstanding fire for up to 6 hours. This makes them ideal for fire-rated walls and structures.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Sound Insulation</h3>
        <p class="text-gray-700 leading-relaxed mb-6">The porous structure of AAC blocks provides excellent sound insulation, making them perfect for residential buildings, hotels, and other noise-sensitive environments.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Environmental Sustainability</h3>
        <p class="text-gray-700 leading-relaxed mb-6">AAC blocks are environmentally friendly, requiring less energy to manufacture and producing fewer emissions compared to traditional building materials.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Applications</h2>
        <p class="text-gray-700 leading-relaxed mb-6">AAC blocks are suitable for various applications including residential buildings, commercial structures, industrial facilities, and institutional buildings.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-6">The numerous benefits of AAC blocks make them an excellent choice for modern construction projects. Their combination of performance, sustainability, and cost-effectiveness positions them as a leading material in the construction industry.</p>
      `
    },
    {
      id: 'sustainable-sourcing-starken-material-quality',
      title: 'Sustainable Sourcing: How Starken Ensures Material Quality',
      date: '2024-04-28',
      author: 'Quality Assurance Team',
      category: 'Company Insights',
      readTime: '5 min read',
      summary: 'Learn about our rigorous sourcing process and commitment to sustainability in every product we supply.',
      image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment to Quality</h2>
        <p class="text-gray-700 leading-relaxed mb-6">At Starken Group, we understand that the quality of construction materials directly impacts the safety, durability, and performance of buildings. Our comprehensive sourcing process ensures that every product meets the highest standards.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Supplier Selection Process</h2>
        <p class="text-gray-700 leading-relaxed mb-4">We maintain a rigorous supplier selection process that includes:</p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Comprehensive background checks</li>
          <li>Quality certification verification</li>
          <li>Production capacity assessment</li>
          <li>Financial stability evaluation</li>
          <li>Sustainability practices review</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quality Control Measures</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Our quality control process includes:</p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Regular supplier audits</li>
          <li>Batch testing and certification</li>
          <li>Third-party quality verification</li>
          <li>Continuous performance monitoring</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Sustainability Standards</h2>
        <p class="text-gray-700 leading-relaxed mb-4">We prioritize suppliers who demonstrate commitment to:</p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Reduced carbon footprint</li>
          <li>Efficient resource utilization</li>
          <li>Waste reduction practices</li>
          <li>Renewable energy usage</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Certification and Compliance</h2>
        <p class="text-gray-700 leading-relaxed mb-6">All our materials meet or exceed international standards including ISO certifications, BIS standards, and other relevant industry specifications.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Our sustainable sourcing practices ensure that we deliver not just quality materials, but also contribute to a more sustainable construction industry. This commitment benefits our clients, the environment, and future generations.</p>
      `
    },
    {
      id: 'understanding-supply-chain-construction-materials',
      title: 'Understanding the Supply Chain for Construction Materials',
      date: '2024-04-15',
      author: 'Operations Team',
      category: 'Industry Insights',
      readTime: '9 min read',
      summary: 'A behind-the-scenes look at how materials move from manufacturer to your project site, and how to avoid common delays.',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: `
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Construction Materials Supply Chain</h2>
        <p class="text-gray-700 leading-relaxed mb-6">The journey of construction materials from raw materials to your project site involves multiple stages, each critical to ensuring timely delivery and quality assurance.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Stages in the Supply Chain</h2>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Raw Material Sourcing</h3>
        <p class="text-gray-700 leading-relaxed mb-6">The process begins with sourcing raw materials from quarries, mines, and other natural resources. This stage requires careful planning to ensure consistent quality and availability.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Manufacturing and Processing</h3>
        <p class="text-gray-700 leading-relaxed mb-6">Raw materials are processed into finished products through various manufacturing processes. Quality control measures are implemented at every stage to maintain standards.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Quality Testing and Certification</h3>
        <p class="text-gray-700 leading-relaxed mb-6">All materials undergo rigorous testing to ensure they meet industry standards and specifications. This includes strength testing, durability assessments, and environmental compliance checks.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Storage and Inventory Management</h3>
        <p class="text-gray-700 leading-relaxed mb-6">Proper storage conditions are maintained to preserve material quality. Inventory management systems ensure optimal stock levels and prevent shortages.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Transportation and Logistics</h3>
        <p class="text-gray-700 leading-relaxed mb-6">Efficient transportation networks ensure timely delivery to project sites. This includes route optimization, vehicle maintenance, and real-time tracking systems.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Challenges and Solutions</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Supply chain challenges include weather delays, transportation issues, and quality variations. Our integrated approach addresses these challenges through:</p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Multiple supplier relationships</li>
          <li>Advanced planning and forecasting</li>
          <li>Real-time tracking systems</li>
          <li>Contingency planning</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Technology Integration</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Modern technology plays a crucial role in supply chain management, including:</p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Digital tracking systems</li>
          <li>Automated inventory management</li>
          <li>Predictive analytics</li>
          <li>Mobile applications for real-time updates</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-6">Understanding the supply chain helps project managers plan more effectively and avoid common pitfalls. At Starken Group, we leverage our extensive experience and technology to ensure smooth, reliable material supply for all our clients.</p>
      `
    }
  ];

  const blog = blogs.find(b => b.id === blogId);
  const relatedBlogs = blogs.filter(b => b.id !== blogId).slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar siteType="starken-group" />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blogs" className="text-primary-700 font-semibold hover:underline">
              ← Back to Blogs
            </Link>
          </div>
        </main>
        <Footer siteType="starken-group" />
      </div>
    );
  }

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
              <Link href="/blogs" className="inline-flex items-center text-construction-yellow hover:text-white transition-colors mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blogs
              </Link>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">
                {blog.summary}
              </p>
              
              {/* Blog Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {blog.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {blog.readTime}
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  {blog.category}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                <div 
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  className="prose prose-lg max-w-none"
                />
                
                {/* Social Sharing */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium">Share this article:</span>
                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <Link 
                      href="/blogs" 
                      className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      ← Back to All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                <div className="grid gap-8 md:grid-cols-3">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link 
                      key={relatedBlog.id} 
                      href={`/blogs/${relatedBlog.id}`}
                      className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(relatedBlog.date).toLocaleDateString()}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedBlog.summary}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer siteType="starken-group" />
    </div>
  );
} 