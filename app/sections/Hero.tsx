'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80',
    title: 'Income Tax Filing',
    description: 'Hassle-free ITR filing for individuals',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523952578875-e6bb18b26645?auto=format&fit=crop&w=1600&q=80',
    title: 'GST Compliance',
    description: 'Complete GST solutions for businesses',
  },
  {
    image:
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80',
    title: 'Tax Planning',
    description: 'Strategic tax optimization services',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    title: 'Wealth Advisory',
    description: 'Comprehensive wealth management',
  },
];


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center px-6 overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-radial from-emerald/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald/30 bg-emerald/5 mb-8"
            >
              <Sparkles size={16} className="text-emerald" />
              <span className="text-sm text-emerald font-medium">
                Premium Tax & Financial Advisory
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite mb-6 leading-tight"
            >
              Smart Tax.
              <br />
              <span className="text-emerald">Clear Wealth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-offwhite/70 mb-8 leading-relaxed"
            >
              Expert tax filing, GST compliance, and wealth advisory for salaried 
              professionals, business owners, startups, and HNIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button variant="primary">Book Free Consultation</Button>
              <Button variant="secondary">View Services</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-emerald mb-1">500+</div>
                <div className="text-sm text-offwhite/60">Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-emerald mb-1">₹50Cr+</div>
                <div className="text-sm text-offwhite/60">Saved</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-emerald mb-1">15+</div>
                <div className="text-sm text-offwhite/60">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[500px] lg:h-[600px]"
          >
            <div className="relative w-full h-full perspective-1000">
              {slides.map((slide, index) => {
                const offset = (index - currentSlide + slides.length) % slides.length;
                const isActive = offset === 0;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      zIndex: isActive ? 10 : slides.length - Math.abs(offset),
                      transform: `
                        translateX(${offset * 30}%) 
                        scale(${1 - Math.abs(offset) * 0.15})
                        rotateY(${-offset * 15}deg)
                      `,
                      opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-emerald/20 shadow-2xl shadow-emerald/10 bg-black/40 backdrop-blur-sm">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-0 left-0 right-0 p-8 text-center"
                        >
                          <h3 className="text-3xl font-bold text-offwhite mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-offwhite/70">{slide.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-8 h-2 bg-emerald'
                      : 'w-2 h-2 bg-offwhite/40 hover:bg-offwhite/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
    </section>
  );
}
