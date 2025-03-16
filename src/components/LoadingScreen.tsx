import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-[#000000] flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name with gradient */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 space-y-2"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              style={{
                background: "linear-gradient(to right, #4475F2, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Smit
            </motion.h1>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              style={{
                background: "linear-gradient(to right, #7C3AED, #9333EA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Dudhat
            </motion.h1>
          </motion.div>

          {/* Loading Bar */}
          <motion.div 
            className="w-48 md:w-64 h-1.5 mx-auto bg-[#1a1a1a] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.7,
              }}
              // onAnimationComplete={onComplete}
            />
          </motion.div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${
                  i % 2 === 0 ? '#4475F2' : '#7C3AED'
                }, transparent)`,
                filter: 'blur(1px)'
              }}
              initial={{ 
                x: Math.random() * window.innerWidth - window.innerWidth/2,
                y: Math.random() * window.innerHeight - window.innerHeight/2,
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * window.innerWidth - window.innerWidth/2,
                y: Math.random() * window.innerHeight - window.innerHeight/2,
                opacity: [0, 0.7, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;