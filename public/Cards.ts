import { Brain, Heart, Sparkles, Lightbulb, Feather, Zap } from 'lucide-react'

export const cards: CardType[] = [
    { icon: Brain, title: "Prompt Maker", description: "Create engaging AI prompts", question: "Need to ask a specific prompt but unsure how to phrase it?" },
    { icon: Heart, title: "Inspiration Hub", description: "Find your next big idea", question: "" },
    { icon: Sparkles, title: "Creative Boost", description: "Enhance your creative process", question: "" },
    { icon: Lightbulb, title: "Idea Generator", description: "Spark innovative concepts", question: "" },
    { icon: Feather, title: "Story Crafter", description: "Craft compelling narratives", question: "" },
    { icon: Zap, title: "Quick Thinker", description: "Rapid ideation tool", question: "" },
  ]

export type CardType = {
    icon: typeof Brain,
    title: string,
    description: string,
    question: string,
}