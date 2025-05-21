
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Database, Terminal, Microscope, Settings, FlaskConical } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Microscope className="h-12 w-12 text-company-blue" />,
      title: 'Test Jig Development',
      description: 'Custom design and fabrication of test jigs for production testing, quality assurance, and validation.'
    },
    {
      icon: <Terminal className="h-12 w-12 text-company-blue" />,
      title: 'LabVIEW Programming',
      description: 'Expert development of custom applications, data acquisition systems, and automated test solutions using NI LabVIEW.'
    },
    {
      icon: <Database className="h-12 w-12 text-company-blue" />,
      title: 'Data Acquisition Systems',
      description: 'Implementation of sophisticated DAQ systems integrating hardware and software for real-time monitoring and analysis.'
    },
    {
      icon: <Settings className="h-12 w-12 text-company-blue" />,
      title: 'Automation Solutions',
      description: 'End-to-end automation of testing processes, reducing human error and increasing production efficiency.'
    },
    {
      icon: <FlaskConical className="h-12 w-12 text-company-blue" />,
      title: 'Technical Consulting',
      description: 'Expert guidance on test strategy development, system architecture, and process optimization.'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in developing custom test solutions that enhance quality control and streamline production processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-company-lightblue/10 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-company-blue">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="p-8 bg-company-blue rounded-lg text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Custom Engineering Solutions</h3>
            <p className="mb-6">
              Need something unique? We design and develop bespoke test solutions tailored to your specific requirements and industry standards.
            </p>
            <a href="#contact" className="inline-block bg-white text-company-blue font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
