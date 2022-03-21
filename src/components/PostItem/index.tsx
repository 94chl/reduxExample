import React, { useCallback, useState } from "react";
import { deletePostById, Post } from "../../redux/posts/slice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { ButtonGroup, Button, styled } from "@material-ui/core";

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

  const NewBtn = styled(Button)({
    background: "orange",
  });

  return (
    <li>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h3>{post.title}</h3>
          <ButtonGroup disableElevation>
            <Button component={Link} to={`/posts/${post.id}`}>
              LINK
            </Button>
            <NewBtn onClick={() => handleDeletePost(post.id)}>Delete</NewBtn>
          </ButtonGroup>
        </>
      )}
    </li>
  );
};

export default PostItem;
