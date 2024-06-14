import React, { useState, useEffect } from "react";
import "./write.css";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Write() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState({
    id: nanoid(),
    image: "",
    tags: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      // If there's an ID, we are editing an existing post
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      const existingPost = posts.find((post) => post.id === id);
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const confirmPublish = window.confirm("You are about to make this post public.Click to proceed.")
    if (post.image === "" || post.tags === "" || post.title === "" || post.description === "") {
      alert("Please fill in all fields.");
    } else {
      if (confirmPublish) {
        if (id) {
          // Editing an existing post
          const updatedPosts = posts.map((p) => (p.id === id ? post : p));
          localStorage.setItem("posts", JSON.stringify(updatedPosts));
          navigate("/");
        } else {
          // Creating a new post
          const newPost = { ...post, date: new Date().toISOString() };
          localStorage.setItem("posts", JSON.stringify([...posts, newPost]));
          navigate("/");
        }
      }
    }
    
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src={post.image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt="user"
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            id="image"
            name="image"
            className="writeInput"
            placeholder="Enter image URL"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            id="tags"
            name="tags"
            className="writeInput"
            placeholder="Enter tags"
            value={post.tags}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            id="title"
            name="title"
            className="writeInput"
            placeholder="Enter title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            id="description"
            name="description"
            className="writeInput writeText"
            placeholder="Write your post..."
            value={post.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        <div className="chatBot"><a className="anchor" href="https://travelblogpy-xu5up8uddabzke3il6uk8e.streamlit.app/"><i class="fa-solid fa-robot"></i></a></div>
      </form>
    </div>
  );
}
