import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { cartCount, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Smart Watches', path: '/collections/watches' },
    { name: 'Rings', path: '/collections/rings' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-100 py-4' : 'bg-white/50 border-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">
        <Link to="/" className="text-[37px] leading-[121px] font-display font-bold border border-transparent border-solid tracking-tighter uppercase text-brand-black text-center decoration-none">
          ROVANTE<span className="text-brand-accent">MAN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-accent border-b-2 pb-1',
                location.pathname === link.path ? 'border-brand-accent text-brand-black' : 'border-transparent text-gray-500'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-display font-bold">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium border-b border-gray-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <button className="w-full bg-brand-black text-white py-4 rounded-full font-medium">Log In</button>
              <p className="text-center text-sm text-gray-500">Need help? Contact support</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
