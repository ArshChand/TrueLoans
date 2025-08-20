import React, { useState, useEffect } from 'react';
import { client } from '../contentfulClient';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Import motion and AnimatePresence

const KnowledgeCenter = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // <-- Renamed for clarity

  useEffect(() => {
    // We want the loader to show for at least 1 second
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1000));
    const dataFetch = client.getEntries({ content_type: 'blogPost' });

    // Wait for both the minimum time and the data to be fetched
    Promise.all([minLoadingTime, dataFetch]).then(([, response]) => {
      setPosts(response.items);
      setIsLoading(false);
    }).catch(console.error);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* AnimatePresence handles the exit animation of the loader */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Loader Component
            <motion.div
              key="loader"
              className="flex justify-center items-center h-[50vh]"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-500">A home loan is often the only debt that makes you wealthier in the long run — since the house value usually appreciates.</p>
            </motion.div>
          ) : (
            // Content Component
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Knowledge Center</h1>
                <p className="text-gray-600 mt-2">Tips and insights to help you on your financial journey.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.sys.id} to={`/knowledge-center/${post.fields.slug}`} className="block">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full">
                      {post.fields.featuredImage && (
                        <img src={`https:${post.fields.featuredImage.fields.file.url}`} alt={post.fields.title} className="w-full h-48 object-cover" />
                      )}
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.fields.title}</h2>
                        <p className="text-[#005A9C] font-semibold">Read More →</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KnowledgeCenter;