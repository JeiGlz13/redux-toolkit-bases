import { useState } from 'react'
import { motion } from 'framer-motion'

export const ExpandLayout = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => { setIsOpen(!isOpen) }}
    >
      <motion.div layout className="child" />
    </motion.div>
  )
}
