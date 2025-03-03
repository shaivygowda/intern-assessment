
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useProductStore } from '../store/productStore';
import { Star } from 'lucide-react';

export default function Home() {
  const { products, setProducts, selectProduct } = useProductStore();
  const router = useRouter();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 4))); // Display only first 4 products
  }, [setProducts]);

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-gray-900 rounded-lg cursor-pointer" onClick={() => {
            selectProduct(product);
            router.push(`/products/${product.id}`);
          }}>
            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded" />
            <h2 className="mt-2 font-semibold">{product.title}</h2>
            <div className="flex items-center">
              <Star className="text-yellow-500 w-4 h-4" /> <span className="ml-1">{product.rating}</span>
            </div>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
