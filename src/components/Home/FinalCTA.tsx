import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      {/* Background Image with Angle */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80" 
            alt="Roofing background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-primary/10 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 group overflow-hidden">
           {/* Animated Accent */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary -skew-x-[30deg] translate-x-[90%] opacity-20 group-hover:translate-x-[70%] transition-transform duration-1000" />
           
           <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6 underline decoration-secondary decoration-4 underline-offset-8">
                Need Any Roofing Help?
              </h2>
              <p className="text-xl text-white/70 font-medium">
                Our experts are standing by 24/7 for emergency repairs and inquiries. Get Florida's best protection today.
              </p>
           </div>

           <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="tel:4073334444" 
                className="bg-white text-navy px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all shadow-2xl flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                407-333-4444
              </a>
              <Link 
                to="/contact" 
                className="bg-secondary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary transition-all shadow-2xl flex items-center gap-3"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
