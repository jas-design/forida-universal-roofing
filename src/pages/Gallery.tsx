import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { X, Search } from 'lucide-react';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80', title: 'Tile Roof Replacement', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80', title: 'Commercial Flat Roof', category: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1635339230533-8a38c4146039?auto=format&fit=crop&q=80', title: 'Shingle Repair', category: 'Repair' },
  { url: 'https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?auto=format&fit=crop&q=80', title: 'Custom Slate Installation', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80', title: 'Storage Facility', category: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80', title: 'Hurricane Restoration', category: 'Storm' },
  { url: 'https://images.unsplash.com/photo-1621303837941-86082982855b?auto=format&fit=crop&q=80', title: 'Modern Estate', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1598449334754-cd1f582675ad?auto=format&fit=crop&q=80', title: 'Warehouse Reroof', category: 'Commercial' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<typeof IMAGES[0] | null>(null);

  return (
    <div className="flex flex-col">
      <PageHeader 
        title="Our High-End Portfolio" 
        subtitle="Witness the master craftsmanship delivered across Florida's residential and commercial landmarks." 
      />

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Overlay Grid */}
        <div className="absolute inset-0 opacity-5 bg-grid-navy pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] mb-8 shadow-xl"
                onClick={() => setSelected(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 transform translate-y-6 group-hover:translate-y-0">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2 italic">{img.title}</h3>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-secondary">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-navy/95 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white p-4 hover:bg-white/10 rounded-full transition-all hover:scale-110"
              onClick={() => setSelected(null)}
            >
              <X className="w-12 h-12" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="max-w-6xl w-full max-h-[85vh] overflow-hidden rounded-[3rem] shadow-2xl relative border-8 border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selected.url} 
                alt={selected.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy via-navy/80 to-transparent p-12">
                <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs block mb-4">Project Spotlight</span>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase">{selected.title}</h3>
                <p className="inline-block mt-6 px-6 py-2 bg-primary text-white text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-full">
                  {selected.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
