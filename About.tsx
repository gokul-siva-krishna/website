
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Our Company</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, our company has been at the forefront of test engineering solutions, 
              specializing in custom test jig development and LabVIEW programming for clients across 
              various industries including electronics, automotive, and  defence.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of experienced engineers combines deep technical expertise with a 
              problem-solving approach to deliver test solutions that improve quality control, 
              increase efficiency, and reduce costs for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-company-blue">30+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-company-blue">200+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-company-blue">50+</h4>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-company-blue">15+</h4>
                <p className="text-gray-600">Expert Engineers</p>
              </div>
            </div>
            <Link to="/about">
              <Button className="bg-company-blue hover:bg-company-lightblue">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-company-lightblue rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Our Team" 
              className="rounded-lg shadow-lg relative z-10 w-full"
            />
            <div className="absolute -bottom-4 right-4 bg-company-blue text-white p-6 rounded-lg shadow-lg max-w-xs">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-sm">
                To deliver innovative test engineering solutions that help our clients achieve 
                excellence in product quality and manufacturing efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
