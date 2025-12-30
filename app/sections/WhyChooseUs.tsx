'use client'
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Target, Lock, Award, Clock } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: '100% Accuracy',
    description: 'Precision-driven tax filing with meticulous attention to detail and compliance.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Your financial data is protected with enterprise-level encryption and confidentiality.',
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Chartered Accountants and tax specialists with 15+ years of combined experience.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your tax queries and financial concerns.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-offwhite mb-6">
            Why Choose <span className="text-emerald">Us</span>
          </h2>
          <p className="text-xl text-offwhite/70 max-w-2xl mx-auto">
            Trust, expertise, and commitment to your financial success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 rounded-2xl bg-emerald/10 mb-6"
                  >
                    <Icon size={40} className="text-emerald" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-offwhite mb-4">{highlight.title}</h3>
                  <p className="text-offwhite/70 leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
