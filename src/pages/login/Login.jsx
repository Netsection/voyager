import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, setCurrentUser } from "../../utils/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="dark">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleLogin}>
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" className="loginInput" type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" className="loginInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" type="submit">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}
