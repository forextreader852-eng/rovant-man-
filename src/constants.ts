import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'arabic-aura-pro',
    name: 'Arabic Aura Luxury Smart Watch Pro',
    price: 299,
    category: 'watches',
    description: 'The ultimate blend of traditional elegance and modern technology. Featuring a custom Arabic numerical display and premium stainless steel finish.',
    images: [
      'https://images.unsplash.com/photo-1544117518-2985d758c383?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      'Premium 925 Silver Finish',
      'Custom Arabic Numerical Interface',
      'Advanced Fitness Tracking',
      'Sleep & Heart Monitoring',
      'IP68 Water Resistance'
    ],
    stock: 12,
    isNew: true
  },
  {
    id: 'stealth-black-pro',
    name: 'Stealth Black Smart Watch Pro',
    price: 279,
    category: 'watches',
    description: 'Minimalist, powerful, and bold. The Stealth Black edition is designed for the modern man who values discretion and performance.',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      'Matte Carbon Finish',
      'AMOLED Display',
      '7-Day Battery Life',
      'GPS Navigation',
      'Blood Oxygen Tracking'
    ],
    stock: 5,
    isNew: false
  },
  {
    id: 'minimalist-signet',
    name: 'Minimalist 925 Silver Signet Ring',
    price: 89,
    category: 'rings',
    description: 'A timeless piece crafted from solid 925 sterling silver. Brushed finish for a modern, understated look.',
    images: [
      'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      'Solid 925 Sterling Silver',
      'Brushed Industrial Texture',
      'Comfort-Fit Design',
      'Hypoallergenic',
      'Eco-Friendly Packaging'
    ],
    stock: 25,
    isNew: true
  },
  {
    id: 'celtic-knot-band',
    name: 'Modern Celtic Silver Band',
    price: 75,
    category: 'rings',
    description: 'Symbolizing strength and continuity. A modern take on a classic pattern, precision laser-engraved on silver.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3f41e?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      'Premium Sterling Silver',
      'Precision Engraving',
      'Low Profile Design',
      'Stackable Style',
      'Anti-Tarnish Finish'
    ],
    stock: 18,
    isNew: false
  }
];
