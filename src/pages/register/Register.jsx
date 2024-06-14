import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../../utils/storage";

export default function Register() {
  const [user, setUser] = useState({profile: "", username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getUsers();
    if (users.some(u => u.username === user.username)) {
      alert('Username already taken');
    } else {
      saveUsers([...users, user]);
      navigate("/login");
    }
  };

  return (
    <div className="register">
      <div className="dark">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Profile Picture</label>
          <input id="profile" className="registerInput" type="text" placeholder="profile url.." onChange={handleChange} />
          <label htmlFor="username">Username</label>
          <input id="username" className="registerInput" type="text" placeholder="FurryLover1" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input id="email" className="registerInput" type="email" placeholder="Enter your email..." onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input id="password" className="registerInput" type="password" placeholder="Enter your password..." onChange={handleChange} />
          <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Back To Log In</Link>
        </button>
      </div>
    </div>
  );
}
