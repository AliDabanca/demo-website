import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

export function Cart({ items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="text-orange-500" />
        <h2 className="text-xl font-semibold">Sepetim</h2>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Sepetiniz boş</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">{item.price.toFixed(2)} ₺</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border rounded">
                    <button
                      className="px-2 py-1 hover:bg-gray-100"
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 hover:bg-gray-100"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Toplam:</span>
              <span className="font-bold text-lg">{total.toFixed(2)} ₺</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Siparişi Tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
}