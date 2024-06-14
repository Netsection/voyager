import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Homepage";
import Destination from './pages/destinations/destinations';
import Category from './pages/categories/categories';
import Bookmarks from './pages/bookmarks/bookmark';
import Photos from './pages/photos/photos';
import Profile from './pages/profile/profile';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Sidebar from "./components/sidebar/Sidebar";
import SearchResults from "./components/searchresults/SearchResults";
import TagPosts from "./components/tagposts/tagPosts";
import Contact from "./pages/contact us/contact";
import { getCurrentUser } from "./utils/storage";



function App() {
  const [currentUser, setCurrentUser] = React.useState(getCurrentUser());

  React.useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(getCurrentUser());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  /* const currentUser = false */

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/category" element={<Category />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Navigate to="/login" />} />
        <Route path="/write/:id" element={currentUser ? <Write /> : <Navigate to="/login" />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Navigate to="/login" />} />
        <Route path="/about" element={<Sidebar />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/tags" element={<TagPosts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
