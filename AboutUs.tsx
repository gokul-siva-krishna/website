
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const stats = [
    { icon: Clock, value: "30+", label: "Years Experience" },
    { icon: Award, value: "200+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Satisfied Clients" },
    { icon: Target, value: "15+", label: "Expert Engineers" }
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Lead Test Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "15+ years in test jig development and LabVIEW programming"
    },
    {
      name: "Sarah Johnson",
      role: "LabVIEW Specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550",
      description: "Certified LabVIEW architect with expertise in data acquisition"
    },
    {
      name: "Mike Chen",
      role: "Automation Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Specialist in automation solutions and process optimization"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8 text-white/90">
              Delivering innovative test engineering solutions for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-company-blue">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2010, Apex Test Technologies has been at the forefront of test engineering solutions, 
                  specializing in custom test jig development and LabVIEW programming for clients across 
                  various industries including electronics, automotive, aerospace, and medical devices.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team of experienced engineers combines deep technical expertise with a 
                  problem-solving approach to deliver test solutions that improve quality control, 
                  increase efficiency, and reduce costs for our clients.
                </p>
                <Button className="bg-company-blue hover:bg-company-lightblue">
                  Learn More About Our Services
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-company-lightblue rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Our Team" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-company-blue/10 rounded-full">
                        <stat.icon className="h-8 w-8 text-company-blue" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-company-blue mb-2">{stat.value}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-company-blue mr-3" />
                    <h3 className="text-2xl font-bold text-company-blue">Our Mission</h3>
                  </div>
                  <p className="text-gray-700">
                    To deliver innovative test engineering solutions that help our clients achieve 
                    excellence in product quality and manufacturing efficiency through cutting-edge 
                    technology and exceptional service.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-company-blue mr-3" />
                    <h3 className="text-2xl font-bold text-company-blue">Our Values</h3>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Innovation in every solution</li>
                    <li>• Quality without compromise</li>
                    <li>• Client success as our priority</li>
                    <li>• Continuous learning and improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Team */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 text-company-blue">Meet Our Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-xl font-semibold mb-2 text-company-blue">{member.name}</h4>
                      <p className="text-company-lightblue font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
