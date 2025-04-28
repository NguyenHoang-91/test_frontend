import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import MediumNewsHolder from './newsHolder/MediumNewsHolder';
import PlaceHolder from '../assets/imgs/placeholder.jpg'

const Topic = ({ fetchNewestPostsByCategory, fetchAllCategories }) => {
    const [categoryPosts, setCategoryPosts] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                // Step 1: Fetch all categories
                const temp = await fetchAllCategories();
                const selectedCategories = temp.slice(0, 4);
                // console.log("Selected Categories:", selectedCategories);
                // Step 2: For each category, fetch newest posts
                const postsPromises = selectedCategories.map(async (category) => {
                    const postsData = await fetchNewestPostsByCategory(category.slug);
                    return { category, posts: postsData.data };
                });

                const categoriesWithPosts = await Promise.all(postsPromises);
                setCategoryPosts(categoriesWithPosts);
            } catch (error) {
                console.error('Error loading categories and posts:', error);
            }
        };

        loadData();
    }, [fetchAllCategories, fetchNewestPostsByCategory]);

    return (
        <section className="px-4 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryPosts.map(({ category, posts }, index) => (
                <div key={index} className="space-y-4 bg-white rounded-lg shadow p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">{category.name}</h2>
                        <div className="flex gap-2">
                            <button className={`swiper-button-prev-custom-${index} w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm`}>
                                ‹
                            </button>
                            <button className={`swiper-button-next-custom-${index} w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm`}>
                                ›
                            </button>
                        </div>
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation={{
                            prevEl: `.swiper-button-prev-custom-${index}`,
                            nextEl: `.swiper-button-next-custom-${index}`,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <Link to={`/posts/${post.slug}`}>
                                    <MediumNewsHolder category={category} post={post} PlaceHolder={PlaceHolder} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </section>
    );
};

export default Topic;
