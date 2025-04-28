import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import CategoryPage from './pages/CategoryPage';
import NewsPage from './pages/NewsPage';


const App = () => {
  // Fetch all posts
  const fetchNewestPosts = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/posts/newest');
    const data = await res.json();
    return data;
  };

  // Fetch single post by slug
  const fetchPostBySlug = async (slug) => {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${slug}`);
    const data = await res.json();
    return data;
  };

  // Fetch all categories
  const fetchAllCategories = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/categories');
    const data = await res.json();
    return data;
  };

  // Fetch posts by category slug
  const fetchPostsByCategory = async (slug) => {
    const res = await fetch(`http://127.0.0.1:8000/api/categories/${slug}/posts`);
    const data = await res.json();
    return data;
  };

  // Fetch newest posts by category slug
  const fetchNewestPostsByCategory = async (slug) => {
    const res = await fetch(`http://127.0.0.1:8000/api/categories/${slug}/newest/posts`);
    const data = await res.json();
    return data;
  };

  // Fetch posts by tag slug
  // const fetchPostsByTag = async (slug) => {
  //   const res = await fetch(`/api/tags/${slug}/posts`);
  //   const data = await res.json();
  //   return data;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          element={
            <HomePage
              fetchAllCategories={fetchAllCategories}
              fetchNewestPostsByCategory={fetchNewestPostsByCategory}
              fetchNewestPosts={fetchNewestPosts}
            />
          }
        />
        <Route path='/' element={<MainLayout />}>
          {/* Posts */}
          <Route
            path='/posts/:slug'
            element={<NewsPage fetchPostBySlug={fetchPostBySlug} />}
          />

          {/* Categories */}
          <Route
            path='/categories'
            element={<CategoryPage fetchAllCategories={fetchAllCategories} />}
          />
          <Route
            path='/categories/:slug/posts'
            element={<CategoryPage fetchPostsByCategory={fetchPostsByCategory} fetchNewestPostsByCategory={fetchNewestPostsByCategory} />}
          />
          <Route
            path='/categories/:slug/newest/posts'
            element={<CategoryPage fetchNewestPostsByCategory={fetchNewestPostsByCategory} />}
          />

          {/* Tags */}
          {/* <Route
          path='/tags/:slug/posts'
          element={<TagPostsPage fetchPostsByTag={fetchPostsByTag} />}
        /> */}

          {/* Not Found */}
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Route>
      </Route>

    )
  );

  return (
    < RouterProvider router={router} />
  );
};

export default App