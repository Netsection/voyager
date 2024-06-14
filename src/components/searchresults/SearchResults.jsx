import React from "react";
import Post from "../../post/Post";
import "./searchresults.css";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query").toLowerCase();
  
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.tags.toLowerCase().includes(query)
  );

  return (
    <div className="searchResults">
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
        <div className="noPost">
          <h1>No posts found</h1>
        </div>
      )}
    </div>
  );
}
