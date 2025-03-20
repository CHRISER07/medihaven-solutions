
import React from 'react';
import FadeInSection from './FadeInSection';
import { Building2, Users, Truck, Clock, Map, AlertTriangle } from 'lucide-react';

const challenges = [
  {
    icon: <Building2 className="w-6 h-6 text-brand-blue" />,
    title: "Infrastructure Gaps",
    description: "Limited healthcare facilities, unstable power supply, and inadequate storage conditions for medicines in remote areas."
  },
  {
    icon: <Users className="w-6 h-6 text-brand-blue" />,
    title: "Skilled Personnel Shortage",
    description: "Lack of trained healthcare professionals willing to work in isolated regions, leading to inconsistent care."
  },
  {
    icon: <Truck className="w-6 h-6 text-brand-blue" />,
    title: "Supply Chain Disruptions",
    description: "Difficult terrain and seasonal barriers often prevent timely delivery of essential medicines and supplies."
  },
  {
    icon: <Map className="w-6 h-6 text-brand-blue" />,
    title: "Geographic Isolation",
    description: "Remote locations with limited connectivity make it challenging to coordinate healthcare efforts effectively."
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-blue" />,
    title: "Medicine Expiration",
    description: "Inefficient inventory management leads to medicine wastage and shortages of critical supplies."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-brand-blue" />,
    title: "Emergency Response",
    description: "Delayed emergency response times due to communication barriers and lack of coordinated systems."
  }
];

const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue mb-4">
              The Challenges
            </div>
            <h2 className="section-title">
              Healthcare Barriers in Remote Villages
            </h2>
            <p className="section-subtitle">
              Remote communities face unique challenges that create significant barriers to accessing quality healthcare services and essential medicines.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  {challenge.icon}
                </div>
                <h3 className="card-title mb-2">{challenge.title}</h3>
                <p className="card-content">{challenge.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
