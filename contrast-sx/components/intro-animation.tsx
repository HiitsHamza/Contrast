"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function IntroAnimation() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Set a timeout to complete the animation
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 3000) // 3 seconds for the full animation

    return () => clearTimeout(timer)
  }, [])

  // Hide the animation overlay once complete
  if (animationComplete) {
    return null
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f9fc] dark:bg-matteblack transition-colors duration-300"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-16 w-16 bg-black dark:bg-white rounded-full"
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-16 w-16 bg-deepblue-600 rounded-full absolute top-0 left-0 mix-blend-difference"
            />
          </div>
        </motion.div>

        {/* Text animation */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-4xl font-bold text-black dark:text-white"
        >
          Contrast
        </motion.h1>

        {/* Tagline animation */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="text-gray-600 dark:text-gray-300 mt-2"
        >
          Find your perfect style match
        </motion.p>

        {/* Loading dots */}
        <div className="flex space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1.2 + i * 0.2,
                repeatDelay: 0.5,
              }}
              className="h-2 w-2 rounded-full bg-deepblue-600"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
