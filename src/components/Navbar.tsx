
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-4'}`}>
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
              <li><a href="#home" className="block py-2 text-company-blue hover:text-company-lightblue font-medium">Home</a></li>
              <li><a href="#services" className="block py-2 text-company-blue hover:text-company-lightblue font-medium">Services</a></li>
              <li><a href="#projects" className="block py-2 text-company-blue hover:text-company-lightblue font-medium">Projects</a></li>
              <li>
                <Link to="/about" className="block py-2 text-company-blue hover:text-company-lightblue font-medium">
                  About
                </Link>
              </li>
              <li><a href="#contact" className="block py-2 text-company-blue hover:text-company-lightblue font-medium">Contact</a></li>
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
