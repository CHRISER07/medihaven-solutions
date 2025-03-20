
import React from 'react';
import FadeInSection from './FadeInSection';
import { Database, Smartphone, Stethoscope } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-accent/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-sm font-medium text-brand-green mb-4">
              Our Approach
            </div>
            <h2 className="section-title">
              MediGramin's Innovative Solutions
            </h2>
            <p className="section-subtitle">
              We're leveraging technology and human-centered design to bridge the healthcare gap in remote communities.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <FadeInSection delay={100}>
            <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">AI-Powered Inventory System</h3>
              <p className="text-muted-foreground flex-grow">
                Smart inventory management that predicts medicine needs, prevents stockouts, and reduces waste through advanced analytics and AI algorithms.
              </p>
              <div className="mt-6">
                <div className="text-sm font-medium text-brand-blue hover:underline cursor-pointer">
                  Learn how it works →
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col transform lg:scale-110 lg:-translate-y-4 shadow-lg relative bg-gradient-to-br from-brand-blue/95 to-brand-blue-dark text-white">
              <div className="absolute -top-3 inset-x-0 flex justify-center">
                <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  FLAGSHIP SOLUTION
                </span>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Mobile Health Units</h3>
              <p className="text-white/80 flex-grow">
                Equipped mobile units staffed with trained professionals that bring essential healthcare services directly to remote villages on optimized routes.
              </p>
              <div className="mt-6">
                <div className="text-sm font-medium text-white hover:underline cursor-pointer">
                  Explore our mobile units →
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col">
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Telemedicine Services</h3>
              <p className="text-muted-foreground flex-grow">
                Connect patients in remote areas with specialists via video consultations, enabling remote diagnoses and treatment recommendations.
              </p>
              <div className="mt-6">
                <div className="text-sm font-medium text-brand-blue hover:underline cursor-pointer">
                  See how it connects →
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={400}>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <h3 className="text-2xl font-display font-bold mb-4">Delivering Impact Today, Planning for Tomorrow</h3>
                <p className="text-muted-foreground mb-6">
                  Our solutions are already making a difference in hundreds of villages, but we're just getting started. With your support, we can expand our reach and refine our approach to address the unique needs of each community.
                </p>
                <a href="#contact" className="button-primary inline-flex">
                  Join Our Mission
                </a>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Healthcare worker using MediGramin tablet" 
                  className="w-full h-full object-cover aspect-video md:aspect-auto md:h-full"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SolutionsSection;
