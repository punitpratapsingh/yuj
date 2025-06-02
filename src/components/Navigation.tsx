
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { title: "Advertising", path: "/services/advertising" },
    { title: "Brand Photography", path: "/services/brand-photography" },
    { title: "Corporate Films", path: "/services/corporate-films" },
    { title: "Celebrity Management", path: "/services/celebrity-management" },
    { title: "Brand Consultancy", path: "/services/brand-consultancy" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-luxury-platinum z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-champagne rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-playfair font-bold text-xl">Y</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-2xl text-luxury-charcoal">Yuj</h1>
              <p className="text-xs text-luxury-charcoal/70 -mt-1">PRODUCTIONS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-inter font-medium transition-colors duration-300 ${
                isActive("/") 
                  ? "text-luxury-gold" 
                  : "text-luxury-charcoal hover:text-luxury-gold"
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`font-inter font-medium transition-colors duration-300 ${
                isActive("/about") 
                  ? "text-luxury-gold" 
                  : "text-luxury-charcoal hover:text-luxury-gold"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-inter font-medium text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border border-luxury-platinum shadow-xl">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      to={service.path}
                      className="w-full px-4 py-3 text-luxury-charcoal hover:text-luxury-gold hover:bg-luxury-pearl transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`font-inter font-medium transition-colors duration-300 ${
                isActive("/contact") 
                  ? "text-luxury-gold" 
                  : "text-luxury-charcoal hover:text-luxury-gold"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-6 py-3 rounded-lg font-inter font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-luxury-platinum animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block font-inter font-medium py-2 ${
                isActive("/") ? "text-luxury-gold" : "text-luxury-charcoal"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block font-inter font-medium py-2 ${
                isActive("/about") ? "text-luxury-gold" : "text-luxury-charcoal"
              }`}
            >
              About
            </Link>
            
            <div className="space-y-2">
              <p className="font-inter font-medium text-luxury-charcoal py-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block font-inter text-luxury-charcoal/80 hover:text-luxury-gold py-1"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block font-inter font-medium py-2 ${
                isActive("/contact") ? "text-luxury-gold" : "text-luxury-charcoal"
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-luxury-gold text-white px-6 py-3 rounded-lg font-inter font-medium text-center mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
