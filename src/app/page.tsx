"use client"

import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return <>
    <div className="size-full">
      <div className="w-1/2 mx-auto mt-14 items-start justify-start flex flex-col">
        <h1 className="scroll-m-20 text-2xl mb-4 font-extrabold tracking-tight lg:text-5xl">
          AI Prompt Ideas
        </h1>
        <AnimatedGradientText className="mr-auto">
          ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            aipromptideas.vercel.app
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>
    </div>
  </>
}