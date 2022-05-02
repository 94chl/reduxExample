import {
  call,
  put,
  takeEvery,
  takeLatest,
  take,
  select,
  delay,
  getContext,
} from "redux-saga/effects";
import { fetchAllPosts, fetchPostById } from "../../api/posts";
import { posts } from "./slice";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface ResponseGenerator {
  data?: any;
}

const {
  requestAllPosts,
  getAllPosts,
  requestPostById,
  getPostById,
  error,
  HELLO_SAGA,
  TEST_SAGA,
  NAVI_SAGA,
} = posts.actions;
console.log(posts);
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
  yield takeLatest(requestAllPosts, fetchAllPostsSaga);
  yield takeLatest(requestPostById, fetchPostByIdSaga);
  yield takeLatest(NAVI_SAGA, function* test(action) {
    const { navigate, dest } = action.payload;
    navigate(dest);
  });
}

export function* watchAction() {
  yield takeEvery("*", function* logger(action) {
    const state: ResponseGenerator = yield select();

    console.log("Action", action);
    console.log("State", state);
  });
}

function* makeMessage(content: string) {
  yield delay(1000);
  return `${content} Message`;
}

function deleteMessage() {
  return "Message is Deleted!";
}

function makeLog(content: string) {
  console.log("makeLog", content);
}

export function* watchTest() {
  while (true) {
    yield take(HELLO_SAGA);
    let message: string = yield call(makeMessage, "HELLO");
    yield call(makeLog, message);
    yield take(TEST_SAGA);
    message = yield call(deleteMessage);
    yield call(makeLog, message);
  }
}
