import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";
import Layout from "../components/Layout";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  console.log(post);

  if (!post) return <div>Post not found</div>;

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="space-y-8">
          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

              {/* Title overlay on cover image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm mb-2 sm:mb-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-300">{post.readTime}</span>
                  <span className="text-gray-300">{post.date}</span>
                </div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
                  {post.title}
                </h1>
              </div>
            </div>
          )}

          {/* Author info */}
          <div className="flex items-center gap-4 py-4 border-t border-gray-800">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-gray-400">{post.author.role}</div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-xs leading-6 text-gray-300">
                      {section.content}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {section.content}
                    </h2>
                  );
                case "code":
                  return (
                    <pre
                      key={index}
                      className="bg-gray-800 p-4 rounded-lg overflow-x-auto"
                    >
                      <code className="text-sm">{section.content}</code>
                    </pre>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-300"
                    >
                      {section.content}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Related Posts */}
          {post.relatedPosts && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedId) => {
                  const relatedPost = blogPosts.find((p) => p.id === relatedId);
                  if (!relatedPost) return null;
                  return (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </Layout>
  );
};

export default BlogPost;
