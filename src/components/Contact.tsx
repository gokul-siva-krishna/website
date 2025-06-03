
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "Home Garden Pg Accommodation 80 Feet Road, Bengaluru, Karnataka 560022",
      link: "https://maps.app.goo.gl/z8UAJM851az4aLG38"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@techjigs-solutions.com",
      link: "mailto:info@techjigs-solutions.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6:30PM\nSaturday & Sunday: Closed",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium mb-4 border border-white/20">
            📧 Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or need technical assistance? Reach out to our team of experts.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-1"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-blue-100 whitespace-pre-line">{info.content}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-blue-100 whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-white">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or inquiry..." 
                  rows={5} 
                  required 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm resize-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="attachment" className="block text-sm font-medium text-white">Attachment (optional)</label>
                <Input 
                  id="attachment" 
                  type="file" 
                  className="bg-white/10 border-white/20 text-white file:bg-white/20 file:border-0 file:text-white file:rounded-md file:px-4 file:py-2 file:mr-4 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
