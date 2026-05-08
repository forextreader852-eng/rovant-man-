import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-brand-black pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-display font-black tracking-tighter uppercase italic">
            ROVANTE<span className="text-brand-accent not-italic">MAN</span>
          </Link>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-xs">
            Premium lifestyle accessories for the modern man. Crafting confidence through minimalist design and superior quality.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-accent transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/collections/watches" className="hover:text-white transition-colors">Smart Watches</Link></li>
            <li><Link to="/collections/rings" className="hover:text-white transition-colors">Premium Rings</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Affiliates</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Press</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-xs">Join the Elite</h4>
          <p className="text-sm text-gray-400">Subscribe for early access to limited drops and exclusive members-only deals.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="absolute right-2 top-1.5 p-1.5 bg-brand-accent rounded-full hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
        <p>© 2026 ROVANTE MAN. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
        </div>
      </div>
    </footer>
  );
};
