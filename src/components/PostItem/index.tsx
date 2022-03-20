import React, { useCallback, useState } from "react";
import { deletePostById, Post } from "../../redux/posts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../Spinner";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleDeletePost = useCallback(
    async (id: number) => {
      setLoading(true);
      await dispatch(deletePostById(id));
      setLoading(false);
    },
    [dispatch]
  );

  return (
    <li>
      <h3>{post.title}</h3>
      <Link to={`/posts/${post.id}`}>Details</Link>
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        )}
      </div>
    </li>
  );
};

export default PostItem;
