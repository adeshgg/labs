import { Check, Send, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import Recording from './views/recording'
import Recorded from './views/recorded'
import Playing from './views/playing'
import { AnimatePresence, motion } from 'motion/react'

const Recorder = ({
  setPageView,
}: {
  setPageView: React.Dispatch<React.SetStateAction<'idle' | 'recorder'>>
}) => {
  const [view, setView] = useState<'playing' | 'recording' | 'recorded'>(
    'recording'
  )

  const [count, setCount] = useState(0)

  const content = useMemo(() => {
    switch (view) {
      case 'playing':
        return <Playing key={view} count={count} setView={setView} />
      case 'recording':
        return <Recording key={view} setCount={setCount} />
      case 'recorded':
        return <Recorded key={view} count={count} setView={setView} />
      default:
        return <Recording key={view} setCount={setCount} />
    }
  }, [view])

  return (
    <div className="flex items-center gap-4">
      <button
        className="border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full border px-4 py-4 shadow-xs"
        onClick={() => setPageView('idle')}
      >
        <X absoluteStrokeWidth className="h-8 w-8" />
      </button>
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
          transition={{
            duration: 0.2,
            type: 'spring',
            bounce: 0,
          }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.button
          key={view === 'recording' ? 'check' : 'send'}
          initial={{
            y: 10,
            opacity: 0,
            scale: 0.5,
            filter: 'blur(4px)',
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          exit={{
            y: -10,
            opacity: 0,
            scale: 0.5,
            filter: 'blur(4px)',
          }}
          transition={{
            duration: 0.3,
            type: 'spring',
            bounce: 0,
          }}
          className="border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full border px-4 py-4 shadow-xs"
          onClick={() => {
            if (view === 'recording') {
              setView('recorded')
            }
          }}
        >
          {view === 'recording' ? (
            <Check className="h-8 w-8" />
          ) : (
            <Send className="h-8 w-8" />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  )
}

export default Recorder
