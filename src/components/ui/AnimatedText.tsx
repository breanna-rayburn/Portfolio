'use client'

import { Variants, motion } from 'framer-motion'
import Typography from './Typography'

type TextVariants = 'h3' | 'p'

export default function AnimatedText({
  text,
  tag,
}: {
  text: string
  tag: TextVariants
}) {
  const MotionTypography = motion(Typography)

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

  return (
    <MotionTypography tag={tag} variants={characterAnimation}>
      {text}
    </MotionTypography>
  )
}
