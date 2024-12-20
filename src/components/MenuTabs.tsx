import React from 'react';
import { Menu } from 'lucide-react';

type Tab = {
  id: string;
  name: string;
};

const tabs: Tab[] = [
  { id: 'main', name: 'Ana Yemekler' },
  { id: 'appetizers', name: 'Başlangıçlar' },
  { id: 'soups', name: 'Çorbalar' },
  { id: 'desserts', name: 'Tatlılar' },
  { id: 'drinks', name: 'İçecekler' },
];

type MenuTabsProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function MenuTabs({ activeTab, onTabChange }: MenuTabsProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-2 p-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}