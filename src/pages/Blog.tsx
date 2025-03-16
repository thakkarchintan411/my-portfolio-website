import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { blogPosts } from "../data/blog";
import { useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/404");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <header className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-emerald-400">
              <time>{post.date}</time>
              <span>•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-400/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">{post.title}</h1>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert prose-emerald max-w-none">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }:any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}

            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </Layout>
  );
};

export default Blog;