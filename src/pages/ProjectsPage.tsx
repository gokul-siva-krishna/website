
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, ArrowRight, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Automated PCB Testing System',
      category: 'Test Jig Development',
      description: 'Designed and developed a fully automated PCB testing system for a major electronics manufacturer, reducing testing time by 65%. The system features custom test fixtures, automated handling, and comprehensive reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      client: 'Major Electronics Manufacturer',
      duration: '6 months',
      technologies: ['Custom Test Fixtures', 'LabVIEW', 'Automated Handling'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'LabVIEW Data Acquisition Platform',
      category: 'LabVIEW Development',
      description: 'Created a custom data acquisition platform using LabVIEW for real-time monitoring of industrial equipment. The platform supports multiple sensor types and provides real-time analytics and alerting.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      client: 'Industrial Equipment Company',
      duration: '4 months',
      technologies: ['LabVIEW', 'Real-time Systems', 'Data Analytics'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Semiconductor Test Fixtures',
      category: 'Test Jig Development',
      description: 'Engineered precision test fixtures for semiconductor validation, ensuring 99.9% accuracy in testing procedures. The fixtures support high-volume production testing with minimal operator intervention.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      client: 'Semiconductor Manufacturer',
      duration: '8 months',
      technologies: ['Precision Fixtures', 'High-Volume Testing', 'Quality Assurance'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Automotive Component Testing',
      category: 'Automation Solutions',
      description: 'Developed automated testing systems for automotive components including environmental testing, electrical validation, and mechanical stress testing.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      client: 'Automotive Parts Supplier',
      duration: '5 months',
      technologies: ['Environmental Testing', 'Automation', 'Quality Control'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Medical Device Validation',
      category: 'Technical Consulting',
      description: 'Provided comprehensive testing strategy and validation protocols for medical device certification, ensuring compliance with FDA regulations.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
      client: 'Medical Device Startup',
      duration: '3 months',
      technologies: ['FDA Compliance', 'Validation Protocols', 'Medical Testing'],
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Aerospace Testing Solutions',
      category: 'Data Acquisition Systems',
      description: 'Implemented sophisticated data acquisition systems for aerospace component testing, including vibration analysis and thermal monitoring.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06',
      client: 'Aerospace Contractor',
      duration: '7 months',
      technologies: ['Vibration Analysis', 'Thermal Monitoring', 'Aerospace Standards'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const categoryColors = {
    'Test Jig Development': 'bg-blue-100 text-blue-600',
    'LabVIEW Development': 'bg-purple-100 text-purple-600',
    'Automation Solutions': 'bg-orange-100 text-orange-600',
    'Technical Consulting': 'bg-teal-100 text-teal-600',
    'Data Acquisition Systems': 'bg-indigo-100 text-indigo-600'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative test solutions developed for clients across various industries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-4">
              🚀 Featured Work
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Project Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped organizations achieve their testing and automation goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-medium`}>
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full group/btn border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Join our portfolio of successful projects. Contact us today to discuss your testing needs and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
