
import React from 'react';
import FadeInSection from './FadeInSection';
import { GraduationCap, Users, BarChart, LightbulbIcon } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="community" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-sm font-medium text-brand-green mb-4">
              Empowering Communities
            </div>
            <h2 className="section-title">
              Community Engagement & Education
            </h2>
            <p className="section-subtitle">
              Building local capacity and sustainable healthcare systems through training, engagement, and data-driven insights.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <FadeInSection delay={100} className="lg:col-span-5">
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Community health worker training session" 
                className="w-full h-64 lg:h-96 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-4">Training the Next Generation</h3>
                <p className="text-muted-foreground">
                  Our comprehensive training programs equip local health workers with the skills and knowledge needed to provide quality care to their communities, even in challenging environments.
                </p>
                <div className="mt-6 space-x-2">
                  <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">Training Programs</span>
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green">Skill Development</span>
                  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Certification</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200} className="lg:col-span-7">
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="space-y-8">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="card-title">Educational Programs</h3>
                    <p className="card-content">
                      Tailored training modules that adapt to local needs and constraints, available both in-person and via digital platforms.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="card-title">Community Engagement</h3>
                    <p className="card-content">
                      Participatory approaches that involve communities in healthcare planning and delivery, building trust and ownership.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <BarChart className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="card-title">Data-Driven Insights</h3>
                    <p className="card-content">
                      Analytics that help communities understand their health patterns and make informed decisions about resource allocation.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                      <LightbulbIcon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="card-title">Innovation Workshops</h3>
                    <p className="card-content">
                      Collaborative sessions that generate locally-appropriate solutions to healthcare challenges using available resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={300}>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-brand-blue to-brand-green p-0.5 rounded-xl">
              <div className="bg-white rounded-[calc(0.8rem-1px)] p-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Join Our Community Initiatives</h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're a healthcare professional, educator, or community leader, there's a place for you in our mission to transform rural healthcare through education and engagement.
                  </p>
                  <a href="#contact" className="button-accent inline-flex">
                    Get Involved Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default EducationSection;
