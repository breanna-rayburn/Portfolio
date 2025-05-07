'use client'

import { Variants, motion } from 'framer-motion'
import Typography from './Typography'

type TitleVarients = 'h1' | 'h2'

export default function AnimatedTitle({
  text,
  tag,
}: {
  text: string
  tag: TitleVarients
}) {
  const MotionTypography = motion(Typography)

  const wordAnimation: Variants = {
    hidden: {},
    visible: {},
  }

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
    <MotionTypography aria-label={text} variants={wordAnimation} tag={tag}>
      {text.split(/(\s+)/).map((word, i) => {
        {
          return word.trim() ? (
            <motion.span
              key={i}
              aria-hidden="true"
              variants={wordAnimation}
              transition={{
                delayChildren: i * 0.25,
                staggerChildren: 0.05,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split('').map((character, i) => {
                return (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    variants={characterAnimation}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                )
              })}
            </motion.span>
          ) : (
            <span key={i} className="inline" aria-hidden="true">
              {' '}
            </span>
          )
        }
      })}
    </MotionTypography>
  )
}
