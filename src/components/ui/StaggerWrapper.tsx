'use client'

import { motion } from 'framer-motion'

export default function StaggerWrapper({ children }: { children: any }) {
  const wrapperAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  }

  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      initial="hidden"
      variants={wrapperAnimation}
    >
      {children}
    </motion.div>
  )
}
