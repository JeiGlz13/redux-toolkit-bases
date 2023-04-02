import { motion } from 'framer-motion';

export const LinearAnimation = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barVariants = {
    start: {
      width: "0%",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "linear",
      },
    },
    end: {
      width: "100%",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      style={{ display: "flex", marginBottom: '1rem', justifyContent: "center", alignItems: "center" }}
    >
      <motion.div
        variants={barVariants}
        style={{ height: "5px", backgroundColor: "white" }}
      />
    </motion.div>
  )
}
