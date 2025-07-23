import React from "react";

export default function BlogModal({ post, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}