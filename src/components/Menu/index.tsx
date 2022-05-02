import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { posts } from "../../redux/posts/slice";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { HELLO_SAGA, TEST_SAGA, NAVI_SAGA } = posts.actions;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
      </ul>
      <div>
        <button type="button" onClick={() => dispatch(HELLO_SAGA())}>
          HELLO
        </button>
        <button type="button" onClick={() => dispatch(TEST_SAGA())}>
          TEST
        </button>
        <button
          type="button"
          onClick={() => dispatch(NAVI_SAGA({ navigate, dest: "/" }))}
        >
          NAVI
        </button>
      </div>
    </nav>
  );
};

export default Menu;
