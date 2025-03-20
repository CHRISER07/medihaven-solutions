
import React, { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The mobile health unit visiting our village has transformed how we access healthcare. Now my children can see a doctor regularly without traveling for hours.",
    name: "Amara Patel",
    role: "Mother of three, Rajasthan",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop"
  },
  {
    quote: "MediGramin's AI system helps me plan my inventory better. We haven't had a medicine stockout in over 8 months, which used to be a monthly occurrence.",
    name: "Dr. Rajiv Kumar",
    role: "Rural Health Center Director",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
  },
  {
    quote: "The training I received through MediGramin gave me the confidence to provide basic healthcare services in my community. I feel empowered to make a difference.",
    name: "Lakshmi Singh",
    role: "Community Health Worker",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(autoplayTimer);
  }, [isTransitioning]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-accent/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue mb-4">
              Real Impact
            </div>
            <h2 className="section-title">
              Stories from the Communities
            </h2>
            <p className="section-subtitle">
              Hear from the people whose lives have been transformed by improved healthcare access.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-6 -left-6 w-16 h-16 flex items-center justify-center text-brand-blue">
              <Quote className="w-16 h-16 opacity-20" />
            </div>

            <div className="glass-card rounded-xl p-8 md:p-12 overflow-hidden relative">
              <div className="relative overflow-hidden">
                <div 
                  className="transition-all duration-500 ease-in-out flex"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <blockquote className="text-xl md:text-2xl font-display text-foreground italic mb-8">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-brand-blue scale-125' : 'bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:text-brand-blue transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:text-brand-blue transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mt-16 text-center">
            <div className="glass-card inline-block rounded-full px-6 py-3 bg-brand-blue/10">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=50&h=50&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=50&h=50&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                    <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=50&h=50&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-sm font-medium text-brand-blue">
                  Join 500+ villages already benefiting from MediGramin
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
