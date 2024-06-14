import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { getUsers, saveUsers, getCurrentUser, setCurrentUser, clearCurrentUser } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const currentUser = getCurrentUser();
  const [user, setUser] = useState(currentUser);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const confirmUpdate = window.confirm("Are you sure you want to update your profile?")
    if (confirmUpdate) {
      const updatedUsers = getUsers().map(u => u.email === user.email ? user : u);
      saveUsers(updatedUsers);
      setCurrentUser(user);
      navigate("/");
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete your profile?");
    if (confirmDelete) {
      const remainingUsers = getUsers().filter(u => u.email !== user.email);
      saveUsers(remainingUsers);
      clearCurrentUser();
      navigate("/");
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleUpdate}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user.profile || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt="profile"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              placeholder="image url..."
              type="text"
              className="settingsPPInput"
              onChange={(e) => setUser({ ...user, profile: e.target.value })}
            />
          </div>
          <label htmlFor="username">Username</label>
          <input 
            className="Inputs" 
            id="username" 
            type="text" 
            value={user.username} 
            name="name" 
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input 
            className="Inputs" 
            id="email" 
            type="email" 
            value={user.email} 
            name="email" 
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input 
            className="Inputs" 
            id="password" 
            type="text" 
            value={user.password} 
            name="password" 
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
