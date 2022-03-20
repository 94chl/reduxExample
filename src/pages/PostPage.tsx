import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../redux';
import Header from "../components/Header"
import Spinner from '../components/Spinner';
import { fetchPostById } from '../redux/posts';

const PostPage = () => {
  const {postId} = useParams<{postId:string}>();
  const dispatch = useDispatch();
  const post = useSelector((state:RootState) =>{
    return state.posts.data.find(post=>post.id===parseInt(postId))
  })


  useEffect(()=>{
    dispatch(fetchPostById(parseInt(postId)))
  }, [dispatch, postId])

  return (
    <div>
      {post ? (
        <Fragment>
          <Header strong>{post.title}</Header>
          <span>{post.body}</span>
        </Fragment>
      ) : (
        <Spinner></Spinner>
      )}    
    </div>
  );
};

export default PostPage;