import { motion } from "framer-motion";

const ProjectCard = ({ project, index, onClick }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group relative mb-4 md:mb-6"
        >
            <div 
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                min-h-[200px] sm:min-h-[220px] md:min-h-[250px] 
                p-4 sm:p-6 md:p-8
                flex flex-col"
            >
                {/* Gradient Overlay */}
                <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 
                    group-hover:opacity-0 transition-opacity duration-500" 
                />

                {/* Content Container */}
                <motion.div className="relative z-10 flex flex-col h-full">
                    {/* Title & Description */}
                    <div className="flex-1 space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                            {project.title}
                        </h3>
                        <p className="text-gray-300/90 line-clamp-3 text-sm sm:text-base leading-relaxed">
                            {project.description[0]}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-4 sm:mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClick}
                            className="w-full px-4 py-2.5 sm:py-3 
                            bg-gradient-to-r from-blue-600 to-violet-600 
                            hover:from-blue-500 hover:to-violet-500 
                            rounded-full font-medium text-sm sm:text-base
                            transition-colors duration-300 
                            shadow-lg shadow-blue-600/20
                            flex items-center justify-center gap-2"
                        >
                            Explore
                            <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                initial={{ x: 0 }}
                                animate={{ x: [0, 3, 0] }}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: Infinity,
                                    ease: "easeInOut" 
                                }}
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                />
                            </motion.svg>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;