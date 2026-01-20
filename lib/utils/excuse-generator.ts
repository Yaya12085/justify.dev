// ============================================
// FILE: lib/utils/excuse-generator.ts
// ============================================
import {
  blamables,
  excuses_corporate,
  excuses_honest,
  problems,
  techStack,
  verbs
} from '../data/excuse-parts';
import type { Category, Tone } from '../types';

const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper to mix specific tech stacks for variety
const getTechNoun = () => {
  const allTech = [...techStack.frontend, ...techStack.backend, ...techStack.devops, ...techStack.legacy];
  return random(allTech);
};

export const generateDynamicExcuse = (category: Category, tone: Tone): string => {

  // 1. CORPORATE (Buzzword Salad)
  // ---------------------------------------------------------
  if (tone === 'corporate') {
    const templates = [
      `We need to circle back on the ${getTechNoun()} to ensure full ${random(excuses_corporate)}.`,
      `The delay is due to a strategic realignment of our ${random(excuses_corporate)} regarding the ${getTechNoun()}.`,
      `We are currently optimizing the ${getTechNoun()} to maximize ${random(excuses_corporate)} for the stakeholders.`,
      `To ensure scalability, we are doing a deep dive into the ${getTechNoun()} architecture before moving the needle.`,
      `This isn't a delay; it's an opportunity to create synergy between the ${getTechNoun()} and our ${random(excuses_corporate)}.`
    ];
    return random(templates);
  }

  // 2. TECHNICAL (Jargon Heavy)
  // ---------------------------------------------------------
  if (tone === 'technical') {
    // We categorize technical excuses to make them sound coherent
    const scenarios = [
      // Scenario A: Dependency Hell
      `The latest update to ${random(techStack.devops)} caused a ${random(problems)} in the ${random(techStack.backend)}.`,
      // Scenario B: Asynchronous Nightmares
      `We're seeing a non-deterministic ${random(problems)} when the ${random(techStack.frontend)} talks to the ${random(techStack.backend)}.`,
      // Scenario C: Legacy Debt
      `Refactoring the ${random(techStack.legacy)} triggered a cascade of ${random(problems)}s in production.`,
      // Scenario D: Infrastructure
      `The ${random(techStack.devops)} is hitting a hard limit, causing ${random(problems)} during peak load.`,
      // Scenario E: Specific
      `I'm currently ${random(verbs)} the ${getTechNoun()} because of an issue with ${random(blamables)}.`
    ];
    return random(scenarios);
  }

  // 3. HONEST (The painful truth)
  // ---------------------------------------------------------
  if (tone === 'honest') {
    const mixedHonesty = [
      ...excuses_honest,
      `I tried to fix a small bug and accidentally rewrote the entire ${random(techStack.backend)}.`,
      `I'm waiting for ${random(blamables)} to reply to my ticket.`,
      `Honestly, I just didn't understand the requirement for the ${getTechNoun()}.`,
      `I was looking at the wrong JIRA ticket.`,
      `It works on my machine.`
    ];

    // Category specific overrides for extra realism
    if (category === 'deadline') {
      mixedHonesty.push("I underestimated the complexity by about 400%.");
      mixedHonesty.push("I spent the whole sprint setting up the linter.");
    }
    if (category === 'reply') {
      mixedHonesty.push("I saw the notification, dismissed it, and immediately forgot.");
      mixedHonesty.push("I was too scared to open the chat.");
    }

    return random(mixedHonesty);
  }

  // 4. BLUNT (Short & Dismissive)
  // ---------------------------------------------------------
  if (tone === 'blunt') {
    const bluntExcuses = [
      "It's broken.",
      "Not my code, not my problem.",
      "Ask the other guy.",
      "It'll be done when it's done.",
      `Blame ${random(blamables)}.`,
      "Read the docs.",
      "I'm blocked.",
      "Creating technical debt."
    ];

    if (category === 'bug') return "It's a feature, not a bug.";
    if (category === 'deadline') return "Two weeks.";

    return random(bluntExcuses);
  }

  return "Compiling excuse...";
};
