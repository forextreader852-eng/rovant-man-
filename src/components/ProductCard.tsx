import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden mb-4">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            NEW ARRIVAL
          </span>
        )}
        
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2">
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-white text-brand-black p-3 rounded-full flex items-center justify-center space-x-2 shadow-lg hover:bg-brand-black hover:text-white transition-all font-bold text-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>QUICK ADD</span>
          </button>
          <button className="bg-white text-brand-black p-3 rounded-full shadow-lg hover:bg-brand-accent hover:text-white transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-1 px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-black uppercase tracking-tight group-hover:text-brand-accent transition-colors line-clamp-1 italic">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xl font-black italic tracking-tighter">${product.price}</span>
          <div className="flex items-center space-x-1 text-gray-400">
            <Star className="w-3 h-3 fill-current text-yellow-400" />
            <span className="text-[10px] font-bold">4.9</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Add Button - visible only on mobile */}
      <button 
        onClick={() => addToCart(product)}
        className="md:hidden mt-4 w-full border border-brand-black/10 py-3 rounded-full text-xs font-bold active:bg-brand-black active:text-white transition-colors"
      >
        ADD TO BAG
      </button>
    </motion.div>
  );
};
