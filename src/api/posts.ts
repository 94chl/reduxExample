import axios from "axios";

export const fetchAllPosts = async () => {
  console.log("API Call: fetchAllPosts");
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const fetchPostById = async (id: number) => {
  console.log("API Call: fetchPostById");
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
