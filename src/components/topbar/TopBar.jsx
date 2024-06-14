import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./topbar.css";
import { getCurrentUser, clearCurrentUser } from "../../utils/storage";

export default function Topbar() {
  const user = getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    } else {
      navigate("/");
    }
  };

  const handleTagClick = (tag) => {
    navigate(`/tags?tag=${tag}`);
  };

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const handleDestinationClick = (destination) => {
    setIsDropdownOpen(false);
    navigate(`/destination?place=${destination}`);
  };

  const handleCategoryClick = (category) => {
    setIsCategoriesDropdownOpen(false);
    navigate(`/category?name=${category}`);
  };

  const handleMoreClick = (page) => {
    setIsMoreDropdownOpen(false);
    navigate(`/${page}`);
  };

  const destinations = ["South America", "Australia", "Kenya", "South Africa"];
  const categories = ["Travel Tips", "Activities"];
  const moreOptions = ["bookmarks", "photos", "profile"];

  return (
    <div className="top">
      <div className="topContainer">
        <div className="left">
          <span className="topTitle">Voyager</span>
        </div>
        <div className="center">
          <ul className="topList">
            <li className="topMostListContainer">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topMostListContainer" onClick={toggleDropdown}>
              Destination <i className={`arrow ${isDropdownOpen ? "up" : "down"}`}></i>
              {isDropdownOpen && (
                <ul className="dropdownMenu">
                  {destinations.map((destination) => (
                    <li
                      key={destination}
                      className="dropdownItem"
                      onClick={() => handleDestinationClick(destination)}
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="topMostListContainer" onClick={toggleCategoriesDropdown}>
              Categories <i className={`arrow ${isCategoriesDropdownOpen ? "up" : "down"}`}></i>
              {isCategoriesDropdownOpen && (
                <ul className="dropdownMenu">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="dropdownItem"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="topMostListContainer">
              <Link className="link" to="/write">
                CREATE
              </Link>
            </li>
            <li className="topMostListContainer" onClick={toggleMoreDropdown}>
              More <i className={`arrow ${isMoreDropdownOpen ? "up" : "down"}`}></i>
              {isMoreDropdownOpen && (
                <ul className="dropdownMenu">
                  {moreOptions.map((option) => (
                    <li
                      key={option}
                      className="dropdownItem"
                      onClick={() => handleMoreClick(option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="right">
          <form className="Search" onSubmit={handleSearch}>
            <button type="submit" className="searchButton">
              <i className="topSearchIcon fas fa-search"></i>
            </button>
            <input
              className="searchInput"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
          </form>
          <div className="mainChatBot">
            <a className="topAnchor" href="https://travelblogpy-xu5up8uddabzke3il6uk8e.streamlit.app/">
              <i className="fa-solid fa-robot"></i>
            </a>
          </div>
          {user ? (
            <>
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src={user.profile || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                  alt="user"
                />
              </Link>
              <li className="topListItem logOut" onClick={handleLogout}>
                LOGOUT
              </li>
            </>
          ) : (
            currentPath !== "/login" &&
            currentPath !== "/register" && (
              <ul className="topList">
                <li className="topMostListContainer">
                  <Link className="loginLink" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topMostListContainer">
                  <Link className="registerLink" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
}
