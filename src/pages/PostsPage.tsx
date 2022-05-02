import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { posts } from "../redux/posts/slice";

const PostsPage = ({ match }: any) => {
  const dispatch = useDispatch();
  const { requestAllPosts } = posts.actions;
  console.log(match);
  useEffect(() => {
    dispatch(requestAllPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <PostList></PostList>
    </div>
  );
};

export default PostsPage;
