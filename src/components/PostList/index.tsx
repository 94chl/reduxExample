import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import PostItem from "../PostItem";
import Spinner from "../Spinner";

const PostList = () => {
  const { data, loading } = useSelector((store: RootState) => store.posts);

  return (
    <div>
      {loading ? (
        <Spinner loading={loading}></Spinner>
      ) : (
        <ul>
          {data.map((post, index) => (
            <PostItem post={post} key={`${post.id}-${index}`}></PostItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
