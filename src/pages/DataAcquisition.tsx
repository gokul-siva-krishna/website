
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Database } from "lucide-react";
import { Link } from "react-router-dom";

const DataAcquisition = () => {
  const features = [
    "Multi-channel data acquisition systems",
    "Real-time monitoring and analysis",
    "Custom sensor integration",
    "High-speed data logging",
    "Cloud-based data storage",
    "Advanced analytics and reporting"
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
                <Database className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Acquisition Systems</h1>
            <p className="text-xl mb-8 text-white/90">
              Implementation of sophisticated DAQ systems integrating hardware and software for real-time monitoring and analysis
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
            <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">Our DAQ Solutions</h2>
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

      <Footer />
    </div>
  );
};

export default DataAcquisition;
