import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Featured = ({ fetchNewestPosts, placeHolder }) => {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const temp = await fetchNewestPosts();
                const newestPosts = temp.data.slice(0, 4);

                setFeaturedPosts(newestPosts || []);
            } catch (error) {
                console.error('Error loading carousel data:', error);
            }
        };

        loadData();
    }, [fetchNewestPosts, placeHolder]);
    return (
        <>
            {/* Feature Section */}
            <section className="px-4 pt-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Featured</h2>
                    <a href="#" className="text-sm text-gray-600 hover:underline">View All</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredPosts.length > 0 ? (
                        featuredPosts.map((post) => (
                            <Link to={`/posts/${post.slug}`} key={post.id}>
                                <div
                                    className="relative h-60 bg-cover bg-center rounded overflow-hidden"
                                    style={{ backgroundImage: `url('${post.thumbnail || placeHolder}')` }}
                                >
                                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                                        {post.category?.name || 'Uncategorized'}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-white">
                                        <p className="text-xs mb-1">{new Date(post.created_at).toLocaleDateString()}</p>
                                        <h3 className="text-base font-bold">{post.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="h-80 flex items-center justify-center">Loading Featured Posts...</div>
                    )}
                </div>
            </section>

        </>
    )
}

export default Featured