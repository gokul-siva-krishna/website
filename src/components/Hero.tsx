
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-company-blue to-company-lightblue overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Apex Test Technologies</span>
              <span className="text-3xl md:text-4xl mt-2 block">Advanced Test Jig Solutions & LabVIEW Expertise</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Specialized custom test equipment design and development.
              Delivering precision engineering for your testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-company-blue hover:bg-gray-100">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end animate-slide-up">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-md">
              <h3 className="text-2xl font-semibold text-company-blue mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 bg-company-lightblue rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Specialized in custom test jig development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-company-lightblue rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Certified LabVIEW developers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-company-lightblue rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>End-to-end engineering solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-company-lightblue rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>10+ years of industry experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
