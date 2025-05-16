'use client'

import {
  AudioLines,
  BookMarked,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Headset,
  Image,
  MessageCircle,
  Pin,
} from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const iconsClasses = 'md:h-10 md:w-10 text-zinc-800'

const views = {
  1: [
    { id: 1, element: <Camera className={iconsClasses} /> },
    { id: 2, element: <MessageCircle className={iconsClasses} /> },
    { id: 3, element: <Pin className={iconsClasses} /> },
    { id: 4, element: <BookMarked className={iconsClasses} /> },
  ],

  2: [
    { id: 1, element: <Image className={iconsClasses} /> },
    { id: 2, element: <Clapperboard className={iconsClasses} /> },
    { id: 3, element: <Headset className={iconsClasses} /> },
    { id: 4, element: <AudioLines className={iconsClasses} /> },
  ],
}

const ExtentedToolbar = () => {
  const [view, setView] = useState<1 | 2>(1)

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="grid h-full place-items-center">
        <div className="bg-accent relative mx-10 overflow-hidden rounded-full px-8 py-4">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={view}
              initial={{
                x: view === 1 ? '-100%' : '100%',
                opacity: 0,
              }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{
                x: view === 1 ? '-100%' : '100%',
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0.2 }}
              className="flex items-center gap-10"
            >
              {view === 2 ? (
                <button
                  onClick={() => setView(1)}
                  className="-mr-4 cursor-pointer rounded-full bg-white p-2"
                >
                  <ChevronLeft className="text-zinc-900 md:h-8 md:w-8" />
                </button>
              ) : null}
              {views[view].map(icon => (
                <div key={icon.id}>{icon.element}</div>
              ))}
              {view === 1 ? (
                <button
                  onClick={() => setView(2)}
                  className="-ml-4 cursor-pointer rounded-full bg-white p-2"
                >
                  <ChevronRight className="text-zinc-900 md:h-8 md:w-8" />
                </button>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ExtentedToolbar
