'use client'
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-emerald/10 to-transparent border border-emerald/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-emerald/5 via-transparent to-transparent" />

          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6">
              Ready to Optimize Your Taxes?
            </h2>
            <p className="text-xl text-offwhite/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust us with their financial future.
              Book your free consultation today.
            </p>
            <a href='/#contact' className="p-2 md:p-3 text-charcoal text-bold rounded-xl bg-emerald inline-flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
