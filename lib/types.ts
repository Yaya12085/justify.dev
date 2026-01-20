import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Category = 'deadline' | 'bug' | 'reply' | 'feature';
export type Tone = 'corporate' | 'technical' | 'honest' | 'blunt';

export interface Excuse {
  category: Category;
  tone: Tone;
  text: string;
}

export interface ExcuseTemplate {
  category: Category;
  tone: Tone;
  templates: string[];
}

export type Tones = {
  id: Tone;
  label: string;
};

export type Categories = {
  id: Category;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};
