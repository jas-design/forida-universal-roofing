import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Get In Touch" 
        subtitle="Speak with a Florida roofing specialist today. We offer free, no-obligation photographic inspections for all properties." 
      />

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Overlay Grid */}
        <div className="absolute inset-0 opacity-5 bg-grid-navy pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -skew-x-12 translate-x-1/2 -translate-y-1/2 -z-10 group-hover:scale-110 transition-transform duration-700" />
                
                <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">Inquiry Form</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-12 tracking-tight italic">Send a <span className="text-primary">Priority</span> Message</h2>
                
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl rotate-12">
                      <Send className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black text-navy mb-4 italic uppercase">Message Delivered</h3>
                    <p className="text-slate-600 font-medium max-w-sm mx-auto">One of our Florida roofing specialists will reach out within 60 minutes during business hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-10 bg-navy text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[0.6rem] hover:bg-primary transition-all shadow-xl"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-[0.65rem] font-black text-navy uppercase tracking-[0.2em] ml-2">Full Identity</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium text-navy placeholder:text-slate-300"
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[0.65rem] font-black text-navy uppercase tracking-[0.2em] ml-2">Direct Line</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium text-navy placeholder:text-slate-300"
                          placeholder="407-000-0000"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-navy uppercase tracking-[0.2em] ml-2">Work Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary focus:ring-0 transition-all font-medium text-navy placeholder:text-slate-300"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-navy uppercase tracking-[0.2em] ml-2">Service Intensity</label>
                      <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-all font-black uppercase tracking-tighter text-navy cursor-pointer">
                        <option>Free Inspection Request</option>
                        <option>Hurricane Damage Audit</option>
                        <option>Full Roof Replacement</option>
                        <option>Commercial Maintenance</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] font-black text-navy uppercase tracking-[0.2em] ml-2">Project Details</label>
                      <textarea 
                        rows={5}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary focus:ring-0 transition-all resize-none font-medium text-navy placeholder:text-slate-300"
                        placeholder="Provide details about your current roof state..."
                      />
                    </div>

                    <button 
                      disabled={formState === 'sending'}
                      type="submit"
                      className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/30 hover:bg-navy transition-all flex items-center justify-center gap-4 disabled:opacity-70 group/btn"
                    >
                      {formState === 'sending' ? 'Transmitting...' : 'Dispatch Request'}
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-2/5 flex flex-col gap-16">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs block mb-4">Direct Contact</span>
                <h2 className="text-4xl font-black text-navy mb-12 tracking-tight italic">Our Headquarters</h2>
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-navy text-white rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors shadow-xl">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Speak Directly</p>
                      <a href="tel:4073334444" className="text-2xl font-black text-navy hover:text-primary transition-colors tracking-tighter">407-333-4444</a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-navy text-white rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors shadow-xl">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Electronic Mail</p>
                      <a href="mailto:info@floridauniversalroofing.com" className="text-2xl font-black text-navy hover:text-primary transition-colors tracking-tighter">info@floridauniversalroofing.com</a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-navy text-white rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors shadow-xl">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Main Hub</p>
                      <p className="text-2xl font-black text-navy tracking-tighter uppercase italic">Orlando, Florida</p>
                      <p className="text-slate-500 font-medium">Statewide Coverage Available.</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-navy text-white rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors shadow-xl">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Active Hours</p>
                      <p className="text-2xl font-black text-navy tracking-tighter italic">MON - FRI: 08 AM - 06 PM</p>
                      <p className="text-primary font-black uppercase text-xs tracking-widest mt-2">24/7 Hurricane Response</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 flex-grow bg-navy rounded-[3rem] overflow-hidden relative shadow-2xl group min-h-[350px]">
                 <img 
                  src="https://images.unsplash.com/photo-1635339230533-8a38c4146039?auto=format&fit=crop&q=80" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-700" 
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 pulse-slow">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-4">Serving Central Florida</h4>
                  <p className="text-white/60 text-xs font-black uppercase tracking-widest leading-loose">
                    Hub: Orlando | Zone 1: Tampa | Zone 2: Daytona | Zone 3: Kissimmee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
