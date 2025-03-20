
import React from 'react';
import FadeInSection from './FadeInSection';
import { Heart, HandHeart } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeInSection delay={100}>
            <div className="glass-card rounded-xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Partner With Us</h3>
                <p className="text-white/80 mb-6">
                  Join our network of healthcare providers, NGOs, government agencies, and technology partners to expand our reach and enhance our capabilities.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="Email Address" 
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="sr-only">Organization</label>
                    <input 
                      type="text" 
                      id="organization" 
                      placeholder="Organization" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      placeholder="How would you like to partner with us?" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-white text-brand-blue font-medium rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 active:scale-[0.98]"
                  >
                    Submit Partnership Request
                  </button>
                </form>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="glass-card rounded-xl overflow-hidden bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Donate for a Cause</h3>
                <p className="text-white/80 mb-6">
                  Your donation helps us expand our reach to more remote villages, invest in AI capabilities, and train more community healthcare workers.
                </p>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-4 transition-all">
                      <div className="text-xl font-bold">$25</div>
                      <div className="text-xs text-white/70">Basic Medicines</div>
                    </button>
                    <button className="bg-white/20 border-2 border-white rounded-lg p-4 relative transform scale-105 transition-all">
                      <div className="absolute -top-3 inset-x-0 flex justify-center">
                        <span className="bg-white text-brand-green-dark text-xs font-bold px-2 py-0.5 rounded-full">
                          POPULAR
                        </span>
                      </div>
                      <div className="text-xl font-bold">$50</div>
                      <div className="text-xs text-white/70">Mobile Clinic</div>
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-4 transition-all">
                      <div className="text-xl font-bold">$100</div>
                      <div className="text-xs text-white/70">AI Training</div>
                    </button>
                  </div>

                  <div>
                    <label htmlFor="custom" className="text-sm text-white/70 block mb-2">Custom Amount</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-4 flex items-center text-white">$</span>
                      <input 
                        type="number" 
                        id="custom" 
                        placeholder="Other amount" 
                        className="w-full pl-8 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-white text-brand-green font-medium rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 active:scale-[0.98] flex items-center justify-center">
                      Donate Now
                    </button>
                    <p className="text-xs text-white/70 text-center">
                      All donations are tax-deductible. You'll receive a receipt via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
