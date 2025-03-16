import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { blogPosts } from "../data/blog";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="block bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors duration-300"
                            >
                                <div className="grid md:grid-cols-[2fr,3fr] gap-6 p-6">
                                    {/* Image Section */}
                                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col justify-between py-2">
                                        <div className="space-y-4">
                                            {/* Tags and Date */}
                                            <div className="flex items-center gap-3 text-sm">
                                                <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full">
                                                    {post.tags[0]}
                                                </span>
                                                <span className="text-gray-400">{post.date}</span>
                                                <span className="text-gray-400">•</span>
                                                <span className="text-gray-400">30 min read</span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-400 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        {/* Author Section */}
                                        <div className="flex items-center gap-3 mt-6">
                                            <img
                                                src="/profile.jpg"
                                                alt="Author"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <div className="font-medium">Chintan Thakkar</div>
                                                <div className="text-sm text-gray-400">Senior Software Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </Layout>
    );
};

export default Blogs; 