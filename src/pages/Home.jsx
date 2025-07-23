import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import BlogModal from "../components/BlogModal";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const { posts, loading, error } = useContext(BlogContext);
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  // Pick first 3 as popular examples
  const popularPosts = posts.slice(0, 3);

  return (
    <PageWrapper>
      <section className="hero-section">
        <div className="hero-text">
          <h1><span className="highlight">Fresh</span> & tasty salads</h1>
          <p>Relax please, we’ve got you covered every day of the week</p>
          <button className="hero-button" onClick={() => navigate("/recipes")}>
            Discover recipes
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={posts[0]?.image || "/assets/Avocado.png"}
            alt={posts[0]?.title || "Healthy Dish"}
            className="hero-image"
          />
        </div>
      </section>

      <section className="popular-section container">
        <h2>Popular recipes</h2>

        {loading ? (
          <p className="loader">Loading recipes...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="grid">
            {popularPosts.map((post) => (
              <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
            ))}
          </div>
        )}

        {selectedPost && (
          <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </section>
    </PageWrapper>
  );
}
