import { motion } from 'framer-motion';

// Import tech icons from react-icons
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostgresql
} from 'react-icons/si';

const FloatingElements = () => {
  // Tech stack icons with their colors
  const techIcons = [
    { Icon: SiMongodb, color: '#00ED64' },
    { Icon: SiExpress, color: '#FFFFFF' },
    { Icon: SiReact, color: '#61DAFB' },
    { Icon: SiNodedotjs, color: '#83CD29' },
    { Icon: SiTypescript, color: '#007ACC' },
    { Icon: SiGraphql, color: '#E535AB' },
    { Icon: SiRedux, color: '#764ABC' },
    { Icon: SiJavascript, color: '#F7DF1E' },
    { Icon: SiTailwindcss, color: '#38B2AC' },
    { Icon: SiGit, color: '#F05032' },
    { Icon: SiDocker, color: '#2496ED' },
    { Icon: SiPostgresql, color: '#336791' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Tech Icons */}
      {techIcons.map(({ Icon, color }, i) => (
        <motion.div
          key={`icon-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        >
          <Icon 
            className="w-8 h-8 md:w-12 md:h-12" 
            style={{ color }}
          />
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      {Array(6).fill(0).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: `radial-gradient(circle at center, ${
              i % 3 === 0 ? 'rgba(59, 130, 246, 0.15)' : 
              i % 3 === 1 ? 'rgba(139, 92, 246, 0.15)' : 
              'rgba(236, 72, 153, 0.15)'
            }, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      ))}

      {/* Code Symbols */}
      {/* {['{', '}', '(', ')', '[', ']', '<', '>'].map((symbol, i) => (
        <motion.div
          key={`symbol-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute text-2xl md:text-3xl font-mono text-blue-400/50
            filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        >
          {symbol}
        </motion.div>
      ))} */}

      {/* Binary Rain Effect */}
      {/* {Array(8).fill(0).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            y: [
              -100,
              window.innerHeight + 100,
            ],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5,
          }}
          className="absolute text-sm md:text-base font-mono text-blue-400/50
            filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {Math.random().toString(2).substr(2, 8)}
        </motion.div>
      ))} */}
    </div>
  );
};

export default FloatingElements;