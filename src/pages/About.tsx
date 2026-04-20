import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Our Roofing Legacy" 
        subtitle="Dedicated to excellence in Florida roofing for over two decades. We build roofs that stand the test of time." 
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" 
                alt="Florida Universal Roofing Crew" 
                referrerPolicy="no-referrer"
                className="w-full rounded-[3rem] shadow-2xl h-[600px] object-cover border-8 border-white"
              />
              <div className="absolute -bottom-10 -right-10 bg-navy text-white p-10 rounded-[2rem] shadow-2xl z-20">
                 <div className="text-5xl font-black text-secondary mb-1 italic">20+</div>
                 <div className="text-[0.65rem] font-bold text-white/60 uppercase tracking-[0.3em]">Years of Florida Craft</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Background</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy mb-10 tracking-tighter leading-tight italic">Florida Universal Roofing & Consulting</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Since our inception, FUR has been driven by a singular goal: to revolutionize the Florida roofing industry through transparency, innovation, and unmatched quality.
              </p>
              <div className="space-y-6 mb-12">
                 {[
                   'Family Owned & Operated since 2004',
                   'Central Florida\'s most trusted residential contractor',
                   'Certified installers for premium shingle and metal brands',
                   'A+ Rating with the Better Business Bureau'
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-4 text-navy font-bold uppercase tracking-tight text-sm">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                         <div className="w-2 h-2 bg-secondary rounded-full" />
                      </div>
                      {t}
                   </div>
                 ))}
              </div>
              
              <div className="grid grid-cols-2 gap-10 border-t border-slate-100 pt-10">
                <div className="flex flex-col">
                  <div className="text-4xl font-black text-primary tracking-tighter mb-2">7,500+</div>
                  <div className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em]">Inspections Completed</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl font-black text-primary tracking-tighter mb-2">100%</div>
                  <div className="text-[0.6rem] font-black text-slate-400 uppercase tracking-[0.2em]">Hurricane Zone Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grid-white pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">The FUR Standard</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Our Core <span className="text-primary italic">Philosophies</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: 'Extreme Quality', icon: Award, desc: 'We treat every roof as if it were our own mothers\' home. No shortcuts.' },
              { title: 'Total Integrity', icon: Shield, desc: 'Detailed photographic reports for every inspection. No hidden costs.' },
              { title: 'Local Loyalty', icon: Users, desc: 'Orlando is our home. We hire locally and support our Florida community.' },
              { title: 'Storm Ready', icon: Target, desc: 'Engineering roofs specifically for Floridas extreme UV and high-velocity wind zones.' },
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-2xl">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter italic">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
