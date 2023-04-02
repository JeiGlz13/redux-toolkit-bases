import { useState } from 'react'
import { motion } from 'framer-motion';

export const TapButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.button
    className="button-tap"
    onClick={() => setIsOpen((prev) => !prev)}
    whileTap={{ scale: 0.95 }}
    animate={isOpen ? "open" : "closed"}
  >
    <h4
      style={{
        marginTop: 0,
        marginBottom: 0,
        marginRight: '0.5rem'
      }}
    >
      Tap animation
    </h4>
    <motion.div
      variants={{
        open: { rotate: 180 },
        closed: { rotate: 0 }
      }}
    >
      <svg width="15" height="15" viewBox="0 0 20 20">
        <path d="M0 7 L 20 7 L 10 16" fill="white" />
      </svg>
    </motion.div>
  </motion.button>
  )
}
