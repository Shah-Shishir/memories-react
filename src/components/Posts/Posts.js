import React, { useState, useEffect } from "react";

import Post from "./Post/Post";
import { getPosts } from "../../api/posts";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response.data.posts))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
