
import { Bug, Clock, MessageSquare, Rocket } from 'lucide-react';
import { Categories } from '../types';

export const categories: Categories[] = [
  { id: 'deadline', label: 'Missed deadline', icon: Clock },
  { id: 'bug', label: 'Bug in production', icon: Bug },
  { id: 'reply', label: "Didn't reply", icon: MessageSquare },
  { id: 'feature', label: 'Feature delayed', icon: Rocket },
];
