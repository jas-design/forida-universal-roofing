import { motion } from 'motion/react';
import { PencilRuler, Construction, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    icon: PencilRuler,
    title: 'Roof Planning',
    desc: 'Expert assessment and material selection tailored to your needs.'
  },
  {
    icon: Construction,
    title: 'Installation',
    desc: 'Our master craftsmen arrive on-site for professional execution.'
  },
  {
    icon: CheckCircle2,
    title: 'Finished Roof',
    desc: 'Final walkthrough and cleanup to ensure your total satisfaction.'
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-grid-navy pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">
            How We <span className="text-primary italic">Deliver</span> Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-10">
                <div className="w-24 h-24 bg-white text-primary rounded-[2rem] flex items-center justify-center shadow-2xl relative z-10 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                  <s.icon className="w-10 h-10" />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-black z-20 border-4 border-slate-50">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-black text-navy mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
