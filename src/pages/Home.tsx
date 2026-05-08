import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, ShieldCheck, Clock, Star, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row overflow-hidden border-b border-gray-100">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-brand-offwhite relative flex flex-col justify-center px-6 md:px-16 py-20"
        >
          <div className="space-y-8 max-w-xl">
            <div className="flex flex-col space-y-2">
              <span className="text-brand-accent font-black text-xs tracking-[0.2em] uppercase">Pro Series 2026</span>
              <div className="h-1 w-12 bg-brand-accent" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic">
              ARABIC <br />
              AURA <br />
              <span className="text-gray-300 not-italic">LUXURY.</span>
            </h1>
            
            <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed font-medium">
              Engineered for the modern man. A seamless blend of traditional Arabic aesthetics and high-performance fitness tracking.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/collections" 
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-accent transition-all transform active:scale-95 shadow-xl"
              >
                Shop the Collection
              </Link>
              <Link 
                to="/collections/watches" 
                className="border-2 border-black px-10 py-5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all transform active:scale-95"
              >
                Watch Film
              </Link>
            </div>

            <div className="pt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-tight">
                Trusted by <span className="text-black font-bold">14,000+</span> Modern Men
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Product Showcase */}
        <div className="w-full md:w-1/2 bg-gray-100 relative flex items-center justify-center py-20">
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-brand-accent" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center relative z-10"
          >
            <div className="w-48 h-48 md:w-72 md:h-72 bg-gray-50 rounded-full border-[10px] border-gray-100 flex flex-col items-center justify-center p-8 space-y-2">
              <span className="text-5xl md:text-7xl font-black text-brand-black tracking-tighter">09:42</span>
              <div className="h-1 w-8 bg-brand-accent rounded-full" />
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em]">Pulse Active</span>
            </div>
            
            {/* Minimalist floating stats */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl space-y-1 -rotate-12">
              <span className="text-[10px] font-black text-gray-400 uppercase">Recovery</span>
              <p className="text-xl font-black text-green-500 tracking-tighter">98%</p>
            </div>
          </motion.div>

          <div className="absolute bottom-10 right-10 text-right space-y-1">
            <h3 className="text-2xl font-black uppercase tracking-tighter italic">Aura Pro Series</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Starting at $299.00 USD</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px] space-x-12">
            <div className="flex items-center space-x-3 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
              <ShieldCheck className="w-5 h-5" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
              <Clock className="w-5 h-5" />
              <span>Fast Global Shipping</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
              <Target className="w-5 h-5" />
              <span>Precision Crafted</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
              <Star className="w-5 h-5" />
              <span>4.9/5 User Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em]">Our Favorites</span>
            <h2 className="text-4xl font-display font-bold">TRENDING NOW</h2>
          </div>
          <Link to="/collections" className="text-sm font-bold border-b-2 border-brand-black pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors uppercase tracking-widest">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="relative h-[600px] flex items-center group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1510766327425-999ddc1ef22e?auto=format&fit=crop&q=80&w=1920" 
          alt="Lifestyle"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center w-full space-y-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
            WHERE STYLE <br className="hidden md:block" /> MEETS STRENGTH.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">From the gym floor to the boardroom. Our accessories are built for the man who never stops.</p>
          <button className="bg-white text-brand-black px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-brand-accent hover:text-white transition-all uppercase tracking-widest">
            Explore Lifestyle
          </button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-brand-black text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center mx-auto md:mx-0 rotate-3 group-hover:rotate-6 transition-transform">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold tracking-tight">PREMIUM MATERIALS</h3>
            <p className="text-gray-400 leading-relaxed">We use only high-grade 925 sterling silver and medical-grade sensors in our smartwatches. Excellence is our only standard.</p>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
              <TrendingUp className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold tracking-tight">CRAFTED FOR PEAK</h3>
            <p className="text-gray-400 leading-relaxed">Our designs are inspired by the relentless drive of professional athletes and modern entrepreneurs. Performance is in our DNA.</p>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mx-auto md:mx-0 -rotate-3 hover:rotate-0 transition-transform border border-brand-accent/30">
              <Clock className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold tracking-tight">LIFETIME SUPPORT</h3>
            <p className="text-gray-400 leading-relaxed">When you buy Rovante, you join a brotherhood. 24/7 dedicated support and limited lifetime warranty on all jewelry.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/3">
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">TRUSTED BY 10,000+ MEN.</h2>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Excellent 4.9/5</p>
                <div className="flex space-x-1 mt-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-sm font-medium italic text-gray-700">"The Arabic Aura Pro is hands down the best looking smartwatch I have ever owned. It fits perfectly with my gym attire and my business suits."</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest">Malik R.</p>
                  <p className="text-[10px] text-gray-400">Verified Buyer • 2 weeks ago</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                <div className="flex space-x-1 text-yellow-400 fill-current">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3" />)}
                </div>
                <p className="text-sm font-medium italic text-gray-700">"Sterling silver rings that actually look premium. The signet ring has a nice weight to it. Customer service was incredibly fast."</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest">Jordan K.</p>
                  <p className="text-[10px] text-gray-400">Verified Buyer • 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
