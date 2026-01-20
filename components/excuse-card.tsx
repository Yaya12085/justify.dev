'use client';

import { Check, Copy, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface ExcuseCardProps {
  excuse: string;
  onRegenerate: () => void;
}

export function ExcuseCard({ excuse, onRegenerate }: ExcuseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(excuse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 border-t-2 border-neutral-800 pt-8">
      <div className="bg-[#111113] border border-neutral-800 p-6 relative">

        <div className="pl-8">
          <p className="font-mono text-base md:text-lg leading-relaxed text-neutral-200 selection:bg-neutral-700">
            <span className="text-green-400">&quot;{excuse}&quot;</span>;
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-6 pl-8">
          <Button
            onClick={onRegenerate}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-white transition-colors px-3 py-2"
          >
            <RotateCcw size={14} />
            Reroll
          </Button>
          <Button
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white transition-colors px-4 py-2 border border-neutral-700"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </div>
    </div>
  );
}
