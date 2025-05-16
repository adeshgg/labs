'use client'

import { Mic } from 'lucide-react'
import React, { useMemo, useState } from 'react'
import Recorder from './recorder'
import { AnimatePresence, motion } from 'motion/react'

const VoiceNote = () => {
  const [view, setView] = useState<'idle' | 'recorder'>('idle')

  const content = useMemo(() => {
    switch (view) {
      case 'idle':
        return <IdleView setView={setView} />
      case 'recorder':
        return <Recorder setPageView={setView} />
      default:
        return <IdleView setView={setView} />
    }
  }, [view])

  return (
    <div className="flex h-dvh justify-center items-center gap-4">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={view}
          initial={{
            opacity: 0,
            scale: 0.5,
            filter: 'blur(4px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            filter: 'blur(4px)',
          }}
          className="flex h-full items-center justify-center"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default VoiceNote

const IdleView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<'idle' | 'recorder'>>
}) => {
  return (
    <button
      className="border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full border px-4 py-4 shadow-xs"
      onClick={() => {
        setView('recorder')
      }}
    >
      <Mic className="h-8 w-8" />
    </button>
  )
}
