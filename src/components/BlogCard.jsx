// src/components/BlogCard.jsx
import React from "react";

export default function BlogCard({ post, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={post.image} alt={post.title} className="card-img" />
      <h3 className="card-title">{post.title}</h3>
      <p className="card-body">{post.body.slice(0, 80)}...</p>
    </div>
  );
}
