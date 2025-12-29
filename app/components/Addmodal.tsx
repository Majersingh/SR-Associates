'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ConsultationModalProps {
isOpen: boolean;
onClosemodal: (state: boolean) => void; 
}

const services = [
  'Company Registration',
  'GST Filing & Returns',
  'Income Tax Services',
  'Trademark & Compliance',
  'Tax Planning',
  'Audit Support',
  'Others'
];

export default function ConsultationModal({ isOpen, onClosemodal }: ConsultationModalProps) {
  const [openModal , setOpenModal]=useState(false);
  console.log("Event is to" , isOpen)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const onClose=()=>{
    onClosemodal(false);
    setOpenModal(false)
  }
  // Lock body scroll when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openModal]);
  
  useEffect(()=>{
        setOpenModal(isOpen)
    return()=>{
        setOpenModal(false)
    }
},[isOpen])

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', phone: '', service: '' });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Format WhatsApp message
    const whatsappMessage = `*New Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}`;
    const whatsappNumber = '919250561216'; // Replace with your number
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {openModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              className="relative w-full max-w-4xl bg-black border border-emerald/30 rounded-2xl shadow-2xl shadow-emerald/20 my-8"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-emerald/30 text-offwhite hover:bg-emerald/20 hover:border-emerald transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto">
                {/* Left Side - Promotional Content */}
                <div className="rounded-2xl relative bg-gradient-to-br from-emerald/20 to-emerald/5 p-8 md:p-10 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald rounded-full blur-2xl" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/20 border border-emerald/40 mb-6"
                      >
                        <Sparkles size={14} className="text-emerald" />
                        <span className="text-xs text-emerald font-semibold">
                          Limited Time Offer
                        </span>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-3xl md:text-4xl font-bold text-offwhite mb-4 leading-tight"
                      >
                        Get a <span className="text-emerald">Free Consultation</span> with our Experts!
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-offwhite/70 mb-6 text-sm md:text-base"
                      >
                        SR& Associates is here to help you with expert tax and compliance solutions.
                      </motion.p>

                      {/* Services List */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3 mb-8"
                      >
                        {['Company Registration', 'GST Filing & Returns', 'Income Tax Services', 'Trademark & Compliance'].map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 size={18} className="text-emerald flex-shrink-0" />
                            <span className="text-offwhite/80 text-sm">{service}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-center gap-6 pt-6 border-t border-emerald/20"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald mb-1">500+</div>
                        <div className="text-xs text-offwhite/60">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald mb-1">15+</div>
                        <div className="text-xs text-offwhite/60">Years Exp.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald mb-1">24hrs</div>
                        <div className="text-xs text-offwhite/60">Response</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="px-8 py-1 md:px-10 overflow-y-auto max-h-[80vh]">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-offwhite/70 text-xs mb-1">
                            Leave your details and we'll get back to you within <span className="text-emerald font-semibold">24 hours</span>.
                          </p>
                        </motion.div>

                        {/* Full Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label htmlFor="name" className="block text-offwhite font-medium mb-2 text-sm">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 bg-black/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 focus:ring-2 focus:ring-emerald/20 transition-all"
                          />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label htmlFor="email" className="block text-offwhite font-medium mb-2 text-sm">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="[email protected]"
                            className="w-full px-4 py-3 bg-black/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 focus:ring-2 focus:ring-emerald/20 transition-all"
                          />
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label htmlFor="phone" className="block text-offwhite font-medium mb-2 text-sm">
                            Mobile Number *
                          </label>
                          <div className="flex gap-2">
                            <div className="flex items-center gap-2 px-3 py-3 bg-black/50 border border-emerald/20 rounded-lg text-offwhite/60 text-sm">
                              India +91
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              pattern="[0-9]{10}"
                              placeholder="9999999999"
                              className="flex-1 px-4 py-3 bg-black/50 border border-emerald/20 rounded-lg text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-emerald/60 focus:ring-2 focus:ring-emerald/20 transition-all"
                            />
                          </div>
                        </motion.div>

                        {/* Service Needed */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <label htmlFor="service" className="block text-offwhite font-medium mb-2 text-sm">
                            Service Needed *
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-emerald/20 rounded-lg text-offwhite focus:outline-none focus:border-emerald/60 focus:ring-2 focus:ring-emerald/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-black">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service} className="bg-black">
                                {service}
                              </option>
                            ))}
                          </select>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald hover:bg-emerald/90 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          {isSubmitting ? (
                            <span>Processing...</span>
                          ) : (
                            <>
                              <span>Request Callback</span>
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                        {/* Call Now Link */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="text-center pt-4 border-t border-emerald/10"
                        >
                          <p className="text-offwhite/60 text-sm mb-2">Or Call Now:</p>
                          <a
                            href="tel:+919250561216"
                            className="inline-flex items-center gap-2 text-emerald hover:text-emerald/80 font-semibold transition-colors"
                          >
                            <Phone size={16} />
                            <span>+91 9250561216</span>
                          </a>
                        </motion.div>
                      </motion.form>
                    ) : (
                      // Success State
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                          className="w-20 h-20 rounded-full bg-emerald/20 flex items-center justify-center mb-6"
                        >
                          <CheckCircle2 size={40} className="text-emerald" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-offwhite mb-3">
                          Request Submitted!
                        </h3>
                        <p className="text-offwhite/70 mb-2">
                          Thank you for reaching out. Our team will contact you within 24 hours.
                        </p>
                        <p className="text-sm text-offwhite/50">
                          Check your WhatsApp for confirmation.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
