'use client'

import { motion, useCycle } from 'framer-motion'
import MenuToggle from './MenuToggle'
import CircularProgress from './CircularProgress'

export default function Nav() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      className="fixed right-0 top-0 h-[100px] w-[100px]"
    >
      <div className="relative">
        <CircularProgress />
        <MenuToggle toggle={toggleOpen} />
      </div>
      <div></div>
    </motion.nav>
  )
}
