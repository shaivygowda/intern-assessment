
import { useRouter } from 'next/router';
import { useProductStore } from '../../store/productStore';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { selectedProduct } = useProductStore();
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <button onClick={() => router.back()} className="mb-4 flex items-center text-yellow-500">
        <ArrowLeft className="w-6 h-6" /> Back
      </button>
      <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{selectedProduct.title}</h1>
      <div className="flex items-center">
        <Star className="text-yellow-500 w-6 h-6" /> <span className="ml-1">{selectedProduct.rating}</span>
      </div>
      <p className="mt-2">{selectedProduct.description}</p>
      <div className="flex items-center mt-4">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 bg-gray-800 rounded"><Minus /></button>
        <span className="mx-4">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="p-2 bg-gray-800 rounded"><Plus /></button>
      </div>
      <p className="text-xl font-bold mt-4">${selectedProduct.price}</p>
      <button className="w-full bg-yellow-500 text-black font-bold p-3 mt-4 rounded-lg">Add to Cart</button>
    </div>
  );
}
