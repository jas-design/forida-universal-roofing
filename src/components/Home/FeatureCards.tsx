import { motion } from 'motion/react';
import { HardHat, BadgeCheck, Headset, Construction } from 'lucide-react';

const FEATURES = [
  {
    icon: HardHat,
    title: 'Expert Engineers',
    desc: 'Certified professionals with decades of combined roofing expertise.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Materials',
    desc: 'We only use industry-leading brands tested for Florida weather.'
  },
  {
    icon: Headset,
    title: '24/7 Support',
    desc: 'Emergency response ready whenever disaster strikes your roof.'
  },
  {
    icon: Construction,
    title: 'Roof Renovation',
    desc: 'Specialized techniques for restoring aging roofs to like-new condition.'
  }
];

export default function FeatureCards() {
  return (
    <section className="relative z-20 -mt-24 pb-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-2xl shadow-2xl border-b-4 border-transparent hover:border-primary transition-all hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-50 text-navy rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-navy mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
