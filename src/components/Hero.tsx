import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Shield, Clock, Wrench, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80',
    tagline: 'Precision. Excellence. Trust.',
    title: 'Reliable Roofing Services You Can Trust',
    subtitle: 'Florida\'s premiere contractor for residential and commercial excellence. Fast, insured, and built to last.',
    ctaPrimaryPath: '/contact',
    ctaPrimaryText: 'Get Free Estimate',
    ctaSecondaryPath: '/services',
    ctaSecondaryText: 'Our Expertise',
  },
  {
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80',
    tagline: 'Your Roof. Our Passion.',
    title: 'Master Craftsmanship Since 2004',
    subtitle: 'Over 20 years of protecting Florida homes from high winds and intense sun with premium materials.',
    ctaPrimaryPath: '/contact',
    ctaPrimaryText: 'Schedule Visit',
    ctaSecondaryPath: '/gallery',
    ctaSecondaryText: 'View Work',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-navy">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={SLIDES[current].image} 
            alt={SLIDES[current].title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Geometric Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-[20deg] translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-navy to-transparent" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[40px] border-secondary/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-lg border border-white/10">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-secondary text-xs font-black uppercase tracking-[0.3em]">{SLIDES[current].tagline}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black leading-[0.95] tracking-tighter">
                {SLIDES[current].title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-[0.2em]">
                    {word === 'Roofing' ? <span className="text-primary italic">{word}</span> : word}
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-medium">
                {SLIDES[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  to={SLIDES[current].ctaPrimaryPath}
                  className="group relative overflow-hidden bg-primary text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {SLIDES[current].ctaPrimaryText}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  to={SLIDES[current].ctaSecondaryPath}
                  className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
                >
                  {SLIDES[current].ctaSecondaryText}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-white/10 mt-12 overflow-x-auto no-scrollbar">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-navy bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                    <span className="text-white">4.9/5</span> Rating Based on 2,500+ Reviews
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-24 right-10 flex flex-col gap-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-4 text-right"
          >
            <span className={cn(
              "text-sm font-black transition-all",
              current === i ? "text-secondary opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
            )}>
              0{i + 1}
            </span>
            <div className={cn(
              "h-1 transition-all rounded-full",
              current === i ? "w-12 bg-secondary" : "w-6 bg-white/20 group-hover:w-8"
            )} />
          </button>
        ))}
      </div>
    </section>
  );
}
