
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
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
      technologies: ['Custom Test Fixtures', 'LabVIEW', 'Automated Handling']
    },
    {
      title: 'LabVIEW Data Acquisition Platform',
      category: 'LabVIEW Development',
      description: 'Created a custom data acquisition platform using LabVIEW for real-time monitoring of industrial equipment. The platform supports multiple sensor types and provides real-time analytics and alerting.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      client: 'Industrial Equipment Company',
      duration: '4 months',
      technologies: ['LabVIEW', 'Real-time Systems', 'Data Analytics']
    },
    {
      title: 'Semiconductor Test Fixtures',
      category: 'Test Jig Development',
      description: 'Engineered precision test fixtures for semiconductor validation, ensuring 99.9% accuracy in testing procedures. The fixtures support high-volume production testing with minimal operator intervention.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      client: 'Semiconductor Manufacturer',
      duration: '8 months',
      technologies: ['Precision Fixtures', 'High-Volume Testing', 'Quality Assurance']
    },
    {
      title: 'Automotive Component Testing',
      category: 'Automation Solutions',
      description: 'Developed automated testing systems for automotive components including environmental testing, electrical validation, and mechanical stress testing.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      client: 'Automotive Parts Supplier',
      duration: '5 months',
      technologies: ['Environmental Testing', 'Automation', 'Quality Control']
    },
    {
      title: 'Medical Device Validation',
      category: 'Technical Consulting',
      description: 'Provided comprehensive testing strategy and validation protocols for medical device certification, ensuring compliance with FDA regulations.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
      client: 'Medical Device Startup',
      duration: '3 months',
      technologies: ['FDA Compliance', 'Validation Protocols', 'Medical Testing']
    },
    {
      title: 'Aerospace Testing Solutions',
      category: 'Data Acquisition Systems',
      description: 'Implemented sophisticated data acquisition systems for aerospace component testing, including vibration analysis and thermal monitoring.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06',
      client: 'Aerospace Contractor',
      duration: '7 months',
      technologies: ['Vibration Analysis', 'Thermal Monitoring', 'Aerospace Standards']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-company-blue to-company-lightblue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl mb-8 text-white/90">
              Explore our portfolio of innovative test solutions developed for clients across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-company-lightblue">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-company-blue">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Client:</span> {project.client}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Duration:</span> {project.duration}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-company-blue/10 text-company-blue px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full text-company-blue border-company-blue hover:bg-company-blue hover:text-white">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-company-blue">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your testing needs and see how we can help you achieve your goals.
            </p>
            <Button className="bg-company-blue hover:bg-company-lightblue">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
