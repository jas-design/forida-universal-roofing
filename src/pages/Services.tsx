import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { Home, Wrench, ShieldCheck as ShieldCheckIcon, Activity, Landmark, Construction, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_SERVICES = [
  {
    id: 'repair',
    title: 'Roof Repair',
    icon: Wrench,
    description: 'Don’t wait for a small leak to become a massive flood. We specialize in identifying and fixing leaks, replacing broken shingles, and repairing flashing to keep your home dry.',
    features: ['Leak Detection', 'Shingle Replacement', 'Flashing Repair', 'Same-Day Service Available'],
    image: 'https://images.unsplash.com/photo-1618215164283-71cc738a164e?auto=format&fit=crop&q=80'
  },
  {
    id: 'replacement',
    title: 'Roof Replacement',
    icon: Home,
    description: 'When it’s time for a new roof, we provide the best value in Arizona. We offer a wide range of materials including shingle, tile, and foam roofing to suit your budget and style.',
    features: ['Tile Roofing', 'Asphalt Shingles', 'Foam Roofing', 'Full Cleanup Included'],
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    icon: Landmark,
    description: 'We protect your business with industrial-grade roofing solutions. From maintenance contracts to full replacements, we ensure your assets are covered.',
    features: ['Flat Roofs', 'TPO Roofing', 'Maintenance Programs', 'Industrial Coatings'],
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80'
  },
  {
    id: 'storm',
    title: 'Storm Damage Repair',
    icon: Activity,
    description: 'Monsoon season and hail storms can be brutal in Arizona. We help you navigate insurance claims and execute repairs quickly to prevent further damage.',
    features: ['Insurance Claim Help', 'Hail Damage', 'Wind Damage', 'Emergency Board-up'],
    image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Solutions We Offer" 
        subtitle="Expert roofing solutions for Central Florida's residential and commercial properties. Built for high winds and extreme heat." 
      />

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5 bg-grid-navy pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-32">
            {ALL_SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 group relative">
                   <div className="absolute inset-0 bg-primary/20 rounded-[3rem] translate-x-6 translate-y-6 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                   <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary/10 p-5 rounded-2xl shadow-xl shadow-primary/5">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight italic uppercase">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium capitalize">
                    {service.description.replace('Arizona', 'Florida').replace('harsh Arizona sun', 'intense Florida UV rays')}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-3 font-black text-navy text-sm uppercase tracking-tighter">
                        <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
                           <ShieldCheckIcon className="w-3 h-3 text-secondary" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100">
                    <Link 
                      to="/contact" 
                      className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-navy transition-all shadow-2xl shadow-primary/20"
                    >
                      Request Detailed Quote
                    </Link>
                    <a 
                      href="tel:4073334444" 
                      className="bg-white border border-slate-200 text-navy px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      407-333-4444
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-grid-white pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs block mb-6">Our Partners</span>
          <h2 className="text-4xl font-black mb-20 italic tracking-tight">Quality Materials We Control</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 opacity-30 group">
            {['OWENS CORNING', 'GAF', 'TAMKO', 'CERTAINTEED', 'MALARKEY'].map(brand => (
               <div key={brand} className="text-3xl md:text-5xl font-black font-display italic tracking-tighter hover:opacity-100 hover:text-primary transition-all cursor-crosshair">
                 {brand}
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
