import React from "react";
import "./post.css";
import { Link } from "react-router-dom";


export default function Post({ id, img, tags, title, description }) {
  // Split tags by comma or space
  const tagArray = tags.split(/[, ]+/);

  return (
    <div className="post">
      <Link to={`/post/${id}`} className="link">
        <img className="postImg" src={img} alt="posts" />
        <div className="postInfo">
          <div className="postCats">
            {tagArray.map((tag, index) => (
              <span key={index} className="postCat">
                {tag}
              </span>
            ))}
          </div>
          <span className="postTitle">{title}</span>
          <hr />
          <span className="postDate">{new Date().toLocaleString()}</span>
        </div>
        <p className="postDesc">{description}</p>
      </Link>
    </div>
  );
}
