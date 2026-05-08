import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Star, 
  Minus, 
  Plus, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Share2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-2xl font-display font-bold">Product not found.</h1>
        <Link to="/collections" className="bg-brand-black text-white px-8 py-4 rounded-full font-bold">BACK TO SHOP</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const sizes = product.category === 'rings' ? ['7', '8', '9', '10', '11', '12'] : ['Standard One Size'];

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-8 md:mb-12">
          <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/collections/${product.category}`} className="hover:text-brand-accent transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden relative group">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.images.length > 1 && (
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setActiveImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 transition-all",
                      activeImage === idx ? "border-brand-accent shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em]">{product.category} COLLECTION</span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Share2 className="w-4 h-4" /></button>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase leading-[0.9]">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-display font-bold">${product.price}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-bold">4.9</span>
                  <span className="text-xs text-gray-400">(124 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <p className="text-gray-500 leading-relaxed text-sm">
                {product.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    <Check className="w-3 h-3 text-brand-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selection */}
            <div className="space-y-6 py-8 border-y border-gray-100">
              {/* Size Selector */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">Select Size</span>
                  <button className="text-[10px] font-bold underline text-gray-400 uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-6 py-3 rounded-full text-xs font-bold border transition-all uppercase tracking-widest",
                        selectedSize === size 
                          ? "bg-brand-black text-white border-brand-black shadow-lg" 
                          : "bg-white text-gray-400 border-gray-200 hover:border-brand-black hover:text-brand-black"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 border rounded-full px-4 py-2 bg-gray-50">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-1 hover:text-brand-accent transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-1 hover:text-brand-accent transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">
                  {product.stock < 10 ? (
                    <span className="text-red-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse" />
                      Only {product.stock} left in stock
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                      Available to ship immediately
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-brand-black text-white py-5 rounded-full font-bold flex items-center justify-center space-x-3 group hover:bg-brand-accent transition-all transform active:scale-95"
                >
                  <span className="tracking-widest">ADD TO BAG</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full bg-white border-2 border-brand-black text-brand-black py-5 rounded-full font-bold tracking-widest hover:bg-black hover:text-white transition-all transform active:scale-95">
                  BUY IT NOW
                </button>
              </div>
            </div>

            {/* Trust Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl space-y-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-bold uppercase tracking-widest leading-tight">Secure <br /> Checkout</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl space-y-2">
                <Truck className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-bold uppercase tracking-widest leading-tight">Fast Free <br /> Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl space-y-2">
                <RotateCcw className="w-5 h-5 text-brand-accent" />
                <span className="text-[9px] font-bold uppercase tracking-widest leading-tight">30-Day <br /> Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-display font-bold mb-12 tracking-tighter uppercase">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Mobile Add Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-40 md:hidden flex space-x-4 items-center animate-in slide-in-from-bottom duration-500">
        <div className="flex-1">
          <p className="text-[10px] font-black uppercase text-gray-400">Total Price</p>
          <span className="text-xl font-display font-bold">${product.price * quantity}</span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="flex-[2] bg-brand-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center"
        >
          <span>QUICK ADD</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};
