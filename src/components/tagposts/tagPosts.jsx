import React from "react";
import { useLocation } from "react-router-dom";
import Post from "../../post/Post";
import "./tagposts.css";

export default function TagPosts() {
  const location = useLocation();
  const tag = new URLSearchParams(location.search).get("tag").toLowerCase();

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  const filteredPosts = posts.filter((post) =>
    post.tags.toLowerCase().includes(tag)
  );

  return (
    <div className="tagPosts">
      <h1 className="taggedPosts">Posts tagged with "{tag}"</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            img={post.image}
            tags={post.tags}
            title={post.title}
            description={post.description}
          />
        ))
      ) : (
        <h1 className="noPosts">No posts found for this tag.</h1>
      )}
    </div>
  );
}
