import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Carousel = ({ fetchNewestPosts, fetchAllCategories, placeHolder, categoryPlaceHolder }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      try {
        const newestPosts = await fetchNewestPosts(); // assume it gives you newest posts
        setFeaturedPosts(newestPosts.data || []);

        const allCategories = await fetchAllCategories();
        setCategories(allCategories);
      } catch (error) {
        console.error('Error loading carousel data:', error);
      }
    };

    loadData();
  }, [fetchNewestPosts, fetchAllCategories]);

  return (
    <>
      {/* Feature + Categories Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">

        {/* Featured Articles Carousel */}
        <div className="col-span-2">

          {featuredPosts.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              className="h-80 rounded overflow-hidden"
            >
              {featuredPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <Link to={`/posts/${post.slug}`}>
                    <div
                      className="relative h-80 bg-cover bg-center"
                      style={{ backgroundImage: `url('${post.thumbnail || placeHolder}')` }}
                    >
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                        {post.category?.name || 'Uncategorized'}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white">
                        <p className="text-xs mb-1">{new Date(post.created_at).toLocaleDateString()}</p>
                        <h2 className="text-lg font-bold leading-tight">{post.title}</h2>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

              ))}
            </Swiper>
          ) : (
            <div className="h-80 flex items-center justify-center">Loading Featured Posts...</div>
          )}
        </div>

        {/* Categories */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Categories</h3>
            <Link to="/categories" className="text-xs text-gray-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-2">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  to={`/categories/${category.slug}/posts`}
                  key={category.id}
                  className="block"
                >
                  <div
                    className="relative h-20 bg-cover bg-center rounded overflow-hidden"
                    style={{ backgroundImage: `url('${category.image || categoryPlaceHolder}')` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">{category.name}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>Loading Categories...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
