"use client"

import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
import { cn } from "@/lib/utils"
import { ChevronRight, Copy, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cards } from "../../public/Cards"
import PromptComponent from "@/components/PromptComponent"
import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function HomePage() {

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = useMemo(() => cards.find((card) => card.title == selectedId), [selectedId]);

  return <>
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-[90vw] lg:w-[60vw] mx-auto mt-14 items-start justify-start flex flex-col">
        <ScrollArea className="h-screen w-full pr-2">
          <h1 className="scroll-m-20 text-2xl mb-4 font-extrabold tracking-tight lg:text-5xl">
            AI Prompt Ideas
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2 mb-2">
            Enjoy a fully filled database of pre-made prompts to be used.
          </p>
          <div onClick={() => navigator.clipboard.writeText("https://aipromptideas.vercel.app/")} className="cursor-copy">
            <AnimatedGradientText className="mr-auto">
              ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline cursor-pointer animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                aipromptideas.vercel.app
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
          <div className="w-full h-max grid px-2 gap-5 grid-cols-1 md:grid-cols-2">
            {cards.map((card, index) => (
              <PromptComponent key={index} card={card} setSelectedId={setSelectedId} />
            ))}
          </div>
        </ScrollArea>

        <AnimatePresence>
          {
            (selectedId && selectedItem) && <motion.div layoutId={selectedItem.title} className="backdrop-blur-md absolute p-10 lg:px-28 lg:py-12 bottom-0 left-0 right-0 top-0">
              <motion.div className="w-full flex flex-col lg:flex-row gap-2">
                <motion.div className="w-full lg:w-1/2 flex flex-col items-center md:items-start">
                  <motion.div layoutId={selectedItem.title + "-icon"}>
                    <selectedItem.icon className="size-16 transform group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <motion.h2 layoutId={selectedItem.title + "-title"} className="text-2xl font-extrabold">{selectedItem.title}</motion.h2>
                  <motion.div>{selectedItem.question}</motion.div>
                  <motion.button onClick={() => setSelectedId(null)} className="absolute flex items-center font-semibold justify-center flex-row top-0 left-0 mt-2 ml-2">
                    <X className="size-8" /> <span>Exit</span>
                  </motion.button>
                </motion.div>
                <motion.div className="w-full lg:w-1/2">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Generated Prompt</h2>
                    <Textarea
                      className="min-h-[200px]"
                      placeholder="Your generated prompt will appear here..."
                      readOnly
                    />
                    <Button className="w-full">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Prompt
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>

    </div>

  </>
}