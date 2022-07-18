import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1>The Blog Web</h1>
      <div className="links">
        <div className="navlink">
          <Link to="/" >Home</Link>
          <Link to="/New-Blogs" >New Blogs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
