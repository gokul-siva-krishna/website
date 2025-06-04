import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Settings, ArrowRight, Cog, Bot, Shield, Zap, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AutomationSolutions = () => {
  const features = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "End-to-end process automation",
      description: "Complete automation solutions from design to implementation"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Robotic integration systems",
      description: "Seamless integration with robotic systems and equipment"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality control automation",
      description: "Automated quality assurance with real-time feedback"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Production line optimization",
      description: "Maximize throughput and minimize waste in production"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Error reduction protocols",
      description: "Intelligent systems to prevent and detect errors"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Efficiency enhancement solutions",
      description: "Optimize workflows and reduce cycle times"
    }
  ];

  const benefits = [
    { value: "85%", label: "Reduction in manual errors", color: "from-red-500 to-orange-500" },
    { value: "60%", label: "Increase in production speed", color: "from-blue-500 to-cyan-500" },
    { value: "40%", label: "Cost savings achieved", color: "from-green-500 to-emerald-500" },
    { value: "99.5%", label: "System reliability", color: "from-purple-500 to-pink-500" }
  ];

  const industries = [
    { name: "Automotive", icon: "🚗", description: "Assembly line automation and quality control" },
    { name: "Electronics", icon: "💻", description: "PCB testing and component validation" },
    { name: "Pharmaceutical", icon: "💊", description: "Packaging and quality assurance automation" },
    { name: "Aerospace", icon: "✈️", description: "Precision manufacturing and testing" },
    { name: "Medical Devices", icon: "🏥", description: "Sterile manufacturing environments" },
    { name: "Energy", icon: "⚡", description: "Power generation and distribution systems" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl shadow-2xl animate-glow">
                <Settings className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-200 bg-clip-text text-transparent">
              Automation Solutions
            </h1>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              End-to-end automation of testing processes, reducing human error and increasing production efficiency with intelligent systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">Measurable improvements across all key performance indicators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{benefit.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-medium mb-4">
                🤖 Automation Services
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Complete Automation Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your operations with intelligent automation that adapts to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
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

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our automation solutions power efficiency across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600">{industry.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Processes?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Take the next step towards operational excellence. Our automation experts are ready to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Start Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Request Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationSolutions;
