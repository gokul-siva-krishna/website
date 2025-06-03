
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Automated PCB Testing System',
      category: 'Test Jig Development',
      description: 'Designed and developed a fully automated PCB testing system for a major electronics manufacturer, reducing testing time by 65%.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      stats: '65% faster testing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'LabVIEW Data Acquisition Platform',
      category: 'LabVIEW Development',
      description: 'Created a custom data acquisition platform using LabVIEW for real-time monitoring of industrial equipment.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      stats: 'Real-time monitoring',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Semiconductor Test Fixtures',
      category: 'Test Jig Development',
      description: 'Engineered precision test fixtures for semiconductor validation, ensuring 99.9% accuracy in testing procedures.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      stats: '99.9% accuracy',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-4">
            🚀 Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative test solutions developed for clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-medium`}>
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                  {project.stats}
                </div>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" className="group/btn border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 w-full">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Explore All Our Projects</h3>
              <p className="text-xl mb-8 text-gray-300">
                Discover the full range of innovative solutions we've delivered for our clients.
              </p>
              <Link to="/projects">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
