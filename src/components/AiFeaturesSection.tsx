
import React from 'react';
import FadeInSection from './FadeInSection';
import { Brain, BarChart3, Map, Clock } from 'lucide-react';

const AiFeaturesSection = () => {
  return (
    <section id="ai-features" className="py-20 bg-gradient-to-b from-accent/20 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue mb-4">
              Powered by Intelligence
            </div>
            <h2 className="section-title">
              AI-Driven Healthcare Innovations
            </h2>
            <p className="section-subtitle">
              Our artificial intelligence systems optimize every aspect of healthcare delivery to remote communities.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeInSection delay={100} className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Predictive Medicine Ordering</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes historical data, seasonal patterns, and disease outbreaks to predict medicine needs before shortages occur, ensuring continuous availability of essential treatments.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Automated Scheduling</h3>
                  <p className="text-muted-foreground">
                    Smart scheduling algorithms optimize healthcare worker visits based on community needs, available resources, and urgency of care required.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Map className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">AI-Based Routing</h3>
                  <p className="text-muted-foreground">
                    Dynamic routing systems that adapt to changing conditions, weather patterns, and emergencies to ensure mobile health units reach communities efficiently.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-green rounded-xl blur opacity-30"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                  alt="AI-powered healthcare technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-display font-bold">Intelligent Healthcare Ecosystem</h3>
                    <p className="text-white/80 text-sm">Seamlessly connecting patients, providers, and resources</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={300}>
          <div className="glass-card rounded-xl p-8 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border-none">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Brain className="w-10 h-10 text-brand-blue" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-2">Continuous Learning System</h3>
                <p className="text-muted-foreground mb-0">
                  Our AI continuously learns from every interaction and outcome, constantly improving its predictions and recommendations to better serve remote communities with each passing day.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <a href="#ai-features" className="button-primary inline-flex items-center">
                  <span>Explore AI Impact</span>
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AiFeaturesSection;
