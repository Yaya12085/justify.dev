'use client';

import { CategorySelector } from '@/components/category-selector';
import { ExcuseCard } from '@/components/excuse-card';
import Footer from '@/components/footer';
import { ToneSelector } from '@/components/tone-selector';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/data/categories';
import { tones } from '@/lib/data/tones';
import { generateDynamicExcuse } from '@/lib/utils/excuse-generator';
import { parseAsStringLiteral, useQueryState } from 'nuqs';
import { useState } from 'react';

export default function JustifyDev() {

  const categoriesArr = categories.map((category) => category.id);
  const tonesArr = tones.map((tone) => tone.id);

  const [category, setCategory] = useQueryState("category", parseAsStringLiteral(categoriesArr).withDefault("deadline"));
  const [tone, setTone] = useQueryState("tone", parseAsStringLiteral(tonesArr).withDefault("corporate"));

  const [currentExcuse, setCurrentExcuse] = useState<string | null>(null);

  const generateExcuse = () => {
    if (!category) return;
    const excuse = generateDynamicExcuse(category, tone);
    setCurrentExcuse(excuse);
  };

  return (
    // Solid background with a subtle technical dot pattern
    <div className="min-h-screen bg-[#09090b] text-neutral-50 selection:bg-white selection:text-black">
      {/* CSS Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px] pointer-events-none" />

      <div className="relative container max-w-2xl mx-auto px-6 py-20 flex flex-col min-h-screen">
        <div className="flex-1 space-y-12">

          <div className="space-y-6">

            <div className="space-y-2">
              <h1 className="text-6xl font-black tracking-tight text-white">
                justify.dev
              </h1>
              <p className="text-neutral-400 text-xl font-medium">
                Professional excuses for developers.
              </p>
            </div>
          </div>

          {/* Main Form */}
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                1. Select Trigger
              </label>
              <CategorySelector selected={category} onSelect={setCategory} />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                2. Select Persona
              </label>
              <ToneSelector selected={tone} onSelect={setTone} />
            </div>

            <div className="pt-4">
              <Button
                onClick={generateExcuse}
                disabled={!category}
                className="w-full rounded-none text-base font-bold bg-white text-black"
              >
                GENERATE OUTPUT
              </Button>
            </div>
          </div>

          {/* Result */}
          {currentExcuse && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-200">
              <ExcuseCard excuse={currentExcuse} onRegenerate={generateExcuse} />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div >
  );
}
