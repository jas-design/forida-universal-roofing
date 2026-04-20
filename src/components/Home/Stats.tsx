import { motion } from 'motion/react';

const STATS = [
  { label: 'Total Projects', value: '300+' },
  { label: 'Active Clients', value: '450+' },
  { label: 'Repair Jobs', value: '3,150' },
  { label: 'Happy Customers', value: '6,500+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                {s.value}
              </div>
              <div className="text-white/60 font-black uppercase tracking-[0.3em] text-[0.65rem]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
