
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9bdcde7e-f4ef-4457-a5e9-f1cff6a9f5ad.png" 
                  alt="Apex Test Technologies Logo" 
                  className="h-12 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Apex Test Technologies
              </h3>
            </div>
            <p className="mb-6 text-blue-100 max-w-md leading-relaxed">
              Specializing in test jig development and LabVIEW programming, 
              delivering innovative testing solutions for industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/apex-test-technologies-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a 
                href="#" 
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="group">
            <h4 className="text-lg font-semibold mb-6 text-white group-hover:text-blue-200 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="group">
            <h4 className="text-lg font-semibold mb-6 text-white group-hover:text-blue-200 transition-colors duration-300">Services</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Test Jig Development
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  LabVIEW Programming
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Data Acquisition
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Automation Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                >
                  Technical Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100 text-lg">
            &copy; {currentYear} Apex Test Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
