import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaceHolder from '../assets/imgs/placeholder.jpg';

const NewsPage = ({ fetchPostBySlug , placeHolder={PlaceHolder} }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPostBySlug(slug);
      setPost(result);
      console.log(result);
    };
    fetchData();
  }, [ placeHolder ,fetchPostBySlug, slug]);


  if (!post) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden rounded-lg shadow">
        <img
          src={post.image || placeHolder}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category and Date */}
      <p className="text-sm text-gray-500">
        {post.category} • {new Date(post.created_at).toLocaleDateString()}
      </p>

      {post.sections && post.sections.length > 0 ? (
        post.sections
          .sort((a, b) => a.order - b.order) // sort sections by 'order' field
          .map((section) => (
            <div key={section.id} className="mb-8">
              {/* Subtitle */}
              {section.subtitle && (
                <h2 className="text-xl font-semibold mb-2">{section.subtitle}</h2>
              )}

              {/* Content */}
              {section.section_type === "text" && (
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}

              {/* Later you can add other section types: image, video, etc */}
            </div>
          ))
      ) : (
        <p>No content available.</p>
      )}
      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">

        </div>
      </div>

      {/* Leave a Comment */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
        <form className="space-y-4">
          <textarea
            className="w-full border rounded-lg p-3"
            placeholder="Write your comment..."
            rows="4"

          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsPage;