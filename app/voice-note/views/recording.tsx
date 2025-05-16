import { motion } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect } from 'react'

const waves = Array(5)
  .fill(null)
  .map((_, i) => ({ duration: 1 + i * 0.1 }))

function Recording({
  setCount,
}: {
  setCount: Dispatch<SetStateAction<number>>
}) {
  const strokeWidth = 7
  const buttonWidth = 108
  const buttonHeight = 64
  const parentPadding = 16

  const svgWidth = buttonWidth + strokeWidth
  const svgHeight = buttonHeight + strokeWidth
  const svgTop = parentPadding - strokeWidth / 2
  const svgLeft = parentPadding - strokeWidth / 2

  const pathInset = strokeWidth / 2
  const pillCurveRadius = buttonHeight / 2

  const CR_pt_x = svgWidth - pathInset
  const CR_pt_y = svgHeight / 2

  const BR_pt_x = svgWidth - pathInset - pillCurveRadius
  const BR_pt_y = svgHeight - pathInset

  const BL_pt_x = pathInset + pillCurveRadius
  const BL_pt_y = svgHeight - pathInset

  const TL_pt_x = pathInset + pillCurveRadius
  const TL_pt_y = pathInset

  const TR_pt_x = svgWidth - pathInset - pillCurveRadius
  const TR_pt_y = pathInset

  const pathD = `
    M ${CR_pt_x} ${CR_pt_y}
    A ${pillCurveRadius} ${pillCurveRadius} 0 0 1 ${BR_pt_x} ${BR_pt_y}
    L ${BL_pt_x} ${BL_pt_y}
    A ${pillCurveRadius} ${pillCurveRadius} 0 0 1 ${TL_pt_x} ${TL_pt_y}
    L ${TR_pt_x} ${TR_pt_y}
    A ${pillCurveRadius} ${pillCurveRadius} 0 0 1 ${CR_pt_x} ${CR_pt_y}
    Z
  `
    .replace(/\s+/g, ' ')
    .trim()

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => {
        return c + 1
      })
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="relative p-4">
      <button
        className="relative z-10 flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-red-100 px-8 py-4 shadow-xs"
        style={{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }}
      >
        <motion.div
          style={{ skewX: '-20deg', inset: '0' }}
          initial={{ x: -100 }}
          animate={{ x: 200 }}
          transition={{
            type: 'tween',
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute w-1/5 rounded-full bg-zinc-50/50"
        ></motion.div>
        <div
          className={`z-10 flex h-8 w-[${
            buttonWidth - 2 * 32
          }px] items-center justify-center gap-1`}
        >
          {' '}
          {waves.map((wave, i) => (
            <motion.div
              className="w-[5.5px] rounded-full bg-red-500"
              animate={{
                height: ['6px', '32px', '6px'],
              }}
              transition={{
                duration: wave.duration,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: i * 0.05,
              }}
              key={i}
            ></motion.div>
          ))}
        </div>
      </button>
      <svg
        className="pointer-events-none absolute text-red-500"
        style={{
          top: `${svgTop}px`,
          left: `${svgLeft}px`,
          width: `${svgWidth}px`,
          height: `${svgHeight}px`,
        }}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d={pathD}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              delay: 0.1,
              type: 'tween',
              duration: 10,
              ease: 'easeInOut',
            },
            opacity: { delay: 0.1, duration: 0.01 },
          }}
        />
      </svg>
      <div className="absolute inset-3 rounded-full bg-red-500/20"></div>
    </div>
  )
}

export default Recording
