import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsState {
  data: Post[];
  loading: boolean;
}

// export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
//   console.log("fetchAllPost");
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return data;
// });

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id: number) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  }
);

export const deletePostById = createAsyncThunk(
  `posts/deletePostById`,
  async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return { id };
  }
);

export const posts = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
  } as PostsState,
  reducers: {
    loading(state: PostsState) {
      console.log("loading", state.loading);
      state.loading = true;
    },
    getAllPosts(state: PostsState, { payload: posts }) {
      console.log("getAllPosts", posts);
      state.data.push(...posts);
      state.loading = false;
    },
    requestPostById(state: PostsState, { payload: postId }) {
      console.log("requestPostById", postId);
      state.loading = true;
    },
    getPostById(state: PostsState, { payload: postInfo }) {
      const index = state.data.findIndex((post) => post.id === postInfo.id);
      console.log(`getPostById(${index})`, postInfo);
      if (index === -1) {
        state.data.push(postInfo);
      } else {
        state.data[index] = postInfo;
      }
      state.loading = false;
    },
    error(state: PostsState, { payload: error }) {
      console.log("ERROR", error);
      state.loading = false;
    },
  },
  extraReducers: {
    // [fetchAllPost.pending.type]: (state: PostsState) => {
    //   console.log("pending");
    //   state.data = [];
    //   state.loading = true;
    // },
    // [fetchAllPost.fulfilled.type]: (
    //   state: PostsState,
    //   action: PayloadAction<Post[]>
    // ) => {
    //   console.log("fulfilled", action);
    //   state.data.push(...action.payload);
    //   state.loading = false;
    // },
    [fetchPostById.fulfilled.type]: (
      state: PostsState,
      action: PayloadAction<Post>
    ) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      console.log("FETCH POST BY ID");
      if (index === -1) {
        state.data.push(action.payload);
      } else {
        state.data[index] = action.payload;
      }
    },
    [deletePostById.fulfilled.type]: (
      state: PostsState,
      action: PayloadAction<Pick<Post, "id">>
    ) => {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});
