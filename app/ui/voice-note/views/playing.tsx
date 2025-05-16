import { Square } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const Playing = ({
  count: initialCount,
  setView,
}: {
  count: number
  setView: Dispatch<SetStateAction<'playing' | 'recording' | 'recorded'>>
}) => {
  const [localCount, setLocalCount] = useState(initialCount)

  useEffect(() => {
    const id = setInterval(() => {
      setLocalCount(c => {
        return c - 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    // Let the zero animate in
    if (localCount < 0) {
      setView('recorded')
    }
  }, [localCount, setView])

  const countArray = localCount.toString().padStart(2, '0').split('')

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={'playing'}
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
        <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full border px-4 py-4 shadow-xs">
          <div className="flex items-center gap-2 text-red-500">
            <Square fill="currentColor" className="h-6 w-6" />
            <div className="text-xl font-bold tabular-nums">
              <AnimatePresence initial={false} mode="popLayout">
                {countArray.map((num, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: '12px', filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: '0px', filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: '-12px', filter: 'blur(4px)' }}
                    transition={{
                      type: 'spring',
                      bounce: 0.35,
                    }}
                    className="inline-block tabular-nums"
                    key={num + index}
                  >
                    {num}
                  </motion.div>
                ))}
              </AnimatePresence>
              s
            </div>
          </div>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Playing
