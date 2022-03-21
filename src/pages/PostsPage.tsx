import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { posts } from "../redux/posts/slice";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { loading } = posts.actions;

  useEffect(() => {
    console.log("dispatch");
    dispatch(loading());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <PostList></PostList>
    </div>
  );
};

export default PostsPage;
