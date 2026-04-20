import { motion } from 'motion/react';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Images Split */}
          <div className="lg:w-1/2 relative lg:h-[600px] w-full">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-4/5 ml-auto"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?auto=format&fit=crop&q=80" 
                  alt="Roofing Worker" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 w-2/3 z-20"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                 <img 
                  src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80" 
                  alt="Roof Detail" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </motion.div>

            {/* Accent Shapes */}
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-6">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-8">
              Devoted to Delivering <span className="text-primary italic">Top-Notch</span> Roofing Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              For over two decades, Florida Universal Roofing has established itself as the gold standard for quality and reliability. We don't just build roofs; we shield your peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
               {[
                 '20+ Years Excellence',
                 'Extended Warranty',
                 'Free Hurricane Inspection',
                 'Certified Local Crew'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                       <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-navy text-sm uppercase tracking-tight">{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap items-center gap-8">
               <Link 
                to="/about"
                className="bg-navy text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-navy/20"
               >
                 Discover Our Story
               </Link>
               
               <a href="tel:4073334444" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                     <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                     <p className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Call Expert</p>
                     <p className="text-xl font-black text-navy leading-none">407-333-4444</p>
                  </div>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
