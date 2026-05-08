export type Category = 'watches' | 'rings';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  features: string[];
  stock: number;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
