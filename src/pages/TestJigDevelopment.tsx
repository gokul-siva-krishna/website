
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

const TestJigDevelopment = () => {
  const features = [
    "Custom fixture design and engineering",
    "Rapid prototyping and testing",
    "Production-ready manufacturing",
    "Quality assurance validation",
    "Documentation and training",
    "Ongoing support and maintenance"
  ];

  const benefits = [
    "Reduced testing time by up to 65%",
    "Improved test accuracy and repeatability",
    "Lower production costs",
    "Enhanced product quality",
    "Faster time-to-market"
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
                <Microscope className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Test Jig Development</h1>
            <p className="text-xl mb-8 text-white/90">
              Custom design and fabrication of test jigs for production testing, quality assurance, and validation
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
            <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">What We Offer</h2>
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">Key Benefits</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-company-blue" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-company-blue">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your test jig development needs and get a custom quote.
            </p>
            <Button className="bg-company-blue hover:bg-company-lightblue">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestJigDevelopment;
