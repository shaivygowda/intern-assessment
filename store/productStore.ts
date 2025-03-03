
import { create } from 'zustand'; 


interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
}

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  selectProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  selectedProduct: null,
  setProducts: (products) => set({ products }),
  selectProduct: (product) => set({ selectedProduct: product }),
}));
