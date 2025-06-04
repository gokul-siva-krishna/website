
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Database, ArrowRight, Activity, Cloud, Gauge, BarChart3, Wifi, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";

const DataAcquisition = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Multi-channel data acquisition systems",
      description: "Simultaneous monitoring across multiple channels and sensors"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Real-time monitoring and analysis",
      description: "Live data processing with instant alerts and notifications"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Custom sensor integration",
      description: "Seamless integration with various sensor types and protocols"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "High-speed data logging",
      description: "Capture data at high sampling rates with precision timing"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud-based data storage",
      description: "Secure cloud storage with remote access capabilities"
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Advanced analytics and reporting",
      description: "Comprehensive data analysis with automated reporting"
    }
  ];

  const stats = [
    { value: "1M+", label: "Data Points/Sec", icon: "⚡" },
    { value: "24/7", label: "Continuous Monitoring", icon: "🔄" },
    { value: "99.9%", label: "System Uptime", icon: "🎯" },
    { value: "Real-time", label: "Data Processing", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl shadow-2xl animate-glow">
                <Database className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Data Acquisition Systems
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Implementation of sophisticated DAQ systems integrating hardware and software for real-time monitoring and analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
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
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-600 font-medium mb-4">
                📊 Our DAQ Solutions
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Advanced Data Acquisition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge data acquisition systems for precision monitoring and control
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Industry Applications</h2>
              <p className="text-xl text-gray-600">
                Our DAQ systems serve various industries with precision and reliability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Manufacturing Quality Control", description: "Monitor production parameters in real-time", icon: "🏭" },
                { title: "Environmental Monitoring", description: "Track environmental conditions and compliance", icon: "🌿" },
                { title: "Research & Development", description: "Precise data collection for R&D projects", icon: "🔬" },
                { title: "Process Automation", description: "Automated control systems with feedback loops", icon: "⚙️" },
                { title: "Energy Management", description: "Monitor and optimize energy consumption", icon: "⚡" },
                { title: "Structural Health Monitoring", description: "Continuous monitoring of structural integrity", icon: "🏗️" }
              ].map((useCase, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{useCase.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-600">{useCase.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Capture Your Data?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Transform your monitoring capabilities with our advanced data acquisition systems. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAcquisition;
