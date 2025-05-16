'use client'

import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const DELAY = 0.05
const DURATION = 0.2

const Copy = () => {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [revealed])

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="border-input flex min-w-1/5 items-center justify-between gap-8 rounded-md border p-4 shadow-sm">
        <div className="relative flex gap-2 overflow-hidden text-xl">
          <div>4485</div>
          <AnimatePresence mode="popLayout" initial={false}>
            {revealed ? (
              <motion.div key={'copy'} className="flex gap-2">
                <div className="flex">
                  {[1, 9, 9, 6].map((v, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: -10,
                        filter: 'blur(2px)',
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{ opacity: 0, scale: 0.5, filter: 'blur(2px)' }}
                      transition={{
                        delay: i * DELAY,
                        duration: DURATION,
                        // type: 'spring',
                        ease: 'easeInOut',
                      }}
                      key={i}
                    >
                      {v}
                    </motion.div>
                  ))}
                </div>
                <div className="flex">
                  {[2, 0, 5, 7].map((v, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: -10,
                        filter: 'blur(2px)',
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{ opacity: 0, scale: 0.5, filter: 'blur(2px)' }}
                      transition={{
                        delay: i * DELAY,
                        duration: DURATION,
                        ease: 'easeInOut',
                        // type: 'spring',
                      }}
                      key={i}
                    >
                      {v}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div className="flex gap-2" key={'reveal'}>
                <div className="flex">
                  {['x', 'x', 'x', 'x'].map((v, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: -10,
                        filter: 'blur(2px)',
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{ opacity: 0, scale: 0.5, filter: 'blur(2px)' }}
                      transition={{
                        delay: i * DELAY,
                        duration: DURATION,
                        ease: 'easeInOut',
                        // type: 'spring',
                      }}
                      key={i}
                    >
                      {v}
                    </motion.div>
                  ))}
                </div>
                <div className="flex">
                  {['x', 'x', 'x', 'x'].map((v, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: -10,
                        filter: 'blur(2px)',
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: 'blur(0px)',
                      }}
                      exit={{ opacity: 0, scale: 0.5, filter: 'blur(2px)' }}
                      transition={{
                        delay: i * DELAY,
                        duration: DURATION,
                        ease: 'easeInOut',
                        // type: 'spring',
                      }}
                      key={i}
                    >
                      {v}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>7516</div>
          {revealed && (
            <motion.div
              key={revealed ? 'copy' : 'reveal'}
              initial={{ x: '-100%' }}
              animate={{ x: '300%' }}
              transition={{
                type: 'tween',
                duration: 2,
                ease: 'easeInOut',
              }}
              className="absolute h-full w-2/5"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 40%, transparent 60%)',
                filter: 'blur(8px)',
              }}
            ></motion.div>
          )}
        </div>
        <div>
          <AnimatePresence mode="popLayout" initial={false}>
            {revealed ? (
              <motion.div
                key={'copy'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="h-8 w-8 rounded-sm bg-green-600/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  overflow={'visible'}
                  viewBox="186.834 126.713 97.762 96.572"
                  className="h-full w-full"
                >
                  <motion.path
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: 0 }}
                    transition={{ duration: 3, delay: 0.5 }}
                    d="M 186.834 137.444 C 186.834 131.52 191.701 126.713 197.697 126.713 L 273.733 126.713 C 279.736 126.713 284.596 131.52 284.596 137.444 L 284.596 212.554 C 284.596 218.484 279.736 223.285 273.733 223.285 L 197.697 223.285 C 191.701 223.285 186.834 218.484 186.834 212.554 L 186.834 137.444 Z"
                    style={{
                      fill: 'none',
                      stroke: 'oklch(62.7% 0.194 149.214)',
                      strokeWidth: '5px',
                    }}
                  ></motion.path>
                  <path
                    d="M 256.578 158.739 C 261.729 158.739 265.903 162.947 265.903 168.138 L 265.903 196.335 C 265.903 201.527 261.729 205.734 256.578 205.734 L 228.605 205.734 C 223.458 205.734 219.281 201.527 219.281 196.335 L 219.281 168.138 C 219.281 162.947 223.458 158.739 228.605 158.739 L 256.578 158.739 Z"
                    style={{
                      strokeWidth: '1px',
                      fill: 'oklch(62.7% 0.194 149.214)',
                    }}
                  ></path>
                  <path
                    d="M 241.038 143.075 C 246.188 143.075 250.362 147.282 250.362 152.471 L 228.605 152.474 C 220.024 152.474 213.064 159.489 213.064 168.138 L 213.062 190.068 L 212.517 190.053 C 207.591 189.762 203.74 185.649 203.74 180.67 L 203.74 152.474 C 203.74 147.282 207.918 143.075 213.064 143.075 L 241.038 143.075 Z"
                    style={{
                      strokeWidth: '1px',
                      fill: 'oklch(62.7% 0.194 149.214)',
                    }}
                  ></path>
                </svg>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                key={'reveal'}
                onClick={handleReveal}
                className="cursor-pointer rounded-lg bg-blue-800/20 px-1.5 py-1"
              >
                <Eye className="text-blue-800" height={24} width={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Copy
