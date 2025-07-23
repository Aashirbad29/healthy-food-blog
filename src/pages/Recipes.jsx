import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";
import BlogModal from "../components/BlogModal";
import titleImage from "../assets/title.jpg";

export default function Home() {
  const { posts, loading, error, setSearch } = useContext(BlogContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <img src={titleImage} alt="Healthy Recipes" className="title-image" />
      <h1 className="title">Healthy Food Recipes</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        className="search"
        onChange={handleSearch}
      />

      <div className="grid">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "page active" : "page"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
}
