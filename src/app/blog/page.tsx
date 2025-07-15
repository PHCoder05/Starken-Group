'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock, Tag, TrendingUp, Building, Lightbulb, Eye, Share2, Search, Filter, BookOpen, MessageCircle, Heart, Bookmark, ChevronRight, Award, Target, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const featuredPost = {
  id: 1,
  title: "The Future of Smart Buildings: IoT Integration in Modern Construction",
  excerpt: "Explore how Internet of Things (IoT) technology is revolutionizing the construction industry and creating intelligent, efficient buildings for the future.",
  content: "As we step into 2024, the construction industry is witnessing a remarkable transformation through the integration of Internet of Things (IoT) technology. Smart buildings are no longer a concept of the future – they're becoming the standard for modern construction projects. From automated climate control systems to predictive maintenance algorithms, IoT is enabling buildings to think, learn, and adapt to their occupants' needs while optimizing energy consumption and operational efficiency.",
  author: "Rajesh Sharma",
  authorRole: "Chief Technology Officer",
  authorImage: "/api/placeholder/150/150",
  date: "January 15, 2024",
  readTime: "8 min read",
  category: "Technology",
  image: "/api/placeholder/800/500",
  tags: ["IoT", "Smart Buildings", "Technology", "Innovation"],
  views: "2.5K",
  likes: "145",
  comments: "23",
  featured: true
}

const blogPosts = [
  {
    id: 2,
    title: "Sustainable Construction Practices: Building a Greener Tomorrow",
    excerpt: "Discover the latest sustainable construction methods and materials that are reshaping the industry while protecting our environment for future generations.",
    content: "The construction industry is at a pivotal moment where environmental responsibility meets innovation. Green building practices are no longer optional – they're essential for creating a sustainable future. From using recycled materials to implementing energy-efficient systems, sustainable construction is transforming how we build and design structures.",
    author: "Priya Patel",
    authorRole: "Sustainability Director",
    authorImage: "/api/placeholder/150/150",
    date: "January 12, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/api/placeholder/600/400",
    tags: ["Sustainability", "Green Building", "Environment", "Innovation"],
    views: "1.8K",
    likes: "98",
    comments: "15"
  },
  {
    id: 3,
    title: "Real Estate Market Trends 2024: Investment Opportunities & Challenges",
    excerpt: "An comprehensive analysis of current real estate market trends, emerging opportunities, and key challenges that investors and developers need to navigate.",
    content: "The Indian real estate market in 2024 presents a dynamic landscape of opportunities and challenges. With changing demographics, evolving work patterns, and technological advancement, the sector is experiencing significant transformation.",
    author: "Amit Kumar",
    authorRole: "Market Research Director",
    authorImage: "/api/placeholder/150/150",
    date: "January 10, 2024",
    readTime: "10 min read",
    category: "Market Analysis",
    image: "/api/placeholder/600/400",
    tags: ["Real Estate", "Investment", "Market Trends", "Analysis"],
    views: "3.2K",
    likes: "187",
    comments: "34"
  },
  {
    id: 4,
    title: "Digital Transformation in Construction: BIM and Beyond",
    excerpt: "How Building Information Modeling and digital tools are revolutionizing project management, reducing costs, and improving collaboration in construction.",
    content: "Digital transformation is reshaping the construction industry at an unprecedented pace. Building Information Modeling (BIM) has evolved from a nice-to-have to an essential tool for modern construction projects.",
    author: "Dr. Sanjay Gupta",
    authorRole: "Digital Innovation Lead",
    authorImage: "/api/placeholder/150/150",
    date: "January 8, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "/api/placeholder/600/400",
    tags: ["BIM", "Digital Tools", "Project Management", "Innovation"],
    views: "2.1K",
    likes: "132",
    comments: "18"
  },
  {
    id: 5,
    title: "Affordable Housing Solutions: Innovative Approaches for Urban India",
    excerpt: "Exploring cost-effective construction methods and government initiatives that are making quality housing accessible to India's growing urban population.",
    content: "India's urbanization boom has created an urgent need for affordable housing solutions. With innovative construction techniques, government support schemes, and public-private partnerships, the industry is finding new ways to deliver quality homes at accessible prices.",
    author: "Meera Singh",
    authorRole: "Urban Planning Specialist",
    authorImage: "/api/placeholder/150/150",
    date: "January 5, 2024",
    readTime: "9 min read",
    category: "Urban Development",
    image: "/api/placeholder/600/400",
    tags: ["Affordable Housing", "Urban Planning", "Government Policy", "Social Impact"],
    views: "2.7K",
    likes: "156",
    comments: "27"
  },
  {
    id: 6,
    title: "Safety First: Modern Construction Site Safety Technologies",
    excerpt: "A comprehensive look at how technology is enhancing workplace safety in construction, from wearable devices to AI-powered monitoring systems.",
    content: "Construction site safety has evolved dramatically with the introduction of smart technologies. Wearable sensors, drone surveillance, and AI-powered analytics are creating safer work environments and reducing accident rates across the industry.",
    author: "Vikram Joshi",
    authorRole: "Safety & Compliance Head",
    authorImage: "/api/placeholder/150/150",
    date: "January 3, 2024",
    readTime: "6 min read",
    category: "Safety",
    image: "/api/placeholder/600/400",
    tags: ["Safety Technology", "Wearables", "AI", "Workplace Safety"],
    views: "1.9K",
    likes: "89",
    comments: "12"
  }
]

