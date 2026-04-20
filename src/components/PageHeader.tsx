import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80' 
}: PageHeaderProps) {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt={title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      {/* Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/20 -skew-x-[30deg] translate-x-1/2 translate-y-1/2" />
         <div className="absolute top-0 left-0 w-64 h-full bg-grid-white opacity-5" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl border-l-[12px] border-primary pl-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs block mb-4">Florida Universal Roofing</span>
            <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-[0.9]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-8 text-xl text-white/70 max-w-2xl font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
