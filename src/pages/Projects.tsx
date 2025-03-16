import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Layout from "../components/Layout";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard1";
import { Project } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of projects I've worked on, showcasing my expertise in building scalable web applications and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                  onClick={() => setSelectedProject(null)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-4 z-50 md:inset-8"
                >
                  <div className="h-full w-full">
                    <div className="relative h-full bg-gray-900/95 rounded-2xl overflow-hidden flex flex-col">
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute right-6 top-6 text-gray-400 hover:text-white z-10 bg-gray-800/50 p-2 rounded-full backdrop-blur-sm"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>

                      {/* Project Content */}
                      <div className="grid md:grid-cols-2 h-full">
                        {/* Left Side - Image */}
                        <div className="relative h-full">
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
                        </div>

                        {/* Right Side - Content */}
                        <div className="p-8 md:p-12 flex flex-col">
                          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            {selectedProject.title}
                          </h2>

                          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {selectedProject.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Project Links */}
                          <div className="flex gap-4 mt-auto">
                            {selectedProject.demo && (
                              <a
                                href={selectedProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
                              >
                                <span>View Live</span>
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            )}
                            {selectedProject.github && (
                              <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
                              >
                                <span>View Code</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="mailto:chintanthakkar.work@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span className="text-lg font-medium">Get in Touch</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Projects;
