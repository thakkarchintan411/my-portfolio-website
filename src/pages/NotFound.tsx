import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-8"
                >
                    <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                        404
                    </h1>
                    <div className="space-y-4">
                        <p className="text-2xl font-semibold">Page Not Found</p>
                        <p className="text-gray-400">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        <span>Back to Home</span>
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
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </Layout>
    );
};

export default NotFound; 