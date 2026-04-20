import { motion } from 'motion/react';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80',
    date: 'Oct 15, 2024',
    author: 'Mark Rivera',
    title: 'Top 5 Roofing Materials for Florida Storms',
    excerpt: 'Discover which materials offer the best protection against high winds and salt air.'
  },
  {
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80',
    date: 'Sep 22, 2024',
    author: 'Elena Gomez',
    title: 'When to Repair vs. Replace Your Roof',
    excerpt: 'Learn the key signs that indicate you need a full replacement instead of just a patch.'
  },
  {
    image: 'https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?auto=format&fit=crop&q=80',
    date: 'Aug 05, 2024',
    author: 'James Smith',
    title: 'The Importance of Annual Roof Inspections',
    excerpt: 'Small issues can turn into massive repairs if left unchecked for too long.'
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-grid-navy opacity-5" />
       
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs block mb-4">Latest Insights</span>
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">
            News & <span className="text-primary italic">Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 bg-primary text-white p-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl">
                   Blog
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-6 mb-6 text-slate-400 font-bold uppercase text-[0.65rem] tracking-widest">
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {p.date}
                   </div>
                   <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      By {p.author}
                   </div>
                </div>
                <h3 className="text-2xl font-black text-navy mb-4 leading-tight group-hover:text-primary transition-colors tracking-tighter">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {p.excerpt}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-navy font-black uppercase tracking-widest text-[0.65rem] hover:text-secondary transition-colors group/link">
                  Read Full Article <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
