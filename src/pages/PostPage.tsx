import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux";
import Spinner from "../components/Spinner";
import { posts } from "../redux/posts/slice";

const PostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => {
    return (
      postId && state.posts.data.find((post) => post.id === parseInt(postId))
    );
  });
  const { requestPostById } = posts.actions;

  useEffect(() => {
    if (postId) dispatch(requestPostById(postId));
  }, [dispatch, postId]);
  console.log(post);
  return (
    <div>
      {post ? (
        <Fragment>
          <span>{post.body}</span>
        </Fragment>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default PostPage;
