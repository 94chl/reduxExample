import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./posts/slice";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import { watchPosts, watchAction, watchTest } from "./posts/saga";

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
  yield all([watchPosts(), watchAction(), watchTest()]);
}

export const store = configureStore({
  reducer: {
    posts: posts.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
