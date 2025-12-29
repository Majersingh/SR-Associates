'use client'
import { motion } from 'framer-motion';
import { Carousel } from '../components/Carousel';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Elite Tax Advisory transformed our startup compliance journey. Their expertise saved us over ₹15 lakhs in the first year alone.',
    author: 'Rajesh Kumar',
    role: 'Founder, TechVentures',
  },
  {
    quote: 'As an NRI, managing Indian taxes was always stressful. Their team made it seamless with proactive advice and timely filings.',
    author: 'Priya Mehta',
    role: 'Software Engineer, USA',
  },
  {
    quote: 'Professional, responsive, and incredibly knowledgeable. They handle all our business tax planning with precision and care.',
    author: 'Arjun Desai',
    role: 'Director, Desai Enterprises',
  },
  {
    quote: 'The GST compliance support has been exceptional. No more last-minute scrambles, everything is handled well in advance.',
    author: 'Sneha Patel',
    role: 'CEO, Retail Solutions Ltd',
  },
];

export function Testimonials() {
  const carouselItems = testimonials.map((testimonial, index) => (
    <div key={index} className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-offwhite/5 backdrop-blur-sm border border-offwhite/10 rounded-3xl p-12 relative"
      >
        <div className="absolute top-8 left-8 text-emerald/20">
          <Quote size={64} strokeWidth={1.5} />
        </div>
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl text-offwhite leading-relaxed mb-8 font-light italic">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center text-emerald text-2xl font-semibold">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="text-lg font-semibold text-offwhite">{testimonial.author}</div>
              <div className="text-offwhite/60">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  ));

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Client <span className="text-emerald">Stories</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Trusted by professionals and businesses across India
          </p>
        </motion.div>

        <Carousel items={carouselItems} autoPlay interval={7000} />
      </div>
    </section>
  );
}
