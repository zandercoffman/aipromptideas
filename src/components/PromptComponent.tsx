/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { CardContent } from "@/components/ui/card"
import {motion} from 'framer-motion'

export default function PromptComponent(
    {
        card,
        setSelectedId
    }: {
        card: { icon: any, title: string, description: string },
        setSelectedId: Function
    }
) {
    return <>
        <motion.div 
        className="group border-3 cursor-pointer shadow-lg bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden"
        layoutId={card.title}
        onClick={() => setSelectedId(card.title)}>
            <CardContent className="p-6">
                <motion.div className="mb-4 "
                layoutId={card.title + `-icon`}>
                    <card.icon className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <motion.h2 layoutId={card.title + `-title`} className="text-2xl font-semibold  mb-2">{card.title}</motion.h2>
                <p className="">{card.description}</p>
            </CardContent>
        </motion.div>
    </>
}