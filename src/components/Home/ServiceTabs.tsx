import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const SERVICES = [
  {
    id: 'metal',
    title: 'Metal Roofing',
    desc: 'Ultra-durable, energy-efficient roofing solutions designed to withstand high winds and severe Florida storms.',
    image: 'https://images.unsplash.com/photo-1663133575823-d43afbbd04c2?auto=format&fit=crop&q=80',
    bullets: ['Heat Reflective Properties', '50+ Year Lifespan', 'Hurricane Resistance']
  },
  {
    id: 'installation',
    title: 'Roof Installation',
    icon: ShieldCheck,
    desc: 'Professional installation for new constructions or additions using the latest industry standards and master craftsmanship.',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80',
    bullets: ['Precision Alignment', 'Multi-Layer Protection', 'Certified Crew']
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    desc: 'Fast, reliable repair services for leaks, missing shingles, and minor damage before they become major liabilities.',
    image: 'https://images.unsplash.com/photo-1663133575823-d43afbbd04c2?auto=format&fit=crop&q=80',
    bullets: ['Same-Day Inspection', 'Emergency Tarping', 'Leak Detection']
  },
  {
    id: 'renovation',
    title: 'Roof Renovation',
    desc: 'Restore your existing roof to its former glory. We clean, seal, and repair to maximize longevity and performance.',
    image: 'https://images.unsplash.com/photo-1663133575823-d43afbbd04c2?auto=format&fit=crop&q=80',
    bullets: ['Gutter Integration', 'Full Surface Seal', 'Warranty Renewal']
  }
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(SERVICES[0]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Menu */}
          <div className="lg:w-1/3">
             <div className="mb-12">
                <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">What We Do</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tighter">
                  Professional <span className="text-primary italic">Roofing</span> Services
                </h2>
             </div>
            
            <div className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s)}
                  className={cn(
                    "flex items-center justify-between p-6 rounded-2xl font-black uppercase tracking-widest text-sm transition-all text-left",
                    activeTab.id === s.id 
                      ? "bg-navy text-white shadow-2xl shadow-navy/20 translate-x-4" 
                      : "bg-slate-50 text-navy hover:bg-slate-100"
                  )}
                >
                  {s.title}
                  <ChevronRight className={cn(
                    "w-5 h-5 transition-transform",
                    activeTab.id === s.id ? "text-primary rotate-0" : "text-slate-300 -rotate-90"
                  )} />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-slate-100"
              >
                <div className="md:w-1/2">
                   <div className="relative group">
                      <div className="absolute inset-0 bg-primary/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                      <div className="rounded-[2.5rem] overflow-hidden h-[400px] shadow-2xl">
                        <img 
                          src={activeTab.image} 
                          alt={activeTab.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                   </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-3xl font-black text-navy mb-6 tracking-tight">{activeTab.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {activeTab.desc}
                  </p>
                  
                  <div className="grid gap-3 mb-10">
                    {activeTab.bullets.map(b => (
                      <div key={b} className="flex items-center gap-3 font-bold text-navy text-sm">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {b}
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs hover:text-secondary transition-colors"
                  >
                    Request Details <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';
