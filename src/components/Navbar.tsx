
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle scrolling to sections when hash changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20' 
        : 'bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-md'
    } py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-company-blue group">
            <div className="relative">
              <img 
                src="/lovable-uploads/9bdcde7e-f4ef-4457-a5e9-f1cff6a9f5ad.png" 
                alt="Apex Test Technologies Logo" 
                className="h-12 transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="hidden md:block bg-gradient-to-r from-company-blue to-blue-600 bg-clip-text text-transparent">
              Apex Test Technologies
            </span>
          </Link>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-company-blue hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none shadow-xl md:shadow-none border border-gray-200/20 md:border-none rounded-lg md:rounded-none mt-2 md:mt-0 ${mobileMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 px-4 text-company-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 font-medium rounded-lg transition-all duration-300 transform hover:scale-105" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('services')}
                  className="block py-2 px-4 text-company-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 font-medium cursor-pointer w-full text-left rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Services
                </button>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block py-2 px-4 text-company-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 font-medium rounded-lg transition-all duration-300 transform hover:scale-105" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 px-4 text-company-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 font-medium rounded-lg transition-all duration-300 transform hover:scale-105" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="block py-2 px-4 text-company-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 font-medium cursor-pointer w-full text-left rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact
                </button>
              </li>
              <li className="md:ml-4 mt-4 md:mt-0">
                <Button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  Get a Quote
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
