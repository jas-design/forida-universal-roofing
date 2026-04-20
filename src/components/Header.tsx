import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Landmark } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className={cn(
        "hidden lg:block w-full py-2 transition-all duration-300 relative z-[60]",
        isScrolled ? "-translate-y-full opacity-0" : "bg-navy text-white/80"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span>Licensed & Insured Florida Contractor</span>
            <span>Serving Central Florida & The Coast</span>
          </div>
          <div className="flex gap-6">
            <a href="mailto:info@floridauniversalroofing.com" className="hover:text-secondary transition-colors">info@floridauniversalroofing.com</a>
            <span>Mon - Sat: 8am - 6pm</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'fixed left-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'top-0 bg-white shadow-xl py-3'
            : 'top-8 bg-transparent py-2 lg:top-10'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={cn(
            "flex items-center justify-between px-6 py-2 rounded-full transition-all duration-300",
            !isScrolled && "bg-white/5 backdrop-blur-md border border-white/10"
          )}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl rotate-3 group-hover:rotate-0 transition-transform">
                <Landmark className="w-8 h-8 text-white -rotate-3 group-hover:rotate-0 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-2xl font-black leading-none tracking-tighter",
                  isScrolled ? "text-navy" : "text-white"
                )}>
                  FUR
                </span>
                <span className={cn(
                  "text-[0.65rem] font-black tracking-[0.3em] leading-none uppercase",
                  isScrolled ? "text-primary" : "text-secondary"
                )}>
                  Florida Universal
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-[0.75rem] font-black uppercase tracking-[0.15em] transition-all hover:text-secondary relative group",
                    location.pathname === link.path
                      ? "text-secondary"
                      : isScrolled ? "text-navy/80" : "text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full",
                    location.pathname === link.path && "w-full"
                  )} />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="tel:4073334444"
                className={cn(
                  "flex items-center gap-3 font-black",
                  isScrolled ? "text-navy" : "text-white"
                )}
              >
                <div className="bg-secondary p-2.5 rounded-xl shadow-lg shadow-secondary/20">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-widest opacity-60">Call Us Today</span>
                  <span className="text-sm leading-none">407-333-4444</span>
                </div>
              </a>
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-[0.7rem] hover:bg-navy transition-all shadow-xl shadow-primary/20 hover:shadow-navy/20"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className={cn(
                "w-8 h-6 flex flex-col justify-between",
                isScrolled ? "text-navy" : "text-white"
              )}>
                <span className={cn("w-full h-1 bg-current rounded-full transition-transform", isMenuOpen && "rotate-45 translate-y-2.5")} />
                <span className={cn("w-full h-1 bg-current rounded-full transition-opacity", isMenuOpen && "opacity-0")} />
                <span className={cn("w-full h-1 bg-current rounded-full transition-transform", isMenuOpen && "-rotate-45 -translate-y-2.5")} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 z-[100] lg:hidden bg-navy p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black text-white">FUR</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-white">
                  <X className="w-10 h-10" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-4xl font-black uppercase tracking-tighter",
                      location.pathname === link.path ? "text-secondary" : "text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto space-y-10">
                <a
                  href="tel:4073334444"
                  className="flex items-center gap-6 text-3xl font-black text-white"
                >
                  <div className="bg-secondary p-5 rounded-2xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  407-333-4444
                </a>
                <Link
                  to="/contact"
                  className="block bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-widest text-center text-xl shadow-2xl shadow-primary/40"
                >
                  Schedule Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