const categories = [
  { name: "All", count: 25, active: true, icon: BookOpen },
  { name: "Technology", count: 8, icon: Zap },
  { name: "Sustainability", count: 6, icon: Lightbulb },
  { name: "Market Analysis", count: 5, icon: TrendingUp },
  { name: "Safety", count: 3, icon: Award },
  { name: "Urban Development", count: 3, icon: Target }
]

const popularTags = [
  "IoT", "Smart Buildings", "Sustainability", "BIM", "Real Estate", 
  "Green Building", "Innovation", "Market Trends", "Safety", "AI"
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

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Filter posts based on search term and category
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterPosts(term, selectedCategory)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterPosts(searchTerm, category)
  }

  const filterPosts = (term: string, category: string) => {
    let filtered = blogPosts

    if (category !== 'All') {
      filtered = filtered.filter(post => post.category === category)
    }

    if (term) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar siteType="starken-group" />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-starken-orange/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-100 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Industry Insights & Expert Analysis
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Construction 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-starken-orange to-starken-orange-light"> Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Stay ahead with the latest trends, innovations, and expert insights 
                from the construction and real estate industry. Learn from our industry experts.
              </p>
            </motion.div>

            {/* Enhanced Blog Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-300 text-sm">Articles Published</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-white">15K+</div>
                <div className="text-gray-300 text-sm">Monthly Readers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="text-gray-300 text-sm">Industry Experts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Total Engagement</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-6 items-center"
            >
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <Button
                      key={category.name}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryChange(category.name)}
                      className={`rounded-full ${
                        selectedCategory === category.name 
                          ? "bg-primary-600 text-white hover:bg-primary-700" 
                          : "hover:bg-primary-50 hover:border-primary-300"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.name}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Main Content Area */}
              <div className="lg:col-span-3">
                
                {/* Featured Article */}
                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-starken-orange rounded-full"></div>
                    </div>
                    <Badge className="bg-primary-100 text-primary-700 px-3 py-1">
                      Editor's Choice
                    </Badge>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden shadow-2xl border-0 bg-white hover:shadow-3xl transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-96 lg:h-auto overflow-hidden group">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary-600 text-white px-3 py-1 rounded-full">
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {featuredPost.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center text-sm text-primary-600 mb-4 font-medium">
                          <Tag className="w-4 h-4 mr-2" />
                          {featuredPost.category}
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-primary-600 transition-colors">
                          {featuredPost.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {featuredPost.content.substring(0, 200)}...
                        </p>
                        
                        {/* Author Info */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-starken-orange rounded-full flex items-center justify-center mr-3">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                              <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {featuredPost.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {featuredPost.readTime}
                            </div>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <Button className="bg-primary-600 hover:bg-primary-700 text-white group">
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {featuredPost.views}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {featuredPost.likes}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {featuredPost.comments}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>

                {/* Recent Articles */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                        <p className="text-lg text-gray-600">
                          {filteredPosts.length} articles found
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        variants={itemVariants}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      >
                        <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                          <div className="relative h-56 overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-black/20 backdrop-blur-sm text-white border-white/20">
                                {post.category}
                              </Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 p-2">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            {/* Author and Actions */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-starken-orange rounded-full flex items-center justify-center mr-3">
                                  <User className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-sm">{post.author}</div>
                                  <div className="text-xs text-gray-500">{post.authorRole}</div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {post.views}
                                </div>
                                <div className="flex items-center">
                                  <Heart className="w-4 h-4 mr-1" />
                                  {post.likes}
                                </div>
                              </div>
                            </div>
                            
                            <Button variant="outline" className="w-full mt-4 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white group">
                              Read More
                              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {filteredPosts.length === 0 && (
                    <motion.div
                      variants={itemVariants}
                      className="text-center py-16"
                    >
                      <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your search terms or filter criteria.
                      </p>
                      <Button onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                        setFilteredPosts(blogPosts)
                      }}>
                        Clear Filters
                      </Button>
                    </motion.div>
                  )}

                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                
                {/* Popular Tags */}
                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-primary-600" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary-50 hover:border-primary-300 transition-colors"
                        onClick={() => handleSearch(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Newsletter Signup */}
                <Card className="p-6 bg-gradient-to-br from-primary-600 to-starken-orange text-white border-0">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Weekly Insights
                  </h3>
                  <p className="text-primary-50 mb-4 text-sm">
                    Get the latest construction trends and insights delivered to your inbox every week.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
                    />
                    <Button className="w-full bg-white text-primary-600 hover:bg-gray-100">
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs text-primary-50 mt-3">
                    🔒 We respect your privacy. Unsubscribe anytime.
                  </p>
                </Card>

                {/* Featured Authors */}
                <Card className="p-6 bg-white border-0 shadow-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-starken-orange" />
                    Featured Authors
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Rajesh Sharma</div>
                        <div className="text-xs text-gray-500">Chief Technology Officer</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-property-green-500 to-property-green-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Priya Patel</div>
                        <div className="text-xs text-gray-500">Sustainability Director</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-starken-orange to-starken-orange-dark rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Amit Kumar</div>
                        <div className="text-xs text-gray-500">Market Research Director</div>
                      </div>
                    </div>
                  </div>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-starken-orange">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join 15,000+ Construction Professionals
            </h2>
            <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Get exclusive insights, industry reports, and early access to our latest articles. 
              Join the most trusted construction industry newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-0 bg-white/90 focus:bg-white"
              />
              <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold">
                Subscribe Free
              </Button>
            </div>
            <div className="flex items-center justify-center mt-6 text-primary-50 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Trusted by top construction companies across India
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 