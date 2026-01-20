'use client';

import { categories } from '@/lib/data/categories';
import type { Category } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface CategorySelectorProps {
  selected: Category | null;
  onSelect: (category: Category) => void;
}


export function CategorySelector({ selected, onSelect }: CategorySelectorProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map(cat => {
        const Icon = cat.icon;
        const isSelected = selected === cat.id;

        return (
          <Button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "bg-neutral-900 border-neutral-800 text-neutral-400",
              isSelected
              && "bg-white text-black"
            )}
          >
            <Icon size={20} className={cn(isSelected ? "stroke-[2.5px]" : "stroke-2")} />
            <span className="text-sm font-bold text-left">
              {cat.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
