import { Link } from 'react-router-dom';
import { Landmark, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-grid-white pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl rotate-3">
                <Landmark className="w-8 h-8 text-white -rotate-3" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black leading-none tracking-tighter text-white">FUR</span>
                <span className="text-[0.6rem] font-bold tracking-[0.3em] leading-none text-secondary">FLORIDA UNIVERSAL</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Florida's premier roofing contractor dedicated to excellence. We combine premium materials with master craftsmanship to protect your most valuable asset.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="flex flex-col gap-5">
              <li><Link to="/" className="text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block">About Our Company</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block">Professional Services</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block">Recent Projects</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-all hover:translate-x-1 inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="flex flex-col gap-5 text-white/60">
              <li className="hover:text-white transition-all cursor-pointer">Residential Roofing</li>
              <li className="hover:text-white transition-all cursor-pointer">Commercial Solutions</li>
              <li className="hover:text-white transition-all cursor-pointer">Storm Damage Repair</li>
              <li className="hover:text-white transition-all cursor-pointer">Maintenance Plans</li>
              <li className="hover:text-white transition-all cursor-pointer">Gutter Installation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-5 group">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-primary transition-colors h-fit">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold mb-1">Our Location</span>
                  <p className="text-white/60 text-sm">Orlando & Surrounding Florida Areas</p>
                </div>
              </li>
              <li className="flex gap-5 group">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-primary transition-colors h-fit">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold mb-1">Call Anytime</span>
                  <a href="tel:4073334444" className="text-secondary font-black text-xl hover:text-white transition-colors">
                    407-333-4444
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} Florida Universal Roofing INC. Built by Master Craftsmen.
          </p>
          <div className="flex items-center gap-10 text-[0.7rem] font-black uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
