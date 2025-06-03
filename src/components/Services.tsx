
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Terminal, Microscope, Settings, FlaskConical, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'Test Jig Development',
      description: 'Custom design and fabrication of test jigs for production testing, quality assurance, and validation.',
      link: '/test-jig-development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: 'LabVIEW Programming',
      description: 'Expert development of custom applications, data acquisition systems, and automated test solutions using NI LabVIEW.',
      link: '/labview-programming',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Acquisition Systems',
      description: 'Implementation of sophisticated DAQ systems integrating hardware and software for real-time monitoring and analysis.',
      link: '/data-acquisition',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Automation Solutions',
      description: 'End-to-end automation of testing processes, reducing human error and increasing production efficiency.',
      link: '/automation-solutions',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: 'Technical Consulting',
      description: 'Expert guidance on test strategy development, system architecture, and process optimization.',
      link: '/technical-consulting',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-4">
            🔧 Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Test Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in developing custom test solutions that enhance quality control and streamline production processes with cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link to={service.link}>
                    <Button variant="outline" className="group/btn border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Ready for a Custom Solution?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Need something unique? We design and develop bespoke test solutions tailored to your specific requirements and industry standards.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
