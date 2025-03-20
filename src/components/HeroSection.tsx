
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="flex flex-col items-start space-y-6 animate-fade-in">
            <div className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue">
              Healthcare Innovation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-foreground">
              Bridging the Health Gap for Remote Villages
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Leveraging AI-powered solutions to connect underserved communities with essential healthcare services and medical resources.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="#solutions" className="button-primary">
                Learn More
              </a>
              <a href="#challenges" className="button-secondary">
                Explore Challenges
              </a>
            </div>
          </div>
          
          <div className="relative lg:pl-6 animate-fade-in-right">
            <div className="relative mx-auto max-w-md">
              {/* Main image with glass effect */}
              <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02] bg-white p-1">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Healthcare worker with patient in remote village"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="text-xl font-bold">-35%</p>
                  </div>
                </div>
              </div>
              
              {/* Floating villages card */}
              <div className="absolute -top-6 -right-6 glass-card rounded-xl p-4 animate-float animation-delay-200">
                <div className="text-center">
                  <p className="text-lg font-bold">500+</p>
                  <p className="text-sm text-muted-foreground">Villages Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#challenges" className="flex flex-col items-center text-muted-foreground hover:text-brand-blue transition-colors">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
