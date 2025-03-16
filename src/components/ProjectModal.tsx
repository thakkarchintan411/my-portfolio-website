import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-8 w-full max-w-4xl my-4 mt-4 sm:my-8
                   border border-gray-800 shadow-xl"
      >
        <div className="flex justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              {project.title}
            </h3>
            {/* <p className="text-sm sm:text-base text-gray-400">{project.company} • {project.duration}</p> */}
            <p className="text-sm sm:text-base text-gray-400">{project.duration}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {project.description.map((desc: any, i: any) => (
            <p key={i} className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {desc}
            </p>
          ))}
          <div className="pt-4">
            <h4 className="text-lg sm:text-xl font-bold mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(":")[1].split(",").map((tech: any, i: any) => (
                <span key={i} className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gradient-to-r 
                                      from-blue-500/20 to-violet-500/20 rounded-full text-blue-400">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
