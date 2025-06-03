
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
    <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-company-blue">
            <img src="/lovable-uploads/9bdcde7e-f4ef-4457-a5e9-f1cff6a9f5ad.png" alt="Apex Test Technologies Logo" className="h-12" />
            <span className="hidden md:block">Apex Test Technologies</span>
          </Link>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-company-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <nav className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none ${mobileMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <li>
                <Link to="/" className="block py-2 text-company-blue hover:text-company-lightblue font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('services')}
                  className="block py-2 text-company-blue hover:text-company-lightblue font-medium cursor-pointer w-full text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <Link to="/projects" className="block py-2 text-company-blue hover:text-company-lightblue font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 text-company-blue hover:text-company-lightblue font-medium" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="block py-2 text-company-blue hover:text-company-lightblue font-medium cursor-pointer w-full text-left"
                >
                  Contact
                </button>
              </li>
              <li className="md:ml-4 mt-4 md:mt-0">
                <Button className="w-full md:w-auto bg-company-blue hover:bg-company-lightblue">
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
