import React from 'react';
import { Plus } from 'lucide-react';

type MenuItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
};

export function MenuItem({ id, name, description, price, image, onAddToCart }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-orange-500">{price.toFixed(2)} ₺</span>
          <button
            onClick={() => onAddToCart(id)}
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}