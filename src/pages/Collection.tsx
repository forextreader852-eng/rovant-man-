import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Collection = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('popularity');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter products based on category route
  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category)
    : PRODUCTS;

  const title = category === 'watches' ? 'Smart Watches' : category === 'rings' ? 'Premium Rings' : 'All Collections';
  const subtitle = category === 'watches' 
    ? 'Performance tracking meets high-end luxury aesthetic.' 
    : category === 'rings' 
    ? 'Solid 925 sterling silver essentials for the modern man.' 
    : 'Elevate your entire presence with our lifestyle essentials.';

  const sortOptions = [
    { label: 'Popularity', value: 'popularity' },
    { label: 'Price: Low to High', value: 'low-high' },
    { label: 'Price: High to Low', value: 'high-low' },
    { label: 'Newest Arrivals', value: 'newest' },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-2xl space-y-4">
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-black">{title}</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase">{title}</h1>
        <p className="text-gray-500 max-w-lg leading-relaxed">{subtitle}</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 py-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest group">
            <SlidersHorizontal className="w-4 h-4 group-hover:text-brand-accent transition-colors" />
            <span>Filter</span>
          </button>
          <div className="h-4 w-px bg-gray-200 hidden md:block" />
          <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            {filteredProducts.length} Results
          </span>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest group"
          >
            <span className="text-gray-400 font-medium">Sort By:</span>
            <span>{sortOptions.find(o => o.value === sortBy)?.label}</span>
            <ChevronDown className={cn("w-4 h-4 transition-transform", isSortOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-4 w-56 bg-white shadow-2xl rounded-2xl border border-gray-100 z-30 p-2 overflow-hidden"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between",
                      sortBy === option.value ? "bg-gray-50 text-brand-accent font-black" : "hover:bg-gray-50"
                    )}
                  >
                    <span>{option.label}</span>
                    {sortBy === option.value && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Minimalist SEO text if bottom of page */}
      {filteredProducts.length > 0 && (
        <div className="pt-20 border-t border-gray-100 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-sm font-display font-bold uppercase tracking-[0.3em] text-gray-300">The Rovante Standard</h2>
          <p className="text-xs text-gray-400 leading-relaxed italic">
            Each piece in our collection is subject to a rigorous three-step quality assurance process. From the accuracy of our bio-sensors to the purity of our 925 sterling silver, we ensure that every Rovante Man product delivered to your door exceeds expectations.
          </p>
        </div>
      )}
    </div>
  );
};
