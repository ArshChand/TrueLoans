import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Import motion and AnimatePresence

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1500));
    const dataFetch = client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    Promise.all([minLoadingTime, dataFetch]).then(([, response]) => {
      if (response.items.length > 0) {
        setPost(response.items[0]);
      }
      setIsLoading(false);
    }).catch(console.error);
  }, [slug]);

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="flex justify-center items-center h-[70vh]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-500">The first paper money was created in China over 1,000 years ago.</p>
          </motion.div>
        ) : !post ? (
          <motion.div key="not-found" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-xl text-center text-red-500">Post not found.</p>
            <div className="text-center mt-4">
              <Link to="/knowledge-center" className="text-[#005A9C] font-semibold hover:underline">
                ← Back to Knowledge Center
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {post.fields.featuredImage && (
              <img src={`https:${post.fields.featuredImage.fields.file.url}`} alt={post.fields.title} className="w-full h-96 object-cover rounded-lg mb-8" />
            )}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.fields.title}</h1>
            {/* You may need to add @tailwindcss/typography for better styling */}
            <div className="prose lg:prose-xl max-w-none">
              {documentToReactComponents(post.fields.content)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPost;