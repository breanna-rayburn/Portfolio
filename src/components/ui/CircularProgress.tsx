'use client'

import { motion, useScroll } from 'framer-motion'

export default function CircularProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        stroke="none"
        strokeWidth="3%"
        fill="white"
        opacity="0.5"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        stroke="black"
        strokeWidth="3%"
        transform={`rotate(-90 50 50)`}
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  )
}
