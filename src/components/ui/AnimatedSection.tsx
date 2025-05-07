'use client'

import { Variants, motion } from 'framer-motion'

export default function AnimatedSection({ children }: { children: any }) {
  const characterAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return <motion.div variants={characterAnimation}>{children}</motion.div>
}
