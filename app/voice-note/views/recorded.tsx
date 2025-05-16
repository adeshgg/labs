import { Play } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Recorded = ({
  count,
  setView,
}: {
  count: number
  setView: Dispatch<SetStateAction<'playing' | 'recording' | 'recorded'>>
}) => {
  const paddedCount = count.toString().padStart(2, '0')

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={'recorded'}
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
        transition={{
          duration: 0.2,
          type: 'spring',
          bounce: 0,
        }}
      >
        <button
          className="border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full border px-4 py-4 shadow-xs"
          onClick={() => setView('playing')}
        >
          <div className="flex items-center gap-2">
            <Play fill="#000" className="h-6 w-6" />
            <div className="text-xl font-bold">{paddedCount}s</div>
          </div>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Recorded
