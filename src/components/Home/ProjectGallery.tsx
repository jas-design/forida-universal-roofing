import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  { url: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80', title: 'Tile Roof Replacement', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80', title: 'Commercial Flat Roof', category: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1618215164283-71cc738a164e?auto=format&fit=crop&q=80', title: 'Modern Estate', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1635339230533-8a38c4146039?auto=format&fit=crop&q=80', title: 'Custom Slate Install', category: 'Residential' },
];

export default function ProjectGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tighter">
              Recent <span className="text-primary italic">Projects</span> Across Florida
            </h2>
          </div>
          <Link 
            to="/gallery" 
            className="group flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all self-start"
          >
            View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer aspect-[4/5] shadow-xl"
            >
              <img 
                src={p.url} 
                alt={p.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-navy/80 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                 <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">{p.title}</h3>
                 <p className="text-secondary font-bold text-xs uppercase tracking-widest">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
