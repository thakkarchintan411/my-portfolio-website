import { motion } from 'framer-motion';
import { ChevronRight, Code, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      variants={backgroundVariants}
      animate="animate"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(76, 29, 149, 0.05) 0%, transparent 70%)',
        backgroundSize: '200% 200%'
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-500" />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${
              i === 0 ? 'rgba(59, 130, 246, 0.1)' : 
              i === 1 ? 'rgba(139, 92, 246, 0.1)' : 
              'rgba(236, 72, 153, 0.1)'
            }, transparent 70%)`,
            filter: 'blur(40px)',
            top: `${30 + i * 20}%`,
            left: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Name with floating icons */}
          <div className="relative">
            <motion.div
              className="absolute -right-16 top-0"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-12 h-12 text-blue-500/30" />
            </motion.div>
            
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 leading-tight">
              Smit
              <br />  
              Dudhat
            </h1>

            <motion.div
              className="absolute -left-16 bottom-0"
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-12 h-12 text-violet-500/30" />
            </motion.div>
          </div>

          {/* Description Card */}
          <motion.div 
            className="relative max-w-xl backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-2xl" />
            
            <div className="relative space-y-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Building digital experiences that break conventions and push boundaries.
              </p>

              <motion.div 
                whileHover={{ scale: 1.05, x: 10 }} 
                className="inline-block"
              >
                <a 
                  href="#work" 
                  className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">View Projects</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-500/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.section>
  );
};

export default Hero;