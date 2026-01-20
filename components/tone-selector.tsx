'use client';

import { tones } from '@/lib/data/tones';
import type { Tone } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ToneSelectorProps {
  selected: Tone;
  onSelect: (tone: Tone) => void;
}

export function ToneSelector({ selected, onSelect }: ToneSelectorProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tones.map(tone => {
        const isSelected = selected === tone.id;
        return (
          <Button
            key={tone.id}
            onClick={() => onSelect(tone.id)}
            className={cn(
              "bg-neutral-900 border-neutral-800 text-neutral-400",
              isSelected
              && "bg-white text-black"
            )}
          >
            {tone.label}
          </Button>
        )
      })}
    </div>
  );
}
