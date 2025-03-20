
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="border-t border-muted">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <a
                href="#"
                className="text-2xl font-display font-bold text-brand-blue flex items-center mb-4"
              >
                <span className="bg-brand-blue text-white px-2 py-1 rounded mr-1">Medi</span>
                <span>Gramin</span>
              </a>
              <p className="text-muted-foreground mb-6 max-w-md">
                Bridging the healthcare gap for remote villages through AI-powered solutions, mobile health units, and community empowerment.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#solutions" className="text-muted-foreground hover:text-brand-blue transition-colors">Our Solutions</a>
                </li>
                <li>
                  <a href="#ai-features" className="text-muted-foreground hover:text-brand-blue transition-colors">AI Technology</a>
                </li>
                <li>
                  <a href="#community" className="text-muted-foreground hover:text-brand-blue transition-colors">Community</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-brand-blue transition-colors">Partner With Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Case Studies</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Research Papers</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">Media Kit</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-brand-blue transition-colors">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">123 Innovation Way, Health District, New Delhi, 110001</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-brand-blue mr-2" />
                  <a href="mailto:info@medigramin.org" className="text-muted-foreground hover:text-brand-blue transition-colors">info@medigramin.org</a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-brand-blue mr-2" />
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-brand-blue transition-colors">+91 123 456 7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-muted">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} MediGramin. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
