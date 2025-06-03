
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const LabVIEWProgramming = () => {
  const features = [
    "Custom LabVIEW application development",
    "Real-time data acquisition systems",
    "Automated test sequence programming",
    "User interface design and development",
    "Hardware integration and drivers",
    "Performance optimization and debugging"
  ];

  const applications = [
    "Production line testing systems",
    "Quality control automation",
    "Research and development tools",
    "Monitoring and control systems",
    "Data logging and analysis platforms"
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
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Terminal className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LabVIEW Programming</h1>
            <p className="text-xl mb-8 text-white/90">
              Expert development of custom applications, data acquisition systems, and automated test solutions using NI LabVIEW
            </p>
            <Button className="bg-white text-company-blue hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">Our LabVIEW Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-company-blue mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">Applications</h2>
            <div className="space-y-4">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-company-blue" />
                  <span className="text-gray-700">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LabVIEWProgramming;
