// import { motion } from 'framer-motion';

// const BackgroundGrid = () => {
//   return (
//     <div className="fixed inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] gap-[1px] opacity-20 z-0">
//       {Array(400).fill(0).map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0, 1, 0] }}
//           transition={{
//             duration: 2,
//             delay: i * 0.01,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="bg-gradient-to-r from-blue-500 to-violet-500"
//         />
//       ))}
//     </div>
//   );
// };

// export default BackgroundGrid;


import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundGrid = () => {
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setDocumentHeight(height);
    };

    // Initial height
    updateHeight();

    // Update height on resize and content changes
    window.addEventListener('resize', updateHeight);
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full" style={{ height: documentHeight }}>
      {/* Dark gradient background */}
      <div className="fixed inset-0 bg-[#0a0a0a]" />
      
      {/* Grid Pattern - Fixed */}
      <div 
        className="fixed inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Radial Gradients - These will follow scroll */}
      <div 
        className="sticky top-[20%] left-[50%] translate-x-[-50%] w-[800px] h-[500px]"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-500/30 to-violet-500/30 blur-[120px]" />
      </div>

      <div 
        className="sticky top-[60%] left-[50%] translate-x-[-50%] w-[600px] h-[500px]"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-violet-500/30 to-blue-500/30 blur-[120px]" />
      </div>

      {/* Moving Gradient Orbs */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="sticky opacity-20"
          style={{
            top: `${30 + i * 20}%`,
            left: `${20 + i * 25}%`,
            width: '600px',
            height: '600px',
            zIndex: 1
          }}
        >
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-violet-500/30 blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      ))}

      {/* Vignette Effect - Fixed */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
          zIndex: 2
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
