import { call, put, takeLatest } from "redux-saga/effects";
import { fetchAllPosts, fetchPostById } from "../../api/posts";
import { posts } from "./slice";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const {
  loading,
  getAllPosts,
  requestPostById,
  getPostById,
  error,
} = posts.actions;

function* fetchAllPostsSaga() {
  console.log("SAGA POSTS");
  try {
    const posts: Post[] = yield call(fetchAllPosts);
    yield put(getAllPosts(posts));
  } catch (e) {
    yield put(error(e));
  }
}

function* fetchPostByIdSaga(action: any) {
  console.log("SAGA POST", action);
  try {
    const post: Post = yield call(fetchPostById, action.payload);
    yield put(getPostById(post));
  } catch (e) {
    yield put(error(e));
  }
}

export function* watchPosts() {
  console.log("WATCH POSTS");
  yield takeLatest(loading, fetchAllPostsSaga);
}

export function* watchPost() {
  console.log("WATCH POST");
  yield takeLatest(requestPostById, fetchPostByIdSaga);
}
