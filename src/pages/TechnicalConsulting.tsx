
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, FlaskConical, ArrowRight, Target, Users, Lightbulb, TrendingUp, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalConsulting = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Test strategy development",
      description: "Comprehensive testing strategies tailored to your specific requirements"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "System architecture design",
      description: "Scalable and robust system architectures for optimal performance"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Process optimization consulting",
      description: "Identify bottlenecks and optimize workflows for maximum efficiency"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Technology assessment",
      description: "Evaluate and recommend the best technologies for your projects"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Implementation planning",
      description: "Detailed project plans with timelines and resource allocation"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Training and knowledge transfer",
      description: "Comprehensive training programs for your technical teams"
    }
  ];

  const consultingAreas = [
    { 
      title: "Test Engineering Strategy", 
      description: "Develop comprehensive test strategies that align with your business objectives",
      icon: "🎯",
      benefits: ["Reduced time-to-market", "Improved product quality", "Cost optimization"]
    },
    { 
      title: "Technology Selection", 
      description: "Expert guidance in choosing the right tools and technologies",
      icon: "⚡",
      benefits: ["Future-proof solutions", "Optimal ROI", "Reduced technical debt"]
    },
    { 
      title: "Process Improvement", 
      description: "Streamline your existing processes for maximum efficiency",
      icon: "🔄",
      benefits: ["Increased productivity", "Error reduction", "Standardization"]
    },
    { 
      title: "Team Development", 
      description: "Build technical capabilities within your organization",
      icon: "👥",
      benefits: ["Skill enhancement", "Knowledge retention", "Team empowerment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl shadow-2xl animate-glow">
                <FlaskConical className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
              Technical Consulting
            </h1>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Expert guidance on test strategy development, system architecture, and process optimization to accelerate your technical success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 font-medium mb-4">
                🔬 Consulting Services
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Expert Technical Guidance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage our expertise to overcome technical challenges and accelerate your projects
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Consulting Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized consulting services across key technical domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-3xl">{area.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {area.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Consulting Process</h2>
              <p className="text-xl text-gray-600">
                A structured approach to deliver maximum value from our consulting engagement
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Discovery & Assessment", description: "Understand your current state, challenges, and objectives" },
                { step: "02", title: "Analysis & Planning", description: "Develop comprehensive analysis and strategic recommendations" },
                { step: "03", title: "Implementation Support", description: "Guide you through implementation with hands-on support" },
                { step: "04", title: "Knowledge Transfer", description: "Ensure your team has the skills to maintain and improve" }
              ].map((process, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-l-4 border-indigo-500">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                          {process.title}
                        </h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Success?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get expert guidance tailored to your specific challenges. Schedule a consultation with our technical experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalConsulting;
