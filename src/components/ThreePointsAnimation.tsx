import { motion } from 'framer-motion'

export const ThreePointsAnimation = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        animate={{ rotate: [0, 360, 360, 0], scale: [1, 2, 1, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white', marginRight: '10px' }}
      />
      <motion.div
        animate={{ rotate: [0, 0, 360, 360], scale: [1, 1, 2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.2 }}
        style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white', marginRight: '10px' }}
      />
      <motion.div
        animate={{ rotate: [0, 360, 0, 0], scale: [1, 1, 1, 2] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.4 }}
        style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white' }}
      />
    </div>
  )
}
