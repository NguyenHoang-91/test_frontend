import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TitleHolder from '../components/TitleHolder';
import SmallNewsHolder from '../components/newsHolder/SmallNewsHolder';
import MediumNewsHolder from '../components/newsHolder/MediumNewsHolder';
import AdBanner from '../components/AdBanner';
import Pagination from '../components/Pagination';
import PlaceHolder from '../assets/imgs/placeholder.jpg';

const CategoryPage = ({ fetchPostsByCategory, fetchNewestPostsByCategory }) => {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const [newestPosts, setNewestPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch newest posts for MediumNewsHolder
      const temp = await fetchNewestPostsByCategory(slug);
      const newest = temp;
      setNewestPosts(newest.data);
      console.log("Fetched Posts:", newest);
      // Fetch posts for SmallNewsHolder with pagination
      const result = await fetchPostsByCategory(slug, currentPage);
      setPosts(result.data);
      setTotalPages(result.last_page);

    };
    fetchData();
  }, [slug, currentPage, fetchPostsByCategory, fetchNewestPostsByCategory]);

  return (
    <>
      <TitleHolder title='' />

      {/* MediumNewsHolder with 4 posts */}
      {newestPosts.map(post => (
        <MediumNewsHolder post={post} PlaceHolder={PlaceHolder} />
      ))}
      <AdBanner />

      {/* SmallNewsHolder with paginated posts */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <SmallNewsHolder key={post.id} post={post} PlaceHolder={PlaceHolder} />
        ))}
      </section>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default CategoryPage;