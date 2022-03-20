import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/posts">POSTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
