import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard1";
// import { testimonials } from "../data/testimonials";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blog";
import { Link } from "react-router-dom";

// Add this interface at the top of the file, after the imports
// interface BlogPost {
//   title: string;
//   date: string;
//   excerpt: string;
//   content: string;
//   image?: string;
//   tags?: string[];
// }

const Home = () => (
  <Layout>
    <motion.div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-[85vh] relative flex items-center justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-2xl text-neutral-400 uppercase tracking-wider">
                <span className="h-px w-16 bg-emerald-500"></span>
                Senior Software Engineer
                <span className="h-px w-16 bg-emerald-500"></span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight sm:leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Chintan
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                    Thakkar
                  </span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Senior Software Engineer with over 4 years of experience in building robust, scalable, and high-performance web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-6 justify-center mt-10"
              >
                <Link
                  to="/about"
                  className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative text-xl font-medium">About Me</span>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/thakkar-chintan/"
                  className="group px-8 py-4 sm:px-10 sm:py-5 rounded-full border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span className="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512">
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                  <span className="text-xl font-medium">LinkedIn</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
              Highlighted Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl">
              Innovative solutions across various domains, including Fintech, E-commerce, and Marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={project.title}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-lg text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What clients say about working together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: any) => (
              <motion.div
                key={testimonial.name}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* Latest Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thoughts and experiences on development, design, and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  </Layout>
);

export default Home;
