import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage, PostsPage, PostPage } from "./pages";
import DefaultTemplate from "./components/DefaultTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<PostsPage />}></Route>
          <Route path="/post/:postId" element={<PostPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default App;
