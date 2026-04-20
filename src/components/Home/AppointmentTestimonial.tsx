import { motion } from 'motion/react';
import { Star, Quote, Calendar, User, Mail, Phone, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function AppointmentTestimonial() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-[20deg] translate-x-1/2" />
      <div className="absolute inset-0 bg-grid-white opacity-5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Form */}
          <div className="lg:w-1/2">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">Book Now</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                Schedule Your <span className="text-primary italic">Free</span> Inspection
              </h2>
              <p className="text-white/60">Take the first step towards a safer, stronger roof today.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
               {/* Accent line on hover */}
               <div className="absolute top-0 left-0 w-0 h-2 bg-primary transition-all duration-700 group-hover:w-full" />
               
               {formState === 'success' ? (
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                 >
                    <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                       <Calendar className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 italic">Success! We've Received It.</h3>
                    <p className="text-white/60 mb-8">A local specialist will call you from a 407 area code shortly.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-secondary font-black uppercase tracking-widest text-xs hover:underline"
                    >
                      Wait, I need to send another
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input 
                        required 
                        placeholder="Your Name" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20" 
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input 
                        required 
                        type="email"
                        placeholder="Email Address" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20" 
                      />
                    </div>
                    <div className="relative md:col-span-2">
                       <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                       <input 
                        required 
                        type="tel"
                        placeholder="Phone Number (e.g. 407-000-0000)" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/20" 
                       />
                    </div>
                    <div className="md:col-span-2">
                       <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                          <option className="bg-navy">Metal Roofing Request</option>
                          <option className="bg-navy">Residential Installation</option>
                          <option className="bg-navy">Emergency Repair</option>
                          <option className="bg-navy">Commercial Inquiry</option>
                       </select>
                    </div>
                    <div className="md:col-span-2">
                       <button 
                        type="submit"
                        disabled={formState === 'sending'}
                        className="w-full bg-secondary text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                       >
                          {formState === 'sending' ? 'Processing...' : 'Book Your Inspection'}
                          <ArrowRight className="w-5 h-5" />
                       </button>
                    </div>
                 </form>
               )}
            </div>
          </div>

          {/* Testimonial */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative bg-white/5 rounded-[3rem] p-10 md:p-20 border border-white/10"
            >
              <Quote className="absolute -top-10 left-10 w-24 h-24 text-primary opacity-20 rotate-12" />
              
              <div className="flex gap-1 mb-10">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-secondary fill-current" />)}
              </div>

              <blockquote className="text-2xl md:text-3xl font-black text-white italic leading-tight tracking-tight mb-12">
                "FUR completely transformed our commercial warehouse within two weeks. Their attention to detail during the hurricane season was unmatched. Truly the best in Florida!"
              </blockquote>

              <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                <div className="w-20 h-20 rounded-full border-4 border-primary/30 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=as" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tighter">David Anderson</h4>
                   <p className="text-secondary font-bold text-xs uppercase tracking-widest">Construction Project Manager</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
