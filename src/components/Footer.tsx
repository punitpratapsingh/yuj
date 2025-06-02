
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold to-luxury-champagne rounded-lg flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">Y</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Yuj</h3>
                <p className="text-xs text-white/70 -mt-1">PRODUCTIONS</p>
              </div>
            </div>
            <p className="text-white/80 font-inter leading-relaxed">
              Transforming brand ideas into powerful visual narratives that stir emotions, spark curiosity, and drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                About Us
              </Link>
              <Link to="/services" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Our Services
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Services</h4>
            <div className="space-y-3">
              <Link to="/services/advertising" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Advertising
              </Link>
              <Link to="/services/brand-photography" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Brand Photography
              </Link>
              <Link to="/services/corporate-films" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Corporate Films
              </Link>
              <Link to="/services/celebrity-management" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Celebrity Management
              </Link>
              <Link to="/services/brand-consultancy" className="block text-white/80 hover:text-luxury-gold transition-colors duration-300 font-inter">
                Brand Consultancy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-playfair font-semibold text-lg text-luxury-gold">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1" />
                <p className="text-white/80 font-inter">
                  Jaipur, Rajasthan<br />
                  Pan-India Presence
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <p className="text-white/80 font-inter">+91 XXX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <p className="text-white/80 font-inter">hello@yujproductions.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-inter text-sm">
              © 2024 Yuj Productions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300 font-inter text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-luxury-gold transition-colors duration-300 font-inter text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
