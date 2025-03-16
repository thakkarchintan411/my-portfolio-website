import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "../data/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <time>{post.date}</time>
            <span>•</span>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-2 text-emerald-400">
            Read More
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;