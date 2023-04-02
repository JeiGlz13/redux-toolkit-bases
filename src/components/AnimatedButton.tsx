import { motion } from 'framer-motion';

type Props = {
  label: string,
  action:  () => void,
}

export const AnimatedButton = ({
  label,
  action,
}: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
        }
      }}
      onClick={action}
    >
      {label}
    </motion.button>
  )
}
