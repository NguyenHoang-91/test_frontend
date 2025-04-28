# React + Vite

Steps for someone who clones your project:

Clone the repository using git clone <repository-url>

Navigate into the frontend directory:
cd frontend

Install all dependencies listed in package.json by running:
npm install

On App.jsx make sure edit those api link follow your api host
const App = () => {
  // Fetch all posts
  const fetchNewestPosts = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/posts/newest');
    const data = await res.json();
    return data;
  };

  // Fetch single post by slug
  const fetchPostBySlug = async (slug) => {
    const res = await fetch(`[your API]/api/posts/${slug}`);
    const data = await res.json();
    return data;
  };

  // Fetch all categories
  const fetchAllCategories = async () => {
    const res = await fetch('[your API]/api/categories');
    const data = await res.json();
    return data;
  };

  // Fetch posts by category slug
  const fetchPostsByCategory = async (slug) => {
    const res = await fetch(`[your API]/api/categories/${slug}/posts`);
    const data = await res.json();
    return data;
  };

  // Fetch newest posts by category slug
  const fetchNewestPostsByCategory = async (slug) => {
    const res = await fetch(`[your API]/api/categories/${slug}/newest/posts`);
    const data = await res.json();
    return data;
  };
