"use client"

import { useState } from "react"
import { motion } from "motion/react"
import useSound from "use-sound"

const Dial = () => {
  const [view, setView] = useState<1 | 2>(1)

  const [play] = useSound("/sounds/dial.wav", {
    volume: 0.5,
  })

  const handleToggle = () => {
    const newView = view === 1 ? 2 : 1
    setView(newView)
    play()
  }
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <div
        className="relative h-56 w-56 cursor-pointer rounded-full shadow-lg"
        onClick={handleToggle}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-200">
          <motion.div
            animate={{ rotate: view === 1 ? "0deg" : "180deg" }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.8 }}
            className="absolute inset-9 rounded-full bg-white"
            style={{
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)",
            }}
          >
            <div
              className="relative h-4 w-4 rounded-full bg-orange-500"
              style={{
                top: "15%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dial
