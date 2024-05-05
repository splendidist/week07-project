import { useState, useEffect } from "react";
import "../Post.css";
import Header from "../components/Header";
import Subheading from "../components/Subheading";

export default function Dreams() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  //date format
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  }

  async function getPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPosts(data);
  }
  return (
    <div>
      <Header />
      <Subheading />
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <p>{post.content}</p>
              <p>
                {post.element} | {post.type} | {post.theme}
              </p>
              <h3>
                {post.name} | {formatDate(post.date)}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
