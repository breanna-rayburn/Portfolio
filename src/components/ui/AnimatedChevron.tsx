'use client'

import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

export default function AnimatedChevron({ href }: { href: string }) {
  const chevronAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: `-1em`,
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
    <motion.div
      className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center "
      variants={chevronAnimation}
    >
      <motion.a
        href={href}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Image
          className=""
          src="/imgs/icons/chevronDown.svg"
          alt="Jump To"
          height={50}
          width={50}
        />
      </motion.a>
    </motion.div>
  )
}
