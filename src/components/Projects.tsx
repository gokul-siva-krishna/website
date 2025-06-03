
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Automated PCB Testing System',
      category: 'Test Jig Development',
      description: 'Designed and developed a fully automated PCB testing system for a major electronics manufacturer, reducing testing time by 65%.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      title: 'LabVIEW Data Acquisition Platform',
      category: 'LabVIEW Development',
      description: 'Created a custom data acquisition platform using LabVIEW for real-time monitoring of industrial equipment.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      title: 'Semiconductor Test Fixtures',
      category: 'Test Jig Development',
      description: 'Engineered precision test fixtures for semiconductor validation, ensuring 99.9% accuracy in testing procedures.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Recent Projects</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of innovative test solutions developed for clients across various industries.
          </p>
        </div>
        
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
                <Button variant="outline" className="text-company-blue border-company-blue hover:bg-company-blue hover:text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button className="bg-company-blue hover:bg-company-lightblue">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
